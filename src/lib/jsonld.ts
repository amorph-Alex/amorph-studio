// Date structurate (JSON-LD, schema.org) pentru Google și motoarele AI.
// Firma e descrisă o singură dată, în layout (`siteGraph`), cu un `@id` fix;
// paginile o referă prin `{ "@id": ORG_ID }` în loc să o repete.
// Validare: https://search.google.com/test/rich-results și https://validator.schema.org/

import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, COMPANY } from "./site";
import { getServiceBySlug, type FaqItem } from "./services";
import type { JournalPost } from "./journal";

type Json = Record<string, unknown>;

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const ORG_REF = { "@id": ORG_ID };
const ROMANIA = { "@type": "Country", name: "România" };

const abs = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/**
 * Firma + site-ul, randate în layout pe toate paginile.
 * `ProfessionalService` e un subtip de `LocalBusiness`: Google îl tratează ca firmă locală.
 * Fără program (`openingHours`) și fără `priceRange` până nu le confirmă Alex.
 */
export function siteGraph(): Json {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: SITE_NAME,
        legalName: COMPANY.name,
        alternateName: "A-Morph Studio",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/images/logo.png`,
          width: 3508,
          height: 3507,
        },
        image: `${SITE_URL}/opengraph-image`,
        description: SITE_DESCRIPTION,
        email: COMPANY.email,
        telephone: COMPANY.phone.replace(/\s/g, ""),
        taxID: COMPANY.cui,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bd. Dacia nr. 133, Etaj D, Sector 2",
          addressLocality: "București",
          addressCountry: "RO",
        },
        areaServed: ROMANIA,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: COMPANY.email,
          telephone: COMPANY.phone.replace(/\s/g, ""),
          availableLanguage: ["ro", "en"],
        },
        knowsAbout: [
          "Planificare urbană",
          "Plan Urbanistic Zonal (PUZ)",
          "Plan Urbanistic de Detaliu (PUD)",
          "Plan Urbanistic General (PUG)",
          "Certificat de urbanism",
          "Strategii urbane",
          "Regenerare urbană",
          "Design interior",
          "Graphic design",
          "Dezvoltare web",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "ro-RO",
        publisher: ORG_REF,
      },
    ],
  };
}

export interface Crumb {
  name: string;
  path: string;
}

/** Firimituri; „Acasă” se adaugă automat în față. */
export function breadcrumbJsonLd(crumbs: Crumb[]): Json {
  const all = [{ name: "Acasă", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

/** Întrebările trebuie să fie exact cele afișate pe pagină. */
export function faqJsonLd(items: FaqItem[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

interface ServiceInput {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  /** Ofertă la preț fix (ex. analiza de teren). */
  offer?: { price: number; currency: string; description: string };
}

export function serviceJsonLd(s: ServiceInput): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(s.path)}#service`,
    name: s.name,
    serviceType: s.serviceType ?? s.name,
    description: s.description,
    url: abs(s.path),
    provider: ORG_REF,
    areaServed: ROMANIA,
    ...(s.offer && {
      offers: {
        "@type": "Offer",
        price: s.offer.price,
        priceCurrency: s.offer.currency,
        description: s.offer.description,
        url: abs(s.path),
        seller: ORG_REF,
      },
    }),
  };
}

/** Tot ce are nevoie o pagină de serviciu: Service + firimituri + FAQ, din `services.ts`. */
export function servicePageJsonLd(slug: string, faq: FaqItem[]): Json[] {
  const s = getServiceBySlug(slug);
  if (!s) throw new Error(`servicePageJsonLd: serviciu necunoscut „${slug}”`);
  const name = capitalize(`${s.title} ${s.subtitle}`);
  const path = `/servicii/${s.slug}`;
  return [
    serviceJsonLd({ name, description: s.description, path }),
    breadcrumbJsonLd([
      { name: "Servicii", path: "/servicii" },
      { name, path },
    ]),
    faqJsonLd(faq),
  ];
}

/**
 * Articol de jurnal. Autorul e studioul (Organization) până la C-01:
 * numele din `journal.ts` sunt încă fictive și nu le publicăm ca persoane în date structurate.
 */
export function articleJsonLd(post: JournalPost): Json {
  const url = abs(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
    datePublished: post.published,
    dateModified: post.published,
    inLanguage: "ro-RO",
    articleSection: post.cat,
    keywords: post.tags.join(", "),
    author: ORG_REF,
    publisher: ORG_REF,
    isPartOf: { "@id": WEBSITE_ID },
  };
}
