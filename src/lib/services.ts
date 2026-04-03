export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  heroImage: string;
  isBulletList: boolean;
}

export const services: Service[] = [
  {
    slug: "planificare-urbana",
    title: "planificare",
    subtitle: "urbană",
    description:
      "întregul proces de planificare urbană reprezintă pasul incipient în ceea ce privește construirea unei noi clădiri. acesta se materializează prin analize, studii și documentații specifice precum p.u.z. și p.u.d.",
    bulletPoints: [],
    heroImage: "/images/hero-planificare.png",
    isBulletList: false,
  },
  {
    slug: "strategii-urbane",
    title: "strategii",
    subtitle: "urbane",
    description:
      "strategiile implică analize detaliate, studii complexe și documentații specifice care vizează planificarea pe termen lung, cum ar fi strategii de regenerare urbană, planuri de mobilitate și politici de dezvoltare economică și socială",
    bulletPoints: [],
    heroImage: "/images/hero-strategii.png",
    isBulletList: false,
  },
  {
    slug: "regenerare-urbana",
    title: "regenerare",
    subtitle: "urbană",
    description:
      "transformarea zonelor din mediul urban încep prin implementarea unor intervenții specifice, cum ar fi reameanjarea spațiilor publice, crearea de infrastructură verde și altele. prin aceste inițiative, se urmărește revitalizarea țesutului",
    bulletPoints: [],
    heroImage: "/images/hero-regenerare.png",
    isBulletList: false,
  },
  {
    slug: "design-interior",
    title: "design",
    subtitle: "interior",
    description: "",
    bulletPoints: [
      "planificarea spațiului",
      "randări fotorealistice",
      "proiect tehnic",
      "constultanță pe perioada execuției",
    ],
    heroImage: "/images/hero-interior.png",
    isBulletList: true,
  },
  {
    slug: "graphic-design",
    title: "graphic",
    subtitle: "design",
    description: "",
    bulletPoints: ["analiza"],
    heroImage: "/images/hero-graphic.png",
    isBulletList: true,
  },
  {
    slug: "dezvoltare-web",
    title: "dezvoltare",
    subtitle: "web",
    description: "",
    bulletPoints: [],
    heroImage: "/images/hero-dev.png",
    isBulletList: false,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
