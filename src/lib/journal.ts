// Sursa unică de adevăr pentru articolele de jurnal (blog).
// Faza 1: conținut tipizat în repo. Un articol nou = o intrare aici + redeploy.
// Structura `ContentBlock` acoperă exact elementele din designul editorial:
// lead cu drop-cap, titluri H2, citat pe fundal închis, liste de definiții, liste.

export const CATEGORIES = [
  "toate",
  "urbanism",
  "strategii",
  "regenerare",
  "interior",
  "grafică",
  "web",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type ContentBlock =
  | { kind: "lead"; text: string }
  | { kind: "heading"; id: string; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "quote"; text: string; label?: string }
  | { kind: "deflist"; items: { term: string; def: string }[] }
  | { kind: "list"; items: string[] };

export interface JournalPost {
  n: string;
  slug: string;
  title: string;
  /** Titlu pentru masthead-ul articolului, cu accent pe un cuvânt; HTML simplu (<em>). */
  titleHtml?: string;
  excerpt: string;
  cat: Exclude<Category, "toate">;
  read: string;
  /** Dată scurtă pentru carduri, ex. „15 feb 2026". */
  date: string;
  /** Dată lungă pentru masthead-ul articolului, ex. „15 februarie 2026". */
  dateLong: string;
  author: string;
  authorRole: string;
  authorBio: string;
  featured: boolean;
  image: string;
  heroCaption: string;
  tags: string[];
  content: ContentBlock[];
}

const THUMB = "/images/blog-thumbnail.png";

const ANDRA = {
  author: "Andra M.",
  authorRole: "Arhitect-urbanist",
  authorBio:
    "Arhitect-urbanist la Amorph. Scrie despre reglementări ca și cum ar fi istorii scurte. Crede că orice document administrativ are, undeva, un argument estetic.",
};
const VLAD = {
  author: "Vlad R.",
  authorRole: "Urbanist · strategie",
  authorBio:
    "Strateg urban la Amorph. Îl interesează cum deciziile administrative se traduc în viața de zi cu zi a unui cartier.",
};
const MARIA = {
  author: "Maria D.",
  authorRole: "Designer de interior",
  authorBio:
    "Designer de interior la Amorph. Crede că un spațiu bun se simte înainte să se vadă.",
};

export const posts: JournalPost[] = [
  {
    n: "01",
    slug: "ce-este-un-certificat-de-urbanism",
    title: "Ce este un certificat de urbanism?",
    titleHtml: 'Ce este un <em>certificat</em><br/>de urbanism<span class="accent">?</span>',
    excerpt:
      "Certificatul de urbanism este un act informativ care stabilește condițiile necesare pentru realizarea unei investiții.",
    cat: "urbanism",
    read: "4 min",
    date: "15 feb 2026",
    dateLong: "15 februarie 2026",
    ...ANDRA,
    featured: false,
    image: THUMB,
    heroCaption: "↳ primăria Cluj-Napoca, ghișeu urbanism, 2025",
    tags: ["#urbanism", "#ghid", "#birocrație-utilă", "#cluj", "#prima-casă"],
    content: [
      {
        kind: "lead",
        text: "Certificatul de urbanism este un act informativ, emis de autoritățile administrației publice locale, care stabilește condițiile necesare pentru realizarea unei investiții imobiliare. Pentru cineva care se gândește pentru prima oară la o casă sau la o extindere, e primul document serios care schimbă conversația din „mi-ar plăcea” în „e posibil”.",
      },
      { kind: "heading", id: "rol", text: "Ce rol are" },
      {
        kind: "paragraph",
        text: "Acesta nu conferă dreptul de a executa lucrări de construcții, ci informează solicitantul cu privire la regimul juridic, economic și tehnic al terenului și al construcțiilor existente.",
      },
      {
        kind: "paragraph",
        text: "Certificatul de urbanism este obligatoriu pentru obținerea autorizației de construire și trebuie solicitat înainte de începerea oricăror lucrări.",
      },
      {
        kind: "quote",
        text: "Un document care nu construiește nimic — dar fără el, nu construiești nimic.",
        label: "— REGULA 1",
      },
      { kind: "heading", id: "continut", text: "Ce conține concret" },
      {
        kind: "paragraph",
        text: "Regimul juridic, economic și tehnic al terenului. În traducere directă, fără jargon administrativ:",
      },
      {
        kind: "deflist",
        items: [
          {
            term: "regim juridic",
            def: "cine e proprietar, ce servituți există, dacă terenul are interdicție temporară de construire.",
          },
          {
            term: "regim economic",
            def: "destinația terenului (locuit, comercial, mixt), valori orientative de impozit.",
          },
          {
            term: "regim tehnic",
            def: "POT, CUT, înălțime maximă, retrageri obligatorii, ce avize ai nevoie mai departe.",
          },
        ],
      },
      { kind: "heading", id: "cand", text: "Când ai nevoie de el" },
      {
        kind: "paragraph",
        text: "Înainte de autorizația de construire. Înainte de P.U.Z. sau P.U.D. Și — recomandat — înainte să cumperi un teren, ca să știi ce îți permite de fapt.",
      },
      {
        kind: "paragraph",
        text: "Răspunsul vine, de regulă, în 30 de zile lucrătoare. Costul e modest, raportat la deciziile pe care le ia în locul tău.",
      },
      { kind: "heading", id: "pasi", text: "Pașii următori" },
      {
        kind: "paragraph",
        text: "Cu certificatul în mână, conversația se mută din „dacă” în „cum”. De aici începe partea cu adevărat creativă — proiect tehnic, avize, autorizație, șantier. Dar asta e altă poveste, pe care o scriem separat.",
      },
    ],
  },
  {
    n: "02",
    slug: "ce-este-un-plan-urbanistic-zonal",
    title: "Ce este un Plan Urbanistic Zonal?",
    titleHtml: 'Ce este un <em>Plan Urbanistic</em><br/>Zonal<span class="accent">?</span>',
    excerpt:
      "Planul Urbanistic Zonal (PUZ) este un instrument de planificare urbană care reglementează o zonă specifică.",
    cat: "urbanism",
    read: "7 min",
    date: "02 feb 2026",
    dateLong: "2 februarie 2026",
    ...ANDRA,
    featured: true,
    image: THUMB,
    heroCaption: "↳ studiu de zonă, periferia Cluj-Napoca, 2024",
    tags: ["#urbanism", "#puz", "#reglementări", "#dezvoltare"],
    content: [
      {
        kind: "lead",
        text: "Planul Urbanistic Zonal (PUZ) este un instrument de planificare urbană care reglementează o zonă specifică a localității. E documentul care decide, pentru un perimetru bine definit, ce se poate construi și în ce condiții.",
      },
      { kind: "heading", id: "ce-reglementeaza", text: "Ce reglementează" },
      {
        kind: "paragraph",
        text: "PUZ-ul stabilește reglementări cu privire la utilizarea terenurilor, înălțimea maximă a construcțiilor, procentul de ocupare al terenului (POT) și coeficientul de utilizare al terenului (CUT).",
      },
      {
        kind: "quote",
        text: "Un PUZ bun nu desenează clădiri — desenează regulile care le fac posibile.",
        label: "— PRINCIPIU",
      },
      { kind: "heading", id: "cand-e-nevoie", text: "Când e nevoie de el" },
      {
        kind: "paragraph",
        text: "Elaborarea unui PUZ este necesară atunci când se dorește modificarea prevederilor Planului Urbanistic General (PUG) pentru o anumită zonă — la dezvoltări noi, conversii de funcțiune sau parcelări mari.",
      },
    ],
  },
  {
    n: "03",
    slug: "obtinerea-autorizatiei-de-construire",
    title: "Obținerea autorizației de construire",
    titleHtml: 'Obținerea <em>autorizației</em><br/>de construire<span class="accent">.</span>',
    excerpt:
      "Ghid complet despre pașii necesari pentru obținerea autorizației de construire în România.",
    cat: "urbanism",
    read: "6 min",
    date: "22 ian 2026",
    dateLong: "22 ianuarie 2026",
    ...ANDRA,
    featured: false,
    image: THUMB,
    heroCaption: "↳ dosar de autorizare, birou Amorph, 2025",
    tags: ["#urbanism", "#autorizație", "#ghid", "#proces"],
    content: [
      {
        kind: "lead",
        text: "Autorizația de construire este actul de autoritate al administrației publice locale pe baza căruia se pot executa lucrări de construcții. Fără ea, orice șantier e ilegal.",
      },
      { kind: "heading", id: "ce-ai-nevoie", text: "Ce conține dosarul" },
      {
        kind: "paragraph",
        text: "Pentru obținerea autorizației este necesar un dosar complet care include: certificatul de urbanism, proiectul tehnic, avizele și acordurile necesare.",
      },
      { kind: "heading", id: "cat-dureaza", text: "Cât durează" },
      {
        kind: "paragraph",
        text: "Procesul poate dura între 30 și 90 de zile, în funcție de complexitatea proiectului și de cerințele specifice ale zonei.",
      },
    ],
  },
  {
    n: "04",
    slug: "importanta-designului-urban",
    title: "Importanța designului urban",
    titleHtml: 'Importanța <em>designului</em><br/>urban<span class="accent">.</span>',
    excerpt:
      "Cum influențează designul urban calitatea vieții și dezvoltarea sustenabilă a comunităților.",
    cat: "strategii",
    read: "8 min",
    date: "14 ian 2026",
    dateLong: "14 ianuarie 2026",
    ...VLAD,
    featured: false,
    image: THUMB,
    heroCaption: "↳ spațiu public reamenajat, centru istoric, 2024",
    tags: ["#strategii", "#design-urban", "#comunitate"],
    content: [
      {
        kind: "lead",
        text: "Designul urban nu e despre cum arată un oraș, ci despre cum se trăiește în el. Un spațiu public bine gândit schimbă felul în care oamenii se întâlnesc, merg pe jos și își petrec timpul.",
      },
      { kind: "heading", id: "de-ce-conteaza", text: "De ce contează" },
      {
        kind: "paragraph",
        text: "Calitatea vieții urbane depinde de decizii aparent mici: lățimea unui trotuar, umbra unui copac, distanța până la cel mai apropiat magazin. Designul urban le coordonează pe toate.",
      },
      { kind: "heading", id: "sustenabilitate", text: "Și sustenabilitate" },
      {
        kind: "paragraph",
        text: "Un oraș compact, cu funcțiuni mixte și transport accesibil, consumă mai puține resurse și produce comunități mai rezistente. Designul urban e, în fond, un instrument de sustenabilitate.",
      },
    ],
  },
  {
    n: "05",
    slug: "tendinte-design-interior",
    title: "Tendințe în design interior",
    titleHtml: 'Tendințe în <em>design</em><br/>interior<span class="accent">.</span>',
    excerpt:
      "Explorăm cele mai noi tendințe în design interior care combină funcționalitatea cu estetica.",
    cat: "interior",
    read: "5 min",
    date: "08 ian 2026",
    dateLong: "8 ianuarie 2026",
    ...MARIA,
    featured: false,
    image: THUMB,
    heroCaption: "↳ apartament reamenajat, Cluj-Napoca, 2025",
    tags: ["#interior", "#tendințe", "#design"],
    content: [
      {
        kind: "lead",
        text: "Tendințele în design interior se mută dinspre spectaculos înspre durabil: materiale naturale, palete calme și spații care îmbătrânesc frumos.",
      },
      { kind: "heading", id: "materiale", text: "Materiale care durează" },
      {
        kind: "paragraph",
        text: "Lemnul masiv, piatra, textilele naturale revin în forță — nu doar pentru estetică, ci pentru că rezistă în timp și se repară, nu se aruncă.",
      },
      { kind: "heading", id: "functie", text: "Funcția înainte de formă" },
      {
        kind: "paragraph",
        text: "Cele mai bune proiecte pleacă de la cum se folosește un spațiu, nu de la cum arată într-o fotografie. Estetica vine ca o consecință a funcției bine rezolvate.",
      },
    ],
  },
  {
    n: "06",
    slug: "regenerare-urbana-exemple",
    title: "Regenerare urbană: exemple de succes",
    titleHtml: 'Regenerare urbană:<br/><em>exemple</em> de succes<span class="accent">.</span>',
    excerpt:
      "Studii de caz despre proiecte de regenerare urbană care au transformat comunități întregi.",
    cat: "regenerare",
    read: "9 min",
    date: "21 dec 2025",
    dateLong: "21 decembrie 2025",
    ...VLAD,
    featured: false,
    image: THUMB,
    heroCaption: "↳ fostă platformă industrială regenerată, 2023",
    tags: ["#regenerare", "#studii-de-caz", "#oraș"],
    content: [
      {
        kind: "lead",
        text: "Regenerarea urbană transformă zone uitate — foste fabrici, maluri de râu, piețe degradate — în locuri în care oamenii vor să fie. Câteva exemple arată cât de departe se poate ajunge.",
      },
      { kind: "heading", id: "industrial", text: "Din industrial în public" },
      {
        kind: "paragraph",
        text: "Platformele industriale dezafectate sunt cele mai promițătoare proiecte de regenerare: suprafețe mari, infrastructură existentă și o poveste care merită păstrată.",
      },
      { kind: "heading", id: "lectii", text: "Ce au în comun" },
      {
        kind: "paragraph",
        text: "Proiectele reușite pornesc de la comunitate, păstrează o parte din memoria locului și introduc funcțiuni mixte. Regenerarea nu înseamnă ștergere, ci continuitate.",
      },
    ],
  },
];

export function getAllPosts(): JournalPost[] {
  return posts;
}

export function getFeatured(): JournalPost | undefined {
  return posts.find((p) => p.featured);
}

export function getPostBySlug(slug: string): JournalPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelated(post: JournalPost, n = 3): JournalPost[] {
  const sameCat = posts.filter((p) => p.slug !== post.slug && p.cat === post.cat);
  const fallback = posts.filter((p) => p.slug !== post.slug && p.cat !== post.cat);
  return [...sameCat, ...fallback].slice(0, n);
}

export function tocFromContent(content: ContentBlock[]): { id: string; text: string }[] {
  return content
    .filter((b): b is Extract<ContentBlock, { kind: "heading" }> => b.kind === "heading")
    .map((b) => ({ id: b.id, text: b.text }));
}
