import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Amorph Studio: studio multidisciplinar de urbanism și design";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "urbanism · regenerare · design interior · grafică · web",
    title: "studio multidisciplinar de design",
  });
}
