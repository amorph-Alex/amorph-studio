export type ServiceGroup = "oraș" | "spațiu" | "brand";

export interface Service {
  slug: string;
  n: string;
  title: string;
  subtitle: string;
  short: string;
  description: string;
  heroImage: string;
  image: string;
  group: ServiceGroup;
}

export const services: Service[] = [
  {
    slug: "planificare-urbana",
    n: "01",
    title: "planificare",
    subtitle: "urbană",
    short: "PUZ, PUD, analize, documentații",
    description:
      "Întregul proces de planificare urbană reprezintă pasul incipient în construirea unei clădiri. Se materializează prin analize, studii și documentații specifice precum P.U.Z. și P.U.D.",
    heroImage: "/images/hero-planificare.png",
    image: "/images/service-urbanism.png",
    group: "oraș",
  },
  {
    slug: "strategii-urbane",
    n: "02",
    title: "strategii",
    subtitle: "urbane",
    short: "mobilitate, dezvoltare, politici",
    description:
      "Strategiile implică analize detaliate, studii complexe și documentații specifice care vizează planificarea pe termen lung — regenerare urbană, planuri de mobilitate, politici de dezvoltare.",
    heroImage: "/images/hero-strategii.png",
    image: "/images/service-strategii.png",
    group: "oraș",
  },
  {
    slug: "regenerare-urbana",
    n: "03",
    title: "regenerare",
    subtitle: "urbană",
    short: "spații publice, infrastructură verde",
    description:
      "Transformarea zonelor din mediul urban începe prin reameanjarea spațiilor publice, crearea de infrastructură verde și revitalizarea țesutului social.",
    heroImage: "/images/hero-regenerare.png",
    image: "/images/service-regenerare.png",
    group: "oraș",
  },
  {
    slug: "design-interior",
    n: "04",
    title: "design",
    subtitle: "interior",
    short: "concept, randări, proiect tehnic",
    description:
      "Creăm spații care reflectă personalitatea și nevoile fiecărui client. De la planificarea spațiului și randări fotorealistice, până la proiectul tehnic și consultanță pe execuție.",
    heroImage: "/images/hero-interior.png",
    image: "/images/service-interior.png",
    group: "spațiu",
  },
  {
    slug: "graphic-design",
    n: "05",
    title: "graphic",
    subtitle: "design",
    short: "identitate, brand, ilustrație",
    description:
      "Construim identități vizuale care comunică eficient și lasă o impresie de durată. Fiecare proiect grafic trece printr-un proces riguros de analiză, concept și execuție.",
    heroImage: "/images/hero-graphic.png",
    image: "/images/service-grafica.png",
    group: "brand",
  },
  {
    slug: "dezvoltare-web",
    n: "06",
    title: "dezvoltare",
    subtitle: "web",
    short: "site-uri, app-uri, experiențe",
    description:
      "Construim experiențe digitale performante — de la site-uri de prezentare la aplicații web complexe. Fiecare proiect e optimizat pentru viteză, accesibilitate și UX.",
    heroImage: "/images/hero-dev.png",
    image: "/images/service-dev.png",
    group: "brand",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export interface ServiceCombo {
  n: string;
  title: string;
  body: string;
  pair: [string, string];
}

export const serviceCombos: ServiceCombo[] = [
  {
    n: "01",
    title: "PUZ + branding teritorial",
    body: "Pentru investitori și administrații care lansează zone noi. Documentație urbanistică legală + identitatea vizuală a noului cartier — același limbaj cap-coadă.",
    pair: ["planificare urbană", "graphic design"],
  },
  {
    n: "02",
    title: "design interior + grafică marketing",
    body: "Pentru spații care comunică (cafenele, hoteluri, clinici, birouri). Spațiul propriu-zis + meniuri, signage, materiale de promovare — o singură estetică.",
    pair: ["design interior", "graphic design"],
  },
  {
    n: "03",
    title: "site + identitate vizuală",
    body: "Pentru companii care pornesc sau își refac brand-ul. Logo, paletă, sistem tipografic + site care le pune în valoare. Lansăm cu un singur calendar.",
    pair: ["graphic design", "dezvoltare web"],
  },
  {
    n: "04",
    title: "regenerare + strategie",
    body: "Pentru autorități și ONG-uri. Planul de regenerare al unui spațiu public + strategia de implementare pe 5-10 ani — împreună, nu separat.",
    pair: ["regenerare urbană", "strategii urbane"],
  },
];

export interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    t: "conversație",
    d: "Email, telefon, întâlnire. Te ascultăm, înțelegem contextul, identificăm serviciul (sau combinația) potrivită.",
  },
  {
    n: "02",
    t: "propunere",
    d: "Ofertă cu pași clari, calendar realist, buget transparent. Niciun cost ascuns, niciun „depinde\".",
  },
  {
    n: "03",
    t: "lucru",
    d: "Update-uri săptămânale sau bi-săptămânale. Iterăm până când totul e exact cum trebuie.",
  },
  {
    n: "04",
    t: "livrare",
    d: "Predăm tot — surse, documentație, instructaj. Și rămânem disponibili după.",
  },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const serviciiFaq: FaqItem[] = [
  {
    q: "Cât durează un proiect, în medie?",
    a: "Depinde de tipul proiectului. Un logo poate dura 2-4 săptămâni, un PUZ 6-12 luni (în mare parte timp de avizare administrativă), un site 4-8 săptămâni, un design interior 2-6 luni. La prima conversație îți dăm un calendar realist, nu unul optimist.",
  },
  {
    q: "Lucrați și cu firme mici sau persoane fizice?",
    a: "Da. Avem proiecte de la apartamente private și brand-uri lansate dintr-un garaj, până la planificare teritorială pentru orașe. Nu există „prea mic\". Dacă bugetul e modest, îți spunem cinstit ce putem face cu el și ce nu.",
  },
  {
    q: "Faceți și consultanță, fără execuție?",
    a: "Da. Uneori clientul are nevoie doar de o părere expertă înainte să decidă o direcție — un audit pe brand-ul existent, o opinie pe un PUZ în lucru la altcineva, o sesiune de discovery pentru un site. Plătești pe oră sau pe ședință, fără angajament mai departe.",
  },
  {
    q: "Care e bugetul minim?",
    a: "Nu avem un minim fix — depinde mult de complexitate. Pentru orientare: un logo simplu pleacă de la ~3.000€, un site de prezentare de la ~5.000€, un design interior pentru un apartament de la ~50€/mp pentru proiect. Dă-ne brief-ul, îți dăm o ofertă în 48h.",
  },
  {
    q: "Ce se întâmplă dacă nu sunt mulțumit de un draft?",
    a: "Iterăm până ești. Toate ofertele includ runde de feedback (de obicei 2-3, în funcție de tipul proiectului). Dacă după rundele incluse mai e nevoie, discutăm — fără facturi-surpriză.",
  },
];
