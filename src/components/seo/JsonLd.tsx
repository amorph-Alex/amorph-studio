/**
 * Randează unul sau mai multe obiecte JSON-LD ca <script type="application/ld+json">.
 * `<` e înlocuit cu <, ca un text din date să nu poată închide tagul (recomandarea Next).
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
