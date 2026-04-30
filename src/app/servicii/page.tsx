import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmorphBackdrop from "@/components/ui/AmorphBackdrop";
import ServiciiFAQ from "@/components/sections/ServiciiFAQ";
import {
  services,
  serviceCombos,
  processSteps,
  serviciiFaq,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Șase discipline, o singură conversație. Planificare urbană, strategii urbane, regenerare urbană, design interior, graphic design și dezvoltare web.",
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

export default function Servicii() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ─────── HERO ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 pb-10 md:pb-16">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ SERVICII
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end">
            <h1 className="text-[44px] md:text-[128px] font-light leading-[0.95] md:leading-[0.88] tracking-[-1px] md:tracking-[-3px] m-0">
              șase discipline,
              <br />
              <span className="font-bold">o singură conversație</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light leading-[1.6] m-0 md:pb-6">
              De la planificare urbanistică pe sute de hectare până la
              kerning-ul unui logo. Echipa rămâne aceeași — doar uneltele se
              schimbă.
            </p>
          </div>
        </section>

        {/* ─────── SIX DOMAINS ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-3 md:pt-8">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-6">
            CELE ȘASE DOMENII
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] md:gap-5">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/servicii/${s.slug}`}
                className="group relative bg-platinum rounded-[20px] md:rounded-3xl border-[1.5px] md:border-2 border-dark-card overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-accent"
              >
                <div className="relative h-[140px] md:h-[220px] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.title} ${s.subtitle}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="md:hidden absolute top-2.5 left-3 text-[10px] text-white tracking-[0.18em] uppercase opacity-85 mix-blend-difference">
                    {s.group}
                  </div>
                </div>
                <div className="p-[16px_18px_18px] md:p-[24px_28px_28px] flex flex-col gap-2 md:gap-3 flex-1">
                  <div className="hidden md:flex items-baseline justify-between">
                    <span className="text-[11px] tracking-[0.22em] text-muted">
                      {s.n}
                    </span>
                    <span className="text-[11px] tracking-[0.18em] text-muted uppercase">
                      {s.group}
                    </span>
                  </div>
                  <span className="md:hidden text-[10px] tracking-[0.22em] text-muted">
                    {s.n}
                  </span>
                  <div className="text-[22px] md:text-[30px] font-normal text-foreground leading-[0.95] tracking-[-0.3px] md:tracking-[-0.5px]">
                    <span className="md:hidden">
                      {s.title}{" "}
                      <span className="font-bold">{s.subtitle}</span>
                      <span className="text-accent">.</span>
                    </span>
                    <span className="hidden md:inline">
                      {s.title}
                      <br />
                      <span className="font-bold">{s.subtitle}</span>
                      <span className="text-accent">.</span>
                    </span>
                  </div>
                  <div className="hidden md:block text-[13px] font-light text-muted tracking-[0.05em]">
                    {s.short}
                  </div>
                  <div className="text-[12px] md:text-[14px] font-light text-foreground leading-[1.55] md:mt-1">
                    {s.description}
                  </div>
                  <div className="mt-3 md:mt-auto md:pt-3.5 flex items-center gap-1.5 md:gap-2 text-[12px] md:text-[13px] text-foreground">
                    <span>află mai mult</span>
                    <ArrowRight size={11} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─────── COMBOS ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            COMBINAȚII RECOMANDATE
          </div>
          <h2 className="text-[30px] md:text-[64px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px] m-0 mb-3 md:mb-4">
            două discipline,
            <br />
            <span className="font-bold">aceeași echipă</span>
            <span className="text-accent">.</span>
          </h2>
          <p className="text-[13px] md:text-[17px] font-light text-muted leading-[1.55] md:leading-[1.6] max-w-[720px] m-0 mb-[22px] md:mb-12">
            <span className="md:hidden">
              Cele mai cerute combinații — recomandate la prima conversație.
            </span>
            <span className="hidden md:inline">
              Cele mai bune rezultate apar când serviciile lucrează împreună.
              Iată cele mai cerute combinații — îți recomandăm la prima
              conversație care e potrivită pentru tine.
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            {serviceCombos.map((c) => (
              <div
                key={c.n}
                className="p-5 md:p-9 bg-background rounded-[18px] md:rounded-3xl border-[1.5px] md:border-2 border-dark-card relative transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <div className="flex items-start justify-between mb-3 md:mb-5">
                  <div className="text-[10px] md:text-[11px] tracking-[0.22em] text-muted">
                    {c.n}
                  </div>
                  <div className="flex gap-1.5 md:gap-2 flex-wrap justify-end">
                    {c.pair.map((p) => (
                      <span
                        key={p}
                        className="text-[9px] md:text-[11px] px-2 md:px-2.5 py-[3px] md:py-1 rounded-full bg-accent text-foreground font-normal"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-[18px] md:text-[26px] font-medium text-foreground mb-2 md:mb-3.5 tracking-[-0.3px] md:tracking-[-0.5px] leading-[1.2] md:leading-[1.15]">
                  {c.title}
                </div>
                <div className="text-[13px] md:text-[15px] font-light text-foreground leading-[1.55] md:leading-[1.6]">
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─────── PROCESS ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
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

          {/* Mobile: vertical stack */}
          <div className="md:hidden flex flex-col gap-4">
            {processSteps.map((p) => (
              <div key={p.t} className="flex gap-3.5">
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

          {/* Desktop: 4-col with dashed connector */}
          <div className="hidden md:grid relative grid-cols-4 gap-8">
            <div
              className="absolute top-7 left-[30px] right-[30px] h-0.5 border-t-2 border-dashed border-dark-card"
              aria-hidden
            />
            {processSteps.map((p) => (
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

        {/* ─────── NU EȘTI SIGUR — yellow band ─────── */}
        <div className="bg-accent mt-10 md:mt-[110px] relative overflow-hidden">
          <AmorphBackdrop invert />
          <section className="max-w-[1400px] mx-auto px-5 md:px-14 py-11 md:py-[110px] md:pb-[130px] relative">
            <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-foreground/70 mb-3 md:mb-[18px]">
              NU EȘTI SIGUR CE-ȚI TREBUIE?
            </div>
            <h2 className="text-[32px] md:text-[72px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.8px] m-0 mb-4 md:mb-8 max-w-[1100px]">
              <span className="md:hidden">
                scrie-ne{" "}
                <span className="font-bold">brief-ul în 2 propoziții</span>
                <span className="text-background">.</span>
              </span>
              <span className="hidden md:inline">
                scrie-ne{" "}
                <span className="font-bold">brief-ul în 2 propoziții</span>,
                <br />
                găsim noi serviciul potrivit
                <span className="text-background">.</span>
              </span>
            </h2>
            <p className="text-[14px] md:text-[19px] text-foreground/85 leading-[1.55] max-w-[760px] m-0 mb-[22px] md:mb-10">
              <span className="md:hidden">
                Descrie problema pe scurt. Îți răspundem cu serviciul (sau
                combinația) potrivită, plus calendar și buget aproximativ.
                Răspuns în maxim 24h.
              </span>
              <span className="hidden md:inline">
                Cele șase domenii pot părea multe — știm. Dacă nu ești sigur
                unde se încadrează problema ta, descrie-o pe scurt și îți
                răspundem cu serviciul (sau combinația) potrivită, plus o
                estimare brută de calendar și buget. Răspuns în maxim 24h.
              </span>
            </p>
            <div className="flex gap-3.5 items-center flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-dark text-platinum text-[14px] md:text-base font-normal whitespace-nowrap"
              >
                scrie-ne brief-ul <ArrowRight size={14} />
              </Link>
              <span className="hidden md:inline text-[14px] text-foreground/70">
                sau sună la +40 747 089 434
              </span>
            </div>
          </section>
        </div>

        {/* ─────── FAQ ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-6 md:gap-20 items-start">
            <div className="md:sticky md:top-10">
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
                ÎNTREBĂRI FRECVENTE
              </div>
              <h2 className="text-[30px] md:text-[56px] font-light text-foreground leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.4px] m-0">
                <span className="md:hidden">
                  ce ne <span className="font-bold">întrebați des</span>
                  <span className="text-accent">.</span>
                </span>
                <span className="hidden md:inline">
                  ce ne
                  <br />
                  <span className="font-bold">întrebați des</span>
                  <span className="text-accent">.</span>
                </span>
              </h2>
            </div>
            <ServiciiFAQ items={serviciiFaq} />
          </div>
        </section>

        {/* ─────── CTA ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[110px] pb-10 md:pb-16">
          <div className="bg-dark text-platinum rounded-3xl md:rounded-[32px] p-8 md:p-[72px_56px] grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-center text-center md:text-left">
            <div className="text-[32px] md:text-[64px] font-light text-platinum leading-[1.05] md:leading-none tracking-[-0.6px] md:tracking-[-1.6px]">
              gata să
              <br />
              <span className="font-bold text-accent">începem</span>
              <span className="text-accent">?</span>
            </div>
            <div className="flex flex-col gap-3.5 md:items-start items-center">
              <p className="text-[13px] md:text-[15px] font-light text-platinum/75 leading-[1.55] md:leading-[1.6] m-0">
                Spune-ne ce ai în cap. Răspundem în maxim 24h, indiferent dacă
                proiectul e mare, mic sau încă neclar.
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
