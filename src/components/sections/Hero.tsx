import Link from "next/link";

const services = [
  {
    title: "planificare urbană",
    href: "/servicii/planificare-urbana",
    description: "Procesul de planificare care materializează viziunea urbană.",
  },
  {
    title: "strategii urbane",
    href: "/servicii/strategii-urbane",
    description: "Analize complexe și strategii pe termen lung.",
  },
  {
    title: "regenerare urbană",
    href: "/servicii/regenerare-urbana",
    description: "Transformarea zonelor urbane prin intervenții specifice.",
  },
  {
    title: "design interior",
    href: "/servicii/design-interior",
    description: "Planificarea spațiului cu atenție la detalii.",
  },
];

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Service Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group relative overflow-hidden rounded-2xl bg-dark aspect-[1/2.5] flex flex-col justify-end p-6 hover:shadow-xl transition-shadow"
          >
            {/* Decorative amorphic shape */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/2 w-32 h-32 bg-accent rounded-full blur-2xl group-hover:scale-110 transition-transform" />
            </div>
            <div className="relative z-10">
              <p className="text-background/70 text-xs mb-2 [writing-mode:vertical-lr] rotate-180 absolute -left-1 top-0 h-full">
                {service.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
