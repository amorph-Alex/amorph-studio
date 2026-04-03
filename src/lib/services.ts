export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  heroColor: string;
}

export const services: Service[] = [
  {
    slug: "planificare-urbana",
    title: "planificare",
    subtitle: "urbană",
    description:
      "Procesul de planificare urbană reprezintă pasul esențial în ceea ce privește dezvoltarea unei noi clădiri. Viziunea se materializează prin studii și documentații precum p.u.z. și p.u.d.",
    bulletPoints: [
      "Plan Urbanistic Zonal (PUZ)",
      "Plan Urbanistic de Detaliu (PUD)",
      "Certificat de urbanism",
      "Documentații tehnice",
    ],
    heroColor: "from-amber-600 via-gray-800 to-gray-900",
  },
  {
    slug: "strategii-urbane",
    title: "strategii",
    subtitle: "urbane",
    description:
      "Strategiile implică analize detaliate, studii complexe și documentații specifice care vizează planificarea pe termen lung, cum ar fi regenerare urbană, mobilitate și politici de dezvoltare economică și socială.",
    bulletPoints: [
      "Analize teritoriale",
      "Strategii de dezvoltare",
      "Planuri de mobilitate",
      "Politici urbane",
    ],
    heroColor: "from-yellow-500 via-orange-600 to-gray-900",
  },
  {
    slug: "regenerare-urbana",
    title: "regenerare",
    subtitle: "urbană",
    description:
      "Transformarea zonelor din mediul urban începe prin implementarea unor intervenții specifice, cum ar fi reamenajarea spațiilor publice, crearea de infrastructură verde și altele. Prin aceste inițiative, se urmărește revitalizarea țesutului urban.",
    bulletPoints: [
      "Reamenajare spații publice",
      "Infrastructură verde",
      "Revitalizare urbană",
      "Proiecte de regenerare",
    ],
    heroColor: "from-red-500 via-orange-500 to-gray-900",
  },
  {
    slug: "design-interior",
    title: "design",
    subtitle: "interior",
    description:
      "Planificarea spațiului interior cu atenție la fiecare detaliu. Oferim soluții complete de la concept până la execuție.",
    bulletPoints: [
      "Planificarea spațiului",
      "Randări fotorealistice",
      "Proiect tehnic",
      "Consultanță pe perioada execuției",
    ],
    heroColor: "from-yellow-400 via-amber-600 to-gray-900",
  },
  {
    slug: "graphic-design",
    title: "graphic",
    subtitle: "design",
    description:
      "Servicii complete de design grafic, de la analiză și concept până la execuție. Creăm identități vizuale puternice și materiale grafice care comunică eficient.",
    bulletPoints: [
      "Identitate vizuală",
      "Branding",
      "Materiale de marketing",
      "Design digital",
    ],
    heroColor: "from-red-600 via-yellow-500 to-gray-900",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
