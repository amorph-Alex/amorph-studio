export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
}

export const services: Service[] = [
  {
    slug: "planificare-urbana",
    title: "planificare",
    subtitle: "urbană",
    description:
      "întregul proces de planificare urbană reprezintă pasul incipient în ceea ce privește construirea unei noi clădiri. acesta se materializează prin analize, studii și documentații specifice precum p.u.z. și p.u.d.",
    heroImage: "/images/hero-planificare.png",
  },
  {
    slug: "strategii-urbane",
    title: "strategii",
    subtitle: "urbane",
    description:
      "strategiile implică analize detaliate, studii complexe și documentații specifice care vizează planificarea pe termen lung, cum ar fi strategii de regenerare urbană, planuri de mobilitate și politici de dezvoltare economică și socială",
    heroImage: "/images/hero-strategii.png",
  },
  {
    slug: "regenerare-urbana",
    title: "regenerare",
    subtitle: "urbană",
    description:
      "transformarea zonelor din mediul urban încep prin implementarea unor intervenții specifice, cum ar fi reameanjarea spațiilor publice, crearea de infrastructură verde și altele. prin aceste inițiative, se urmărește revitalizarea țesutului",
    heroImage: "/images/hero-regenerare.png",
  },
  {
    slug: "design-interior",
    title: "design",
    subtitle: "interior",
    description:
      "creăm spații care reflectă personalitatea și nevoile fiecărui client. de la planificarea spațiului și randări fotorealistice, până la proiectul tehnic și consultanță pe întreaga perioadă a execuției, fiecare detaliu contează",
    heroImage: "/images/hero-interior.png",
  },
  {
    slug: "graphic-design",
    title: "graphic",
    subtitle: "design",
    description:
      "construim identități vizuale care comunică eficient și lasă o impresie de durată. fiecare proiect grafic trece printr-un proces riguros de analiză, concept și execuție, rezultând în materiale care definesc și întăresc brandul",
    heroImage: "/images/hero-graphic.png",
  },
  {
    slug: "dezvoltare-web",
    title: "dezvoltare",
    subtitle: "web",
    description:
      "construim experiențe digitale performante, de la site-uri de prezentare la aplicații web complexe. fiecare proiect este optimizat pentru viteză, accesibilitate și o experiență de utilizare excepțională pe orice dispozitiv",
    heroImage: "/images/hero-dev.png",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
