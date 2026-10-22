import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Analiză urbanistică de teren la preț fix, Amorph Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOg({
    eyebrow: "analiză teren · urbanist atestat RUR",
    title: "ce poți construi pe terenul tău?",
    note: "590 lei cu TVA · 3 zile lucrătoare",
  });
}
