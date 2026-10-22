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
  title: "Regenerare urbană: spații publice, parcuri, fronturi de apă",
  description: "Spații publice, parcuri, scuaruri, fronturi de apă, mobilier urban, zone reactivate. Lucrăm cu primării, ONG-uri și inițiative civice, pornind mereu de la cei care folosesc locul zilnic.",
  path: "/servicii/regenerare-urbana",
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

const REG_TYPES = [
  {
    n: "01",
    code: "Spații",
    title: "spații",
    sub: "publice",
    short: "piațete, esplanade, recuperarea locurilor uitate",
    body: "Locurile prin care trec zilnic mii de oameni — și pe care nu le vede nimeni. Pornim de la traseele reale, observăm cum se folosește spațiul azi, propunem intervenții care îl deschid către comunitate fără să șteargă straturile istorice.",
    when: `când o piață sau o esplanadă funcționează „pe lângă” oameni`,
  },
  {
    n: "02",
    code: "Verde",
    title: "parcuri și",
    sub: "infrastructură verde",
    short: "design peisager pentru spații care respiră",
    body: "Parcuri noi, parcuri reabilitate, coridoare verzi, plantări de aliniamente. Lucrăm cu peisagiști și biologi — soluții bazate pe specii adaptate climatului local, cu plan de întreținere realist pentru anii următori.",
    when: "când orașul are nevoie de mai mult umbră, apă, oxigen",
  },
  {
    n: "03",
    code: "Scuar",
    title: "scuaruri de",
    sub: "cartier",
    short: "intervenții la scară mică, mare impact",
    body: "Intersecțiile, micile insule de spațiu rezidual, terenurile triunghiulare uitate între blocuri. Scuarul de cartier e cea mai democratică formă de spațiu public — o folosesc copii, vârstnici, oameni care n-ar merge niciodată în parcul central.",
    when: "când un cartier vrea un loc al lui",
  },
  {
    n: "04",
    code: "Apă",
    title: "fronturi de",
    sub: "apă",
    short: "recâștigarea malurilor pentru oameni",
    body: "Râuri îndiguite, lacuri îngrădite, canale uitate. Designul de front de apă e despre cum redai accesul vizual și fizic la apă — promenade, debarcadere, terase, plaje urbane — cu respect pentru regimul hidrologic și ecosistemul existent.",
    when: "când orașul s-a întors cu spatele la apă",
  },
  {
    n: "05",
    code: "Mobilier",
    title: "mobilier",
    sub: "urban",
    short: "bănci, iluminat, semnalistică, fântâni",
    body: "Sisteme coerente de mobilier urban — bănci, parapete, suporturi de bicicletă, iluminat, fântâni de apă potabilă, semnalistică. Proiectate ca familie, nu piesă cu piesă. Standard de detaliu de la dimensiunea finisajului până la planul de mentenanță.",
    when: "când fiecare bancă din oraș e altă bancă",
  },
  {
    n: "06",
    code: "Reactivare",
    title: "zone",
    sub: "reactivate",
    short: "foste industriale, terenuri abandonate",
    body: "Hale industriale fără funcțiune, depozite CFR, foste fabrici, terenuri scoase din uz. Reactivarea cere mai mult decât proiectare — o citire atentă a memoriei locului, un parteneriat cu proprietarii, o etapizare care permite testare înainte de investiție mare.",
    when: "când un loc are istorie, dar nu și prezent",
  },
];

const REG_PROCESS = [
  {
    n: "01",
    t: "Cercetare loc",
    d: "Diagnoză spațială completă — măsurători, fotografii la diferite ore, observație etnografică. Cum se folosește locul azi, cine îl folosește, cine îl evită și de ce.",
    long: false,
  },
  {
    n: "02",
    t: "Consultare profundă",
    d: "Inima procesului. Nu o întâlnire publică obligatorie, ci 6–10 săptămâni de ascultare structurată: workshop-uri pe categorii de utilizatori, plimbări exploratorii cu locuitorii, atelier de co-design cu copiii și vârstnicii, sondaje pe teren și online, interviuri narative.",
    long: true,
  },
  {
    n: "03",
    t: "Concept participativ",
    d: "Conceptul se naște din ce am auzit. Întoarcem la oameni 2–3 variante, le discutăm împreună, alegem direcția. Designerii sunt traducători — nu autori solitari.",
    long: false,
  },
  {
    n: "04",
    t: "Proiect tehnic",
    d: "Detalii de execuție la cel mai înalt standard: planimetrie, vegetație, finisaje, mobilier, iluminat, ape pluviale, accesibilitate. Caiet de sarcini pregătit pentru licitație.",
    long: false,
  },
  {
    n: "05",
    t: "Implementare & reevaluare",
    d: "Asistență de șantier, recepție, manual de mentenanță. Revenim la 6 și 12 luni post-utilizare ca să vedem ce funcționează, ce trebuie ajustat — și să raportăm onest comunității.",
    long: false,
  },
];

const REG_PRINCIPLES = [
  {
    code: "human",
    title: "human first",
    body: "Pornim de la oameni, nu de la planșă. Înainte să desenăm prima linie, petrecem săptămâni în teren — întrebând, ascultând, observând. Designul bun e un act de traducere: ceea ce comunitatea simte, dar nu poate desena, devine plan măsurabil.",
    items: [
      "observație etnografică pe teren",
      "co-design cu utilizatorii zilnici",
      "feedback documentat și răspuns punctual",
      "reevaluare post-utilizare",
    ],
  },
  {
    code: "standarde",
    title: "standarde înalte",
    body: "O comună de 3.000 de locuitori merită același nivel de detaliu ca un municipiu reședință. Lucrăm cu peisagiști, biologi, ingineri, sociologi — fiecare proiect are echipa pe care o cere, indiferent de bugetul total. Nu există proiect mic pentru standardul nostru.",
    items: [
      "echipă multidisciplinară pe fiecare proiect",
      "soluții bazate pe context, nu pe șablon",
      "detaliu tehnic de manual",
      "documentație completă pentru execuție",
    ],
  },
];

const REG_EXAMPLES = [
  { tag: "Piațetă", title: "Piațetă centrală · oraș mic", meta: "Transilvania, 5.200 loc." },
  { tag: "Apă", title: "Front de râu · 1,2 km mal", meta: "municipiu reședință, faza PT" },
  { tag: "Scuar", title: "Scuar cartier · co-design", meta: "oraș mediu, livrat 2025" },
  { tag: "Industrial", title: "Reactivare hală CFR", meta: "parteneriat cu ONG local" },
];

const REG_FAQ: FaqItem[] = [
  {
    q: "Cât durează un proiect de regenerare urbană?",
    a: "De la prima vizită la livrarea proiectului tehnic: 7–14 luni, în funcție de scară și de adâncimea consultării. Pentru un scuar de cartier: 6–8 luni. Pentru un front de apă sau o zonă reactivată: 12–18 luni. Cea mai mare parte din timp e dedicată cercetării și consultării — fără ele, proiectul rămâne planșă pe perete.",
  },
  {
    q: "Lucrați cu primării mici sau doar cu municipii mari?",
    a: "Lucrăm cu toată lumea, la același standard. Cele mai frumoase proiecte le-am livrat în comune de 3–8.000 de locuitori, unde primarul vorbește direct cu locuitorii și unde o intervenție bună schimbă întreg centrul satului. Bugetul mic înseamnă creativitate, nu compromis pe calitate.",
  },
  {
    q: `Ce înseamnă „consultare reală"?`,
    a: "Înseamnă 6–10 săptămâni de teren, nu o întâlnire publică obligatorie. Folosim minim 4 formate paralele: workshop-uri tematice, plimbări exploratorii, atelier cu copiii și vârstnicii, interviuri narative cu 15–25 persoane-cheie. Tot feedback-ul e centralizat, răspuns punctual și publicat în raportul de consultare.",
  },
  {
    q: "Putem accesa fonduri europene printr-un proiect de regenerare?",
    a: "Da — regenerarea urbană e una din direcțiile principale de finanțare. PNRR, POR, Anghel Saligny, programele transfrontaliere. Construim documentația tehnică gata pentru aplicație, cu bugete realiste și indicatori de impact măsurabili. Avem și partenerii necesari pentru cererea de finanțare.",
  },
  {
    q: "Care e diferența între regenerare și o reamenajare clasică?",
    a: "O reamenajare schimbă pavajul. O regenerare schimbă cum se simte locul. Regenerarea pornește de la diagnoză socială și ecologică, lucrează cu comunitatea, integrează mobilitate, vegetație, mobilier, semnalistică, iluminat — totul ca sistem. Costul nu e neapărat mai mare. Atenția e.",
  },
  {
    q: "Care e bugetul minim pentru un proiect cu voi?",
    a: "Pentru un scuar de cartier sau o piațetă mică: onorariu de la ~18.000€. Pentru o zonă mai amplă (front de apă, parc nou, reactivare): 35–90.000€, în funcție de scara consultării și complexitatea tehnică. Lucrăm și la proiecte ONG sau de inițiativă civică — atunci găsim împreună sursa.",
  },
];

const REG_RELATED = [
  {
    slug: "planificare-urbana",
    title: "planificare",
    subtitle: "urbană",
    image: "/images/service-urbanism.png",
  },
  {
    slug: "strategii-urbane",
    title: "strategii",
    subtitle: "urbane",
    image: "/images/service-strategii.png",
  },
];

function ExampleGlyph({ index }: { index: number }) {
  const accent = "var(--accent)";
  const white = "#fff";

  if (index === 0) {
    return (
      <svg
        width="140"
        height="140"
        viewBox="0 0 120 120"
        fill="none"
        className="opacity-60 max-md:w-[90px] max-md:h-[90px]"
      >
        <g stroke={accent} strokeWidth="1.5" fill="none">
          <circle cx="60" cy="60" r="42" />
          <circle cx="60" cy="60" r="28" strokeDasharray="3 3" />
          <circle cx="60" cy="60" r="14" />
          <circle cx="60" cy="60" r="4" fill={accent} />
          <line x1="18" y1="60" x2="42" y2="60" />
          <line x1="78" y1="60" x2="102" y2="60" />
          <line x1="60" y1="18" x2="60" y2="42" />
          <line x1="60" y1="78" x2="60" y2="102" />
          <line x1="30" y1="30" x2="46" y2="46" />
          <line x1="74" y1="46" x2="90" y2="30" />
          <line x1="30" y1="90" x2="46" y2="74" />
          <line x1="74" y1="74" x2="90" y2="90" />
        </g>
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg
        width="140"
        height="140"
        viewBox="0 0 120 120"
        fill="none"
        className="opacity-60 max-md:w-[90px] max-md:h-[90px]"
      >
        <g stroke={white} strokeWidth="1.5" fill="none">
          <path d="M 8 38 Q 30 28 50 42 T 90 46 T 116 38" />
          <path d="M 8 78 Q 30 88 50 76 T 90 78 T 116 82" />
          <line x1="8" y1="58" x2="116" y2="58" strokeDasharray="2 4" opacity="0.5" />
          <circle cx="34" cy="64" r="2" />
          <circle cx="60" cy="62" r="2" />
          <circle cx="86" cy="64" r="2" />
          <line x1="34" y1="50" x2="34" y2="76" opacity="0.4" />
          <line x1="60" y1="50" x2="60" y2="76" opacity="0.4" />
          <line x1="86" y1="50" x2="86" y2="76" opacity="0.4" />
        </g>
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg
        width="140"
        height="140"
        viewBox="0 0 120 120"
        fill="none"
        className="opacity-60 max-md:w-[90px] max-md:h-[90px]"
      >
        <g stroke={accent} strokeWidth="1.5" fill="none">
          <polygon points="60,16 16,100 104,100" />
          <polygon points="60,30 30,90 90,90" strokeDasharray="3 3" />
          <rect x="44" y="74" width="10" height="4" />
          <rect x="66" y="74" width="10" height="4" />
          <circle cx="40" cy="84" r="3" />
          <circle cx="80" cy="84" r="3" />
          <circle cx="60" cy="60" r="6" fill={accent} />
        </g>
      </svg>
    );
  }
  return (
    <svg
      width="140"
      height="140"
      viewBox="0 0 120 120"
      fill="none"
      className="opacity-60 max-md:w-[90px] max-md:h-[90px]"
    >
      <g stroke={white} strokeWidth="1.5" fill="none">
        <rect x="12" y="40" width="96" height="56" />
        <line x1="12" y1="40" x2="60" y2="20" />
        <line x1="60" y1="20" x2="108" y2="40" />
        <line x1="36" y1="40" x2="36" y2="96" strokeDasharray="3 3" />
        <line x1="60" y1="40" x2="60" y2="96" strokeDasharray="3 3" />
        <line x1="84" y1="40" x2="84" y2="96" strokeDasharray="3 3" />
        <rect x="50" y="70" width="20" height="26" />
      </g>
    </svg>
  );
}

export default function RegenerareUrbanaPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <JsonLd data={servicePageJsonLd("regenerare-urbana", REG_FAQ)} />
        {/* ─────── HERO ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-6 md:pt-10 pb-6">
          <div className="flex items-center gap-2 text-[11px] md:text-[13px] text-muted mb-4 md:mb-7">
            <Link href="/servicii" className="hover:text-accent transition-colors">
              servicii
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-foreground">regenerare urbană</span>
          </div>
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ 03 · REGENERARE URBANĂ
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 md:gap-14 md:items-end">
            <h1 className="text-[42px] md:text-[124px] font-light leading-[0.95] md:leading-[0.88] tracking-[-1px] md:tracking-[-3px] m-0">
              locuri care
              <br />
              <span className="font-bold">se întorc spre oameni</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light text-foreground leading-[1.6] m-0 md:pb-6">
              <span className="md:hidden">
                Spații publice, parcuri, scuaruri, fronturi de apă, mobilier
                urban, zone reactivate. Lucrăm cu primării și ONG-uri, pornind
                mereu de la cei care folosesc locul zilnic.
              </span>
              <span className="hidden md:inline">
                Spații publice, parcuri, scuaruri, fronturi de apă, mobilier
                urban, zone reactivate. Lucrăm cu primării, ONG-uri și
                inițiative civice — pornind mereu de la cei care folosesc locul
                zilnic.
              </span>
            </p>
          </div>
          <div className="relative mt-6 md:mt-12 h-[220px] md:h-[480px] rounded-[20px] md:rounded-[32px] overflow-hidden border-[1.5px] md:border-2 border-dark-card">
            <Image
              src="/images/hero-regenerare.png"
              alt="regenerare urbană"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>
        </section>

        {/* ─────── CE LIVRĂM — 6 TIPURI ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            CE LIVRĂM
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-3 md:mb-4">
            șase tipuri de
            <br />
            <span className="font-bold">intervenție</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="text-[13px] md:text-[17px] font-light text-muted leading-[1.55] md:leading-[1.6] max-w-[720px] m-0 mb-6 md:mb-12">
            <span className="md:hidden">
              De la scuarul triunghiular dintre două blocuri până la fronturi de
              apă de un kilometru.
            </span>
            <span className="hidden md:inline">
              De la scuarul triunghiular dintre două blocuri până la fronturi de
              apă de un kilometru. Fiecare tip cere altă metodă de cercetare,
              altă scară de consultare, alt tip de echipă.
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
            {REG_TYPES.map((d) => (
              <div
                key={d.n}
                className="p-5 md:p-[32px_28px_28px] bg-platinum rounded-[18px] md:rounded-[22px] border-[1.5px] md:border-2 border-dark-card flex flex-col gap-3 md:gap-3 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-accent"
              >
                <div className="flex items-start justify-between">
                  <div className="text-[10px] md:text-[11px] tracking-[0.22em] text-muted">
                    {d.n}
                  </div>
                  <span className="text-[10px] md:text-[11px] px-2.5 md:px-3 py-1 md:py-[5px] rounded-full bg-accent text-foreground font-medium tracking-[0.4px] md:tracking-[0.5px]">
                    {d.code}
                  </span>
                </div>
                <div className="text-[24px] md:text-[30px] font-normal text-foreground leading-[1] md:leading-[0.95] tracking-[-0.4px] md:tracking-[-0.6px]">
                  {d.title}
                  <span className="md:hidden"> </span>
                  <br className="hidden md:inline" />
                  <span className="font-bold">{d.sub}</span>
                  <span className="text-accent">.</span>
                </div>
                <div className="text-[12px] md:text-[13px] font-light text-muted tracking-[0.04em]">
                  {d.short}
                </div>
                <div className="text-[13px] md:text-[14px] font-light text-foreground leading-[1.55] md:leading-[1.6]">
                  {d.body}
                </div>
                <div className="mt-auto pt-3 md:pt-4 border-t border-dashed border-dark-card flex items-start gap-2 text-[12px]">
                  <span className="text-accent text-[14px] leading-[1.5]">↳</span>
                  <span className="italic text-muted leading-[1.5]">{d.when}</span>
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
            de la teren la
            <br />
            <span className="font-bold">locuri trăite</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="hidden md:block text-[17px] font-light text-muted leading-[1.6] max-w-[720px] m-0 mb-16">
            Cinci pași — cu inima procesului în pasul 02. Consultarea publică nu
            e o formalitate, e munca prin care un loc devine al comunității sale.
          </p>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden flex flex-col">
            {REG_PROCESS.map((p, i) => (
              <div key={p.n} className="flex gap-3.5 relative">
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full text-[13px] font-bold flex items-center justify-center ${
                      p.long
                        ? "bg-accent text-foreground"
                        : "bg-foreground text-accent"
                    }`}
                  >
                    {p.n}
                  </div>
                  {i < REG_PROCESS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-dark-card min-h-7 mt-1" />
                  )}
                </div>
                <div
                  className={`pt-1 ${
                    i < REG_PROCESS.length - 1 ? "pb-7" : ""
                  }`}
                >
                  <div
                    className={`text-[17px] text-foreground mb-1 ${
                      p.long ? "font-bold" : "font-medium"
                    }`}
                  >
                    {p.t}
                    {p.long && <span className="text-accent">.</span>}
                  </div>
                  <div className="text-[13px] font-light text-muted leading-[1.55]">
                    {p.d}
                  </div>
                  {p.long && (
                    <div className="mt-2 text-[10px] tracking-[0.2em] text-accent font-medium">
                      ↳ INIMA PROCESULUI
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 5-col unequal grid, step 02 wider */}
          <div className="hidden md:grid relative grid-cols-[1fr_1.8fr_1fr_1fr_1fr] gap-[18px]">
            <div
              className="absolute top-7 left-[30px] right-[30px] border-t-2 border-dashed border-dark-card"
              aria-hidden
            />
            {REG_PROCESS.map((p) => (
              <div key={p.n} className="relative">
                <div
                  className={`w-14 h-14 rounded-full text-[18px] font-bold flex items-center justify-center mb-6 ${
                    p.long
                      ? "bg-accent text-foreground ring-[6px] ring-background outline outline-2 outline-accent"
                      : "bg-foreground text-accent"
                  }`}
                >
                  {p.n}
                </div>
                <div
                  className={`text-foreground mb-2.5 tracking-[-0.3px] leading-[1.15] ${
                    p.long ? "text-[22px] font-bold" : "text-[20px] font-medium"
                  }`}
                >
                  {p.t}
                  {p.long && <span className="text-accent">.</span>}
                </div>
                <div
                  className={`font-light leading-[1.6] ${
                    p.long ? "text-[14px] text-foreground" : "text-[13px] text-muted"
                  }`}
                >
                  {p.d}
                </div>
                {p.long && (
                  <div className="mt-3.5 text-[11px] tracking-[0.2em] text-accent font-medium">
                    ↳ INIMA PROCESULUI
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─────── PRINCIPII ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            PRINCIPII DE LUCRU
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
            {REG_PRINCIPLES.map((s, i) => {
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

        {/* ─────── YELLOW BANNER ─────── */}
        <div className="bg-accent mt-10 md:mt-[110px] relative overflow-hidden">
          <AmorphBackdrop variant="mixed" invert className="md:hidden" />
          <AmorphBackdrop variant="banner" invert className="hidden md:block" />
          <section className="max-w-[1400px] mx-auto px-5 md:px-14 py-11 md:py-[110px] md:pb-[130px] relative">
            <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-foreground/70 mb-3 md:mb-[18px]">
              UN PRINCIPIU, ÎN TREI CUVINTE
            </div>
            <h2 className="text-[48px] md:text-[96px] font-light text-foreground leading-[1] md:leading-[0.95] tracking-[-1.2px] md:tracking-[-2.4px] m-0 mb-4 md:mb-8 max-w-[1100px]">
              design{" "}
              <span className="font-bold">către oameni</span>
              <span className="text-background">.</span>
            </h2>
            <p className="text-[14px] md:text-[19px] font-normal text-foreground leading-[1.55] max-w-[760px] m-0 mb-5 md:mb-10 opacity-85">
              <span className="md:hidden">
                Nu desenăm pentru concursuri. Desenăm pentru bunicile care duc
                copilul la grădiniță, pentru adolescenții care n-au unde sta
                seara.
              </span>
              <span className="hidden md:inline">
                Nu desenăm pentru concursuri, nu desenăm pentru reviste. Desenăm
                pentru bunicile care duc copilul la grădiniță, pentru
                adolescenții care n-au unde sta seara, pentru oamenii care vor
                să-și recunoască orașul. Restul vine.
              </span>
            </p>
            <div className="flex items-center gap-3.5 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-foreground text-platinum text-[14px] md:text-base font-normal whitespace-nowrap"
              >
                <span className="md:hidden">povestește-ne locul</span>
                <span className="hidden md:inline">povestește-ne locul</span>
                <ArrowRight size={14} />
              </Link>
              <span className="hidden md:inline text-[14px] text-foreground/70">
                sau sună la +40 747 089 434
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
            {REG_EXAMPLES.map((e, i) => (
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
            <ServiciiFAQ items={REG_FAQ} />
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
                  Fotografii cu locul, o descriere scurtă a comunității. Răspuns
                  în 5 zile lucrătoare.
                </span>
                <span className="hidden md:inline">
                  Trimite-ne fotografii cu locul, o descriere scurtă a
                  comunității și ce ai vrea să se schimbe. Răspundem în 5 zile
                  lucrătoare cu o ofertă completă.
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
            {REG_RELATED.map((r) => (
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
