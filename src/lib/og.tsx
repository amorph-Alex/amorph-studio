import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Generatorul imaginilor de share (1200x630) în identitatea site-ului.
 * Culorile sunt valorile tokenilor din globals.css (Satori nu citește CSS):
 * background #d9d9d9, foreground #2d2d2d, accent #f6aa1c.
 * Fontul: Comfortaa (OFL), instanțe statice 300/700 în src/assets/og/.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const BG = "#d9d9d9";
const FG = "#2d2d2d";
const ACCENT = "#f6aa1c";

const asset = (name: string) => join(process.cwd(), "src/assets/og", name);

interface OgInput {
  /** Rândul mic de sus (ex. „jurnal · urbanism”). */
  eyebrow: string;
  /** Titlul mare. Se scrie cu literă mică, ca în design. */
  title: string;
  /** Rândul de jos din dreapta (ex. „590 lei cu TVA”). */
  note?: string;
}

export async function renderOg({ eyebrow, title, note }: OgInput) {
  const [light, bold, logo] = await Promise.all([
    readFile(asset("comfortaa-300.ttf")),
    readFile(asset("comfortaa-700.ttf")),
    readFile(asset("logo-og.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const fontSize = title.length > 70 ? 54 : title.length > 40 ? 64 : 80;
  const words = title.trim().split(/\s+/);
  // Punctul galben din design, doar dacă titlul nu se termină deja cu punctuație.
  const withDot = !/[.?!:]$/.test(title.trim());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          color: FG,
          padding: "64px 72px",
          fontFamily: "Comfortaa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={72} height={72} alt="" />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
            amorph studio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 300,
              letterSpacing: 1,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: Math.round(fontSize * 0.25),
              fontSize,
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: -1,
              maxWidth: 1000,
            }}
          >
            {/* Cuvânt cu cuvânt, ca punctul galben să rămână lipit de ultimul. */}
            {words.map((w, i) => (
              <div key={i} style={{ display: "flex" }}>
                {w}
                {i === words.length - 1 && withDot ? (
                  <span style={{ color: ACCENT }}>.</span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `2px solid ${FG}`,
            paddingTop: 22,
            fontSize: 24,
            fontWeight: 300,
          }}
        >
          <div style={{ display: "flex" }}>www.amorph.ro</div>
          {note ? (
            <div
              style={{
                display: "flex",
                background: ACCENT,
                borderRadius: 999,
                padding: "8px 22px",
                fontWeight: 700,
              }}
            >
              {note}
            </div>
          ) : (
            <div style={{ display: "flex" }}>office@amorph.ro</div>
          )}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Comfortaa", data: light, weight: 300, style: "normal" },
        { name: "Comfortaa", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
