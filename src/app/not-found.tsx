import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmorphBackdrop from "@/components/ui/AmorphBackdrop";

// Next pune singur `<meta name="robots" content="noindex">` pe răspunsurile 404.
export const metadata: Metadata = {
  title: "Pagina nu există",
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

const SUGESTII = [
  { href: "/servicii", label: "serviciile", hint: "cele șase discipline ale studioului" },
  { href: "/analiza-teren", label: "analiza de teren", hint: "afli ce poți construi, la preț fix" },
  { href: "/blog", label: "jurnalul", hint: "articole despre urbanism și autorizări" },
  { href: "/contact", label: "contact", hint: "ne scrii și îți răspundem în 24h" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 pb-12 md:pb-20">
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            ↳ EROARE 404
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end">
            <h1 className="text-[44px] md:text-[128px] font-light leading-[0.95] md:leading-[0.88] tracking-[-1px] md:tracking-[-3px] m-0">
              pagina asta
              <br />
              <span className="font-bold">nu există</span>
              <span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light leading-[1.6] m-0 md:pb-6">
              Poate linkul e vechi sau adresa are o greșeală. Nu-i nimic: de aici
              ajungi ușor înapoi la ce căutai.
            </p>
          </div>
          <div className="mt-8 md:mt-12 flex gap-3.5 items-center flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 md:px-8 py-3 md:py-3.5 rounded-full bg-dark text-platinum text-[14px] md:text-base font-normal whitespace-nowrap"
            >
              înapoi acasă <ArrowRight />
            </Link>
          </div>
        </section>

        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pb-16 md:pb-24">
          <div className="relative overflow-hidden rounded-[20px] md:rounded-3xl bg-accent">
            <AmorphBackdrop variant="mixed" className="opacity-20" />
            <div className="relative p-6 md:p-12">
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-foreground/70 mb-4 md:mb-8">
                POATE CĂUTAI
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 list-none m-0 p-0">
                {SUGESTII.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="group flex items-center justify-between gap-4 bg-platinum rounded-2xl border-[1.5px] md:border-2 border-dark-card px-5 py-4 md:px-7 md:py-6 transition-all duration-300 hover:-translate-y-1"
                    >
                      <span>
                        <span className="block text-[20px] md:text-[28px] font-bold leading-tight text-foreground">
                          {s.label}
                        </span>
                        <span className="block text-[13px] md:text-[15px] font-light text-foreground/70 mt-1">
                          {s.hint}
                        </span>
                      </span>
                      <span className="shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full bg-foreground text-accent flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight size={16} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
