import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/services";
import { getAllPosts } from "@/lib/journal";

/** Generat la build din paginile statice, services.ts și journal.ts. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/servicii",
    "/analiza-teren",
    "/blog",
    "/despre-noi",
    "/contact",
    "/termeni",
    "/confidentialitate",
    "/cookies",
  ];

  return [
    ...staticPaths.map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` })),
    ...services.map((s) => ({ url: `${SITE_URL}/servicii/${s.slug}` })),
    ...getAllPosts().map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.published,
    })),
  ];
}
