import AmorphBackdrop from "@/components/ui/AmorphBackdrop";

const ArrowRight = ({ size = 13 }: { size?: number }) => (
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

// Bandă „buletin lunar" full-bleed marigold. Vizuală în faza 1 (fără backend).
export default function NewsletterBand() {
  return (
    <div className="bg-accent relative overflow-hidden mt-10 md:mt-[88px]">
      <AmorphBackdrop variant="mixed" invert className="md:hidden" />
      <AmorphBackdrop variant="banner" invert className="hidden md:block" />
      <section className="max-w-[1400px] mx-auto px-5 md:px-14 py-11 md:py-[96px] md:pb-[110px] relative">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-8 md:gap-14 md:items-end">
          <div>
            <div className="text-[11px] md:text-[13px] tracking-[0.22em] md:tracking-[0.25em] text-foreground/70">
              BULETIN LUNAR
            </div>
            <h2 className="text-[36px] md:text-[80px] font-light text-foreground leading-[0.95] tracking-[-1px] md:tracking-[-2px] m-0 mt-3.5 md:mt-5 max-w-[700px]">
              încă un text,
              <br />o dată pe <span className="font-bold">lună</span>
              <span className="text-background">.</span>
            </h2>
            <p className="text-[13px] md:text-[17px] font-light text-foreground/85 leading-[1.55] md:leading-[1.6] m-0 mt-3.5 md:mt-6 max-w-[300px] md:max-w-[480px]">
              Nu te spamăm. Nu vindem datele. Doar un email când scoatem ceva
              nou.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-1 bg-background rounded-full p-1 md:p-1.5 border-[1.5px] border-foreground">
              <label htmlFor="newsletter-email" className="sr-only">
                email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="email"
                className="flex-1 min-w-0 px-4 md:px-[22px] py-2.5 md:py-3.5 bg-transparent border-none outline-none text-[14px] md:text-base text-foreground font-light placeholder:text-muted"
              />
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 md:px-7 py-2.5 md:py-3.5 rounded-full bg-foreground text-platinum border-none text-[13px] md:text-[15px] font-normal whitespace-nowrap cursor-pointer"
              >
                mă abonez <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
