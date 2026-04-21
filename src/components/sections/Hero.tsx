import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "planificare urbană",
    href: "/servicii/planificare-urbana",
    image: "/images/service-urbanism.png",
    offsetUp: true,
  },
  {
    title: "strategii urbane",
    href: "/servicii/strategii-urbane",
    image: "/images/service-strategii.png",
    offsetUp: false,
  },
  {
    title: "regenerare urbană",
    href: "/servicii/regenerare-urbana",
    image: "/images/service-regenerare.png",
    offsetUp: true,
  },
  {
    title: "design interior",
    href: "/servicii/design-interior",
    image: "/images/service-interior.png",
    offsetUp: false,
  },
  {
    title: "design grafic",
    href: "/servicii/graphic-design",
    image: "/images/service-grafica.png",
    offsetUp: true,
  },
  {
    title: "dezvoltare web",
    href: "/servicii/dezvoltare-web",
    image: "/images/service-dev.png",
    offsetUp: false,
  },
];

export default function Hero() {
  return (
    <section className="max-w-[1440px] mx-auto px-5 py-8 md:py-12">
      {/* Mobile intro text */}
      <div className="md:hidden mb-6 px-0">
        <h1 className="text-[34px] font-light leading-[1.05] text-foreground tracking-[-0.5px]">
          studio multi-
          <br />
          disciplinar
          <br />
          <span className="font-bold">de design</span>
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-4 text-sm font-light text-foreground leading-[1.55] max-w-[320px]">
          creăm spații, identități și experiențe care schimbă contextul în care
          trăim și lucrăm.
        </p>
      </div>

      {/* Desktop: 6 vertical cards with rotated text labels */}
      <div className="hidden md:flex justify-center gap-6 items-start">
        {services.map((service) => (
          <div
            key={service.title}
            className={`flex items-center gap-1 ${service.offsetUp ? "" : "mt-16"}`}
          >
            <p className="text-lg font-light text-foreground [writing-mode:vertical-lr] rotate-180 whitespace-nowrap">
              {service.title}
            </p>
            <Link href={service.href} className="group block">
              <div className="w-[125px] h-[550px] rounded-[25px] border-2 border-dark-card overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Mobile: full-width stacked cards */}
      <div className="md:hidden flex flex-col gap-3.5">
        {services.map((service, i) => (
          <Link key={service.title} href={service.href} className="group block">
            <div className="relative h-[168px] rounded-[22px] overflow-hidden border border-dark-card">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/55" />
              {/* Index */}
              <div className="absolute top-3 left-3.5 text-[11px] text-white font-light tracking-[0.12em] opacity-85">
                0{i + 1}
              </div>
              {/* Title + arrow */}
              <div className="absolute left-[18px] right-[18px] bottom-4 flex items-end justify-between">
                <div className="text-white text-[22px] font-normal leading-tight">
                  {service.title}
                </div>
                <div className="w-[38px] h-[38px] rounded-full bg-accent flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d2d2d" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
