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
      <div className="flex justify-center gap-3 md:gap-6 items-start">
        {services.map((service) => (
          <div
            key={service.title}
            className={`flex items-center gap-1 ${service.offsetUp ? "" : "mt-8 md:mt-16"}`}
          >
            {/* Vertical text label */}
            <p className="text-xs md:text-lg font-light text-foreground [writing-mode:vertical-lr] rotate-180 whitespace-nowrap">
              {service.title}
            </p>

            {/* Service card */}
            <Link href={service.href} className="group block">
              <div className="w-[45px] md:w-[125px] h-[200px] md:h-[550px] rounded-[12px] md:rounded-[25px] border-2 border-dark-card overflow-hidden relative">
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
    </section>
  );
}
