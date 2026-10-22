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

export const metadata: Metadata = pageMetadata({
  title: "Dezvoltare web: site-uri, e-commerce, web apps",
  description: "Site-uri care chiar fac treabă: de la o pagină simplă până la platforme custom. Rapide, accesibile și ușor de întreținut.",
  path: "/servicii/dezvoltare-web",
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

const DEV_SERVICES = [
  {
    n: "01",
    code: "site",
    title: "site-uri",
    sub: "de prezentare",
    short: "landing, corporate, portofoliu, evenimente",
    body: "De la o singură pagină până la 30. Arhitectură de informație clară, vizual la cheie, viteză excelentă din prima zi. Optimizat pentru telefon înainte de orice altceva.",
    when: "când vrei să fii găsit și să convingi rapid",
  },
  {
    n: "02",
    code: "shop",
    title: "e-commerce",
    sub: "curat",
    short: "magazin, plăți, integrări reale",
    body: "Magazine pe Shopify, WooCommerce sau headless cu Stripe / Netopia / EuPlătesc. Coș rapid, checkout fără fricțiune, gestionare comenzi clar legată de stoc și curier.",
    when: "când vinzi direct și fiecare clic contează",
  },
  {
    n: "03",
    code: "app",
    title: "web apps",
    sub: "& dashboard-uri",
    short: "aplicații custom, instrumente interne",
    body: "Platforme cu autentificare, roluri, date și fluxuri proprii. Pentru echipe care au depășit Excel-ul și pentru produse care au nevoie de o interfață gândită nu copiată.",
    when: "când produsul are nevoie de logică, nu doar pagini",
  },
  {
    n: "04",
    code: "mvp",
    title: "prototipuri",
    sub: "& MVP-uri",
    short: "idei testate rapid, ipoteze validate",
    body: "Lansăm un prototip funcțional în 2 săptămâni. Suficient cât să-l arăți primilor utilizatori, să strângi feedback real și să decizi ce construiești pe bune după.",
    when: "când ai o idee și vrei să vezi dacă ține",
  },
  {
    n: "05",
    code: "care",
    title: "mentenanță",
    sub: "& optimizare",
    short: "performanță, accesibilitate, SEO tehnic",
    body: "Audituri și intervenții lunare pe site-uri existente. Reducem timpul de încărcare, reparăm probleme de accesibilitate, ridicăm scorurile Core Web Vitals — fără să rescriem totul.",
    when: "când site-ul tău merită mai mult decât are",
  },
  {
    n: "06",
    code: ".ro",
    title: "site-uri pentru",
    sub: "instituții publice",
    short: "primării, ONG-uri, proiecte civice",
    body: "Site-uri conforme cu cerințele de accesibilitate WCAG, structură de informație clară pentru cetățeni, secțiuni dedicate pentru transparență, achiziții, anunțuri și consultări publice.",
    when: "când serviciul public are nevoie de un site care chiar funcționează",
  },
];

const DEV_PROCESS = [
  {
    n: "01",
    t: "Discovery",
    d: "O săptămână de întrebări bune. Cine e utilizatorul, ce trebuie să facă, ce e succes, ce e blocaj. Plecăm cu un brief în care toți suntem de acord.",
  },
  {
    n: "02",
    t: "Wireframe",
    d: "Schițe în alb-negru cu fluxurile și paginile cheie. Decidem aici structura — înainte ca cineva să se atașeze de o culoare sau de un font.",
  },
  {
    n: "03",
    t: "Design",
    d: "Vizualul complet, în Figma, cu toate stările și breakpoint-urile. Tu vezi exact ce o să primești; noi vedem exact ce trebuie să construim.",
  },
  {
    n: "04",
    t: "Development",
    d: "Cod scris să dureze. Componente reutilizabile, performanță verificată la fiecare push, conținut editabil în CMS dacă ai cerut. Demo săptămânal.",
  },
  {
    n: "05",
    t: "Launch & Support",
    d: "Lansăm împreună, urmărim primele zile în date reale. Apoi rămânem disponibili — pentru mici corecții incluse sau pentru evoluții pe pachet lunar.",
  },
];

const PROCESS_GLYPHS = ["?", "□", "✦", "<>", "↗"];

const DEV_PRINCIPLES = [
  {
    code: "viteză",
    title: "rapid și accesibil",
    body: "Optimizăm pentru telefon, pentru rețele lente și pentru oameni care folosesc cititoare de ecran. Un site bun nu e doar frumos — e și sub o secundă pe 4G, și navigabil cu tastatura, și citibil cu lumina în ochi.",
    items: [
      "Core Web Vitals în verde",
      "WCAG AA, contrast verificat",
      "imagini optimizate automat",
      "fără cod inutil",
    ],
  },
  {
    code: "control",
    title: "site-ul rămâne al tău",
    body: "Tu deții codul, conținutul și domeniul. CMS configurat astfel încât tu (sau colegul tău de la marketing) să poată edita texte, imagini, articole — fără să suni programatorul. Documentație scrisă în limba ta, nu în limba noastră.",
    items: [
      "cont propriu pe hosting",
      "CMS editabil de oricine",
      "tutorial video personalizat",
      "cod în repo-ul tău",
    ],
  },
];

const DEV_FAQ: FaqItem[] = [
  {
    q: "Cât durează un site?",
    a: "Un site de prezentare cu 5–10 pagini durează între 4 și 8 săptămâni. Un e-commerce sau o aplicație ajunge la 3–6 luni. Un prototip MVP — 2 săptămâni. Cea mai mare parte a timpului e între tine și noi (decizii de conținut, feedback, validări) — partea de cod e relativ predictibilă. La prima conversație îți facem un calendar realist, cu marja inclusă.",
  },
  {
    q: "Cine găzduiește site-ul după lansare?",
    a: "De preferat, tu — pe contul tău. Te ajutăm să-l configurezi (Vercel, Netlify, hosting clasic, ce se potrivește). Așa nu ești dependent de noi și plătești doar costul real, nu un markup. Dacă preferi să se ocupe altcineva, oferim și hosting gestionat în pachetul lunar.",
  },
  {
    q: "Cum funcționează mentenanța?",
    a: "Două variante: pachet lunar fix (ore garantate pentru mici corecții, update-uri, monitorizare) sau intervenție la cerere, plătită pe oră. Recomandăm pachetul pentru proiecte active — preventiv e întotdeauna mai ieftin decât curativ. Lunar primești și un raport scurt cu ce s-a întâmplat.",
  },
  {
    q: "Pot edita singur conținutul?",
    a: "Da, asta e default-ul nostru. Toate site-urile vin cu un CMS în care editezi texte, imagini, articole, produse — fără să atingi cod. Pentru proiecte mai simple folosim Sanity sau Payload; pentru e-commerce, Shopify; pentru WordPress, Bricks sau ACF. Primești și un tutorial video făcut pentru site-ul tău.",
  },
  {
    q: "Faceți și SEO?",
    a: "Da, SEO tehnic e inclus în orice proiect — structură semantică, viteză, metadate, sitemap, schema.org, optimizare imagini. SEO de conținut (cuvinte cheie, articole, link-building) e o muncă continuă care merită făcută cu un specialist dedicat — putem să te punem în legătură cu cineva sau să lucrăm împreună pe pachet lunar.",
  },
  {
    q: "Ce se întâmplă dacă vreau modificări după lansare?",
    a: "Toate proiectele includ 30 de zile de mici ajustări post-lansare, fără cost suplimentar. După aceea, modificările mici intră în pachetul lunar de mentenanță (dacă ai unul) sau le facem la cerere. Pentru rescrieri mari sau funcții noi facem un mini-brief separat — mai bine clar de la început.",
  },
];

// Per-card color rhythm: [platinum, dark, platinum] / [accent, platinum, dark]
type CardTheme = {
  bgClass: string;
  textClass: string;
  mutedClass: string;
  borderClass: string;
  dividerColor: string;
  chipBgClass: string;
  chipTextClass: string;
  shapeColor: string;
  isDark: boolean;
};

const ACCENT = "#f6aa1c";
const DARK = "#2d2d2d";
const DARK_CARD = "#3a3a3a";

const DEV_CARD_THEMES: CardTheme[] = [
  {
    bgClass: "bg-platinum",
    textClass: "text-foreground",
    mutedClass: "text-muted",
    borderClass: "border-[1.5px] md:border-2 border-dark-card",
    dividerColor: DARK_CARD,
    chipBgClass: "bg-foreground",
    chipTextClass: "text-accent",
    shapeColor: ACCENT,
    isDark: false,
  },
  {
    bgClass: "bg-dark",
    textClass: "text-platinum",
    mutedClass: "text-platinum/55",
    borderClass: "",
    dividerColor: "rgba(255,255,255,0.15)",
    chipBgClass: "bg-accent",
    chipTextClass: "text-foreground",
    shapeColor: ACCENT,
    isDark: true,
  },
  {
    bgClass: "bg-platinum",
    textClass: "text-foreground",
    mutedClass: "text-muted",
    borderClass: "border-[1.5px] md:border-2 border-dark-card",
    dividerColor: DARK_CARD,
    chipBgClass: "bg-foreground",
    chipTextClass: "text-accent",
    shapeColor: DARK,
    isDark: false,
  },
  {
    bgClass: "bg-accent",
    textClass: "text-foreground",
    mutedClass: "text-foreground/65",
    borderClass: "",
    dividerColor: "rgba(42,32,24,0.25)",
    chipBgClass: "bg-foreground",
    chipTextClass: "text-accent",
    shapeColor: DARK,
    isDark: false,
  },
  {
    bgClass: "bg-platinum",
    textClass: "text-foreground",
    mutedClass: "text-muted",
    borderClass: "border-[1.5px] md:border-2 border-dark-card",
    dividerColor: DARK_CARD,
    chipBgClass: "bg-foreground",
    chipTextClass: "text-accent",
    shapeColor: ACCENT,
    isDark: false,
  },
  {
    bgClass: "bg-dark",
    textClass: "text-platinum",
    mutedClass: "text-platinum/55",
    borderClass: "",
    dividerColor: "rgba(255,255,255,0.15)",
    chipBgClass: "bg-accent",
    chipTextClass: "text-foreground",
    shapeColor: ACCENT,
    isDark: true,
  },
];

function DevCardShape({ i, color }: { i: number; color: string }) {
  const shapes = [
    <g
      key="s0"
      stroke={color}
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    >
      <rect x="6" y="8" width="48" height="8" rx="2" />
      <rect x="6" y="22" width="32" height="8" rx="2" />
      <rect x="6" y="36" width="40" height="8" rx="2" />
    </g>,
    <g
      key="s1"
      stroke={color}
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18 L14 14 a8 8 0 0 1 16 0 L30 18" />
      <path d="M10 18 L34 18 L36 44 L8 44 Z" />
    </g>,
    <g
      key="s2"
      stroke={color}
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    >
      <rect x="6" y="8" width="52" height="36" rx="3" />
      <line x1="20" y1="8" x2="20" y2="44" />
      <line x1="6" y1="16" x2="58" y2="16" />
    </g>,
    <g
      key="s3"
      stroke={color}
      strokeWidth="1.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M32 6 L36 22 L52 26 L36 30 L32 46 L28 30 L12 26 L28 22 Z" />
    </g>,
    <g
      key="s4"
      stroke={color}
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
    >
      <circle cx="22" cy="26" r="10" />
      <circle cx="42" cy="26" r="6" />
      <line x1="22" y1="12" x2="22" y2="16" />
      <line x1="22" y1="36" x2="22" y2="40" />
      <line x1="8" y1="26" x2="12" y2="26" />
      <line x1="32" y1="26" x2="36" y2="26" />
    </g>,
    <g
      key="s5"
      stroke={color}
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8 L12 46" />
      <path d="M12 10 L42 10 L36 18 L42 26 L12 26 Z" />
    </g>,
  ];
  return (
    <svg
      width="64"
      height="52"
      viewBox="0 0 64 52"
      style={{ display: "block" }}
      aria-hidden
    >
      {shapes[i]}
    </svg>
  );
}

const DEV_RELATED = {
  slug: "graphic-design",
  title: "graphic",
  subtitle: "design",
  image: "/images/service-grafica.png",
};

export default function DezvoltareWebPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <JsonLd data={servicePageJsonLd("dezvoltare-web", DEV_FAQ)} />
        {/* ─────── HERO ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-6 md:pt-10 pb-6">
          <div className="flex items-center gap-2 text-[11px] md:text-[13px] text-muted mb-4 md:mb-7">
            <Link
              href="/servicii"
              className="hover:text-accent transition-colors"
            >
              servicii
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-foreground">dezvoltare web</span>
          </div>
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ 06 · DEZVOLTARE WEB
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 md:gap-14 md:items-end">
            <h1 className="text-[42px] md:text-[124px] font-light leading-[0.95] md:leading-[0.88] tracking-[-1px] md:tracking-[-3px] m-0">
              site-uri care
              <br />
              <span className="font-bold">chiar fac treabă</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light text-foreground leading-[1.6] m-0 md:pb-6">
              De la o pagină simplă până la platforme custom. Construim pe
              încet, lansăm rapid și rămânem aproape — ca să nu te trezești
              singur cu un site care nu mai merge.
            </p>
          </div>
          <div className="relative mt-6 md:mt-12 h-[220px] md:h-[480px] rounded-[20px] md:rounded-[32px] overflow-hidden border-[1.5px] md:border-2 border-dark-card">
            <Image
              src="/images/hero-dev.png"
              alt="dezvoltare web"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
        </section>

        {/* ─────── CE CONSTRUIM — 6 CARDS ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CE CONSTRUIM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-3 md:mb-4">
            șase tipuri de
            <br />
            <span className="font-bold">proiecte web</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="text-[13px] md:text-[17px] font-light text-muted leading-[1.55] md:leading-[1.6] max-w-[720px] m-0 mb-6 md:mb-12">
            <span className="md:hidden">
              Diferite ca scară, plecate de la aceeași disciplină: arhitectură
              clară și cod pe care îl poți întreține.
            </span>
            <span className="hidden md:inline">
              Diferite ca scară și complexitate, dar plecate de la aceeași
              disciplină: arhitectură clară, design gândit pentru oameni, cod
              pe care îl poți întreține.
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {DEV_SERVICES.map((d, i) => {
              const t = DEV_CARD_THEMES[i];
              return (
                <div
                  key={d.n}
                  className={`relative overflow-hidden p-5 md:p-7 rounded-[18px] md:rounded-[22px] flex flex-col gap-3 ${t.bgClass} ${t.textClass} ${t.borderClass} transition-all duration-300 md:hover:-translate-y-1 md:hover:border-accent`}
                >
                  <div className="absolute top-4 right-4 md:top-5 md:right-5 opacity-85 scale-[0.78] md:scale-100 origin-top-right">
                    <DevCardShape i={i} color={t.shapeColor} />
                  </div>
                  <div
                    className={`text-[10px] md:text-[11px] tracking-[0.22em] ${t.mutedClass}`}
                  >
                    {d.n}
                  </div>
                  <div
                    className={`text-[24px] md:text-[30px] font-normal leading-[1] md:leading-[0.95] tracking-[-0.4px] md:tracking-[-0.6px] mt-7 md:mt-8`}
                  >
                    {d.title}
                    <span className="md:hidden"> </span>
                    <br className="hidden md:inline" />
                    <span className="font-bold">{d.sub}</span>
                    <span className="text-accent">.</span>
                  </div>
                  <div
                    className={`text-[12px] font-light tracking-[0.04em] ${t.mutedClass}`}
                  >
                    {d.short}
                  </div>
                  <div
                    className={`text-[13px] md:text-[14px] font-light leading-[1.55] md:leading-[1.6] ${
                      t.isDark ? "opacity-90" : ""
                    }`}
                  >
                    {d.body}
                  </div>
                  <div
                    className="mt-auto pt-3 md:pt-[18px] flex items-center justify-between gap-2 text-[12px]"
                    style={{
                      borderTop: `1px dashed ${t.dividerColor}`,
                    }}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-accent text-[14px] shrink-0">↳</span>
                      <span
                        className={`italic ${t.mutedClass} truncate`}
                      >
                        {d.when}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] md:text-[11px] px-2.5 py-1 rounded-md font-medium tracking-[0.4px] md:tracking-[0.5px] font-mono shrink-0 ${t.chipBgClass} ${t.chipTextClass}`}
                    >
                      {d.code}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─────── PROCESUL ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CUM LUCRĂM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-5 md:mb-4">
            de la brief la
            <br />
            <span className="font-bold">site live</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="hidden md:block text-[17px] font-light text-muted leading-[1.6] max-w-[720px] m-0 mb-16">
            Cinci pași, fiecare cu livrabile clare. Te ținem la curent
            săptămânal, vezi progresul în timp real, nu te trezești cu surprize
            la lansare.
          </p>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden flex flex-col">
            {DEV_PROCESS.map((p, i) => (
              <div key={p.n} className="flex gap-3.5 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-10 h-10 rounded-full bg-foreground text-accent text-[13px] font-bold flex items-center justify-center">
                    {p.n}
                    <span className="absolute -top-1 -right-1.5 w-[18px] h-[18px] rounded-full bg-accent text-foreground text-[9px] font-bold font-mono flex items-center justify-center">
                      {PROCESS_GLYPHS[i]}
                    </span>
                  </div>
                  {i < DEV_PROCESS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-dark-card min-h-7 mt-1" />
                  )}
                </div>
                <div
                  className={`pt-1 ${
                    i < DEV_PROCESS.length - 1 ? "pb-7" : ""
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
            {DEV_PROCESS.map((p, i) => (
              <div key={p.n} className="relative">
                <div className="relative w-14 h-14 rounded-full bg-foreground text-accent text-[18px] font-bold flex items-center justify-center mb-6">
                  {p.n}
                  <span className="absolute -top-2 -right-2.5 w-[22px] h-[22px] rounded-full bg-accent text-foreground text-[11px] font-bold font-mono flex items-center justify-center">
                    {PROCESS_GLYPHS[i]}
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
            <span className="md:hidden">
              două lucruri pe care nu le{" "}
              <span className="font-bold">negociem</span>
              <span className="text-accent">.</span>
            </span>
            <span className="hidden md:inline">
              două lucruri pe care nu le
              <br />
              <span className="font-bold">negociem</span>
              <span className="text-accent">.</span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-6">
            {DEV_PRINCIPLES.map((s, i) => {
              const dark = i === 0;
              const titleWords = s.title.split(" ");
              const boldPart = titleWords[0];
              const restPart = titleWords.slice(1).join(" ");
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
                    PRINCIPIU · {s.code.toUpperCase()}
                  </div>
                  <div className="text-[22px] md:text-[36px] font-normal leading-[1] tracking-[-0.4px] md:tracking-[-0.8px] mb-3 md:mb-[18px]">
                    <span className="font-bold">{boldPart}</span>
                    {restPart && ` ${restPart}`}
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
              AI O IDEE PE CARE VREI S-O VEZI?
            </div>
            <h2 className="text-[32px] md:text-[72px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.8px] m-0 mb-4 md:mb-8 max-w-[1100px]">
              <span className="md:hidden">
                îți facem un{" "}
                <span className="font-bold">prototip funcțional</span> în două
                săptămâni
                <span className="text-background">.</span>
              </span>
              <span className="hidden md:inline">
                îți facem un{" "}
                <span className="font-bold">prototip funcțional</span>
                <br />
                în două săptămâni
                <span className="text-background">.</span>
              </span>
            </h2>
            <p className="text-[14px] md:text-[19px] font-normal text-foreground leading-[1.55] max-w-[760px] m-0 mb-5 md:mb-10 opacity-85">
              <span className="md:hidden">
                Suficient cât să-l arăți utilizatorilor și să afli dacă merită
                construit în întregime. Fără angajament pe restul.
              </span>
              <span className="hidden md:inline">
                Suficient cât să-l arăți primilor utilizatori, să strângi
                feedback real și să afli dacă merită construit în întregime.
                Fără angajament pe restul proiectului — doar claritate.
              </span>
            </p>
            <div className="flex items-center gap-3.5 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-foreground text-platinum text-[14px] md:text-base font-normal whitespace-nowrap"
              >
                povestește-ne ideea <ArrowRight size={14} />
              </Link>
              <span className="hidden md:inline text-[14px] text-foreground/70">
                sau scrie la office@amorph.ro
              </span>
            </div>
          </section>
        </div>

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
            <ServiciiFAQ items={DEV_FAQ} />
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
                  Spune-ne ce vrei să construiești. Răspuns în 48h.
                </span>
                <span className="hidden md:inline">
                  Spune-ne ce vrei să construiești — o pagină, un magazin, un
                  produs. Răspundem în 48h cu calendar, buget și pași.
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
              href={`/servicii/${DEV_RELATED.slug}`}
              className="relative bg-platinum rounded-[18px] md:rounded-3xl border-[1.5px] md:border-2 border-dark-card overflow-hidden grid grid-cols-[110px_1fr] md:grid-cols-[180px_1fr] transition-all duration-300 md:hover:-translate-y-0.5 md:hover:border-accent"
            >
              <div className="h-[110px] md:h-[180px] overflow-hidden relative">
                <Image
                  src={DEV_RELATED.image}
                  alt={DEV_RELATED.title}
                  fill
                  sizes="(max-width: 768px) 110px, 180px"
                  className="object-cover"
                />
              </div>
              <div className="px-4 md:px-8 py-3.5 md:py-7 flex flex-col justify-center">
                <div className="text-[20px] md:text-[30px] font-normal text-foreground leading-[0.95] tracking-[-0.3px] md:tracking-[-0.5px]">
                  {DEV_RELATED.title}
                  <span className="md:hidden"> </span>
                  <br className="hidden md:inline" />
                  <span className="font-bold">{DEV_RELATED.subtitle}</span>
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
              <div className="text-[10px] md:text-[11px] tracking-[0.22em] text-muted mb-2 md:mb-2.5">
                SAU
              </div>
              <div className="text-[18px] md:text-[26px] font-normal text-foreground leading-[1.05] tracking-[-0.3px] md:tracking-[-0.4px]">
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
