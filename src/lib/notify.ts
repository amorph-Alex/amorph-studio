import nodemailer from "nodemailer";

/**
 * Notificări interne (comenzi, mesaje de contact) către biroul A-Morph.
 *
 * Dacă RESEND_API_KEY e setat, trimite prin Resend de pe o adresă separată
 * (NOTIFY_FROM), ca mesajul să intre în Inbox ca email nou. Gmail ascunde la
 * „Trimise” mesajele pe care contul și le trimite singur prin SMTP.
 * Fără cheie, cade înapoi pe SMTP-ul Gmail (comportamentul vechi).
 */
export type InternalMail = {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
};

export function smtpTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT);
  return {
    user: SMTP_USER,
    transporter: nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    }),
  };
}

export async function sendInternal(mail: InternalMail, tag: string) {
  const to = (process.env.CONTACT_TO || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (to.length === 0) throw new Error("CONTACT_TO missing");

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const from = process.env.NOTIFY_FROM || "A-Morph Website <comenzi@amorph.ro>";
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: mail.replyTo,
          subject: mail.subject,
          text: mail.text,
          html: mail.html,
        }),
      });
      const body = await res.text();
      if (!res.ok) throw new Error(`resend ${res.status}: ${body.slice(0, 300)}`);
      console.info(`${tag}: notificare trimisă prin Resend`, { from, response: body.slice(0, 200) });
      return;
    } catch (err) {
      // Nu pierdem comanda: încercăm și pe SMTP.
      console.error(`${tag}: Resend a eșuat, trec pe SMTP`, err);
    }
  }

  const smtp = smtpTransport();
  if (!smtp) throw new Error("SMTP env vars missing");
  const info = await smtp.transporter.sendMail({
    from: `A-Morph Website <${smtp.user}>`,
    to: to.join(", "),
    replyTo: mail.replyTo,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
  });
  console.info(`${tag}: notificare trimisă prin SMTP`, {
    accepted: info.accepted?.length ?? 0,
    response: info.response,
  });
}
