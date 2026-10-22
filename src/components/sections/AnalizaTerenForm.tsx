"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "error" | "loading" | "success";

const PURPOSES = [
  { id: "cumpar", label: "vreau să cumpăr terenul" },
  { id: "am", label: "am deja terenul" },
  { id: "mostenit", label: "teren moștenit / în familie" },
] as const;

const USES = [
  { id: "casa", label: "casă" },
  { id: "colectiv", label: "mai multe locuințe" },
  { id: "comercial", label: "comercial / birouri" },
  { id: "altceva", label: "altceva / nu știu" },
] as const;

const COUNTIES = [
  "București", "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud",
  "Botoșani", "Brăila", "Brașov", "Buzău", "Călărași", "Caraș-Severin", "Cluj",
  "Constanța", "Covasna", "Dâmbovița", "Dolj", "Galați", "Giurgiu", "Gorj",
  "Harghita", "Hunedoara", "Ialomița", "Iași", "Ilfov", "Maramureș",
  "Mehedinți", "Mureș", "Neamț", "Olt", "Prahova", "Sălaj", "Satu Mare",
  "Sibiu", "Suceava", "Teleorman", "Timiș", "Tulcea", "Vâlcea", "Vaslui",
  "Vrancea",
];

type PurposeId = (typeof PURPOSES)[number]["id"];
type UseId = (typeof USES)[number]["id"];

const initial = {
  name: "",
  email: "",
  phone: "",
  location: "",
  county: "",
  cadastral: "",
  area: "",
  listing: "",
  notes: "",
  companyName: "",
  cui: "",
  hp_zx7: "",
};

function Pills<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly { id: T; label: string }[];
  value: T | "";
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const sel = value === o.id;
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            aria-pressed={sel}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border-[1.5px] text-[13px] md:text-[14px] transition-colors ${
              sel
                ? "bg-accent border-accent font-semibold text-foreground"
                : "bg-transparent border-dark-card font-normal text-foreground hover:border-accent"
            }`}
          >
            <span
              className="w-3 h-3 rounded-full border-[1.5px] border-foreground shrink-0"
              style={{ background: sel ? "var(--foreground)" : "transparent" }}
            />
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export default function AnalizaTerenForm() {
  const [data, setData] = useState(initial);
  const [purpose, setPurpose] = useState<PurposeId | "">("");
  const [use, setUse] = useState<UseId | "">("");
  const [clientType, setClientType] = useState<"pf" | "pj">("pf");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [startNow, setStartNow] = useState(false);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const set = (k: keyof typeof initial) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setData({ ...data, [k]: e.target.value });
      if (state === "error") setState("idle");
    };

  const missing = (v: string) =>
    state === "error" && v.trim() === "" ? "ring-2 ring-[#e04f3e]" : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const required = [data.name, data.email, data.location, data.county];
    if (clientType === "pj") required.push(data.companyName, data.cui);
    if (required.some((v) => v.trim() === "") || !purpose || !use) {
      setError("Completează câmpurile marcate cu * și alege situația și ce vrei să construiești.");
      setState("error");
      return;
    }
    if (!acceptedTerms) {
      setError("Bifează acordul cu termenii ca să putem prelua comanda.");
      setState("error");
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/analiza-teren", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          purpose,
          use,
          clientType,
          acceptedTerms,
          startNow: clientType === "pf" && startNow,
        }),
      });
      if (!res.ok) {
        setError("Ceva nu a mers. Încearcă din nou sau scrie-ne la office@amorph.ro.");
        setState("error");
        return;
      }
      setState("success");
    } catch {
      setError("Nu am putut trimite comanda. Verifică conexiunea și încearcă din nou.");
      setState("error");
    }
  };

  const input =
    "w-full px-5 py-3 bg-dark text-platinum placeholder:text-platinum/60 rounded-full text-base font-light outline-none focus:ring-2 focus:ring-accent transition-shadow";
  const label = "text-[11px] md:text-[12px] tracking-[0.18em] text-muted mb-2 block";

  if (state === "success") {
    return (
      <div className="px-6 py-10 md:px-12 md:py-16 bg-dark text-platinum rounded-[20px] md:rounded-[28px] text-center">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent mx-auto mb-5 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d2d2d" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-[24px] md:text-[30px] font-normal mb-3">Am primit comanda.</div>
        <div className="text-[13px] md:text-[15px] font-light opacity-80 leading-[1.6] max-w-[520px] mx-auto">
          Ți-am trimis un email de confirmare. În cel mult o zi lucrătoare primești
          factura proformă, apoi îți cerem documentele pe care le ai despre teren.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <input
        type="text"
        name="hp_zx7"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={data.hp_zx7}
        onChange={set("hp_zx7")}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div>
        <span className={label}>01 · TERENUL</span>
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3">
          <input
            type="text"
            placeholder="Adresa sau localitatea terenului*"
            value={data.location}
            onChange={set("location")}
            className={`${input} ${missing(data.location)}`}
          />
          <select
            value={data.county}
            onChange={set("county")}
            className={`${input} appearance-none ${data.county ? "" : "text-platinum/60"} ${missing(data.county)}`}
            aria-label="Județ"
          >
            <option value="">Județ*</option>
            {COUNTIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Nr. cadastral (dacă îl ai)"
            value={data.cadastral}
            onChange={set("cadastral")}
            className={input}
          />
          <input
            type="text"
            placeholder="Suprafața, mp (opțional)"
            value={data.area}
            onChange={set("area")}
            className={input}
          />
        </div>
        <input
          type="text"
          placeholder="Link spre anunț (dacă e de vânzare)"
          value={data.listing}
          onChange={set("listing")}
          className={`${input} mt-3`}
        />
      </div>

      <div>
        <span className={label}>02 · SITUAȚIA TA*</span>
        <Pills options={PURPOSES} value={purpose} onChange={(v) => { setPurpose(v); if (state === "error") setState("idle"); }} />
      </div>

      <div>
        <span className={label}>03 · CE VREI SĂ CONSTRUIEȘTI*</span>
        <Pills options={USES} value={use} onChange={(v) => { setUse(v); if (state === "error") setState("idle"); }} />
      </div>

      <div>
        <span className={label}>04 · DATELE TALE</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Nume și prenume*"
            autoComplete="name"
            value={data.name}
            onChange={set("name")}
            className={`${input} ${missing(data.name)}`}
          />
          <input
            type="email"
            placeholder="Email*"
            autoComplete="email"
            value={data.email}
            onChange={set("email")}
            className={`${input} ${missing(data.email)}`}
          />
          <input
            type="tel"
            placeholder="Telefon"
            autoComplete="tel"
            value={data.phone}
            onChange={set("phone")}
            className={`${input} md:col-span-2`}
          />
        </div>
        <div className="mt-4">
          <Pills
            options={[
              { id: "pf", label: "factură pe persoană fizică" },
              { id: "pj", label: "factură pe firmă" },
            ] as const}
            value={clientType}
            onChange={setClientType}
          />
        </div>
        {clientType === "pj" && (
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-3 mt-3">
            <input
              type="text"
              placeholder="Denumirea firmei*"
              value={data.companyName}
              onChange={set("companyName")}
              className={`${input} ${missing(data.companyName)}`}
            />
            <input
              type="text"
              placeholder="CUI*"
              value={data.cui}
              onChange={set("cui")}
              className={`${input} ${missing(data.cui)}`}
            />
          </div>
        )}
      </div>

      <div>
        <span className={label}>05 · CE AR TREBUI SĂ ȘTIM (OPȚIONAL)</span>
        <textarea
          placeholder="Ce plănuiești, ce te îngrijorează, ce ți-a spus deja primăria sau vânzătorul..."
          rows={4}
          value={data.notes}
          onChange={set("notes")}
          className="w-full px-5 py-4 bg-dark text-platinum placeholder:text-platinum/60 rounded-[22px] text-base font-light outline-none focus:ring-2 focus:ring-accent resize-none transition-shadow"
        />
      </div>

      <label className="flex items-start gap-3 text-[13px] md:text-[14px] font-light text-foreground leading-[1.55] cursor-pointer">
        <input
          type="checkbox"
          checked={acceptedTerms}
          onChange={(e) => { setAcceptedTerms(e.target.checked); if (state === "error") setState("idle"); }}
          className="mt-1 w-4 h-4 accent-[#2d2d2d] shrink-0"
        />
        <span>
          Am citit <Link href="/termeni#analiza-teren" className="underline hover:text-accent">termenii comenzii</Link>{" "}
          (inclusiv dreptul de retragere) și{" "}
          <Link href="/confidentialitate" className="underline hover:text-accent">politica de confidențialitate</Link>.
          Înțeleg că analiza este informativă, nu înlocuiește certificatul de urbanism și că lucrul începe după plata facturii.
        </span>
      </label>

      {clientType === "pf" && (
        <label className="flex items-start gap-3 text-[13px] md:text-[14px] font-light text-foreground leading-[1.55] cursor-pointer -mt-2">
          <input
            type="checkbox"
            checked={startNow}
            onChange={(e) => setStartNow(e.target.checked)}
            className="mt-1 w-4 h-4 accent-[#2d2d2d] shrink-0"
          />
          <span>
            Opțional: vreau să începeți lucrul imediat după plată, fără să așteptați cele 14 zile de retragere.
            Am înțeles că, după ce primesc analiza, nu mai am drept de retragere, iar dacă renunț înainte plătesc
            doar partea deja lucrată.{" "}
            <span className="text-muted">Dacă nu bifezi, începem după cele 14 zile.</span>
          </span>
        </label>
      )}

      {state === "error" && <p className="text-[13px] text-[#e04f3e] px-1 -mt-2">{error}</p>}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-1">
        <div className="text-[13px] md:text-[14px] text-muted font-light">
          590 lei, TVA inclus · plata după factura proformă
        </div>
        <button
          type="submit"
          disabled={state === "loading"}
          className={`px-9 py-3.5 rounded-full text-base font-normal transition-colors ${
            state === "loading"
              ? "bg-muted text-platinum cursor-wait"
              : "bg-foreground text-platinum hover:bg-accent hover:text-foreground"
          }`}
        >
          {state === "loading" ? "Se trimite..." : "trimite comanda →"}
        </button>
      </div>
    </form>
  );
}
