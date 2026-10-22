import nodemailer from "nodemailer";

export const runtime = "nodejs";

const VALID_TOPICS = ["project", "collab", "question", "press"] as const;
type Topic = (typeof VALID_TOPICS)[number];

const TOPIC_LABELS: Record<Topic, string> = {
  project: "proiect nou",
  collab: "colaborare",
  question: "întrebare",
  press: "presă & altele",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  topic?: unknown;
  hp_zx7?: unknown;
};

function badRequest(message: string) {
  return Response.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  if (!request.headers.get("user-agent")) {
    return badRequest("missing user agent");
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return badRequest("invalid json");
  }

  // Honeypot — boții completează câmpuri ascunse. Răspundem 200 ca să nu îi învățăm.
  if (typeof body.hp_zx7 === "string" && body.hp_zx7.trim() !== "") {
    console.warn("contact: honeypot hit, mesaj ignorat");
    return Response.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const topicRaw = typeof body.topic === "string" ? body.topic : "";

  if (!name) return badRequest("name required");
  if (!email || !EMAIL_RE.test(email)) return badRequest("valid email required");
  if (message.length > 5000) return badRequest("message too long");
  if (!VALID_TOPICS.includes(topicRaw as Topic)) {
    return badRequest("invalid topic");
  }
  const topic = topicRaw as Topic;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error("contact: missing SMTP env vars");
    return Response.json({ error: "server misconfigured" }, { status: 500 });
  }

  const port = Number(SMTP_PORT);
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const topicLabel = TOPIC_LABELS[topic];
  const subject = `[${topicLabel}] mesaj nou de la ${name}`;

  const lines = [
    `Subiect: ${topicLabel}`,
    `Nume: ${name}`,
    `Email: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    "",
    "Mesaj:",
    message || "(fără mesaj)",
  ].filter((l): l is string => l !== null);

  const escape = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    })[c]!);

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.55;color:#2d2d2d">
      <p style="margin:0 0 12px"><strong>Subiect:</strong> ${escape(topicLabel)}</p>
      <p style="margin:0 0 4px"><strong>Nume:</strong> ${escape(name)}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> <a href="mailto:${escape(email)}">${escape(email)}</a></p>
      ${phone ? `<p style="margin:0 0 4px"><strong>Telefon:</strong> ${escape(phone)}</p>` : ""}
      <p style="margin:16px 0 4px"><strong>Mesaj:</strong></p>
      <div style="white-space:pre-wrap;padding:12px 14px;background:#f4f3ef;border-radius:8px">${escape(message || "(fără mesaj)")}</div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `A-Morph Website <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: `${name} <${email}>`,
      subject,
      text: lines.join("\n"),
      html,
    });
    console.info("contact: email trimis");
  } catch (err) {
    console.error("contact: sendMail failed", err);
    return Response.json({ error: "send failed" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
