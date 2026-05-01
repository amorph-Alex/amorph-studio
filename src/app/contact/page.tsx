import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactMain from "@/components/sections/ContactMain";
import ServiciiFAQ from "@/components/sections/ServiciiFAQ";
import AmorphBackdrop from "@/components/ui/AmorphBackdrop";
import type { FaqItem } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hai să vorbim. Răspundem în maxim 24h. office@amorph.ro · +40 747 089 434",
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

const promiseSteps = [
  {
    n: "01",
    t: "citim",
    d: "Aceiași oameni care lucrează pe proiecte răspund la mesaje. Nu e un formular care ajunge într-un sales funnel.",
  },
  {
    n: "02",
    t: "răspundem",
    d: "Email scurt în 24h: tipul proiectului, calendarul brut, bugetul orientativ. Fără promisiuni vagi.",
  },
  {
    n: "03",
    t: "continuăm",
    d: "Dacă pare un fit, propunem o întâlnire de 30 de minute. Dacă nu, te trimitem cu drag spre cineva care se potrivește mai bine.",
  },
];

const contactFaq: FaqItem[] = [
  {
    q: "În cât timp primesc un răspuns?",
    a: "Răspundem la toate mesajele în maxim 24h în zilele lucrătoare. Dacă scrii vineri seara sau în weekend, ai răspuns luni dimineață.",
  },
  {
    q: "Lucrați și la distanță, în alte orașe?",
    a: "Da. Aproape toate proiectele se pot duce la capăt remote — apeluri săptămânale, livrabile digitale, vizite punctuale când e necesar (șantier, recepție, măsurători).",
  },
  {
    q: "Ce informații e bine să-mi pregătesc înainte?",
    a: "Nu e nevoie de nimic. Dacă vrei să accelerăm, scrie pe scurt despre ce e vorba — tip de proiect, suprafață sau anvergură, calendar dorit. Restul aflăm împreună.",
  },
];

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ─────── HERO ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-8 md:pt-10 pb-7 md:pb-14">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ CONTACT
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 md:gap-14 md:items-end">
            <h1 className="text-[56px] md:text-[128px] font-light leading-[0.92] md:leading-[0.88] tracking-[-1.5px] md:tracking-[-3px] m-0">
              hai să
              <br />
              <span className="font-bold">vorbim</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light text-foreground leading-[1.6] m-0 md:pb-6 max-w-[520px]">
              <span className="md:hidden">
                Știm că domeniul poate fi confuz. Ne poți adresa orice întrebare
                — răspundem în maxim 24h.
              </span>
              <span className="hidden md:inline">
                Știm că domeniul construcțiilor și al designului poate părea
                confuz. Ne poți adresa orice întrebare — răspundem în maxim 24h,
                indiferent dacă proiectul tău e mare, mic sau încă neclar.
              </span>
            </p>
          </div>
        </section>

        {/* ─────── MAIN — topic + form ─────── */}
        <ContactMain />

        {/* ─────── PROMISIUNEA (yellow band) ─────── */}
        <div className="bg-accent mt-9 md:mt-[110px] relative overflow-hidden">
          <AmorphBackdrop variant="mixed" invert className="md:hidden" />
          <AmorphBackdrop variant="banner" invert className="hidden md:block" />
          <section className="max-w-[1400px] mx-auto px-5 md:px-14 py-11 md:py-[110px] md:pb-[130px] relative">
            <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-foreground/70 mb-3 md:mb-[18px]">
              PROMISIUNEA NOASTRĂ
            </div>
            <h2 className="text-[36px] md:text-[72px] font-light text-foreground leading-none tracking-[-0.8px] md:tracking-[-1.8px] m-0 mb-5 md:mb-8 max-w-[1100px]">
              <span className="md:hidden">
                răspuns în <span className="font-bold">24h</span>
                <span className="text-background">.</span>
              </span>
              <span className="hidden md:inline">
                răspuns în <span className="font-bold">24h</span>,
                <br />
                fără excepții
                <span className="text-background">.</span>
              </span>
            </h2>
            <p className="text-[14px] md:text-[19px] font-normal text-foreground leading-[1.55] max-w-[760px] m-0 mb-6 md:mb-12 opacity-85">
              <span className="md:hidden">
                Citim fiecare mesaj. Răspundem cu un email scurt — un calendar,
                o estimare sau o invitație la o întâlnire.
              </span>
              <span className="hidden md:inline">
                Citim fiecare mesaj. Răspundem cu un email scurt în prima fază
                — fie cu un calendar și o estimare, fie cu o invitație la o
                întâlnire scurtă pe Zoom sau în studio.
              </span>
            </p>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-9">
              {promiseSteps.map((v, i) => (
                <div
                  key={v.t}
                  className="pt-3.5 md:pt-[26px] border-t-2 border-foreground animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}
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

        {/* ─────── FAQ ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 md:gap-20 md:items-start">
            <div className="md:sticky md:top-10">
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
                BUN DE ȘTIUT
              </div>
              <h2 className="text-[30px] md:text-[56px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.4px] m-0">
                câteva
                <br />
                <span className="font-bold">răspunsuri rapide</span>
                <span className="text-accent">.</span>
              </h2>
            </div>
            <ServiciiFAQ items={contactFaq} />
          </div>
        </section>

        {/* ─────── CTA ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px] pb-10 md:pb-16">
          <div className="bg-dark text-platinum rounded-3xl md:rounded-[32px] p-8 md:p-[72px_56px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-center text-center md:text-left">
            <div className="text-[30px] md:text-[64px] font-light text-platinum leading-[1.05] md:leading-none tracking-[-0.5px] md:tracking-[-1.6px]">
              <span className="md:hidden">
                mai ușor decât pare<span className="text-accent">.</span>
                <br />
                <span className="font-bold text-accent">
                  scrie două rânduri
                </span>
              </span>
              <span className="hidden md:inline">
                mai ușor decât
                <br />
                pare<span className="text-accent">.</span>
                <br />
                <span className="font-bold text-accent">
                  scrie două rânduri
                </span>
                <span className="text-accent">.</span>
              </span>
            </div>
            <div className="flex flex-col gap-3.5 md:items-start items-center">
              <p className="text-[13px] md:text-[15px] font-light text-platinum/75 leading-[1.55] md:leading-[1.6] m-0">
                <span className="md:hidden">
                  Dacă încă te gândești — scrie-ne. E cel mai prost moment să
                  amâni.
                </span>
                <span className="hidden md:inline">
                  Dacă încă te gândești dacă să ne scrii sau nu — scrie-ne. E
                  cel mai prost moment să o tot amâni.
                </span>
              </p>
              <div className="md:mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="mailto:office@amorph.ro"
                  className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-accent text-foreground text-[14px] md:text-base font-normal whitespace-nowrap"
                >
                  scrie-ne <ArrowRight size={14} />
                </a>
                <a
                  href="tel:+40747089434"
                  className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full border-[1.5px] border-platinum text-platinum text-[14px] md:text-base font-normal whitespace-nowrap"
                >
                  +40 747 089 434
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
