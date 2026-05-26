import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmorphBackdrop from "@/components/ui/AmorphBackdrop";
import ServiciiFAQ from "@/components/sections/ServiciiFAQ";
import type { FaqItem } from "@/lib/services";
import { SHOW_SERVICE_PORTFOLIO } from "@/lib/flags";

export const metadata: Metadata = {
  title: "Design interior — spații în care recunoști ceva",
  description:
    "Amenajări rezidențiale, office, mobilier custom și pop-up. Lumină, materiale și un traseu prin spațiu — gândite să rămână calme și peste zece ani.",
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

type CardTheme = {
  /** Tailwind classes for background & border */
  surface: string;
  fg: string;
  mut: string;
  divider: string;
  chip: string;
  shape: string; // glyph stroke colour (CSS var)
  isDark: boolean;
};

const THEMES: CardTheme[] = [
  {
    surface: "bg-platinum border-[1.5px] md:border-2 border-dark-card",
    fg: "text-foreground",
    mut: "text-muted",
    divider: "border-dark-card",
    chip: "bg-foreground text-accent",
    shape: "var(--accent)",
    isDark: false,
  },
  {
    surface: "bg-dark border-0",
    fg: "text-platinum",
    mut: "text-platinum/55",
    divider: "border-white/15",
    chip: "bg-accent text-foreground",
    shape: "var(--accent)",
    isDark: true,
  },
  {
    surface: "bg-platinum border-[1.5px] md:border-2 border-dark-card",
    fg: "text-foreground",
    mut: "text-muted",
    divider: "border-dark-card",
    chip: "bg-foreground text-accent",
    shape: "var(--dark)",
    isDark: false,
  },
  {
    surface: "bg-accent border-0",
    fg: "text-foreground",
    mut: "text-foreground/65",
    divider: "border-foreground/20",
    chip: "bg-foreground text-accent",
    shape: "var(--dark)",
    isDark: false,
  },
  {
    surface: "bg-platinum border-[1.5px] md:border-2 border-dark-card",
    fg: "text-foreground",
    mut: "text-muted",
    divider: "border-dark-card",
    chip: "bg-foreground text-accent",
    shape: "var(--accent)",
    isDark: false,
  },
  {
    surface: "bg-dark border-0",
    fg: "text-platinum",
    mut: "text-platinum/55",
    divider: "border-white/15",
    chip: "bg-accent text-foreground",
    shape: "var(--accent)",
    isDark: true,
  },
];

const ID_SERVICES = [
  {
    n: "01",
    code: "home",
    title: "rezidențial",
    sub: "apartamente & case",
    short: "cum locuiești, înainte de cum arată",
    body: "Pornim de la felul în care îți bei cafeaua dimineața și ajungem la planul de mobilier. Apartamente și case unde fiecare cameră e gândită pentru ritmul tău — nu pentru un randament estetic pe Instagram.",
    when: "când spațiul e gata, dar nu te primește încă",
  },
  {
    n: "02",
    code: "premium",
    title: "rezidențial",
    sub: "premium",
    short: "case & vile cu detalii croite",
    body: "Pentru locuințe unde alegerea unei mânere de ușă durează cât trei conversații. Lucrăm cu artizani, finisaje croite, sisteme tehnice integrate — și cu un calendar pe măsură, fiindcă proiectele bune nu se grăbesc.",
    when: "când vrei un spațiu care nu se mai repetă altundeva",
  },
  {
    n: "03",
    code: "office",
    title: "office &",
    sub: "spații de lucru",
    short: "birouri în care se respiră",
    body: "Open space-uri care nu obosesc, săli de meeting cu lumină corectă, zone de pauză care chiar funcționează. Începem cu cum lucrează echipa ta — câți oameni, ce moduri de concentrare, când se aglomerează — și de acolo iese planul.",
    when: "când biroul tău a depășit faza de „panouri și fotolii”",
  },
  {
    n: "04",
    code: "space",
    title: "consultanță",
    sub: "& space planning",
    short: "doar planul, fără execuție",
    body: "Vii cu un spațiu existent, plecăm cu un plan clar: ce ziduri rămân, unde merge fiecare funcție, ce iluminat ai nevoie, ce mobilier. Îți predăm documentația — execuția o iei cu echipa ta sau cu altcineva, în ritmul tău.",
    when: "când vrei doar gândirea, nu și șantierul",
  },
  {
    n: "05",
    code: "furn",
    title: "mobilier",
    sub: "custom",
    short: "desenat și produs pe măsură",
    body: "Bibliotecă pentru un perete imposibil. O masă pe care s-o moștenească nepoții. Un dressing care intră fix sub mansardă. Desenăm, alegem lemnul, supraveghem atelierul — și ajunge la tine montat, nu în 14 cutii de carton.",
    when: "când nu există nimic în magazine care să se potrivească",
  },
  {
    n: "06",
    code: "pop-up",
    title: "amenajări",
    sub: "temporare",
    short: "pop-up, standuri, evenimente",
    body: "Trei zile la un târg, două luni într-un mall, o săptămână în holul unei clădiri. Construcții ușoare, gândite să fie ridicate și demontate fără urmă — dar cu același grad de atenție la lumină, materiale și traseu ca într-un proiect permanent.",
    when: "când spațiul există doar pentru un anumit timp",
  },
];

const ID_PROCESS = [
  {
    n: "01",
    glyph: "⌖",
    t: "Vizită & măsurători",
    d: "Venim în spațiu, măsurăm, ascultăm. Cum cade lumina la 10 dimineața, ce se aude prin fereastra de la sud, pe ce drum mergi noaptea la baie. Ridicăm releveul exact și plecăm cu mai multe întrebări decât răspunsuri — deocamdată.",
  },
  {
    n: "02",
    glyph: "◐",
    t: "Moodboard",
    d: "Nu un Pinterest board. Două direcții cu lumină, materiale, atmosferă și o explicație pentru fiecare alegere. Le punem alături, le simți în mână (texturi reale, mostre de finisaj) și alegi una. Apoi nu mai privim înapoi.",
  },
  {
    n: "03",
    glyph: "⬚",
    t: "3D & planuri",
    d: "Direcția devine spațiu: planuri de mobilier, secțiuni, randări fotorealiste pentru zonele-cheie. Vezi camera de la ușă, de pe canapea, la 9 seara. Cele trei runde de feedback se aplică aici — structurat, nu „mai cald”.",
  },
  {
    n: "04",
    glyph: "✧",
    t: "Detalii execuție",
    d: "Proiectul tehnic: planuri de execuție, scheme electrice, sanitar, ventilație, liste de materiale și mobilier, fișe pentru tâmplărie custom. Predăm tot într-un singur dosar, pe care orice echipă bună de execuție îl poate citi singură.",
  },
  {
    n: "05",
    glyph: "↗",
    t: "Asistență șantier",
    d: "Mergem la site săptămânal sau la repere importante (demolări, finisaje, montaj mobilier). Răspundem rapid când apare o decizie pe loc. Continuăm până la mutare — și mai stăm o lună după, pentru reglajele care apar abia când spațiul e locuit.",
  },
];

const ID_PRINCIPLES = [
  {
    code: "buget",
    title: "buget transparent",
    body: "Pe primul slide al ofertei vezi tot: onorariu, costuri estimate de finisaje, mobilier, manoperă, marja de neprevăzut. Nimic nu apare „pe drum”. Când propunem un material scump, îți spunem și o variantă de două ori mai ieftină care arată aproape la fel — și de ce am ales-o pe cea scumpă. Decizia rămâne la tine.",
    items: [
      "ofertă defalcată pe categorii, nu pe „total proiect”",
      "estimări de materiale cu margini realiste",
      "alternative la fiecare alegere costisitoare",
      "fără surprize în factura finală",
    ],
  },
  {
    code: "real",
    title: "execuție realistă",
    body: "Gândim de la început ce poate face echipa ta de execuție — sau echipa cu care lucrezi local. Nu desenăm îmbinări care există doar în Italia, nu impunem un parchet care vine în șase luni dacă te muți peste trei. Frumusețea reală e în ceea ce poate fi construit, nu în randări.",
    items: [
      "alegeri ancorate în furnizori locali",
      "detalii pe care meseriașii le pot citi",
      "timing aliniat cu disponibilitatea reală",
      "plan B pentru ce nu se găsește la timp",
    ],
  },
];

const ID_EXAMPLES = [
  { tag: "rezidențial", title: "Apartament Cotroceni", meta: "78 mp · refacere completă, 4 luni" },
  { tag: "office", title: "Birou agenție digitală", meta: "240 mp · open space + 3 săli, 5 luni" },
  { tag: "mobilier", title: "Bibliotecă pe perete oblic", meta: "stejar masiv · 4.2 × 2.8 m" },
  { tag: "pop-up", title: "Stand brand local · târg", meta: "24 mp · concept demontabil, 3 zile" },
];

const ID_FAQ: FaqItem[] = [
  {
    q: "Cât durează un proiect de amenajare completă?",
    a: "Un apartament rezidențial complet — concept, proiect tehnic, asistență șantier până la mutare — durează în medie 4–7 luni. O casă de 200+ mp sau un birou cu mai multe zone — 6–10 luni. Consultanță & space planning fără execuție: 4–8 săptămâni. La prima conversație îți facem un calendar realist, cu marja de feedback inclusă și cu reperele de pe șantier (care, sincer, sunt cele care decid finalul).",
  },
  {
    q: "Câte runde de revizii sunt incluse?",
    a: "Trei runde structurate pe direcția aleasă, după moodboard. „Structurat” înseamnă că ne așezăm o oră împreună, treci prin proiect cu noi și notăm toate observațiile o singură dată — nu „încă o idee” peste două săptămâni. Dacă schimbi direcția fundamental după moodboard (lucru care se întâmplă rar, dar se întâmplă), reluăm faza de concept cu un cost suplimentar discutat transparent, niciodată „strecurat” în finalul proiectului.",
  },
  {
    q: "Lucrați și cu execuția sau doar cu proiectul?",
    a: "Amândouă, separat. Putem livra doar proiectul tehnic — îți predăm dosarul complet, îl iei la orice echipă de execuție de încredere. Sau coordonăm noi întreaga execuție: lucrăm cu meșteri cu care colaborăm de ani, ținem calendarul, facem recepțiile, gestionăm comenzile de materiale. La prima ofertă alegi tu varianta — nu vine la pachet automat.",
  },
  {
    q: "Lucrați cu bugetul meu sau îmi spuneți voi cât costă?",
    a: "Plecăm de la bugetul tău, mereu. La prima conversație ne spui în ce intervale te încadrezi (sau, dacă nu știi, te ajutăm cu repere reale pe metru pătrat în zona ta). De acolo construim înăuntru, nu în afară. Dacă bugetul tău chiar nu poate susține ce ai cerut, îți spunem onest la prima ofertă — nu după ce ai semnat și ne-am angajat amândoi.",
  },
  {
    q: "Ce stiluri abordați? Sunteți „modern”, „clasic”, „scandinav”?",
    a: "Nu lucrăm pe etichete. Plecăm de la tine, de la spațiul existent, de la lumina lui, de la felul în care locuiești — și iese ceva care nu se încadrează curat în niciun stil de pe Pinterest. Dacă ai o preferință puternică pentru o direcție (mid-century, brutalist, japandi, orice), o ascultăm și o filtrăm prin context. Dacă nu ai, e perfect — atunci e treaba noastră să propunem.",
  },
  {
    q: "Putem începe doar cu o consultanță scurtă, fără angajament?",
    a: "Da — chiar recomandăm. Avem un format de audit interior + plan de optimizare livrat în 7 zile (cel din banda galbenă de mai sus). Vii cu apartamentul tău existent, mergem o dată în spațiu, primești un document scurt cu ce ar trebui schimbat, în ce ordine, cu ce buget orientativ. Dacă după asta vrei proiect complet, costul auditului se scade din onorariu. Dacă nu, ai plecat cu un plan oricum.",
  },
];

// ─── Architectural glyphs for the 6 sub-service cards ─────────────────────
function IDCardShape({ i, color }: { i: number; color: string }) {
  const common = {
    stroke: color,
    strokeWidth: 1.6,
    fill: "none" as const,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const shapes = [
    // 01 rezidențial — casă simplă
    <g key="s0" {...common}>
      <path d="M8 24 L32 8 L56 24" />
      <path d="M14 22 L14 46 L50 46 L50 22" />
      <path d="M28 46 L28 32 L36 32 L36 46" />
      <line x1="32" y1="34" x2="32" y2="42" />
    </g>,
    // 02 premium — vilă cu coloane
    <g key="s1" {...common}>
      <path d="M4 22 L32 8 L60 22 Z" />
      <line x1="6" y1="24" x2="58" y2="24" />
      <line x1="14" y1="24" x2="14" y2="46" />
      <line x1="24" y1="24" x2="24" y2="46" />
      <line x1="40" y1="24" x2="40" y2="46" />
      <line x1="50" y1="24" x2="50" y2="46" />
      <line x1="4" y1="48" x2="60" y2="48" />
    </g>,
    // 03 office — birou cu lampă & laptop
    <g key="s2" {...common}>
      <path d="M8 38 L56 38 L52 46 L12 46 Z" />
      <line x1="8" y1="38" x2="56" y2="38" />
      <rect x="30" y="26" width="20" height="12" rx="1" />
      <path d="M16 38 L16 26 L20 22 L24 26 L24 30" />
      <circle cx="20" cy="22" r="2.5" />
    </g>,
    // 04 space planning — plan de etaj
    <g key="s3" {...common}>
      <rect x="6" y="8" width="52" height="38" />
      <line x1="30" y1="8" x2="30" y2="28" />
      <line x1="30" y1="28" x2="58" y2="28" />
      <line x1="6" y1="32" x2="30" y2="32" />
      <path d="M14 8 L14 14" />
      <path d="M40 28 L40 22" />
    </g>,
    // 05 mobilier — scaun lateral
    <g key="s4" {...common}>
      <path d="M16 10 L16 32" />
      <path d="M16 32 L42 32" />
      <path d="M16 32 L16 46" />
      <path d="M42 32 L46 46" />
      <path d="M22 32 L24 46" />
      <path d="M22 24 L42 24" />
    </g>,
    // 06 pop-up — stand modular
    <g key="s5" {...common}>
      <path d="M6 14 L32 6 L58 14" />
      <path d="M10 14 L10 46 L54 46 L54 14" />
      <line x1="10" y1="22" x2="54" y2="22" />
      <line x1="32" y1="22" x2="32" y2="46" />
      <line x1="20" y1="22" x2="20" y2="32" />
      <line x1="20" y1="32" x2="32" y2="32" />
    </g>,
  ];
  return (
    <svg width="64" height="52" viewBox="0 0 64 52" className="block">
      {shapes[i]}
    </svg>
  );
}

// ─── Project example placeholders (server-rendered SVG) ───────────────────
function ExFloorplan() {
  const accentRoom = 2;
  return (
    <div className="absolute inset-6 md:inset-[30px] grid grid-cols-[2fr_1.4fr_1fr] grid-rows-[1.4fr_1fr] gap-1.5">
      {[0, 1, 2, 3, 4, 5].map((j) => {
        const isAccent = j === accentRoom;
        const span = j === 0 ? "col-span-2" : j === 4 ? "col-span-2" : "";
        return (
          <div
            key={j}
            className={`${span} rounded relative ${
              isAccent
                ? "bg-accent border-[1.5px] border-accent"
                : "bg-white/[0.06] border-[1.5px] border-white/[0.18]"
            }`}
          >
            {isAccent && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[22px] h-[22px] rounded-full border-2 border-foreground" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ExMoodboard() {
  const swatches = [
    { c: "#7d5a3c", label: "stejar", dark: false },
    { c: "#c8b89a", label: "in", dark: false },
    { c: "#4a4540", label: "fier", dark: true },
    { c: "var(--accent)", label: "cupru", dark: false },
    { c: "#9b8f80", label: "piatră", dark: false },
    { c: "#2a2520", label: "walnut", dark: true },
  ];
  return (
    <div className="absolute inset-5 md:inset-6 grid grid-cols-3 grid-rows-2 gap-2 md:gap-2.5">
      {swatches.map((s, j) => (
        <div
          key={j}
          className="rounded-md relative p-2.5 flex flex-col justify-end shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          style={{ background: s.c }}
        >
          <div
            className="text-[10px] tracking-[0.22em] uppercase font-mono"
            style={{ color: s.dark ? "rgba(255,255,255,0.85)" : "var(--foreground)" }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function ExFurniture() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-6 md:gap-8 px-8 md:px-10 pb-8 md:pb-10">
      <svg width="70" height="130" viewBox="0 0 100 180" fill="none" className="md:w-[100px] md:h-[180px]">
        <path d="M50 8 L34 38 L66 38 Z" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
        <line x1="50" y1="38" x2="50" y2="178" stroke="var(--accent)" strokeWidth="2" />
        <ellipse cx="50" cy="178" rx="14" ry="3" stroke="var(--accent)" strokeWidth="2" fill="none" />
      </svg>
      <svg width="115" height="120" viewBox="0 0 160 170" fill="none" className="md:w-[160px] md:h-[170px]">
        <line x1="10" y1="60" x2="150" y2="60" stroke="var(--platinum)" strokeWidth="3" strokeLinecap="round" />
        <line x1="22" y1="60" x2="26" y2="168" stroke="var(--platinum)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="138" y1="60" x2="134" y2="168" stroke="var(--platinum)" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="64" y="44" width="32" height="16" stroke="var(--platinum)" strokeWidth="2" fill="none" />
      </svg>
      <svg width="70" height="130" viewBox="0 0 100 180" fill="none" className="md:w-[100px] md:h-[180px]">
        <line x1="28" y1="20" x2="28" y2="90" stroke="var(--platinum)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="90" x2="80" y2="90" stroke="var(--platinum)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="90" x2="32" y2="170" stroke="var(--platinum)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="80" y1="90" x2="84" y2="170" stroke="var(--platinum)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="36" y1="58" x2="76" y2="58" stroke="var(--platinum)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ExPopup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="200" height="170" viewBox="0 0 260 220" fill="none" className="md:w-[260px] md:h-[220px]">
        <path d="M40 180 L130 210 L220 180 L130 150 Z" stroke="rgba(0,0,0,0.4)" strokeWidth="2" fill="rgba(0,0,0,0.06)" />
        <path d="M70 80 L130 110 L130 180 L70 150 Z" stroke="var(--foreground)" strokeWidth="2" fill="var(--accent)" fillOpacity="0.4" />
        <path d="M130 110 L190 80 L190 150 L130 180 Z" stroke="var(--foreground)" strokeWidth="2" fill="var(--accent)" />
        <path d="M70 80 L130 50 L190 80 L130 110 Z" stroke="var(--foreground)" strokeWidth="2" fill="rgba(0,0,0,0.06)" />
        <path d="M50 50 L130 20 L210 50 L130 60 Z" stroke="var(--foreground)" strokeWidth="1.8" fill="rgba(0,0,0,0.12)" />
        <rect x="140" y="120" width="36" height="24" stroke="var(--foreground)" strokeWidth="1.5" fill="rgba(255,255,255,0.4)" />
      </svg>
    </div>
  );
}

const EXAMPLE_VIZ = [ExFloorplan, ExMoodboard, ExFurniture, ExPopup];

export default function DesignInteriorPage() {
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
            <span className="text-foreground">design interior</span>
          </div>
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ 04 · DESIGN INTERIOR
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 md:gap-14 md:items-end">
            <h1 className="text-[42px] md:text-[124px] font-light leading-[0.95] md:leading-[0.88] tracking-[-1px] md:tracking-[-3px] m-0">
              spații în care
              <br />
              <span className="font-bold">recunoști ceva</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light text-foreground leading-[1.6] m-0 md:pb-6">
              Lumina, materia, traseul tău prin casă. Gândim interioare care nu
              seamănă cu nimic văzut, fiindcă pleacă de la tine — și rămân la
              fel de calme și peste zece ani.
            </p>
          </div>
          <div className="relative mt-6 md:mt-12 h-[220px] md:h-[480px] rounded-[20px] md:rounded-[32px] overflow-hidden border-[1.5px] md:border-2 border-dark-card">
            <Image
              src="/images/hero-interior.png"
              alt="design interior"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
        </section>

        {/* ─────── 6 SUB-SERVICII ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CE PROIECTĂM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-3 md:mb-4">
            șase feluri de a
            <br />
            <span className="font-bold">lucra cu spațiul</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="text-[13px] md:text-[17px] font-light text-muted leading-[1.55] md:leading-[1.6] max-w-[720px] m-0 mb-6 md:mb-12">
            <span className="md:hidden">
              De la o cameră până la un birou cu trei etaje. Aceeași grijă
              pentru lumină, materiale și ritmul oamenilor care vor locui
              spațiul.
            </span>
            <span className="hidden md:inline">
              De la o cameră dintr-un apartament până la un birou cu trei
              etaje, de la o piesă de mobilier până la un stand demontabil.
              Aceeași grijă pentru lumină, materiale și ritmul oamenilor care
              vor locui în spațiu.
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {ID_SERVICES.map((d, i) => {
              const t = THEMES[i];
              return (
                <div
                  key={d.n}
                  className={`relative overflow-hidden p-5 md:p-7 rounded-[18px] md:rounded-[22px] flex flex-col gap-2.5 md:gap-3 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-accent ${t.surface}`}
                >
                  <div className="absolute top-4 right-4 md:top-5 md:right-5 opacity-85 scale-[0.78] md:scale-100 origin-top-right">
                    <IDCardShape i={i} color={t.shape} />
                  </div>
                  <div className={`text-[10px] md:text-[11px] tracking-[0.22em] mb-7 md:mb-9 ${t.mut}`}>
                    {d.n}
                  </div>
                  <div className={`text-[24px] md:text-[30px] font-normal leading-[1] md:leading-[0.95] tracking-[-0.4px] md:tracking-[-0.6px] ${t.fg}`}>
                    {d.title}
                    <span className="md:hidden"> </span>
                    <br className="hidden md:inline" />
                    <span className="font-bold">{d.sub}</span>
                    <span className="text-accent">.</span>
                  </div>
                  <div className={`text-[12px] font-light tracking-[0.04em] ${t.mut}`}>
                    {d.short}
                  </div>
                  <div className={`text-[13px] md:text-[14px] font-light leading-[1.55] md:leading-[1.6] ${t.fg} ${t.isDark ? "opacity-90" : ""}`}>
                    {d.body}
                  </div>
                  <div
                    className={`mt-auto pt-3 md:pt-[18px] border-t border-dashed flex items-center justify-between gap-2 text-[12px] ${t.divider}`}
                  >
                    <div className={`flex items-center gap-1.5 md:gap-2 italic ${t.mut}`}>
                      <span className="text-accent not-italic">↳</span>
                      {d.when}
                    </div>
                    <span
                      className={`text-[10px] md:text-[11px] px-2 md:px-2.5 py-[3px] md:py-1 rounded font-mono font-medium tracking-[0.4px] md:tracking-[0.5px] shrink-0 not-italic ${t.chip}`}
                    >
                      {d.code}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─────── PROCES 5 PAȘI ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CUM LUCRĂM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-5 md:mb-4">
            de la măsură la
            <br />
            <span className="font-bold">detaliu de finisaj</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="hidden md:block text-[17px] font-light text-muted leading-[1.6] max-w-[720px] m-0 mb-16">
            Cinci pași cu livrabile clare. Vezi atmosfera înainte să discutăm
            de un metru pătrat de gresie, vezi planul tehnic înainte să apară
            primul meseriaș pe șantier.
          </p>

          {/* Mobile timeline */}
          <div className="md:hidden flex flex-col">
            {ID_PROCESS.map((p, i) => (
              <div key={p.n} className="flex gap-3.5 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative w-10 h-10 rounded-full bg-foreground text-accent text-[13px] font-bold flex items-center justify-center">
                    {p.n}
                    <span className="absolute -top-1 -right-1.5 w-[18px] h-[18px] rounded-full bg-accent text-foreground text-[10px] font-bold font-mono flex items-center justify-center">
                      {p.glyph}
                    </span>
                  </div>
                  {i < ID_PROCESS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-dark-card min-h-7 mt-1" />
                  )}
                </div>
                <div className={`pt-1 ${i < ID_PROCESS.length - 1 ? "pb-7" : ""}`}>
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

          {/* Desktop 5-col with dashed connector */}
          <div className="hidden md:grid relative grid-cols-5 gap-[18px]">
            <div
              className="absolute top-7 left-[30px] right-[30px] border-t-2 border-dashed border-dark-card"
              aria-hidden
            />
            {ID_PROCESS.map((p) => (
              <div key={p.n} className="relative">
                <div className="relative w-14 h-14 rounded-full bg-foreground text-accent text-[18px] font-bold flex items-center justify-center mb-6">
                  {p.n}
                  <span className="absolute -top-2 -right-2.5 w-[22px] h-[22px] rounded-full bg-accent text-foreground text-[12px] font-bold font-mono flex items-center justify-center">
                    {p.glyph}
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

        {/* ─────── 2 PRINCIPII ─────── */}
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
            {ID_PRINCIPLES.map((s, i) => {
              const dark = i === 0;
              const [firstWord, ...rest] = s.title.split(" ");
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
                    <span className="font-bold">{firstWord}</span>
                    {rest.length ? ` ${rest.join(" ")}` : ""}
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

        {/* ─────── BANDĂ GALBENĂ AUDIT ─────── */}
        <div className="bg-accent mt-10 md:mt-[110px] relative overflow-hidden">
          <AmorphBackdrop variant="mixed" invert className="md:hidden" />
          <AmorphBackdrop variant="banner" invert className="hidden md:block" />
          <section className="max-w-[1400px] mx-auto px-5 md:px-14 py-11 md:py-[110px] md:pb-[130px] relative">
            <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-foreground/70 mb-3 md:mb-[18px]">
              NU EȘTI SIGUR DE UNDE SĂ ÎNCEPI?
            </div>
            <h2 className="text-[32px] md:text-[72px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.8px] m-0 mb-4 md:mb-8 max-w-[1100px]">
              <span className="md:hidden">
                îți facem un <span className="font-bold">audit interior</span> +
                plan de optimizare în 7 zile
                <span className="text-background">.</span>
              </span>
              <span className="hidden md:inline">
                îți facem un <span className="font-bold">audit interior</span>
                <br />+ plan de optimizare în 7 zile
                <span className="text-background">.</span>
              </span>
            </h2>
            <p className="text-[14px] md:text-[19px] font-normal text-foreground leading-[1.55] max-w-[760px] m-0 mb-5 md:mb-10 opacity-85">
              <span className="md:hidden">
                O vizită, două ore de conversație, un document scurt cu ce să
                schimbi și în ce ordine. Costul se scade din onorariu dacă
                mergi mai departe.
              </span>
              <span className="hidden md:inline">
                O vizită în spațiul tău, două ore de conversație, un document
                scurt cu ce să schimbi, în ce ordine, cu ce buget orientativ.
                Dacă mergi mai departe cu noi pe proiect complet, costul
                auditului se scade din onorariu.
              </span>
            </p>
            <div className="flex items-center gap-3.5 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-foreground text-platinum text-[14px] md:text-base font-normal whitespace-nowrap"
              >
                povestește-ne spațiul <ArrowRight size={14} />
              </Link>
              <span className="hidden md:inline text-[14px] text-foreground/70">
                sau scrie la office@amorph.ro
              </span>
            </div>
          </section>
        </div>

        {/* ─────── PROIECTE EXEMPLU ─────── */}
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
            {ID_EXAMPLES.map((e, i) => {
              const Viz = EXAMPLE_VIZ[i];
              return (
                <div
                  key={e.title}
                  className="border-[1.5px] md:border-2 border-dark-card rounded-[18px] md:rounded-3xl overflow-hidden bg-platinum"
                >
                  <div
                    className={`relative h-[200px] md:h-[320px] ${
                      i % 2 === 0 ? "bg-dark" : "bg-[#bdbdbd]"
                    }`}
                  >
                    <Viz />
                    <span className="absolute top-3 md:top-[18px] right-3 md:right-[18px] text-[10px] md:text-[11px] px-2.5 md:px-3 py-1 md:py-[5px] rounded font-mono bg-accent text-foreground font-medium tracking-[0.4px] md:tracking-[0.5px]">
                      {e.tag}
                    </span>
                  </div>
                  <div className="px-4 md:px-[26px] py-4 md:py-[22px]">
                    <div className="text-[17px] md:text-[22px] font-medium text-foreground tracking-[-0.2px] md:tracking-[-0.3px] mb-1.5">
                      {e.title}
                    </div>
                    <div className="text-[12px] md:text-[13px] font-light text-muted">
                      {e.meta}
                    </div>
                  </div>
                </div>
              );
            })}
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
            <ServiciiFAQ items={ID_FAQ} />
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
                  Povestește-ne despre spațiul tău. Răspuns în 48h.
                </span>
                <span className="hidden md:inline">
                  Povestește-ne despre spațiul tău — apartament, casă, birou,
                  un colț pe care nu îl mai înțelegi. Răspundem în 48h cu
                  primii pași, calendar și buget orientativ.
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
              href="/servicii/graphic-design"
              className="relative bg-platinum rounded-[18px] md:rounded-3xl border-[1.5px] md:border-2 border-dark-card overflow-hidden grid grid-cols-[110px_1fr] md:grid-cols-[180px_1fr] transition-all duration-300 md:hover:-translate-y-0.5 md:hover:border-accent"
            >
              <div className="h-[110px] md:h-[180px] overflow-hidden relative">
                <Image
                  src="/images/service-grafica.png"
                  alt="graphic design"
                  fill
                  sizes="(max-width: 768px) 110px, 180px"
                  className="object-cover"
                />
              </div>
              <div className="px-4 md:px-8 py-3.5 md:py-7 flex flex-col justify-center">
                <div className="text-[20px] md:text-[30px] font-normal text-foreground leading-[0.95] tracking-[-0.3px] md:tracking-[-0.5px]">
                  graphic
                  <span className="md:hidden"> </span>
                  <br className="hidden md:inline" />
                  <span className="font-bold">design</span>
                  <span className="text-accent">.</span>
                </div>
                <div className="hidden md:block mt-2.5 text-[12px] font-light text-muted italic max-w-[380px] leading-[1.5]">
                  pentru spații care comunică — meniuri, signage, materiale
                  promoționale în același limbaj.
                </div>
                <div className="mt-2 md:mt-3.5 flex items-center gap-1.5 md:gap-2 text-[12px] md:text-[14px] text-foreground">
                  <span>vezi serviciul</span>
                  <ArrowRight size={11} />
                </div>
              </div>
            </Link>
            <Link
              href="/servicii"
              className="relative bg-background rounded-[18px] md:rounded-3xl border-[1.5px] md:border-2 border-dashed border-dark-card px-4 md:px-8 py-4 md:py-7 flex flex-col justify-center md:min-h-[184px] transition-all duration-300 md:hover:-translate-y-0.5 md:hover:border-accent"
            >
              <div className="text-[10px] md:text-[11px] tracking-[0.22em] text-muted mb-1.5 md:mb-2.5">
                SAU
              </div>
              <div className="text-[18px] md:text-[26px] font-normal text-foreground leading-[1.1] tracking-[-0.3px] md:tracking-[-0.4px]">
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
