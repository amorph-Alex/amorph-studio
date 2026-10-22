import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiciiFAQ from "@/components/sections/ServiciiFAQ";
import AnalizaTerenForm from "@/components/sections/AnalizaTerenForm";
import JsonLd from "@/components/seo/JsonLd";
import { serviceJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import type { FaqItem } from "@/lib/services";

const PRICE = 590;

export const metadata: Metadata = pageMetadata({
  title: "Analiză teren: ce poți construi, preț fix 590 lei",
  description: "Afli în scris, în 3 zile lucrătoare, ce poți construi pe un teren: suprafață, niveluri, retrageri, restricții, pașii următori și dacă merită. Întocmită de urbanist atestat RUR. 590 lei cu TVA.",
  path: "/analiza-teren",
  ogTitle: "Ce poți construi pe terenul tău? Analiză urbanistică la preț fix",
  ogDescription: "Suprafață construibilă, regim de înălțime, retrageri, restricții și verdict. 3 zile lucrătoare, 590 lei cu TVA.",
  ownOgImage: true,
});

const ArrowRight = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const DELIVERABLES = [
  { n: "01", t: "suprafața construibilă", d: "POT și CUT aplicate parcelei tale: câți mp poți ocupa la sol și câți mp poți construi în total." },
  { n: "02", t: "regimul de înălțime", d: "Câte niveluri sunt permise (P, P+1, P+2...) și înălțimea maximă." },
  { n: "03", t: "funcțiunea", d: "Dacă ce vrei să construiești e permis, interzis sau permis doar cu condiții." },
  { n: "04", t: "retragerile", d: "Cât trebuie să te retragi față de stradă și de vecini, explicat pe parcela ta." },
  { n: "05", t: "restricțiile", d: "Zone protejate, culoare de rețele și drumuri, interdicții temporare, servituți, zone de risc." },
  { n: "06", t: "documentația care se aplică", d: "Ce PUG sau PUZ reglementează terenul și dacă mai e în vigoare." },
  { n: "07", t: "pașii următori", d: "Ce tip de certificat de urbanism ceri, dacă îți trebuie PUD sau PUZ, ce avize urmează și cât durează, în ordine." },
  { n: "08", t: "verdictul", d: "Merită sau nu, spus direct, cu costurile orientative ale pașilor de după." },
];

const STEPS = [
  { n: "01", t: "trimiți datele", d: "Completezi formularul de mai jos în 2 minute: unde e terenul și ce vrei să faci pe el." },
  { n: "02", t: "primești factura", d: "În cel mult o zi lucrătoare primești factura proformă. Plătești prin transfer bancar." },
  { n: "03", t: "ne trimiți ce ai", d: "Extras de carte funciară, certificat de urbanism, anunțul. Dacă nu ai nimic, pornim de la adresă și numărul cadastral." },
  { n: "04", t: "primești analiza", d: "Raportul în PDF, în 3 zile lucrătoare de la plată și documente. Întrebările de clarificare pe email sunt incluse." },
];

const CODE_CHANGES = [
  "certificatul de urbanism are acum mai multe tipuri, în funcție de scop; contează să îl ceri pe cel potrivit",
  "POT și CUT se calculează după reguli noi în reglementările aprobate de acum înainte",
  "la loturile desprinse dintr-un teren deja construit, contează și ce s-a construit pe restul terenului",
  "PUD-ul poate ajusta, în limite stricte, indicatorii unei parcele și se aprobă mai simplu decât înainte",
];

const FAQ: FaqItem[] = [
  {
    q: "Am nevoie de certificat de urbanism înainte să comand?",
    a: "Nu. Dacă îl ai, ne ajută. Dacă nu, pornim de la adresă, numărul cadastral și documentațiile de urbanism ale localității. Analiza îți spune și ce tip de certificat să ceri după aceea.",
  },
  {
    q: "Înlocuiește analiza certificatul de urbanism?",
    a: "Nu. Certificatul de urbanism îl emite doar primăria și ai nevoie de el pentru autorizație. Analiza e informativă: îți dă imaginea completă înainte să cumperi sau să plătești un proiect, ca să decizi în cunoștință de cauză.",
  },
  {
    q: "Lucrați pentru terenuri din orice județ?",
    a: "Da. Lucrăm de la distanță, pe baza documentelor și a documentațiilor de urbanism ale localității. Dacă nu putem găsi sau obține reglementările care se aplică terenului tău, îți returnăm banii integral.",
  },
  {
    q: "Ce se întâmplă dacă verdictul e negativ?",
    a: "Primești analiza completă, cu motivele și cu variantele care există (de exemplu un PUD sau un PUZ) și costul lor orientativ. Un „nu” aflat înainte de semnarea antecontractului este cel mai ieftin rezultat posibil.",
  },
  {
    q: "Dacă vreau apoi PUD, PUZ sau proiectul casei?",
    a: "Le facem și pe acestea. Dacă mergi mai departe cu noi pe o documentație de urbanism, cei 590 de lei se scad din onorariu.",
  },
  {
    q: "Pot renunța după ce am comandat?",
    a: "Da. Până plătești proforma, comanda nu te obligă la nimic. Dacă ești persoană fizică, ai și dreptul legal de retragere de 14 zile. Dacă ne ceri să începem imediat, după livrarea analizei nu mai ai acest drept. Toate detaliile sunt în termenii comenzii.",
  },
  {
    q: "Am mai multe terenuri de comparat.",
    a: "Fiecare parcelă este o analiză separată. Pentru trei sau mai multe terenuri, scrie-ne la office@amorph.ro și îți facem o ofertă.",
  },
];

const jsonLd = [
  serviceJsonLd({
    name: "Analiză urbanistică teren: ce poți construi",
    serviceType: "Analiză urbanistică preliminară",
    description:
      "Afli în scris, în 3 zile lucrătoare, ce poți construi pe un teren: suprafață, niveluri, retrageri, restricții, pașii următori și dacă merită. Întocmită de urbanist atestat RUR.",
    path: "/analiza-teren",
    offer: {
      price: PRICE,
      currency: "RON",
      description: "Preț fix pe parcelă, TVA inclus. Livrare în 3 zile lucrătoare.",
    },
  }),
  breadcrumbJsonLd([{ name: "Analiză teren", path: "/analiza-teren" }]),
  faqJsonLd(FAQ),
];

export default function AnalizaTerenPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <JsonLd data={jsonLd} />

        {/* ─────── HERO ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-6 md:pt-10 pb-6">
          <div className="flex items-center gap-2 text-[11px] md:text-[13px] text-muted mb-4 md:mb-7">
            <Link href="/servicii/planificare-urbana" className="hover:text-accent transition-colors">
              planificare urbană
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-foreground">analiză teren</span>
          </div>
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ ANALIZĂ TEREN · PREȚ FIX
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-6 md:gap-12 md:items-end">
            <h1 className="text-[42px] md:text-[60px] lg:text-[84px] font-light leading-[0.95] md:leading-[0.95] tracking-[-1px] md:tracking-[-2px] m-0">
              <span className="md:whitespace-nowrap">ce poți construi</span>
              <br />
              <span className="font-bold md:whitespace-nowrap">pe terenul tău</span>
              <span className="text-accent">?</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light text-foreground leading-[1.6] m-0 md:pb-6">
              Îți citim extrasul de carte funciară, certificatul de urbanism și
              regulamentul zonei și îți spunem în scris, pe limba ta: câți mp,
              câte niveluri, ce te oprește, ce urmează și dacă merită.
            </p>
          </div>

          <div className="mt-8 md:mt-14 bg-dark text-platinum rounded-[20px] md:rounded-[32px] p-6 md:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12 md:items-center relative">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
                <div>
                  <div className="text-[10px] md:text-[11px] tracking-[0.22em] opacity-60 mb-2">PREȚ</div>
                  <div className="text-[28px] md:text-[52px] font-bold leading-none text-accent">{PRICE} lei</div>
                  <div className="text-[12px] md:text-[14px] font-light opacity-75 mt-1.5">TVA inclus · o parcelă</div>
                </div>
                <div>
                  <div className="text-[10px] md:text-[11px] tracking-[0.22em] opacity-60 mb-2">TERMEN</div>
                  <div className="text-[28px] md:text-[52px] font-bold leading-none">3 zile</div>
                  <div className="text-[12px] md:text-[14px] font-light opacity-75 mt-1.5">lucrătoare, de la plată și documente</div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="text-[10px] md:text-[11px] tracking-[0.22em] opacity-60 mb-2">CINE O FACE</div>
                  <div className="text-[18px] md:text-[24px] font-medium leading-[1.15]">urbanist atestat RUR</div>
                  <div className="text-[12px] md:text-[14px] font-light opacity-75 mt-1.5">nu un raport generat automat</div>
                </div>
              </div>
              <Link
                href="#comanda"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent text-foreground text-[15px] md:text-base font-normal whitespace-nowrap hover:bg-accent-hover transition-colors"
              >
                comandă analiza <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* ─────── CE PRIMEȘTI ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">CE PRIMEȘTI</div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-3 md:mb-4">
            opt răspunsuri,
            <br />
            <span className="font-bold">într-un singur raport</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="text-[13px] md:text-[17px] font-light text-muted leading-[1.55] md:leading-[1.6] max-w-[720px] m-0 mb-6 md:mb-12">
            Scris pentru cine cumpără sau construiește, nu pentru primărie. Fiecare
            răspuns are sursa lui: documentația de urbanism, cartea funciară sau legea.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {DELIVERABLES.map((d, i) => (
              <div
                key={d.n}
                className={`p-5 md:p-7 rounded-[18px] md:rounded-3xl flex flex-col gap-3 transition-all duration-300 md:hover:-translate-y-1 ${
                  i === DELIVERABLES.length - 1
                    ? "bg-accent text-foreground border-[1.5px] md:border-2 border-accent"
                    : "bg-platinum border-[1.5px] md:border-2 border-dark-card md:hover:border-accent"
                }`}
              >
                <div className="text-[10px] md:text-[11px] tracking-[0.22em] opacity-60">{d.n}</div>
                <div className="text-[20px] md:text-[24px] font-bold leading-[1.05] tracking-[-0.3px]">
                  {d.t}
                  <span className={i === DELIVERABLES.length - 1 ? "text-background" : "text-accent"}>.</span>
                </div>
                <div className="text-[13px] md:text-[14px] font-light leading-[1.55]">{d.d}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────── NOUL COD ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6 md:gap-16 p-6 md:p-14 rounded-[22px] md:rounded-[32px] bg-platinum border-[1.5px] md:border-2 border-dark-card">
            <div>
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">DE CE ACUM</div>
              <h2 className="text-[28px] md:text-[52px] font-light text-foreground leading-[1.05] tracking-[-0.5px] md:tracking-[-1.2px] m-0 mb-4">
                regulile s-au schimbat
                <br />
                <span className="font-bold">pe 25 august 2026</span>
                <span className="text-accent">.</span>
              </h2>
              <p className="text-[13px] md:text-[16px] font-light text-muted leading-[1.6] m-0">
                Noul Cod al amenajării teritoriului, urbanismului și construcțiilor
                (Legea nr. 169/2026) a înlocuit Legea 50/1991 și Legea 350/2001.
                Ce știai până în vară despre un teren poate să nu mai fie valabil.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:gap-4 md:pt-10">
              {CODE_CHANGES.map((c) => (
                <div key={c} className="flex gap-3 text-[14px] md:text-[16px] font-light text-foreground leading-[1.55]">
                  <span className="text-accent font-medium shrink-0">↳</span>
                  <span>{c}</span>
                </div>
              ))}
              <div className="mt-2 pt-4 border-t border-dashed border-dark-card text-[13px] md:text-[14px] italic text-muted">
                Analiza ține cont de regulile noi și de cele tranzitorii.
              </div>
            </div>
          </div>
        </section>

        {/* ─────── CUM FUNCȚIONEAZĂ ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">CUM FUNCȚIONEAZĂ</div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-6 md:mb-14">
            patru pași,
            <br />
            <span className="font-bold">totul de la distanță</span>
            <span className="text-accent">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 relative">
            <div className="hidden md:block absolute top-7 left-[30px] right-[30px] border-t-2 border-dashed border-dark-card" aria-hidden />
            {STEPS.map((s) => (
              <div key={s.n} className="relative flex md:block gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-full bg-foreground text-accent text-[13px] md:text-[18px] font-bold flex items-center justify-center md:mb-6">
                  {s.n}
                </div>
                <div>
                  <div className="text-[17px] md:text-[20px] font-medium text-foreground mb-1 md:mb-2.5 tracking-[-0.3px]">{s.t}</div>
                  <div className="text-[13px] font-light text-muted leading-[1.6]">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────── GARANȚII ─────── */}
        <div className="bg-accent mt-10 md:mt-[110px] relative overflow-hidden">
          <section className="max-w-[1400px] mx-auto px-5 md:px-14 py-11 md:py-[100px] relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
              {[
                {
                  t: "banii înapoi",
                  d: "Dacă nu putem găsi sau obține reglementările de urbanism care se aplică terenului, îți returnăm integral suma.",
                },
                {
                  t: "se scade din proiect",
                  d: "Dacă mergi mai departe cu noi pe PUD, PUZ sau proiect, cei 590 de lei se scad din onorariu.",
                },
                {
                  t: "spus pe față",
                  d: "Dacă terenul nu merită, îți spunem direct și cu argumente, chiar dacă asta înseamnă că nu mai lucrăm împreună.",
                },
              ].map((g) => (
                <div key={g.t}>
                  <div className="text-[26px] md:text-[40px] font-bold text-foreground leading-[1] tracking-[-0.6px] mb-3">
                    {g.t}
                    <span className="text-background">.</span>
                  </div>
                  <p className="text-[14px] md:text-[16px] font-normal text-foreground/85 leading-[1.55] m-0">{g.d}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ─────── COMANDĂ ─────── */}
        <section id="comanda" className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px] scroll-mt-6">
          <div className="bg-platinum rounded-[20px] md:rounded-[32px] border-[1.5px] md:border-2 border-dark-card p-5 md:p-14 grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-8 md:gap-16">
            <div>
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">COMANDĂ</div>
              <h2 className="text-[30px] md:text-[56px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.4px] m-0 mb-4 md:mb-6">
                spune-ne
                <br />
                <span className="font-bold">unde e terenul</span>
                <span className="text-accent">.</span>
              </h2>
              <p className="text-[13px] md:text-[16px] font-light text-muted leading-[1.6] m-0 mb-6">
                Nu plătești nimic acum. Primești întâi confirmarea pe email, apoi
                factura proformă. Lucrul începe după plată.
              </p>
              <div className="flex flex-col gap-2.5 text-[13px] md:text-[14px] font-light text-foreground">
                {["590 lei, TVA inclus", "3 zile lucrătoare", "raport PDF + clarificări pe email", "orice județ"].map((x) => (
                  <div key={x} className="flex items-center gap-2.5">
                    <span className="text-accent">✓</span>
                    {x}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-dark-card text-[13px] font-light text-muted leading-[1.6]">
                Ai o întrebare înainte? <a href="mailto:office@amorph.ro" className="underline hover:text-accent">office@amorph.ro</a> sau <span className="whitespace-nowrap">+40 747 089 434</span>.
              </div>
            </div>
            <AnalizaTerenForm />
          </div>
        </section>

        {/* ─────── FAQ ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 md:gap-20 md:items-start">
            <div className="md:sticky md:top-10">
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">ÎNTREBĂRI FRECVENTE</div>
              <h2 className="text-[30px] md:text-[56px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.4px] m-0">
                înainte
                <br />
                <span className="font-bold">să comanzi</span>
                <span className="text-accent">.</span>
              </h2>
            </div>
            <ServiciiFAQ items={FAQ} />
          </div>
        </section>

        {/* ─────── LEGĂTURĂ SPRE DOCUMENTAȚII ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px] pb-10 md:pb-16">
          <Link
            href="/servicii/planificare-urbana"
            className="bg-dark text-platinum rounded-3xl md:rounded-[32px] p-8 md:p-[56px] flex flex-col md:flex-row md:items-center md:justify-between gap-5 transition-all duration-300 md:hover:-translate-y-0.5"
          >
            <div>
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] opacity-60 mb-3">DUPĂ ANALIZĂ</div>
              <div className="text-[26px] md:text-[48px] font-light leading-[1.05] tracking-[-0.5px] md:tracking-[-1.2px]">
                ai nevoie de <span className="font-bold text-accent">PUD sau PUZ</span>?
              </div>
            </div>
            <span className="inline-flex items-center gap-2 text-[14px] md:text-base">
              vezi documentațiile <ArrowRight />
            </span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
