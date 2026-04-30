import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmorphBackdrop from "@/components/ui/AmorphBackdrop";

export const metadata: Metadata = {
  title: "Despre Noi",
  description:
    "Multi-disciplinari din necesitate. Doi ani up & running ca firmă, mai mult ca echipă. Urbanism, regenerare, design interior, grafică și web.",
};

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const timeline = [
  {
    year: "2019",
    title: "apare principiul",
    body:
      "Ideea Amorph se naște — apetit pentru orice oportunitate, dorința de a învăța și încerca lucruri noi. Lucrăm cu diverși colaboratori pe documentații de urbanism, regenerare urbană și ilustrații grafice.",
  },
  {
    year: "2021",
    title: "documentații & regenerare",
    body:
      "Aprofundăm partea de documentații de urbanism — orice anvergură. Primele proiecte de regenerare urbană prind contur.",
  },
  {
    year: "2023",
    title: "ilustrație și brand",
    body:
      "Adăugăm ilustrația grafică în portofoliu. Începem să construim identități vizuale pentru proiecte mici și mari.",
  },
  {
    year: "2024",
    title: "apare firma — pornim",
    body:
      "Amorph devine oficial firmă. Decidem să aprofundăm absolut toate skill-urile și să lucrăm la tot — de la PUZ la dezvoltare web.",
  },
  {
    year: "2026",
    title: "astăzi",
    body:
      "O echipă multidisciplinară, șase direcții de lucru, atenție la detaliu pe fiecare proiect.",
  },
];

const domains = [
  {
    title: "urbanism",
    body: "planificare, strategii, regenerare — documentații de orice anvergură",
  },
  {
    title: "design interior",
    body: "spații care au sens, de la concept la detaliu de finisaj",
  },
  {
    title: "grafică",
    body: "identități, broșuri, ilustrații — brand expression cap-coadă",
  },
  {
    title: "web",
    body: "site-uri și interfețe care comunică, nu doar arată",
  },
];

const values = [
  {
    n: "01",
    t: "curiozitate",
    d: "Nu refuzăm un proiect pentru că nu l-am mai făcut. Învățăm pe parcurs.",
  },
  {
    n: "02",
    t: "atenție",
    d: "Detaliul fin contează — culoarea unui perete, ritmul unei broșuri, kerning-ul unui logo.",
  },
  {
    n: "03",
    t: "transparență",
    d: "Comunicăm direct. Spunem ce putem și ce nu putem face — fără promisiuni vagi.",
  },
  {
    n: "04",
    t: "responsabilitate",
    d: "Fiecare livrabil pleacă din mâinile noastre doar când suntem mândri de el.",
  },
];

const aboutProcess = [
  {
    n: "01",
    t: "conversație",
    d: "Începem cu un email sau un telefon. Te ascultăm, înțelegem contextul, propunem o întâlnire.",
  },
  {
    n: "02",
    t: "propunere",
    d: "Trimitem ofertă cu pași clari, un calendar realist și un buget transparent.",
  },
  {
    n: "03",
    t: "lucru",
    d: "Săptămânal sau bi-săptămânal te ținem la curent. Iterăm până ajungem unde vrem.",
  },
  {
    n: "04",
    t: "livrare",
    d: "Predăm tot — surse, documentație, instructaj. Și rămânem disponibili după.",
  },
];

export default function DespreNoi() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ─────── HERO ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 pb-10 md:pb-16">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ DESPRE NOI
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-14 items-center">
            <div>
              <h1 className="text-[44px] md:text-[96px] font-light leading-[0.95] md:leading-[0.92] tracking-[-1px] md:tracking-[-2.5px] m-0">
                multi-
                <br />
                disciplinari
                <br />
                <span className="font-bold">din necesitate</span>
                <span className="text-accent">.</span>
              </h1>
              <p className="mt-4 md:mt-7 text-[14px] md:text-[19px] font-light leading-[1.6] max-w-[520px]">
                Doi ani up &amp; running ca firmă. Mai mult ca echipă. Lucrăm
                pe urbanism, regenerare, design interior, grafică și web —
                pentru că ne-am dat seama, pe drum, că nu vrem să alegem.
              </p>
            </div>
            <div className="relative aspect-square">
              <AmorphBackdrop variant="mixed" />
              <Image
                src="/images/authors-red.png"
                alt="Echipa Amorph"
                width={760}
                height={760}
                priority
                className="relative w-full h-auto z-[1]"
              />
            </div>
          </div>
        </section>

        {/* ─────── MANIFESTO ─────── */}
        <div className="bg-dark text-platinum">
          <div className="max-w-[1400px] mx-auto px-5 md:px-14 py-10 md:py-[96px] md:pb-[110px]">
            <div className="text-[11px] md:text-[13px] tracking-[0.25em] text-accent mb-3.5 md:mb-6 opacity-85">
              MANIFEST
            </div>
            <div
              className="text-accent italic font-bold leading-[0.5]"
              style={{ fontSize: "100px" }}
              aria-hidden
            >
              <span className="md:hidden">„</span>
            </div>
            <div
              className="text-accent italic font-bold leading-[0.5] hidden md:block"
              style={{ fontSize: "180px", height: 80, marginBottom: 8 }}
              aria-hidden
            >
              „
            </div>
            <p className="text-[26px] md:text-[64px] font-light leading-[1.2] md:leading-[1.1] mt-2 md:mt-0 md:max-w-[1100px] tracking-[-0.4px] md:tracking-[-1.2px] m-0">
              Credem în{" "}
              <em className="text-accent italic font-light">
                puterea designului
              </em>{" "}
              de a transforma spațiile și de a{" "}
              <span className="font-bold">îmbunătăți viața oamenilor</span>.
            </p>
            <div className="mt-6 md:mt-10 text-[11px] md:text-[13px] tracking-[0.25em] opacity-55">
              — AMORPH STUDIO
            </div>
          </div>
        </div>

        {/* ─────── CINE SUNTEM ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-9 md:pt-[96px] grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 md:gap-20">
          <div>
            <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
              CINE SUNTEM
            </div>
            <div className="text-[30px] md:text-[44px] font-light text-foreground leading-[1.05] tracking-[-0.6px] md:tracking-[-1px]">
              o echipă
              <br />
              <span className="font-bold">multi-disciplinară</span>
              <span className="text-accent">.</span>
            </div>
          </div>
          <div>
            <p className="text-[14px] md:text-[19px] font-normal text-foreground leading-[1.6] m-0">
              Nu ne despărțim pe departamente. Împărțim întrebări. Cineva care
              planifică un cartier discută la aceeași masă cu cineva care alege
              paleta unui logo<span className="hidden md:inline"> — și amândoi înțeleg de ce contează</span>.
            </p>
            <p className="text-[13px] md:text-[17px] font-light text-foreground leading-[1.7] mt-3.5 md:mt-[22px]">
              Fiecare <span className="md:hidden">livrabil</span>
              <span className="hidden md:inline">
                broșură, logo, interfață sau plan urbanistic
              </span>{" "}
              trece prin aceeași întrebare<span className="hidden md:inline"> simplă</span>:{" "}
              <strong>cum îmbunătățește asta ziua cuiva?</strong>
            </p>
          </div>
        </section>

        {/* ─────── CRONOLOGIE ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-9 md:pt-[96px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-[22px] md:mb-9">
            CRONOLOGIE
          </div>
          {/* Mobile: vertical stack */}
          <div className="md:hidden flex flex-col gap-5">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="pt-[18px] border-t-2 border-dark-card relative"
              >
                <div className="absolute -top-[7px] left-0 w-3 h-3 rounded-full bg-accent" />
                <div className="flex items-baseline gap-3">
                  <div className="text-[22px] font-bold text-accent tracking-[-0.3px]">
                    {item.year}
                  </div>
                  <div className="text-[15px] font-medium text-foreground">
                    {item.title}
                  </div>
                </div>
                <div className="text-[13px] font-light text-muted mt-1.5 leading-[1.55]">
                  {item.body}
                </div>
              </div>
            ))}
          </div>
          {/* Desktop: 5-col */}
          <div className="hidden md:grid grid-cols-5 gap-6">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="pt-7 border-t-2 border-dark-card relative"
              >
                <div className="absolute -top-[9px] left-0 w-4 h-4 rounded-full bg-accent" />
                <div className="text-[28px] font-bold text-accent tracking-[-0.5px]">
                  {item.year}
                </div>
                <div className="text-[19px] font-medium text-foreground mt-1.5">
                  {item.title}
                </div>
                <div className="text-[13px] font-light text-muted mt-2.5 leading-[1.55]">
                  {item.body}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────── CE FACEM (DOMAINS) ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[96px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CE FACEM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-[22px] md:mb-10">
            patru direcții,
            <br />
            <span className="font-bold">
              <span className="md:hidden">o conversație</span>
              <span className="hidden md:inline">o singură conversație</span>
            </span>
            <span className="text-accent">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-6">
            {domains.map((d, i) => (
              <Link
                key={d.title}
                href="/servicii"
                className="group p-5 md:p-9 bg-platinum rounded-[18px] md:rounded-3xl border-[1.5px] md:border-2 border-dark-card transition-all duration-300 hover:-translate-y-1 hover:border-accent block"
              >
                <div className="text-[10px] md:text-[11px] tracking-[0.22em] text-muted mb-2 md:mb-2.5">
                  0{i + 1}
                </div>
                <div className="text-[22px] md:text-[32px] font-normal text-foreground mb-2 md:mb-3.5 md:tracking-[-0.5px]">
                  {d.title}
                </div>
                <div className="text-[13px] md:text-[16px] font-light text-muted leading-[1.5]">
                  {d.body}
                </div>
                <div className="hidden md:flex mt-[22px] items-center gap-2 text-[13px] text-foreground">
                  <span>vezi servicii</span>
                  <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─────── PRINCIPII (yellow band) ─────── */}
        <div className="bg-accent mt-9 md:mt-[96px] relative overflow-hidden">
          <AmorphBackdrop variant="mixed" invert className="md:hidden" />
          <AmorphBackdrop variant="banner" invert className="hidden md:block" />
          <section className="max-w-[1400px] mx-auto px-5 md:px-14 py-11 md:py-[110px] md:pb-[130px] relative">
            <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-foreground/70 mb-3 md:mb-[18px]">
              PRINCIPII
            </div>
            <h2 className="text-[36px] md:text-[72px] font-light text-foreground leading-none tracking-[-0.8px] md:tracking-[-1.8px] m-0 mb-6 md:mb-14">
              <span className="md:hidden">
                în ce <span className="font-bold">credem</span>
                <span className="text-background">.</span>
              </span>
              <span className="hidden md:inline">
                în ce
                <br />
                <span className="font-bold">credem</span>
                <span className="text-background">.</span>
              </span>
            </h2>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-4 md:gap-9">
              {values.map((v) => (
                <div
                  key={v.t}
                  className="pt-3.5 md:pt-[26px] border-t-2 border-foreground"
                >
                  <div className="text-[11px] md:text-[13px] font-medium text-foreground tracking-[0.2em] opacity-65">
                    {v.n}
                  </div>
                  <div className="text-[22px] md:text-[30px] font-semibold text-foreground mt-2 md:mt-3.5 md:tracking-[-0.5px]">
                    {v.t}
                  </div>
                  <div className="text-[13px] md:text-[15px] font-normal text-foreground mt-2 md:mt-3.5 leading-[1.55] opacity-85">
                    {v.d}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ─────── CUM LUCRĂM (PROCESS) ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[96px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CUM LUCRĂM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-[22px] md:mb-12">
            <span className="md:hidden">
              de la primul mesaj
              <br />
              la <span className="font-bold">livrare</span>
              <span className="text-accent">.</span>
            </span>
            <span className="hidden md:inline">
              de la primul mesaj
              <br />
              până la <span className="font-bold">livrare</span>
              <span className="text-accent">.</span>
            </span>
          </h2>

          {/* Mobile vertical */}
          <div className="md:hidden flex flex-col gap-[18px]">
            {aboutProcess.map((p) => (
              <div key={p.t} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-foreground text-accent text-[13px] font-bold flex items-center justify-center shrink-0">
                  {p.n}
                </div>
                <div>
                  <div className="text-[18px] font-medium text-foreground">
                    {p.t}
                  </div>
                  <div className="text-[13px] font-light text-muted mt-1 leading-[1.55]">
                    {p.d}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop 4-col with dashed connector */}
          <div className="hidden md:grid relative grid-cols-4 gap-8">
            <div
              className="absolute top-7 left-[30px] right-[30px] h-0.5 border-t-2 border-dashed border-dark-card"
              aria-hidden
            />
            {aboutProcess.map((p) => (
              <div key={p.t} className="relative">
                <div className="w-14 h-14 rounded-full bg-foreground text-accent text-[18px] font-bold flex items-center justify-center mb-6">
                  {p.n}
                </div>
                <div className="text-[24px] font-medium text-foreground mb-2.5 tracking-[-0.4px]">
                  {p.t}
                </div>
                <div className="text-[14px] font-light text-muted leading-[1.6]">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────── CTA ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[96px] pb-10 md:pb-16">
          <div className="bg-dark text-platinum rounded-3xl md:rounded-[32px] p-8 md:p-[72px_56px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-center text-center md:text-left">
            <div className="text-[32px] md:text-[64px] font-light text-platinum leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px]">
              <span className="md:hidden">
                ai o
                <br />
                <span className="font-bold text-accent">curiozitate</span>
                <span className="text-accent">?</span>
              </span>
              <span className="hidden md:inline">
                ai un proiect,
                <br />o întrebare,
                <br />
                <span className="font-bold text-accent">o curiozitate</span>
                <span className="text-accent">?</span>
              </span>
            </div>
            <div className="flex flex-col gap-3.5 md:items-start items-center">
              <p className="text-[13px] md:text-[15px] font-light text-platinum/75 leading-[1.55] md:leading-[1.6] m-0">
                <span className="md:hidden">
                  Spune-ne ce ai în cap. Răspundem în maxim 24h.
                </span>
                <span className="hidden md:inline">
                  Spune-ne ce ai în cap. Răspundem în maxim 24h, indiferent
                  dacă proiectul e mare, mic sau încă neclar.
                </span>
              </p>
              <Link
                href="/contact"
                className="md:mt-4 inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-accent text-foreground text-[14px] md:text-base font-normal whitespace-nowrap"
              >
                scrie-ne <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
