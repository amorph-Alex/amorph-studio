import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmorphBackdrop from "@/components/ui/AmorphBackdrop";
import ServiciiFAQ from "@/components/sections/ServiciiFAQ";
import type { FaqItem } from "@/lib/services";

export const metadata: Metadata = {
  title: "Planificare urbană — PUD, PUZ, PUG",
  description:
    "Documentații care chiar se aprobă: PUD, PUZ, PUG și studiile care le susțin. De la primul certificat de urbanism până la HCL.",
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

const URB_DOCS = [
  {
    n: "01",
    code: "PUD",
    title: "Plan Urbanistic",
    sub: "de Detaliu",
    short: "pentru o singură parcelă, o intervenție specifică",
    body: "Reglementează detaliat o parcelă sau un grup mic de parcele — retrageri, înălțimi, accese, racorduri. Necesar când vrei să construiești ceva specific care nu se încadrează direct în PUZ-ul existent.",
    when: "când construiești pe o parcelă cu reglementări neclare",
  },
  {
    n: "02",
    code: "PUZ",
    title: "Plan Urbanistic",
    sub: "Zonal",
    short: "pentru zone întregi, ansambluri, dezvoltări",
    body: "Stabilește regulile pentru o zonă mai largă — folosință terenuri, indicatori urbanistici, rețele, spații publice. Obligatoriu pentru dezvoltări noi, conversii de funcțiune, parcelări.",
    when: "când dezvolți o zonă, un cartier sau schimbi funcțiunea",
  },
  {
    n: "03",
    code: "PUG",
    title: "Plan Urbanistic",
    sub: "General",
    short: "documentul-cadru al unei localități",
    body: "Strategia de dezvoltare a unei localități pe 10 ani. Conține zonificare, regulament local, indicatori. Lucrăm cu primării și consorții pentru elaborare, actualizare, revizie.",
    when: "când o primărie își (re)scrie regulamentul",
  },
  {
    n: "04",
    code: "Studii",
    title: "studii",
    sub: "urbanistice",
    short: "oportunitate, fundamentare, suport decizii",
    body: "Studii de oportunitate (înainte de PUZ/PUD) și studii de fundamentare (peisagistice, de circulație, istorice, geotehnice). Argumentează tehnic și legal decizii urbane.",
    when: "înainte de orice documentație, ca să nu pleci pe drum greșit",
  },
];

const URB_PROCESS = [
  {
    n: "01",
    t: "Certificat de Urbanism",
    d: "Primul pas legal — primăria îți spune ce poți construi, ce avize sunt necesare, ce documentație. Te ajutăm să-l obții și îl traducem în plan de acțiune.",
  },
  {
    n: "02",
    t: "Avize și acorduri",
    d: "Apa, electrica, gazul, mediul, ANRSPS, MAI, MApN — în funcție de zonă. Le coordonăm pe toate, pe rând, fără să te pierzi prin instituții.",
  },
  {
    n: "03",
    t: "Documentația",
    d: "PUD, PUZ sau PUG — piese desenate, regulament, memoriu, anexe. Fiecare planșă conformă cu legislația în vigoare.",
  },
  {
    n: "04",
    t: "Susținere comisii",
    d: "CTATU, CTUAT, comisii locale, consultări publice. Te însoțim la toate, pregătim răspunsurile, integrăm observațiile.",
  },
  {
    n: "05",
    t: "Aprobare HCL",
    d: "Documentația ajunge la Consiliul Local, se votează, se publică. La final, primești tot dosarul gata de extras de carte funciară.",
  },
];

const URB_STUDII = [
  {
    code: "oportunitate",
    title: "studii de oportunitate",
    body: "Înainte de a începe un PUZ sau PUD, studiul de oportunitate analizează contextul: ce permite reglementarea actuală, ce indicatori sunt rezonabili, ce riscuri apar, ce beneficii aduce zona. E o foaie de parcurs care te scutește de surprize.",
    items: [
      "analiză context urbanistic",
      "analiză cadru legal",
      "indicatori propuși vs existenți",
      "riscuri și constrângeri",
    ],
  },
  {
    code: "fundamentare",
    title: "studii de fundamentare",
    body: "Studii tehnice care argumentează deciziile din documentația urbanistică. Fie că e vorba de circulație, peisaj, geotehnică sau istorie — fiecare planșă din PUZ/PUD are nevoie de un studiu în spate.",
    items: [
      "peisagistic",
      "circulație și mobilitate",
      "istoric și de patrimoniu",
      "geotehnic și hidrologic",
    ],
  },
];

const URB_EXAMPLES = [
  { tag: "PUZ", title: "Cartier rezidențial · 12ha", meta: "mediul rural, jud. Cluj" },
  { tag: "PUD", title: "Conversie clădire industrială", meta: "centrul Cluj-Napoca" },
  { tag: "PUG", title: "Actualizare PUG comună", meta: "Transilvania, 2.500 locuitori" },
  { tag: "studiu", title: "Studiu peisagistic parc", meta: "spațiu public, ~4ha" },
];

const URB_FAQ: FaqItem[] = [
  {
    q: "Cât durează o documentație de urbanism?",
    a: "Depinde de tip și de timpii instituțiilor. Un PUD durează în medie 4–8 luni, un PUZ 8–14 luni, un PUG peste 18 luni. Cea mai mare parte din timp e avizarea — partea de proiectare propriu-zisă e relativ scurtă. La prima conversație îți facem un calendar realist, nu unul optimist.",
  },
  {
    q: "Lucrați doar cu dezvoltatori sau și cu persoane fizice?",
    a: "Cu toată lumea. Avem proiecte pentru primării, dezvoltatori privați, ONG-uri, dar și pentru persoane fizice care au moștenit un teren și vor să înțeleagă ce pot construi. Dacă bugetul e modest, îți spunem cinstit ce putem face cu el.",
  },
  {
    q: "Faceți și consultanță înainte de cumpărarea unui teren?",
    a: "Da — și o recomandăm călduros. O analiză preliminară (1–2 săptămâni) te poate scuti de o achiziție proastă. Verificăm PUG, restricții, riscuri, indicatori realiști, posibile probleme cu vecinii sau cu rețelele.",
  },
  {
    q: "Ce se întâmplă dacă documentația mea e respinsă la comisie?",
    a: "Dacă observațiile sunt rezonabile, le integrăm și prezentăm reactualizat — fără cost suplimentar. Dacă apar cerințe nelegale sau abuzive, te însoțim la contestație. Toate ofertele includ minim două runde de revizii la avizare.",
  },
  {
    q: "Lucrați și în afara județului Cluj?",
    a: "Da, lucrăm în toată țara. Documentațiile urbanistice se depun la primăria locală, dar elaborarea se poate face de oriunde. Pentru proiecte mari, deplasările pe teren sunt incluse în ofertă.",
  },
  {
    q: "Care e bugetul minim pentru un PUZ?",
    a: "Nu există un minim universal — depinde de suprafață, complexitate, studii necesare, timp de avizare. Trimite-ne CU-ul sau o descriere, îți dăm o ofertă în 48h.",
  },
];

const URB_RELATED = [
  {
    slug: "strategii-urbane",
    title: "strategii",
    subtitle: "urbane",
    image: "/images/service-strategii.png",
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
          <rect x="14" y="22" width="38" height="28" />
          <rect x="58" y="22" width="22" height="28" />
          <rect x="86" y="22" width="20" height="28" />
          <rect x="14" y="56" width="20" height="20" />
          <rect x="40" y="56" width="38" height="20" />
          <rect x="84" y="56" width="22" height="20" />
          <rect x="14" y="82" width="48" height="22" />
          <rect x="68" y="82" width="38" height="22" />
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
          <path d="M20 90 L20 36 L52 22 L52 30 L88 30 L88 90 Z" />
          <line x1="20" y1="50" x2="52" y2="50" />
          <line x1="20" y1="64" x2="52" y2="64" />
          <line x1="20" y1="78" x2="52" y2="78" />
          <line x1="62" y1="44" x2="78" y2="44" />
          <line x1="62" y1="58" x2="78" y2="58" />
          <line x1="62" y1="72" x2="78" y2="72" />
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
          <path d="M10 60 Q40 30 60 50 T110 60" />
          <path d="M10 80 Q40 100 60 80 T110 80" />
          <circle cx="30" cy="60" r="3" />
          <circle cx="60" cy="50" r="3" />
          <circle cx="90" cy="62" r="3" />
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
        <circle cx="60" cy="60" r="42" />
        <circle cx="60" cy="60" r="22" />
        <path d="M60 18 L60 102 M18 60 L102 60" />
      </g>
    </svg>
  );
}

export default function PlanificareUrbanaPage() {
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
            <span className="text-foreground">planificare urbană</span>
          </div>
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ 01 · PLANIFICARE URBANĂ
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 md:gap-14 md:items-end">
            <h1 className="text-[42px] md:text-[124px] font-light leading-[0.95] md:leading-[0.88] tracking-[-1px] md:tracking-[-3px] m-0">
              documentații care
              <br />
              <span className="font-bold">chiar se aprobă</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light text-foreground leading-[1.6] m-0 md:pb-6">
              PUD, PUZ, PUG și studiile care le susțin. Te ducem de la primul
              certificat de urbanism până la HCL, fără să te pierzi prin
              instituții.
            </p>
          </div>
          <div className="relative mt-6 md:mt-12 h-[220px] md:h-[480px] rounded-[20px] md:rounded-[32px] overflow-hidden border-[1.5px] md:border-2 border-dark-card">
            <Image
              src="/images/service-urbanism.png"
              alt="planificare urbană"
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
            <span className="font-bold">documentații</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="text-[13px] md:text-[17px] font-light text-muted leading-[1.55] md:leading-[1.6] max-w-[720px] m-0 mb-6 md:mb-12">
            <span className="md:hidden">
              Fiecare are rol și scară diferită. La prima conversație îți spunem
              care e potrivită.
            </span>
            <span className="hidden md:inline">
              Fiecare are rol și scară diferită. La prima conversație îți spunem
              care e potrivită pentru tine — sau care combinație.
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {URB_DOCS.map((d) => (
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
            de la CU până la
            <br />
            <span className="font-bold">HCL aprobat</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="hidden md:block text-[17px] font-light text-muted leading-[1.6] max-w-[720px] m-0 mb-16">
            Cinci pași — fiecare cu predictibilitate. Te ținem la curent
            săptămânal și nu pierzi nicio etapă din vedere.
          </p>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden flex flex-col">
            {URB_PROCESS.map((p, i) => (
              <div key={p.n} className="flex gap-3.5 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-foreground text-accent text-[13px] font-bold flex items-center justify-center">
                    {p.n}
                  </div>
                  {i < URB_PROCESS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-dark-card min-h-7 mt-1" />
                  )}
                </div>
                <div
                  className={`pt-1 ${
                    i < URB_PROCESS.length - 1 ? "pb-7" : ""
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
            {URB_PROCESS.map((p) => (
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

        {/* ─────── STUDII ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            STUDII URBANISTICE
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-6 md:mb-12">
            argumentul în spatele
            <br />
            <span className="font-bold">fiecărei decizii</span>
            <span className="text-accent">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-6">
            {URB_STUDII.map((s, i) => {
              const dark = i === 0;
              const titleWords = s.title.split(" ");
              const boldPart = titleWords.slice(0, 2).join(" ");
              const restPart = titleWords.slice(2).join(" ");
              return (
                <div
                  key={s.code}
                  className={`p-6 md:p-10 rounded-[22px] md:rounded-[28px] ${
                    dark
                      ? "bg-dark text-platinum"
                      : "bg-platinum text-foreground border-[1.5px] md:border-2 border-dark-card"
                  }`}
                >
                  <div
                    className={`text-[10px] md:text-[11px] tracking-[0.22em] mb-3 md:mb-4 ${
                      dark ? "opacity-60" : "opacity-60"
                    }`}
                  >
                    STUDIU DE {s.code.toUpperCase()}
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
              NU EȘTI SIGUR DE UNDE SĂ ÎNCEPI?
            </div>
            <h2 className="text-[32px] md:text-[72px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.8px] m-0 mb-4 md:mb-8 max-w-[1100px]">
              <span className="md:hidden">
                trimite-ne <span className="font-bold">CU-ul terenului</span>
                <span className="text-background">.</span>
              </span>
              <span className="hidden md:inline">
                trimite-ne{" "}
                <span className="font-bold">certificatul de urbanism</span>
                <br />
                sau o descriere a terenului
                <span className="text-background">.</span>
              </span>
            </h2>
            <p className="text-[14px] md:text-[19px] font-normal text-foreground leading-[1.55] max-w-[760px] m-0 mb-5 md:mb-10 opacity-85">
              <span className="md:hidden">
                În 48h primești o evaluare cu tipul de documentație, calendarul
                și bugetul aproximativ. Fără angajament.
              </span>
              <span className="hidden md:inline">
                În 48h primești înapoi o evaluare cu tipul de documentație
                necesar, calendarul și bugetul aproximativ. Fără angajament —
                doar claritate.
              </span>
            </p>
            <div className="flex items-center gap-3.5 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-foreground text-platinum text-[14px] md:text-base font-normal whitespace-nowrap"
              >
                trimite CU-ul <ArrowRight size={14} />
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
            {URB_EXAMPLES.map((e, i) => (
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
            <ServiciiFAQ items={URB_FAQ} />
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
                  Trimite-ne CU-ul sau o descriere. Răspuns în 48h.
                </span>
                <span className="hidden md:inline">
                  Trimite-ne CU-ul, KML-ul sau o descriere scurtă. Răspundem în
                  48h cu o evaluare clară — calendar, buget, pași.
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
            {URB_RELATED.map((r) => (
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
