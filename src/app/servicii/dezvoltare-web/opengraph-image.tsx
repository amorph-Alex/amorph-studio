import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Dezvoltare web, Amorph Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "servicii · site-uri · e-commerce · web apps",
    title: "dezvoltare web",
  });
}
