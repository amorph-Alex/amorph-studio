import { sendInternal, smtpTransport } from "@/lib/notify";

export const runtime = "nodejs";

// Data versiunii din /termeni (updatedAt în src/components/legal/content.tsx). Se schimbă împreună.
const TERMS_VERSION = "22 octombrie 2026";
const TERMS_URL = "https://www.amorph.ro/termeni#analiza-teren";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PURPOSES = {
  cumpar: "vreau să cumpăr terenul",
  am: "am deja terenul",
  mostenit: "teren moștenit / în familie",
} as const;

const USES = {
  casa: "casă / locuință individuală",
  colectiv: "locuințe colective / mai multe case",
  comercial: "comercial / birouri / servicii",
  altceva: "altceva / nu știu încă",
} as const;

const CLIENT_TYPES = {
  pf: "persoană fizică",
  pj: "firmă",
} as const;

type Payload = Record<string, unknown>;

const str = (v: unknown, max = 500) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );

function badRequest(message: string) {
  return Response.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  if (!request.headers.get("user-agent")) return badRequest("missing user agent");

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return badRequest("invalid json");
  }

  // Honeypot
  if (str(body.hp_zx7) !== "") {
    console.warn("analiza-teren: honeypot hit, comanda ignorată");
    return Response.json({ ok: true });
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200);
  const phone = str(body.phone, 40);
  const location = str(body.location, 300);
  const county = str(body.county, 60);
  const cadastral = str(body.cadastral, 80);
  const area = str(body.area, 40);
  const listing = str(body.listing, 500);
  const notes = str(body.notes, 3000);
  const companyName = str(body.companyName, 200);
  const cui = str(body.cui, 30);
  const purposeRaw = str(body.purpose, 20);
  const useRaw = str(body.use, 20);
  const clientTypeRaw = str(body.clientType, 5);
  const acceptedTerms = body.acceptedTerms === true;
  // Cererea expresă de începere înainte de expirarea celor 14 zile (OUG 34/2014) are sens doar la consumatori.
  const startNow = clientTypeRaw === "pf" && body.startNow === true;

  if (!name) return badRequest("name required");
  if (!email || !EMAIL_RE.test(email)) return badRequest("valid email required");
  if (!location) return badRequest("location required");
  if (!county) return badRequest("county required");
  if (!(purposeRaw in PURPOSES)) return badRequest("invalid purpose");
  if (!(useRaw in USES)) return badRequest("invalid use");
  if (!(clientTypeRaw in CLIENT_TYPES)) return badRequest("invalid client type");
  if (clientTypeRaw === "pj" && (!companyName || !cui)) {
    return badRequest("company data required");
  }
  if (!acceptedTerms) return badRequest("terms required");

  const purpose = PURPOSES[purposeRaw as keyof typeof PURPOSES];
  const use = USES[useRaw as keyof typeof USES];
  const clientType = CLIENT_TYPES[clientTypeRaw as keyof typeof CLIENT_TYPES];

  const { CONTACT_TO } = process.env;
  const smtp = smtpTransport();
  if (!CONTACT_TO || (!smtp && !process.env.RESEND_API_KEY)) {
    console.error("analiza-teren: missing email env vars");
    return Response.json({ error: "server misconfigured" }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Nume", name],
    ["Email", email],
    ["Telefon", phone || "-"],
    ["Teren (adresă / localitate)", location],
    ["Județ", county],
    ["Nr. cadastral", cadastral || "-"],
    ["Suprafață", area || "-"],
    ["Situație", purpose],
    ["Ce vrea să construiască", use],
    ["Anunț / link", listing || "-"],
    ["Client", clientType],
    ...(clientTypeRaw === "pj"
      ? ([
          ["Firmă", companyName],
          ["CUI", cui],
        ] as [string, string][])
      : []),
    ["Acceptă termenii", `da, versiunea din ${TERMS_VERSION}`],
    [
      "Începere înainte de 14 zile",
      clientTypeRaw === "pj"
        ? "nu se aplică (firmă)"
        : startNow
          ? "DA, cerere expresă (pierde retragerea după livrare)"
          : "NU, lucrul începe după 14 zile de la proformă",
    ],
    ["Primită la", new Date().toISOString()],
  ];

  const text = [
    "COMANDĂ NOUĂ · ANALIZĂ TEREN · 590 lei cu TVA",
    "",
    ...rows.map(([k, v]) => `${k}: ${v}`),
    "",
    "Observații:",
    notes || "(fără)",
    "",
    "Pași: 1) proformă către client  2) după plată, cere CF / CU / anunț  3) livrare în 3 zile lucrătoare.",
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.55;color:#2d2d2d">
      <p style="margin:0 0 14px;font-size:16px"><strong>Comandă nouă · analiză teren · 590 lei cu TVA</strong></p>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:3px 14px 3px 0;color:#6b6b6b;vertical-align:top">${escape(k)}</td><td style="padding:3px 0">${escape(v)}</td></tr>`
          )
          .join("")}
      </table>
      <p style="margin:16px 0 4px"><strong>Observații:</strong></p>
      <div style="white-space:pre-wrap;padding:12px 14px;background:#f4f3ef;border-radius:8px">${escape(notes || "(fără)")}</div>
      <p style="margin:16px 0 0;color:#6b6b6b">Pași: 1) proformă către client · 2) după plată, cere CF / CU / anunț · 3) livrare în 3 zile lucrătoare.</p>
    </div>
  `;

  const clientText = [
    `Bună, ${name.split(" ")[0]},`,
    "",
    "Am primit comanda ta pentru analiza terenului din " + location + ", jud. " + county + ".",
    "",
    "Ce urmează:",
    "1. În cel mult o zi lucrătoare primești de la noi factura proformă (590 lei, TVA inclus).",
    "2. După plată, îți cerem pe email documentele pe care le ai: extrasul de carte funciară, certificatul de urbanism (dacă există), anunțul sau orice altă informație despre teren. Dacă nu ai nimic, pornim de la adresă și numărul cadastral.",
    clientTypeRaw === "pf" && !startNow
      ? "3. Primești analiza în PDF în 3 zile lucrătoare de la plată și documente, dar nu înainte să treacă cele 14 zile de retragere (vezi mai jos)."
      : "3. În 3 zile lucrătoare de la plată și documente primești analiza în PDF.",
    "",
    ...(clientTypeRaw === "pf"
      ? startNow
        ? [
            "Dreptul de retragere: ai cerut să începem lucrul imediat după plată. Dacă renunți înainte să livrăm, plătești doar partea deja lucrată și îți returnăm restul. După ce primești analiza, nu mai ai drept de retragere.",
            "",
          ]
        : [
            "Dreptul de retragere: ca persoană fizică, poți renunța la comandă fără motiv în 14 zile de la primirea proformei, cu o declarație trimisă pe email. Pentru că nu ne-ai cerut să începem imediat, începem lucrul după ce trec aceste 14 zile. Dacă vrei să începem mai repede, răspunde la acest email și scrie-ne explicit asta.",
            "",
          ]
      : []),
    `Termenii comenzii (versiunea din ${TERMS_VERSION}): ${TERMS_URL}`,
    "",
    "Dacă vrei să adaugi ceva, răspunde direct la acest email.",
    "",
    "Mulțumim,",
    "Echipa A-Morph Studio",
    "office@amorph.ro · +40 747 089 434 · amorph.ro",
  ].join("\n");

  try {
    await sendInternal(
      {
        replyTo: `${name} <${email}>`,
        subject: `[analiză teren] ${location}, ${county} · ${name}`,
        text,
        html,
      },
      "analiza-teren"
    );
  } catch (err) {
    console.error("analiza-teren: internal notification failed", err);
    return Response.json({ error: "send failed" }, { status: 500 });
  }

  // Confirmarea către client pleacă din contul Gmail al biroului, ca răspunsurile
  // să ajungă direct acolo. Nu blochează comanda dacă eșuează.
  if (smtp) {
    try {
      await smtp.transporter.sendMail({
        from: `A-Morph Studio <${smtp.user}>`,
        to: `${name} <${email}>`,
        replyTo: `A-Morph Studio <${CONTACT_TO.split(",")[0].trim()}>`,
        subject: "Am primit comanda ta · analiză teren A-Morph",
        text: clientText,
      });
      console.info("analiza-teren: confirmare client trimisă");
    } catch (err) {
      console.error("analiza-teren: client confirmation failed", err);
    }
  }

  return Response.json({ ok: true });
}
