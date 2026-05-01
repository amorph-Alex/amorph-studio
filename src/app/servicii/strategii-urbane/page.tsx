import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmorphBackdrop from "@/components/ui/AmorphBackdrop";
import ServiciiFAQ from "@/components/sections/ServiciiFAQ";
import type { FaqItem } from "@/lib/services";

export const metadata: Metadata = {
  title: "Strategii urbane — SDL, regenerare, politici",
  description:
    "Strategii care chiar se implementează: SDL, regenerare urbană, politici publice locale și studii de fundamentare — cu plan de acțiune realist.",
};

const ArrowRight = ({
  size = 14,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden
    className={className}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const STR_DOCS = [
  {
    n: "01",
    code: "SDL",
    title: "Strategii de",
    sub: "Dezvoltare Locală",
    short: "documentul-cadru pentru următorii 7–10 ani",
    body: "Strategia integrată care setează prioritățile unei localități pe termen mediu și lung. Conține diagnoză, viziune, obiective, plan de acțiune cu măsuri și indicatori. Bază pentru accesarea de fonduri europene și naționale.",
    when: "când o primărie își (re)scrie agenda pe 7–10 ani",
  },
  {
    n: "02",
    code: "SRU",
    title: "Strategii de",
    sub: "Regenerare Urbană",
    short: "cadru pentru intervenții pe zone defavorizate",
    body: "Strategie integrată care identifică zonele cu probleme (centru istoric, ansambluri socialiste, foste industriale) și propune un mix de intervenții: spațiu public, locuire, mobilitate, social. Cadru pentru proiectele individuale.",
    when: "când o zonă are nevoie de intervenții corelate, nu punctuale",
  },
  {
    n: "03",
    code: "Politici",
    title: "politici publice",
    sub: "locale",
    short: "pe locuire, mobilitate, spațiu public, cultură",
    body: "Politici sectoriale care detaliază o direcție din strategia generală — politică locală de locuire, de mobilitate ușoară, de spațiu public, de cultură. Cu obiective măsurabile și instrumente clare de implementare.",
    when: "când strategia generală cere instrumente specifice",
  },
  {
    n: "04",
    code: "Studii",
    title: "studii de",
    sub: "fundamentare",
    short: "analize pentru fundamentarea strategiei",
    body: "Cercetare aplicată: analize demografice, economice, de mobilitate, de locuire, de spațiu public. Stau la baza diagnozei strategice. Pot fi contractate și separat, înainte de strategia propriu-zisă.",
    when: "înainte de strategie, sau ca instrument independent",
  },
];

const STR_PROCESS = [
  {
    n: "01",
    t: "Diagnoză",
    d: "Analiză cantitativă și calitativă a teritoriului — date statistice, vizite, interviuri cu actorii cheie. Identificăm punctele tari, slabe, oportunitățile.",
  },
  {
    n: "02",
    t: "Consultare publică",
    d: "Workshop-uri cu cetățenii, ONG-uri, mediu de afaceri, instituții. Nu o singură întâlnire — un proces structurat pe 4–8 săptămâni cu mai multe formate.",
  },
  {
    n: "03",
    t: "Viziune și obiective",
    d: "Sintetizăm tot ce am aflat într-o viziune clară — unde vrem să ajungem în 10 ani — și obiective specifice, măsurabile, ancorate în realitate.",
  },
  {
    n: "04",
    t: "Plan de acțiune",
    d: "Măsuri concrete cu calendar, buget, surse de finanțare, indicatori de progres. Fiecare măsură are un responsabil și un orizont temporal clar.",
  },
  {
    n: "05",
    t: "Monitorizare",
    d: "Cadru de monitorizare cu indicatori, rapoarte anuale, mecanism de actualizare. O strategie e vie — nu un document care prinde praf.",
  },
];

const STR_APPROACH = [
  {
    code: "date",
    title: "date deschise",
    body: "Toate datele care stau la baza strategiei sunt publicate într-un format deschis — hărți, rapoarte, baze de date. Cetățenii pot verifica, completa, contesta. Transparența e parte din metodă, nu un add-on de la final.",
    items: [
      "hărți interactive accesibile",
      "baze de date publice",
      "rapoarte intermediare deschise",
      "cod și metodologie open source",
    ],
  },
  {
    code: "participare",
    title: "participare reală",
    body: "Consultarea publică nu e o formalitate de bifat. Folosim mai multe formate — workshop-uri tematice, plimbări exploratorii, sondaje online, interviuri narative — ca să auzim și pe cei care nu vin de obicei la dezbateri.",
    items: [
      "workshop-uri tematice",
      "plimbări exploratorii pe teren",
      "sondaje online cu rezultate publice",
      "interviuri cu actori-cheie",
    ],
  },
];

const STR_EXAMPLES = [
  { tag: "SDL", title: "Strategie comună · 8.500 loc.", meta: "Transilvania, în implementare" },
  { tag: "SRU", title: "Regenerare centru istoric", meta: "oraș mediu, 60.000 locuitori" },
  { tag: "Politică", title: "Politică locală locuire", meta: "municipiu mare, 2024" },
  { tag: "Studiu", title: "Studiu mobilitate ușoară", meta: "oraș turistic, 12.000 loc." },
];

const STR_FAQ: FaqItem[] = [
  {
    q: "Cât durează elaborarea unei strategii?",
    a: "Pentru un SDL la nivel de comună sau oraș mic: 6–10 luni. Pentru un municipiu mare sau o strategie de regenerare cu zone multiple: 10–14 luni. Cea mai mare parte din timp e dedicată consultării publice și prelucrării feedback-ului — partea care, dacă e făcută grăbit, compromite tot restul.",
  },
  {
    q: "Lucrați doar cu primării sau și cu privați?",
    a: "Cu ambele. Primăriile și CJ-urile sunt clienții cei mai frecvenți pentru SDL-uri și politici publice. Dezvoltatorii privați ne caută pentru strategii pre-PUZ pe zone mari (cartiere noi, conversii) — un cadru strategic e adesea condiția pentru acceptarea unei intervenții la scară.",
  },
  {
    q: "Ce înseamnă „consultare publică reală”?",
    a: "Înseamnă mai mult decât o întâlnire publică obligatorie. Pe un SDL tipic facem 4–6 workshop-uri tematice, 2–3 plimbări exploratorii, sondaj online, interviuri cu 15–25 actori cheie. Tot feedback-ul e centralizat și răspuns punctual — fiecare comentariu primește un răspuns documentat.",
  },
  {
    q: "Strategia poate accesa fonduri europene direct?",
    a: "Strategia în sine nu e un proiect cu finanțare, dar e baza pentru aplicații. Un SDL aprobat e condiție pentru POR, PNRR, Anghel Saligny etc. Construim planul de acțiune cu sursele de finanțare deja identificate, ca să nu rămâi cu un document teoretic.",
  },
  {
    q: "Faceți și implementarea, sau doar strategia?",
    a: "Strategia e specialitatea noastră. Implementarea revine primăriei sau dezvoltatorului — dar rămânem disponibili pentru asistență pe parcurs (revizii anuale, asistență la aplicații, consultanță pe măsuri specifice). Avem și parteneri de încredere pentru proiecte tehnice.",
  },
  {
    q: "Care e bugetul minim pentru o strategie?",
    a: "Pentru un SDL la nivel de comună mică: de la ~35.000€. Pentru o strategie integrată de regenerare urbană sau un SDL pentru un municipiu mare: 80.000–200.000€, în funcție de scara consultării publice. Cele mai multe se finanțează prin POAT, POR sau bugete locale dedicate.",
  },
];

const STR_RELATED = [
  {
    slug: "planificare-urbana",
    title: "planificare",
    subtitle: "urbană",
    image: "/images/service-urbanism.png",
  },
  {
    slug: "regenerare-urbana",
    title: "regenerare",
    subtitle: "urbană",
    image: "/images/service-regenerare.png",
  },
];

function ExampleGlyph({ index }: { index: number }) {
  const accent = "var(--accent)";
  const white = "#fff";
  if (index === 0) {
    return (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        className="opacity-60 max-md:w-20 max-md:h-20"
      >
        <g stroke={accent} strokeWidth="1.5" fill="none">
          <circle cx="60" cy="20" r="6" />
          <line x1="60" y1="26" x2="30" y2="50" />
          <line x1="60" y1="26" x2="60" y2="50" />
          <line x1="60" y1="26" x2="90" y2="50" />
          <circle cx="30" cy="56" r="5" />
          <circle cx="60" cy="56" r="5" />
          <circle cx="90" cy="56" r="5" />
          <line x1="30" y1="61" x2="20" y2="86" />
          <line x1="30" y1="61" x2="40" y2="86" />
          <line x1="60" y1="61" x2="55" y2="86" />
          <line x1="60" y1="61" x2="65" y2="86" />
          <line x1="90" y1="61" x2="80" y2="86" />
          <line x1="90" y1="61" x2="100" y2="86" />
          <circle cx="20" cy="92" r="3" />
          <circle cx="40" cy="92" r="3" />
          <circle cx="55" cy="92" r="3" />
          <circle cx="65" cy="92" r="3" />
          <circle cx="80" cy="92" r="3" />
          <circle cx="100" cy="92" r="3" />
        </g>
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        className="opacity-60 max-md:w-20 max-md:h-20"
      >
        <g stroke={white} strokeWidth="1.5" fill="none">
          <rect x="14" y="22" width="50" height="50" />
          <rect x="48" y="40" width="58" height="50" strokeDasharray="4 3" />
          <circle cx="68" cy="56" r="14" />
          <line
            x1="14"
            y1="22"
            x2="106"
            y2="90"
            strokeDasharray="2 4"
            opacity="0.4"
          />
        </g>
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        className="opacity-60 max-md:w-20 max-md:h-20"
      >
        <g stroke={accent} strokeWidth="1.5" fill="none">
          <line x1="14" y1="100" x2="106" y2="100" />
          <rect x="22" y="60" width="14" height="40" />
          <rect x="42" y="40" width="14" height="60" />
          <rect x="62" y="50" width="14" height="50" />
          <rect x="82" y="30" width="14" height="70" />
          <line
            x1="14"
            y1="46"
            x2="106"
            y2="46"
            strokeDasharray="3 3"
            opacity="0.5"
          />
        </g>
      </svg>
    );
  }
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      className="opacity-60 max-md:w-20 max-md:h-20"
    >
      <g stroke={white} strokeWidth="1.5" fill="none">
        <circle cx="30" cy="30" r="4" />
        <circle cx="90" cy="30" r="4" />
        <circle cx="60" cy="60" r="6" />
        <circle cx="20" cy="86" r="4" />
        <circle cx="60" cy="92" r="4" />
        <circle cx="98" cy="84" r="4" />
        <line x1="30" y1="30" x2="60" y2="60" />
        <line x1="90" y1="30" x2="60" y2="60" />
        <line x1="20" y1="86" x2="60" y2="60" />
        <line x1="60" y1="92" x2="60" y2="60" />
        <line x1="98" y1="84" x2="60" y2="60" />
        <line x1="20" y1="86" x2="60" y2="92" strokeDasharray="2 3" />
        <line x1="60" y1="92" x2="98" y2="84" strokeDasharray="2 3" />
      </g>
    </svg>
  );
}

export default function StrategiiUrbanePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ─────── HERO ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-6 md:pt-10 pb-6">
          <div className="flex items-center gap-2 text-[11px] md:text-[13px] text-muted mb-4 md:mb-7">
            <Link href="/servicii" className="hover:text-accent transition-colors">
              servicii
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-foreground">strategii urbane</span>
          </div>
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ 02 · STRATEGII URBANE
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 md:gap-14 md:items-end">
            <h1 className="text-[42px] md:text-[124px] font-light leading-[0.95] md:leading-[0.88] tracking-[-1px] md:tracking-[-3px] m-0">
              strategii care
              <br />
              <span className="font-bold">chiar se implementează</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light text-foreground leading-[1.6] m-0 md:pb-6">
              <span className="md:hidden">
                SDL, regenerare urbană, politici publice și studii de
                fundamentare. Cadru pe 7–10 ani cu plan de acțiune realist.
              </span>
              <span className="hidden md:inline">
                SDL, regenerare urbană, politici publice locale și studii de
                fundamentare. Construim cu primăriile și dezvoltatorii cadrul
                pe 7–10 ani, cu plan de acțiune realist.
              </span>
            </p>
          </div>
          <div className="relative mt-6 md:mt-12 h-[220px] md:h-[480px] rounded-[20px] md:rounded-[32px] overflow-hidden border-[1.5px] md:border-2 border-dark-card">
            <Image
              src="/images/service-strategii.png"
              alt="strategii urbane"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
        </section>

        {/* ─────── CE LIVRĂM — DOCS ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CE LIVRĂM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-3 md:mb-4">
            patru tipuri de
            <br />
            <span className="font-bold">strategii</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="text-[13px] md:text-[17px] font-light text-muted leading-[1.55] md:leading-[1.6] max-w-[720px] m-0 mb-6 md:mb-12">
            <span className="md:hidden">
              De la cadrul integrat al unei localități, până la o politică
              sectorială specifică.
            </span>
            <span className="hidden md:inline">
              De la cadrul integrat al unei localități, până la o politică
              sectorială specifică. La prima conversație îți spunem care e
              potrivită — sau care combinație.
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {STR_DOCS.map((d) => (
              <div
                key={d.n}
                className="p-5 md:p-9 bg-platinum rounded-[18px] md:rounded-3xl border-[1.5px] md:border-2 border-dark-card flex flex-col gap-3.5 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-accent"
              >
                <div className="flex items-start justify-between">
                  <div className="text-[10px] md:text-[11px] tracking-[0.22em] text-muted">
                    {d.n}
                  </div>
                  <span className="text-[10px] md:text-[11px] px-2.5 md:px-3 py-1 md:py-[5px] rounded-full bg-accent text-foreground font-medium tracking-[0.4px] md:tracking-[0.5px]">
                    {d.code}
                  </span>
                </div>
                <div className="text-[24px] md:text-[38px] font-normal text-foreground leading-[1] md:leading-[0.95] tracking-[-0.4px] md:tracking-[-0.8px]">
                  {d.title}
                  <span className="md:hidden"> </span>
                  <br className="hidden md:inline" />
                  <span className="font-bold">{d.sub}</span>
                  <span className="text-accent">.</span>
                </div>
                <div className="text-[12px] md:text-[14px] font-light text-muted tracking-[0.04em] md:tracking-[0.05em]">
                  {d.short}
                </div>
                <div className="text-[13px] md:text-[15px] font-light text-foreground leading-[1.55] md:leading-[1.6]">
                  {d.body}
                </div>
                <div className="mt-auto pt-3 md:pt-5 border-t border-dashed border-dark-card flex items-center gap-2 text-[12px] md:text-[13px]">
                  <span className="text-accent text-[14px] md:text-base">↳</span>
                  <span className="italic text-muted">{d.when}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────── PROCESUL ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            PROCESUL COMPLET
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-5 md:mb-4">
            de la diagnoză la
            <br />
            <span className="font-bold">monitorizare</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="hidden md:block text-[17px] font-light text-muted leading-[1.6] max-w-[720px] m-0 mb-16">
            Cinci pași — fiecare construit pe rezultatul precedentului. Fără
            pași omiși, fără strategii „lipite” pe diagnoză insuficientă.
          </p>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden flex flex-col">
            {STR_PROCESS.map((p, i) => (
              <div key={p.n} className="flex gap-3.5 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-foreground text-accent text-[13px] font-bold flex items-center justify-center">
                    {p.n}
                  </div>
                  {i < STR_PROCESS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-dark-card min-h-7 mt-1" />
                  )}
                </div>
                <div
                  className={`pt-1 ${
                    i < STR_PROCESS.length - 1 ? "pb-7" : ""
                  }`}
                >
                  <div className="text-[17px] font-medium text-foreground mb-1">
                    {p.t}
                  </div>
                  <div className="text-[13px] font-light text-muted leading-[1.55]">
                    {p.d}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 5-col with dashed connector */}
          <div className="hidden md:grid relative grid-cols-5 gap-5">
            <div
              className="absolute top-7 left-[30px] right-[30px] border-t-2 border-dashed border-dark-card"
              aria-hidden
            />
            {STR_PROCESS.map((p) => (
              <div key={p.n} className="relative">
                <div className="w-14 h-14 rounded-full bg-foreground text-accent text-[18px] font-bold flex items-center justify-center mb-6">
                  {p.n}
                </div>
                <div className="text-[20px] font-medium text-foreground mb-2.5 tracking-[-0.3px] leading-[1.15]">
                  {p.t}
                </div>
                <div className="text-[13px] font-light text-muted leading-[1.6]">
                  {p.d}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────── ABORDAREA ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ABORDAREA NOASTRĂ
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-6 md:mb-12">
            <span className="md:hidden">
              ce ne face <span className="font-bold">diferiți</span>
              <span className="text-accent">.</span>
            </span>
            <span className="hidden md:inline">
              ce ne face
              <br />
              <span className="font-bold">diferiți</span>
              <span className="text-accent">.</span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-6">
            {STR_APPROACH.map((s, i) => {
              const dark = i === 0;
              return (
                <div
                  key={s.code}
                  className={`p-6 md:p-10 rounded-[22px] md:rounded-[28px] ${
                    dark
                      ? "bg-dark text-platinum"
                      : "bg-platinum text-foreground border-[1.5px] md:border-2 border-dark-card"
                  }`}
                >
                  <div className="text-[10px] md:text-[11px] tracking-[0.22em] mb-3 md:mb-4 opacity-60">
                    ↳ {s.code.toUpperCase()}
                  </div>
                  <div className="text-[22px] md:text-[36px] font-normal leading-[1] tracking-[-0.4px] md:tracking-[-0.8px] mb-3 md:mb-[18px]">
                    <span className="font-bold">{s.title}</span>
                    <span className="text-accent">.</span>
                  </div>
                  <p
                    className={`text-[13px] md:text-[15px] font-light leading-[1.6] md:leading-[1.65] m-0 mb-4 md:mb-6 ${
                      dark ? "opacity-85" : ""
                    }`}
                  >
                    {s.body}
                  </p>
                  <div
                    className={`flex flex-col gap-2 md:gap-2.5 pt-3.5 md:pt-5 border-t ${
                      dark ? "border-white/15" : "border-dark-card"
                    }`}
                  >
                    {s.items.map((it) => (
                      <div
                        key={it}
                        className="text-[12px] md:text-[14px] font-light flex items-center gap-2.5 md:gap-3"
                      >
                        <span className="text-accent">✓</span>
                        {it}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─────── YELLOW BAND CTA ─────── */}
        <div className="bg-accent mt-10 md:mt-[110px] relative overflow-hidden">
          <AmorphBackdrop variant="mixed" invert className="md:hidden" />
          <AmorphBackdrop variant="banner" invert className="hidden md:block" />
          <section className="max-w-[1400px] mx-auto px-5 md:px-14 py-11 md:py-[110px] md:pb-[130px] relative">
            <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-foreground/70 mb-3 md:mb-[18px]">
              NU ȘTII DE UNDE SĂ ÎNCEPI?
            </div>
            <h2 className="text-[32px] md:text-[72px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.8px] m-0 mb-4 md:mb-8 max-w-[1100px]">
              <span className="md:hidden">
                spune-ne <span className="font-bold">ce vrea primăria ta</span>
                <span className="text-background">.</span>
              </span>
              <span className="hidden md:inline">
                spune-ne <span className="font-bold">ce vrea primăria ta</span>
                <br />
                în următorii 10 ani
                <span className="text-background">.</span>
              </span>
            </h2>
            <p className="text-[14px] md:text-[19px] font-normal text-foreground leading-[1.55] max-w-[760px] m-0 mb-5 md:mb-10 opacity-85">
              <span className="md:hidden">
                Trimite-ne caietul de sarcini sau o scrisoare cu prioritățile.
                În 5 zile lucrătoare îți răspundem cu o ofertă completă.
              </span>
              <span className="hidden md:inline">
                Trimite-ne caietul de sarcini, HCL-ul de inițiere sau o
                scrisoare cu prioritățile. În 5 zile lucrătoare îți trimitem o
                ofertă cu metodologie, calendar și buget — adaptată la sursa de
                finanțare.
              </span>
            </p>
            <div className="flex items-center gap-3.5 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-foreground text-platinum text-[14px] md:text-base font-normal whitespace-nowrap"
              >
                <span className="md:hidden">trimite caietul</span>
                <span className="hidden md:inline">
                  trimite caietul de sarcini
                </span>
                <ArrowRight size={14} />
              </Link>
              <span className="hidden md:inline text-[14px] text-foreground/70">
                sau sună la +40 747 089 434
              </span>
            </div>
          </section>
        </div>

        {/* ─────── PROIECTE RECENTE ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="flex items-end justify-between mb-6 md:mb-12 gap-8">
            <div>
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
                PROIECTE RECENTE
              </div>
              <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0">
                <span className="md:hidden">
                  ce am livrat <span className="font-bold">recent</span>
                </span>
                <span className="hidden md:inline">
                  ce am livrat
                  <br />
                  <span className="font-bold">recent</span>
                </span>
                <span className="text-accent">.</span>
              </h2>
            </div>
            <Link
              href="/servicii"
              className="hidden md:inline-flex items-center gap-2 text-[14px] text-muted hover:text-accent transition-colors pb-2"
            >
              vezi tot portofoliul <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-6">
            {STR_EXAMPLES.map((e, i) => (
              <div
                key={e.title}
                className="border-[1.5px] md:border-2 border-dark-card rounded-[18px] md:rounded-3xl overflow-hidden bg-platinum"
              >
                <div
                  className={`relative h-[160px] md:h-[280px] flex items-center justify-center ${
                    i % 2 === 0 ? "bg-dark" : "bg-[#bdbdbd]"
                  }`}
                >
                  <ExampleGlyph index={i} />
                  <span className="absolute top-3.5 md:top-[18px] left-3.5 md:left-[18px] text-[10px] md:text-[11px] px-2.5 md:px-3 py-1 md:py-[5px] rounded-full bg-accent text-foreground font-medium tracking-[0.4px] md:tracking-[0.5px]">
                    {e.tag}
                  </span>
                </div>
                <div className="px-[18px] md:px-[26px] py-4 md:py-[22px]">
                  <div className="text-[17px] md:text-[22px] font-medium text-foreground tracking-[-0.2px] md:tracking-[-0.3px] mb-1.5">
                    {e.title}
                  </div>
                  <div className="text-[12px] md:text-[13px] font-light text-muted">
                    {e.meta}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────── FAQ ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 md:gap-20 md:items-start">
            <div className="md:sticky md:top-10">
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
                ÎNTREBĂRI FRECVENTE
              </div>
              <h2 className="text-[30px] md:text-[56px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.4px] m-0">
                ce ne
                <br />
                <span className="font-bold">întrebați des</span>
                <span className="text-accent">.</span>
              </h2>
            </div>
            <ServiciiFAQ items={STR_FAQ} />
          </div>
        </section>

        {/* ─────── CTA ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="bg-dark text-platinum rounded-3xl md:rounded-[32px] p-8 md:p-[72px_56px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-center text-center md:text-left">
            <div className="text-[32px] md:text-[64px] font-light text-platinum leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px]">
              gata să
              <br />
              <span className="font-bold text-accent">începem</span>
              <span className="text-accent">?</span>
            </div>
            <div className="flex flex-col gap-3.5 md:items-start items-center">
              <p className="text-[13px] md:text-[15px] font-light text-platinum/75 leading-[1.55] md:leading-[1.6] m-0">
                <span className="md:hidden">
                  Trimite-ne caietul sau o descriere. Răspuns în 5 zile
                  lucrătoare.
                </span>
                <span className="hidden md:inline">
                  Trimite-ne caietul de sarcini sau o scrisoare scurtă cu
                  prioritățile. Răspundem în 5 zile lucrătoare cu o ofertă
                  completă.
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

        {/* ─────── SERVICII CONEXE ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px] pb-10 md:pb-16">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            SERVICII CONEXE
          </div>
          <h2 className="text-[26px] md:text-[48px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.5px] md:tracking-[-1.2px] m-0 mb-5 md:mb-10">
            merg bine <span className="font-bold">împreună</span>
            <span className="text-accent">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {STR_RELATED.map((r) => (
              <Link
                key={r.slug}
                href={`/servicii/${r.slug}`}
                className="relative bg-platinum rounded-[18px] md:rounded-3xl border-[1.5px] md:border-2 border-dark-card overflow-hidden grid grid-cols-[110px_1fr] md:grid-cols-[180px_1fr] transition-all duration-300 md:hover:-translate-y-0.5 md:hover:border-accent"
              >
                <div className="h-[110px] md:h-[180px] overflow-hidden relative">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    sizes="(max-width: 768px) 110px, 180px"
                    className="object-cover"
                  />
                </div>
                <div className="px-4 md:px-8 py-3.5 md:py-7 flex flex-col justify-center">
                  <div className="text-[20px] md:text-[30px] font-normal text-foreground leading-[0.95] tracking-[-0.3px] md:tracking-[-0.5px]">
                    {r.title}
                    <span className="md:hidden"> </span>
                    <br className="hidden md:inline" />
                    <span className="font-bold">{r.subtitle}</span>
                    <span className="text-accent">.</span>
                  </div>
                  <div className="mt-2 md:mt-3.5 flex items-center gap-1.5 md:gap-2 text-[12px] md:text-[14px] text-foreground">
                    <span>vezi serviciul</span>
                    <ArrowRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
