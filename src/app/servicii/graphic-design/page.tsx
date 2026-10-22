import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmorphBackdrop from "@/components/ui/AmorphBackdrop";
import ServiciiFAQ from "@/components/sections/ServiciiFAQ";
import JsonLd from "@/components/seo/JsonLd";
import { servicePageJsonLd } from "@/lib/jsonld";
import type { FaqItem } from "@/lib/services";
import { SHOW_SERVICE_PORTFOLIO } from "@/lib/flags";

export const metadata: Metadata = pageMetadata({
  title: "Graphic design: identitate vizuală cu sens",
  description: "De la logo la sistem vizual complet. Identități, rebranding, print, social, signaletică și design pentru instituții. Predăm sisteme pe care echipa ta le poate folosi singură.",
  path: "/servicii/graphic-design",
  ownOgImage: true,
});

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

type CardTheme = {
  bg: string;
  fg: string;
  mut: string;
  divider: string;
  chipBg: string;
  chipFg: string;
  shape: string;
  border: string | null;
};

const GD_SERVICES = [
  {
    n: "01",
    code: "brand",
    title: "identitate",
    sub: "vizuală",
    short: "logo, sistem, manual de brand",
    body: "De la logo până la sistem vizual complet: tipografie, paletă, ton, principii de aplicare. Plecăm de la cine ești, nu de la ce e la modă acum.",
    when: "când pornești de la zero sau ai nevoie de o bază solidă",
  },
  {
    n: "02",
    code: "rebrand",
    title: "rebranding",
    sub: "& refresh",
    short: "evoluție pentru branduri existente",
    body: "Păstrăm ce funcționează, schimbăm ce nu mai vorbește. Rebranding-ul bun nu e o ruptură — e o continuare conștientă, cu un plan de tranziție pentru toate aplicațiile.",
    when: "când brandul tău a crescut, dar identitatea a rămas pe loc",
  },
  {
    n: "03",
    code: "print",
    title: "design",
    sub: "pentru print",
    short: "afișe, broșuri, rapoarte, infografice",
    body: "Materiale tipărite gândite pentru hârtia pe care vor sta. Rapoarte anuale, cataloage, afișe, infografice și vizualizări de date — totul livrat print-ready, cu profil de culoare corect și pregătit pentru tipograful tău.",
    when: "când conținutul tău merită mai mult decât un PDF generic",
  },
  {
    n: "04",
    code: "social",
    title: "social media",
    sub: "& digital",
    short: "template-uri, post-uri, sisteme editabile",
    body: "Un sistem de template-uri pe care echipa ta îl folosește singură. Carouseluri, stories, cover-uri, reels intro/outro — toate construite ca să fie consistente fără să devină plictisitoare.",
    when: "când ai nevoie de un look unitar pe toate canalele",
  },
  {
    n: "05",
    code: "sign",
    title: "signaletică",
    sub: "& wayfinding",
    short: "orientare în spațiu fizic",
    body: "Panouri, semne, hărți, sisteme de numerotare pentru clădiri, campusuri sau evenimente. Începem cu un audit al traseelor reale și terminăm cu fișiere predate producătorului, nu doar mockup-uri.",
    when: "când oamenii trebuie să găsească ceva fără să întrebe",
  },
  {
    n: "06",
    code: "civic",
    title: "design pentru",
    sub: "instituții & ONG",
    short: "identitate cu responsabilitate publică",
    body: "Identități, materiale și sisteme vizuale pentru primării, ONG-uri, proiecte civice și culturale. Cu accent pe accesibilitate (contrast, lizibilitate), buget realist și fișiere lăsate într-o stare în care colegii tăi le pot folosi singuri.",
    when: "când mesajul tău e despre comunitate, nu despre vânzare",
  },
];

// Color rhythm: [platinum, dark, platinum] / [accent, platinum, dark]
const GD_CARD_THEMES: CardTheme[] = [
  {
    bg: "var(--platinum)",
    fg: "var(--foreground)",
    mut: "var(--muted)",
    divider: "var(--dark-card)",
    chipBg: "var(--foreground)",
    chipFg: "var(--accent)",
    shape: "var(--accent)",
    border: "var(--dark-card)",
  },
  {
    bg: "var(--dark)",
    fg: "var(--platinum)",
    mut: "rgba(240,238,233,0.55)",
    divider: "rgba(255,255,255,0.15)",
    chipBg: "var(--accent)",
    chipFg: "var(--foreground)",
    shape: "var(--accent)",
    border: null,
  },
  {
    bg: "var(--platinum)",
    fg: "var(--foreground)",
    mut: "var(--muted)",
    divider: "var(--dark-card)",
    chipBg: "var(--foreground)",
    chipFg: "var(--accent)",
    shape: "var(--dark)",
    border: "var(--dark-card)",
  },
  {
    bg: "var(--accent)",
    fg: "var(--foreground)",
    mut: "rgba(42,32,24,0.65)",
    divider: "rgba(42,32,24,0.2)",
    chipBg: "var(--foreground)",
    chipFg: "var(--accent)",
    shape: "var(--dark)",
    border: "var(--dark-card)",
  },
  {
    bg: "var(--platinum)",
    fg: "var(--foreground)",
    mut: "var(--muted)",
    divider: "var(--dark-card)",
    chipBg: "var(--foreground)",
    chipFg: "var(--accent)",
    shape: "var(--accent)",
    border: "var(--dark-card)",
  },
  {
    bg: "var(--dark)",
    fg: "var(--platinum)",
    mut: "rgba(240,238,233,0.55)",
    divider: "rgba(255,255,255,0.15)",
    chipBg: "var(--accent)",
    chipFg: "var(--foreground)",
    shape: "var(--accent)",
    border: null,
  },
];

function GDCardShape({ i, color }: { i: number; color: string }) {
  const common = {
    stroke: color,
    strokeWidth: 1.6,
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const shapes = [
    <g key="0" {...common}>
      <rect x="10" y="10" width="44" height="36" rx="4" />
      <circle cx="32" cy="28" r="9" />
      <line x1="32" y1="19" x2="32" y2="37" />
    </g>,
    <g key="1" {...common}>
      <path d="M50 26 a18 18 0 1 1 -7 -14" />
      <path d="M50 10 L50 18 L42 18" />
    </g>,
    <g key="2" {...common}>
      <path d="M12 6 L42 6 L52 16 L52 46 L12 46 Z" />
      <path d="M42 6 L42 16 L52 16" />
      <line x1="18" y1="24" x2="36" y2="24" />
      <line x1="18" y1="32" x2="46" y2="32" />
      <line x1="18" y1="40" x2="40" y2="40" />
    </g>,
    <g key="3" {...common}>
      <rect x="8" y="8" width="18" height="18" rx="2" />
      <rect x="30" y="8" width="18" height="18" rx="2" />
      <rect x="8" y="30" width="18" height="18" rx="2" />
      <rect x="30" y="30" width="18" height="18" rx="2" />
    </g>,
    <g key="4" {...common}>
      <rect x="6" y="14" width="46" height="24" rx="2" />
      <line x1="18" y1="26" x2="40" y2="26" />
      <polyline points="34,20 40,26 34,32" />
    </g>,
    <g key="5" {...common}>
      <path d="M4 18 L32 6 L60 18 Z" />
      <line x1="6" y1="22" x2="58" y2="22" />
      <line x1="12" y1="22" x2="12" y2="44" />
      <line x1="24" y1="22" x2="24" y2="44" />
      <line x1="40" y1="22" x2="40" y2="44" />
      <line x1="52" y1="22" x2="52" y2="44" />
      <line x1="4" y1="46" x2="60" y2="46" />
    </g>,
  ];
  return (
    <svg width="64" height="52" viewBox="0 0 64 52" className="block">
      {shapes[i]}
    </svg>
  );
}

const GD_PROCESS = [
  {
    n: "01",
    g: "?",
    t: "Brief",
    d: "O conversație lungă despre cine sunteți, pentru cine lucrați și ce vreți să se schimbe. Plecăm de la oameni și obiective, nu de la „un logo modern”.",
  },
  {
    n: "02",
    g: "⬚",
    t: "Cercetare",
    d: "Audit al stării actuale, benchmark al concurenței, moodboard-uri pentru direcție. Tot ce găsim trece prin filtru — nimic nu intră fără motiv.",
  },
  {
    n: "03",
    g: "✺",
    t: "Direcții",
    d: "Două sau trei direcții vizuale diferite, fiecare cu logică proprie. Le prezentăm împreună, le compari, alegi una. Apoi mergem mai departe — fără să ne uităm înapoi.",
  },
  {
    n: "04",
    g: "✓",
    t: "Rafinare",
    d: "Direcția aleasă crește într-un sistem complet: variante de logo, paletă, tipografie, principii de aplicare. Runde de feedback structurat, nu „mai roșu / mai mare”.",
  },
  {
    n: "05",
    g: "↗",
    t: "Manual & Aplicații",
    d: "Manual de brand utilizabil (nu PDF de 80 pagini), fișiere predate complet, primele aplicații reale. Rămânem disponibili pentru întrebări — gratuit, în primele 60 de zile.",
  },
];

const GD_PRINCIPLES = [
  {
    code: "sens",
    title: "identitate cu sens",
    body: "Nu plecăm de la tendințe. Plecăm de la brief: cine ești, pentru cine lucrezi, ce trebuie să schimbe identitatea asta. Fiecare alegere — de la font la culoare — are o justificare pe care ți-o explicăm. Dacă nu putem să o explicăm, nu o facem.",
    items: [
      "decizii argumentate, nu estetice",
      "cercetare reală înainte de schiță",
      "aliniere cu strategia ta de business",
      "fără logo-uri „pe care le-am mai văzut undeva”",
    ],
  },
  {
    code: "sistem",
    title: "sistem viu, nu PDF mort",
    body: "Un manual de brand bun e un instrument, nu o piatră funerară. Îți predăm fișiere editabile, template-uri reale, exemple pe aplicații concrete. Echipa ta poate continua singură — pentru că asta înseamnă un sistem care funcționează.",
    items: [
      "fișiere print-ready: vector, RGB + CMYK",
      "fonturi licențiate corect (sau open-source)",
      "manual scurt, ilustrat, cu exemple concrete",
      "tutorial video pentru echipa ta",
    ],
  },
];

const GD_EXAMPLES = [
  {
    tag: "identitate",
    title: "Brand pentru editură independentă",
    meta: "logo + sistem complet · 32 pagini guidelines",
  },
  {
    tag: "print",
    title: "Raport anual ONG mediu",
    meta: "64 pagini, infografice incluse",
  },
  {
    tag: "signaletică",
    title: "Orientare campus universitar",
    meta: "8 clădiri, 120+ panouri",
  },
  {
    tag: "social",
    title: "Identitate digitală festival",
    meta: "30+ template-uri editabile",
  },
];

const GD_FAQ: FaqItem[] = [
  {
    q: "Cât durează un proiect de identitate?",
    a: "O identitate vizuală completă (logo + sistem + manual scurt) durează 6–10 săptămâni. Un rebranding extins, cu aplicații multiple — 3–4 luni. Un proiect de print izolat (un raport, o broșură) — între 2 și 6 săptămâni, în funcție de cât conținut ai gata și de câte runde de revizie sunt. La prima conversație îți facem un calendar realist, cu marja de feedback inclusă.",
  },
  {
    q: "Câte direcții și câte runde de revizie sunt incluse?",
    a: "În etapa de „direcții” îți arătăm două sau trei propuneri vizuale diferite — cu logică, nu doar cu culori schimbate. Alegi una și mergem mai departe cu ea. Pe direcția aleasă sunt incluse trei runde structurate de feedback. Mai multe runde înseamnă, de obicei, că briefingul inițial nu a fost suficient de clar — atunci ne întoarcem împreună la el, nu mai facem versiuni la întâmplare.",
  },
  {
    q: "Ce fișiere primesc la final?",
    a: "Tot ce ai nevoie ca să folosești identitatea fără să ne suni: vector (AI, SVG, PDF), raster (PNG, JPG) în RGB pentru ecran și CMYK pentru print, profile de culoare, fonturi licențiate sau open-source, șabloane editabile. Plus manualul de brand (PDF + Figma sau InDesign editabil). Toate organizate într-un folder pe care poți să-l dai oricui — tipograf, agenție, coleg nou.",
  },
  {
    q: "Pot folosi logo-ul pe orice — print, web, broderie, gravură?",
    a: "Da. Pentru asta îți livrăm mai multe versiuni ale logo-ului: principal, simplificat (pentru dimensiuni mici), monocromatic (pentru o singură culoare), pentru fundal închis, vectorial pentru gravură/broderie. Manualul îți spune exact ce versiune folosești unde. Dacă apare o aplicație neașteptată — pe o căciulă, pe o ștampilă — ne scrii și te ajutăm pe loc.",
  },
  {
    q: "Faceți și producția — print, ambalaje, panouri?",
    a: "Nu printăm noi, dar lucrăm cu tipografii și producători de încredere și gestionăm relația de la fișier la livrare. Primești prețuri de la 2–3 surse, alegi tu, noi verificăm proof-urile și ne asigurăm că ce iese seamănă cu ce am proiectat. Pentru signaletică e similar — colaborăm cu producători specializați și mergem împreună la montaj dacă e nevoie.",
  },
  {
    q: "Ce e un manual de brand și de ce am nevoie de el?",
    a: "Manualul de brand e instrucțiunea de utilizare a identității tale: ce font se folosește unde, ce distanțe minime are logo-ul, cum arată culorile pe diferite suporturi, ce e voie și ce nu. Ai nevoie de el pentru momentul în care un coleg nou, un furnizor sau o agenție trebuie să producă ceva sub numele tău și tu nu ești în cameră. Fără manual, identitatea se diluează în 6 luni. Cu manual bun, ține 10 ani.",
  },
];

function ExampleVisual({ index }: { index: number }) {
  const accent = "var(--accent)";
  const fg = "var(--foreground)";
  const platinum = "var(--platinum)";
  if (index === 0) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-6">
        <div
          className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-[14px] md:rounded-3xl flex items-center justify-center"
          style={{ border: `2px solid ${accent}` }}
        >
          <div
            className="w-8 h-8 md:w-14 md:h-14 rounded-full relative"
            style={{ border: `2px solid ${accent}` }}
          >
            <div
              className="absolute left-1/2 top-1 bottom-1 md:top-1.5 md:bottom-1.5 w-[2px] md:w-[2.5px] -translate-x-1/2"
              style={{ background: accent }}
            />
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center gap-2">
          <div className="w-[140px] h-2.5 rounded-[3px] opacity-60" style={{ background: platinum }} />
          <div className="w-[90px] h-1.5 rounded-[2px] opacity-30" style={{ background: platinum }} />
        </div>
        <div className="flex gap-1.5 md:gap-2 md:mt-2">
          {[accent, "#a87838", "#6b5a3a", platinum].map((c, j) => (
            <div
              key={j}
              className="w-[18px] h-[18px] md:w-[26px] md:h-[26px] rounded-full opacity-85"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="absolute inset-4 md:inset-6 grid grid-cols-2 gap-2 md:gap-3">
        <div className="rounded-md p-2.5 md:p-3.5 flex flex-col gap-1.5 md:gap-2 bg-black/5">
          <div className="w-[70%] h-3 md:h-[18px] rounded-[3px]" style={{ background: accent }} />
          <div className="hidden md:block w-1/2 h-2.5 rounded-[2px] bg-black/20" />
          <div className="mt-1 md:mt-2 flex flex-col gap-1">
            {[0, 1, 2, 3, 4].map((j) => (
              <div
                key={j}
                className="h-[5px] rounded-[2px] bg-black/15"
                style={{ width: `${50 + j * 8}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-md p-2.5 md:p-3.5 flex flex-col gap-2 md:gap-2.5 bg-black/5">
          <div className="hidden md:block w-3/5 h-2 rounded-[2px] bg-black/25" />
          <div className="flex-1 flex items-end gap-1.5 md:gap-2">
            {[0.5, 0.7, 0.4, 0.85, 0.6].map((h, j) => (
              <div
                key={j}
                className="flex-1 rounded-t-[3px]"
                style={{
                  height: `${h * 100}%`,
                  background: j === 3 ? accent : "rgba(0,0,0,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 px-5 md:px-8">
        {[
          { dir: "right" as const, label: "A" },
          { dir: "left" as const, label: "B" },
          { dir: "right" as const, label: "C" },
        ].map((s, j) => {
          const isMid = j === 1;
          return (
            <div
              key={j}
              className={`flex-1 h-[140px] md:h-[200px] rounded-md p-2.5 md:p-4 flex flex-col justify-between ${
                s.dir === "right" ? "items-end" : "items-start"
              }`}
              style={{
                background: isMid ? accent : "rgba(255,255,255,0.1)",
                color: isMid ? fg : platinum,
              }}
            >
              <div
                className="text-[22px] md:text-[36px] font-bold"
                style={{ fontFamily: "ui-monospace, monospace" }}
              >
                {s.label}
              </div>
              <svg width="26" height="14" viewBox="0 0 40 20" fill="none" className="md:w-10 md:h-5">
                {s.dir === "right" ? (
                  <path
                    d="M2 10 L34 10 M26 4 L34 10 L26 16"
                    stroke={isMid ? fg : platinum}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M38 10 L6 10 M14 4 L6 10 L14 16"
                    stroke={isMid ? fg : platinum}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </div>
          );
        })}
      </div>
    );
  }
  // social grid
  return (
    <div className="absolute inset-[18px] md:inset-[30px] grid grid-cols-3 grid-rows-3 gap-1 md:gap-1.5">
      {Array.from({ length: 9 }).map((_, j) => {
        const isAccent = (j + Math.floor(j / 3)) % 3 === 0;
        return (
          <div
            key={j}
            className="rounded-[3px] md:rounded flex items-center justify-center"
            style={{ background: isAccent ? accent : "rgba(0,0,0,0.08)" }}
          >
            {isAccent && j !== 4 && (
              <div
                className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full"
                style={{ border: `1.5px solid ${fg}` }}
              />
            )}
            {j === 4 && (
              <div
                className="text-[9px] md:text-[11px] font-bold tracking-[0.4px] md:tracking-[0.5px]"
                style={{ color: fg, fontFamily: "ui-monospace, monospace" }}
              >
                FEST.
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function GraphicDesignPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <JsonLd data={servicePageJsonLd("graphic-design", GD_FAQ)} />
        {/* ─────── HERO ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-6 md:pt-10 pb-6">
          <div className="flex items-center gap-2 text-[11px] md:text-[13px] text-muted mb-4 md:mb-7">
            <Link href="/servicii" className="hover:text-accent transition-colors">
              servicii
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-foreground">graphic design</span>
          </div>
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ 07 · GRAPHIC DESIGN
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 md:gap-14 md:items-end">
            <h1 className="text-[42px] md:text-[124px] font-light leading-[0.95] md:leading-[0.88] tracking-[-1px] md:tracking-[-3px] m-0">
              identitate vizuală
              <br />
              <span className="font-bold">care te reprezintă</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light text-foreground leading-[1.6] m-0 md:pb-6">
              De la logo la sistem vizual complet. Plecăm de la cine ești, nu de
              la ce e la modă — și predăm o identitate pe care echipa ta o
              poate folosi singură ani la rând.
            </p>
          </div>
          <div className="relative mt-6 md:mt-12 h-[220px] md:h-[480px] rounded-[20px] md:rounded-[32px] overflow-hidden border-[1.5px] md:border-2 border-dark-card">
            <Image
              src="/images/hero-graphic.png"
              alt="graphic design"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
        </section>

        {/* ─────── CE PROIECTĂM — 6 SERVICES ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CE PROIECTĂM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-3 md:mb-4">
            șase teritorii de
            <br />
            <span className="font-bold">graphic design</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="text-[13px] md:text-[17px] font-light text-muted leading-[1.55] md:leading-[1.6] max-w-[720px] m-0 mb-6 md:mb-12">
            <span className="md:hidden">
              De la logo la signaletică, de la raport anual la post de
              Instagram — aceeași disciplină în orice context.
            </span>
            <span className="hidden md:inline">
              De la logo la signaletică, de la raport anual la post de
              Instagram. Aceeași disciplină — un sistem care funcționează în
              orice context, nu doar pe slide-ul de prezentare.
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {GD_SERVICES.map((d, i) => {
              const t = GD_CARD_THEMES[i];
              return (
                <div
                  key={d.n}
                  className="p-5 md:p-7 rounded-[18px] md:rounded-[22px] relative overflow-hidden flex flex-col gap-3 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-accent"
                  style={{
                    background: t.bg,
                    color: t.fg,
                    border: t.border ? `1.5px solid ${t.border}` : "none",
                  }}
                >
                  <div className="absolute top-4 right-4 md:top-[22px] md:right-[22px] opacity-85 scale-[0.78] md:scale-100 origin-top-right">
                    <GDCardShape i={i} color={t.shape} />
                  </div>
                  <div
                    className="text-[10px] md:text-[11px] tracking-[0.22em]"
                    style={{ color: t.mut }}
                  >
                    {d.n}
                  </div>
                  <div
                    className="text-[24px] md:text-[30px] font-normal leading-[1] md:leading-[0.95] tracking-[-0.4px] md:tracking-[-0.6px] mt-6 md:mt-9"
                    style={{ color: t.fg }}
                  >
                    {d.title}
                    <span className="md:hidden"> </span>
                    <br className="hidden md:inline" />
                    <span className="font-bold">{d.sub}</span>
                    <span className="text-accent">.</span>
                  </div>
                  <div
                    className="text-[12px] font-light tracking-[0.04em]"
                    style={{ color: t.mut }}
                  >
                    {d.short}
                  </div>
                  <div
                    className="text-[13px] md:text-[14px] font-light leading-[1.55] md:leading-[1.6]"
                    style={{ color: t.fg }}
                  >
                    {d.body}
                  </div>
                  <div
                    className="mt-auto pt-3 md:pt-4 text-[12px] flex items-center justify-between gap-2"
                    style={{ borderTop: `1px dashed ${t.divider}` }}
                  >
                    <div className="flex items-center gap-2 italic md:not-italic">
                      <span
                        className="text-accent not-italic"
                        style={{ fontSize: 14 }}
                      >
                        ↳
                      </span>
                      <span
                        className="md:italic"
                        style={{ color: t.mut }}
                      >
                        {d.when}
                      </span>
                    </div>
                    <span
                      className="shrink-0 text-[10px] md:text-[11px] font-medium tracking-[0.4px] md:tracking-[0.5px] px-2 md:px-2.5 py-[3px] md:py-1 rounded-md not-italic"
                      style={{
                        background: t.chipBg,
                        color: t.chipFg,
                        fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                      }}
                    >
                      {d.code}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─────── CUM LUCRĂM — PROCES 5 PAȘI ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CUM LUCRĂM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-5 md:mb-4">
            de la brief la
            <br />
            <span className="font-bold">identitate completă</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="hidden md:block text-[17px] font-light text-muted leading-[1.6] max-w-[720px] m-0 mb-16">
            Cinci pași, fiecare cu livrabile clare. Vezi direcțiile înainte să
            se atașeze cineva de o culoare, vezi sistemul înainte să ajungă la
            tipograf.
          </p>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden flex flex-col">
            {GD_PROCESS.map((p, i) => (
              <div key={p.n} className="flex gap-3.5 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-10 h-10 rounded-full bg-foreground text-accent text-[13px] font-bold flex items-center justify-center">
                    {p.n}
                    <span
                      className="absolute -top-1 -right-1.5 w-[18px] h-[18px] rounded-full bg-accent text-foreground text-[9px] font-bold flex items-center justify-center"
                      style={{ fontFamily: "ui-monospace, monospace" }}
                    >
                      {p.g}
                    </span>
                  </div>
                  {i < GD_PROCESS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-dark-card min-h-7 mt-1" />
                  )}
                </div>
                <div className={`pt-1 ${i < GD_PROCESS.length - 1 ? "pb-7" : ""}`}>
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
          <div className="hidden md:grid relative grid-cols-5 gap-[18px]">
            <div
              className="absolute top-7 left-[30px] right-[30px] border-t-2 border-dashed border-dark-card"
              aria-hidden
            />
            {GD_PROCESS.map((p) => (
              <div key={p.n} className="relative">
                <div className="relative w-14 h-14 rounded-full bg-foreground text-accent text-[18px] font-bold flex items-center justify-center mb-6">
                  {p.n}
                  <span
                    className="absolute -top-2 -right-2.5 w-[22px] h-[22px] rounded-full bg-accent text-foreground text-[11px] font-bold flex items-center justify-center"
                    style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace' }}
                  >
                    {p.g}
                  </span>
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

        {/* ─────── PRINCIPII ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CE NE INTERESEAZĂ
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-6 md:mb-12">
            două lucruri pe care nu le
            <br />
            <span className="font-bold">negociem</span>
            <span className="text-accent">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-6">
            {GD_PRINCIPLES.map((s, i) => {
              const dark = i === 0;
              const titleWords = s.title.split(" ");
              return (
                <div
                  key={s.code}
                  className={`p-6 md:p-10 rounded-[22px] md:rounded-[28px] ${
                    dark
                      ? "bg-dark text-platinum"
                      : "bg-platinum text-foreground border-[1.5px] md:border-2 border-dark-card"
                  }`}
                >
                  <div className="text-[10px] md:text-[11px] tracking-[0.22em] opacity-60 mb-3 md:mb-4">
                    PRINCIPIU · {s.code.toUpperCase()}
                  </div>
                  <div className="text-[22px] md:text-[36px] font-normal leading-[1] tracking-[-0.4px] md:tracking-[-0.8px] mb-3 md:mb-[18px]">
                    <span className="font-bold">{titleWords[0]}</span>
                    {titleWords.length > 1 && ` ${titleWords.slice(1).join(" ")}`}
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
              AI NEVOIE RAPID DE O IDENTITATE?
            </div>
            <h2 className="text-[32px] md:text-[72px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.8px] m-0 mb-4 md:mb-8 max-w-[1100px]">
              <span className="md:hidden">
                îți facem <span className="font-bold">logo + sistem minim</span> în trei săptămâni
                <span className="text-background">.</span>
              </span>
              <span className="hidden md:inline">
                îți facem <span className="font-bold">logo + sistem minim</span>
                <br />
                în trei săptămâni
                <span className="text-background">.</span>
              </span>
            </h2>
            <p className="text-[14px] md:text-[19px] font-normal text-foreground leading-[1.55] max-w-[760px] m-0 mb-5 md:mb-10 opacity-85">
              <span className="md:hidden">
                Logo, paletă, tipografie, două aplicații-cheie și un manual
                scurt. Suficient cât să pornești curat.
              </span>
              <span className="hidden md:inline">
                Logo, paletă, tipografie, două aplicații-cheie și un manual
                scurt. Suficient cât să pornești curat — fără să aștepți un
                proces complet de 3 luni.
              </span>
            </p>
            <div className="flex items-center gap-3.5 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-foreground text-platinum text-[14px] md:text-base font-normal whitespace-nowrap"
              >
                povestește-ne brandul <ArrowRight size={14} />
              </Link>
              <span className="hidden md:inline text-[14px] text-foreground/70">
                sau scrie la office@amorph.ro
              </span>
            </div>
          </section>
        </div>

        {/* ─────── PROIECTE RECENTE ─────── */}
        {SHOW_SERVICE_PORTFOLIO && (
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="flex items-end justify-between mb-6 md:mb-12 gap-8">
            <div>
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
                PROIECTE RECENTE
              </div>
              <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0">
                <span className="md:hidden">
                  ce am proiectat <span className="font-bold">anul ăsta</span>
                </span>
                <span className="hidden md:inline">
                  ce am proiectat
                  <br />
                  <span className="font-bold">anul ăsta</span>
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
            {GD_EXAMPLES.map((e, i) => (
              <div
                key={e.title}
                className="border-[1.5px] md:border-2 border-dark-card rounded-[18px] md:rounded-3xl overflow-hidden bg-platinum"
              >
                <div
                  className={`relative h-[200px] md:h-[320px] ${
                    i % 2 === 0 ? "bg-dark" : "bg-[#bdbdbd]"
                  }`}
                >
                  <ExampleVisual index={i} />
                  <span
                    className="absolute top-3 md:top-[18px] right-3 md:right-[18px] text-[10px] md:text-[11px] px-2.5 md:px-3 py-1 md:py-[5px] rounded-md bg-accent text-foreground font-medium tracking-[0.4px] md:tracking-[0.5px]"
                    style={{ fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace' }}
                  >
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
        )}

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
            <ServiciiFAQ items={GD_FAQ} />
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
                  Spune-ne despre brandul tău. Răspuns în 48h.
                </span>
                <span className="hidden md:inline">
                  Spune-ne despre brandul tău — o identitate nouă, un refresh,
                  un raport. Răspundem în 48h cu calendar, buget și pași.
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
            <Link
              href="/servicii/dezvoltare-web"
              className="relative bg-platinum rounded-[18px] md:rounded-3xl border-[1.5px] md:border-2 border-dark-card overflow-hidden grid grid-cols-[110px_1fr] md:grid-cols-[180px_1fr] transition-all duration-300 md:hover:-translate-y-0.5 md:hover:border-accent"
            >
              <div className="h-[110px] md:h-[180px] overflow-hidden relative">
                <Image
                  src="/images/service-dev.png"
                  alt="dezvoltare web"
                  fill
                  sizes="(max-width: 768px) 110px, 180px"
                  className="object-cover"
                />
              </div>
              <div className="px-4 md:px-8 py-3.5 md:py-7 flex flex-col justify-center">
                <div className="text-[20px] md:text-[30px] font-normal text-foreground leading-[0.95] tracking-[-0.3px] md:tracking-[-0.5px]">
                  dezvoltare
                  <span className="md:hidden"> </span>
                  <br className="hidden md:inline" />
                  <span className="font-bold">web</span>
                  <span className="text-accent">.</span>
                </div>
                <div className="mt-2 md:mt-3.5 flex items-center gap-1.5 md:gap-2 text-[12px] md:text-[14px] text-foreground">
                  <span>vezi serviciul</span>
                  <ArrowRight size={11} />
                </div>
              </div>
            </Link>
            <Link
              href="/servicii"
              className="relative bg-background rounded-[18px] md:rounded-3xl border-[1.5px] md:border-2 border-dashed border-dark-card overflow-hidden flex flex-col justify-center px-4 md:px-8 py-4 md:py-7 min-h-[110px] md:min-h-[184px] transition-all duration-300 md:hover:-translate-y-0.5 md:hover:border-accent"
            >
              <div className="text-[10px] md:text-[11px] tracking-[0.22em] text-muted mb-1.5 md:mb-2.5">
                SAU
              </div>
              <div className="text-[18px] md:text-[26px] font-normal text-foreground leading-[1.1] md:leading-[1.05] tracking-[-0.3px] md:tracking-[-0.4px]">
                vezi toate <span className="font-bold">serviciile</span>
                <span className="text-accent">.</span>
              </div>
              <div className="mt-2 md:mt-3.5 flex items-center gap-1.5 md:gap-2 text-[12px] md:text-[14px] text-foreground">
                <span>spre /servicii</span>
                <ArrowRight size={11} />
              </div>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
