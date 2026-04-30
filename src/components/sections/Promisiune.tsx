import AmorphBackdrop from "@/components/ui/AmorphBackdrop";

const promises = [
  {
    n: "01",
    t: "fără cutii",
    d: "Nu te pasăm de la „echipa de urbanism\" la „echipa de grafică\". Aceiași oameni țin firul de la primul brief până la livrare.",
  },
  {
    n: "02",
    t: "răspuns în 24h",
    d: "La orice mesaj, indiferent dacă e o întrebare scurtă sau un proiect complex. Promisiune simplă, ținută strict.",
  },
  {
    n: "03",
    t: "transparență totală",
    d: "Buget clar, calendar realist, update-uri săptămânale. Spunem ce putem și ce nu putem face — fără promisiuni vagi.",
  },
];

export default function Promisiune() {
  return (
    <div className="bg-accent relative overflow-hidden md:mt-16">
      {/* Mobile backdrop */}
      <AmorphBackdrop variant="mixed" invert className="md:hidden" />
      {/* Desktop backdrop */}
      <AmorphBackdrop variant="banner" invert className="hidden md:block" />

      <section className="max-w-[1400px] mx-auto px-5 md:px-14 py-11 md:py-[110px] md:pb-[130px] relative">
        <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-foreground/70 mb-3 md:mb-[18px]">
          PROMISIUNEA NOASTRĂ
        </div>
        <h2 className="text-[36px] md:text-[72px] font-light text-foreground leading-none tracking-[-0.8px] md:tracking-[-1.8px] m-0 mb-6 md:mb-14 max-w-[900px]">
          ce primești
          <br />
          când <span className="font-bold">ne scrii</span>
          <span className="text-background">.</span>
        </h2>

        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-9">
          {promises.map((v) => (
            <div
              key={v.t}
              className="pt-3.5 md:pt-[26px] border-t-2 border-foreground"
            >
              <div className="text-[11px] md:text-[13px] font-medium text-foreground tracking-[0.2em] opacity-65">
                {v.n}
              </div>
              <div className="text-[22px] md:text-[30px] font-semibold text-foreground mt-2 md:mt-3.5 md:tracking-[-0.5px]">
                {v.t}
              </div>
              <div className="text-[13px] md:text-[15px] font-normal text-foreground mt-2 md:mt-3.5 leading-[1.55] opacity-85 md:opacity-85">
                {v.d}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
