import type { Metadata } from "next";

/** Domeniul canonic. amorph.ro face redirect 308 spre www. */
export const SITE_URL = "https://www.amorph.ro";
export const SITE_NAME = "Amorph Studio";
export const SITE_DESCRIPTION =
  "Studio multidisciplinar din București: planificare urbană, strategii urbane, regenerare urbană, design interior, graphic design și dezvoltare web.";

/** Datele firmei: paginile legale (src/components/legal) și JSON-LD (src/lib/jsonld.ts). */
export const COMPANY = {
  name: "A-Morph Studio SRL",
  cui: "49840426",
  regCom: "J40/6530/2024",
  address: "Bd. Dacia nr. 133, Etaj D, Sector 2, București",
  email: "office@amorph.ro",
  phone: "+40 747 089 434",
  dpoName: "Alexandru Rusovici",
  dpo: "office@amorph.ro",
};

/**
 * Imaginea de share implicită (src/app/opengraph-image.tsx). Trebuie pusă
 * explicit: un `openGraph` definit de pagină înlocuiește complet pe cel din
 * layout, inclusiv imaginea. Unde segmentul are propriul opengraph-image.tsx,
 * fișierul are prioritate și o înlocuiește pe aceasta.
 */
const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Amorph Studio: studio multidisciplinar de urbanism și design",
};

interface PageMetaInput {
  /** Titlul paginii; template-ul din layout adaugă „| Amorph Studio”. */
  title: string;
  description: string;
  /** Calea canonică, relativă la SITE_URL (ex. "/servicii/planificare-urbana"). */
  path: string;
  /** Titlu diferit pentru share (OG/Twitter); implicit = title. */
  ogTitle?: string;
  ogDescription?: string;
  /** Titlu folosit exact, fără template (pentru pagina de acasă). */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  /** Data publicării (ISO), doar pentru articole. */
  publishedTime?: string;
  /** Segmentul are propriul opengraph-image.tsx (servicii, articole, analiza de teren). */
  ownOgImage?: boolean;
}

/**
 * Metadata standard pentru o pagină: title, description, canonical,
 * Open Graph și Twitter. Imaginea de share: cea implicită, sau cea din
 * opengraph-image.tsx al segmentului (articole, servicii, analiza de teren).
 */
export function pageMetadata(p: PageMetaInput): Metadata {
  // La share, „Contact” singur nu spune nimic: paginile primesc numele studioului.
  // Articolele și titlurile absolute rămân cum sunt.
  const ogTitle =
    p.ogTitle ??
    (p.absoluteTitle || p.type === "article" ? p.title : `${p.title} | ${SITE_NAME}`);
  const ogDescription = p.ogDescription ?? p.description;
  // Cheia `images` trebuie să lipsească de tot (nu `undefined`), altfel anulează și fișierul.
  const img = p.ownOgImage ? {} : { images: [DEFAULT_OG_IMAGE] };
  const openGraph: Metadata["openGraph"] =
    p.type === "article"
      ? {
          type: "article",
          publishedTime: p.publishedTime,
          title: ogTitle,
          description: ogDescription,
          url: p.path,
          siteName: SITE_NAME,
          locale: "ro_RO",
          ...img,
        }
      : {
          type: "website",
          title: ogTitle,
          description: ogDescription,
          url: p.path,
          siteName: SITE_NAME,
          locale: "ro_RO",
          ...img,
        };
  return {
    title: p.absoluteTitle ? { absolute: p.title } : p.title,
    description: p.description,
    alternates: { canonical: p.path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      ...img,
    },
  };
}
