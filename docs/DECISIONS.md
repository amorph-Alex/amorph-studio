# DECISIONS amorph.ro

Jurnal scurt al deciziilor de arhitectură și al constatărilor de bază. O intrare = o decizie, cu data și motivul. Cele mai noi sus.

## Decizii

| Data | ID | Decizie | Motiv |
|---|---|---|---|
| 2026-10-22 | DEC-006 | Notificările interne pleacă prin Resend (`comenzi@amorph.ro`, `src/lib/notify.ts`), cu fallback pe SMTP Gmail; confirmările către client rămân pe SMTP Gmail. | Gmail ascundea la „Trimise" mesajele trimise de cont către el însuși, deci comenzile nu apăreau în Inbox (`acf59fc`). Alex a verificat fluxul cap-coadă. |
| 2026-10-22 | DEC-005 | Câmpul honeypot se numește `hp_zx7` pe toate formularele (contact, acasă, analiză teren). Nu se folosesc nume pe care browserul le poate completa automat (`company`, `name`, `email` etc.). | Autofill-ul din Chrome completa `company`, iar serverul răspundea OK fără să trimită emailul (`8336712`). |
| 2026-10-22 | DEC-004 | Analiza de teren e produs separat, cu rută proprie `/analiza-teren` și API propriu `/api/analiza-teren` (email intern + confirmare automată către client). Prețul (590 lei) e o constantă `PRICE` în pagină; ruta API are textul hardcodat separat. | Primul serviciu vândut la preț fix de pe site (L-09, `7d1fed3`). La schimbarea prețului se modifică ambele fișiere. |
| 2026-10-22 | DEC-003 | Formularul de pe acasă (`ContactForm.tsx`) se leagă la `/api/contact`, aceeași rută ca `/contact`, cu topic `question`. | Formularul era simulat (succes fals, nimic trimis). Implementat în `7d1fed3` (T-06). |
| 2026-10-22 | DEC-002 | Roadmap-ul și deciziile trăiesc în `docs/`; `CLAUDE.md` din rădăcină trimite la ele. | Context persistent pentru Claude Code și Cowork (T-01, T-02). |
| 2026-09-11 | DEC-001 | Rămânem pe Next.js + Vercel, fără redesign și fără versiune EN deocamdată. | Designul din Claude Design e implementat și bun; prioritatea e măsurare, indexare, conținut, lead-uri. |

## Baseline tehnic (2026-10-22, commit `c37cb48`)

**Stare repo (T-03)**
- Branch unic `master`, sincron cu `origin/master` (github.com/amorph-Alex/amorph-studio).
- Producția Vercel (proiect `amorph-studio`) rulează exact `c37cb48`.
- Necomise: `docs/`, `.claude/launch.json`, `CLAUDE.md` (actualizat). `.env*` e în `.gitignore`; `.env.local` nu e în git.

**Build (T-04)**: `npm run build` trece (Next 16.2.2 / Turbopack), 26 de pagini generate, fără warning-uri. Re-verificat pe `8336712` (2026-10-22): 28 de pagini, verde.

**Lint (T-04)**: 4 erori, 1 warning (nu blochează build-ul):
- `src/components/legal/content.tsx` liniile 344, 440, 441, 561: `react/no-unescaped-entities` (ghilimele `"` neescapate în JSX).
- `src/components/cookies/CookieConsent.tsx` linia 590: directivă `eslint-disable` nefolosită.
- Re-verificat pe `8336712`: identic, fără erori noi.
- Regula: un task nou nu adaugă erori peste acest baseline. Fix-ul lor e sub-task separat (T-07).

## Audit decorativ vs funcțional (T-05, 2026-10-22)

| Element | Stare | Urmare |
|---|---|---|
| `ContactForm` (acasă, „hai să vorbim") | Era simulat (`setTimeout` 1,5 s apoi „succes"). Reparat în `7d1fed3`. | T-06 livrat |
| `ContactMain` (/contact) | Funcțional: POST `/api/contact`, nodemailer. | L-01 (persistare) |
| `NewsletterBand` (/blog) | Decorativ: input + buton `type="button"`, fără handler, fără backend. | C-08: decizie furnizor sau scoatere |
| `ShareMenu` | Funcțional (copiere link, LinkedIn, X, email). | - |
| `JournalFilter` | Funcțional (categorie + căutare client-side). | - |
| Link-uri interne | Toate țintesc rute existente; niciun `href="#"`. | - |
| Social media | Nu există link-uri spre profilurile studioului (LinkedIn, Instagram, Behance). | Sub-task opțional, dacă există profiluri |
| Jurnal | 6 articole (nu 3): 3 complete (CU, PUZ, AC) + 3 scurte (design urban, design interior, regenerare). Toate cu aceeași imagine `blog-thumbnail.png`, autori fictivi (Andra M., Vlad R., Maria D.), legende hero fictive („centru istoric, 2024"). | C-01, C-07 |
| `servicii/[slug]` | Rută generică moartă: toate serviciile au pagini statice; `design-interior` lipsește din lista de excluderi, deci e generată dublu (câștigă pagina statică). | T-08: ștergere |
| Imagini | 16 PNG, 4 MB total; cele mai mari: hero-strategii 652 KB, hero-regenerare 608 KB, hero-interior 420 KB. Servite prin `next/image` (optimizate la runtime). | T-15 |
| Metadata `layout.tsx` | Descrierea omite „dezvoltare web" și conține em dash. | T-10 |

**Observații din review-ul `/analiza-teren` (2026-10-22)**
- Canonical-ul iese relativ (`<link rel="canonical" href="/analiza-teren">`) pentru că `layout.tsx` nu are `metadataBase`. Se rezolvă global în T-10.
- JSON-LD folosește `https://www.amorph.ro`; `amorph.ro` face redirect 308. Domeniul canonic e deci `www.amorph.ro`; T-10 și T-11 trebuie să-l folosească pe acesta.
- În FAQ-ul de la planificare urbană, „amorph.ro/analiza-teren" e text simplu, nu link (pagina are însă link în meniu și footer).

## Metadata, imagini de share, sitemap (T-10 + T-11, 2026-10-22)

- Domeniul canonic e `https://www.amorph.ro` (`SITE_URL` în `src/lib/site.ts`); `metadataBase` în `layout.tsx`. `amorph.ro` face 308 spre www.
- Fiecare pagină își declară metadata prin `pageMetadata({ title, description, path, ... })` din `src/lib/site.ts`: title, description, canonical absolut, Open Graph, Twitter `summary_large_image`. Layout-ul nu are canonical (s-ar moșteni greșit).
- `og:title` pe paginile obișnuite primește „| Amorph Studio”; articolele și acasă rămân cu titlul curat.
- Imaginile de share se generează la build cu `next/og` (`src/lib/og.tsx`, `renderOg`): implicită în `src/app/opengraph-image.tsx`, plus una pe fiecare serviciu, pe fiecare articol (cu titlul) și pe `/analiza-teren` (cu prețul). Font Comfortaa (OFL), instanțe statice 300/700 subsetate în `src/assets/og/`, logo 256 px.
- Capcană Next 16 descoperită la build: o imagine pusă în `metadata.openGraph.images` câștigă în fața `opengraph-image.tsx` din segment, iar un `openGraph` fără imagine pierde imaginea din layout. De aceea `pageMetadata` pune imaginea implicită explicit, iar paginile cu fișier propriu trec `ownOgImage: true` (cheia `images` lipsește complet; `images: undefined` anulează și fișierul).
- `src/app/sitemap.ts` se generează din lista de pagini statice + `services.ts` + `journal.ts` (`lastModified` = câmpul nou `published`, ISO, pe fiecare articol). Pagină statică nouă = adăugată în `staticPaths`.
- `src/app/robots.ts`: totul permis, `/api/` blocat, link spre sitemap.
- Ruta moartă `servicii/[slug]` generează în continuare `/servicii/design-interior` dublu; nu afectează sitemap-ul (T-08).
- Lint după T-10/T-11: 3 erori + 1 warning, toate vechi (`legal/content.tsx`, `CookieConsent.tsx`); nimic nou.

## Analytics (T-13, 2026-10-22; închide decizia D-3)

- Ales: **Vercel Web Analytics + Speed Insights** (`@vercel/analytics` 2.0.1, `@vercel/speed-insights` 2.0.0), montate în `layout.tsx`. Fără cookies și fără date personale, deci nu trec prin `CookieConsent`. GA4 rămâne opțiune dacă vom avea nevoie de mai mult.
- Planul Vercel e **Hobby**: 50.000 de evenimente (vizite) pe lună, istoric de 1 lună, **fără evenimente personalizate** (`track()` nu se colectează) și fără UTM. Speed Insights: gratuit, 10.000 de evenimente pe 30 de zile, doar scorul RES.
- Conversiile (comenzi de analiză teren, mesaje de contact) se numără deocamdată din emailurile de notificare (L-12) și, ulterior, din store-ul de la L-01. Click-urile pe telefon/email nu se pot măsura pe Hobby.
- Dacă vrem conversii în analytics fără Pro: pagini de confirmare dedicate (ex. `/analiza-teren/comanda-trimisa`, `noindex`), numărate ca vizite. Nu s-au făcut încă.
- Web Analytics și Speed Insights trebuie activate o dată din dashboard-ul Vercel (proiect → Analytics → Enable; Speed Insights → Enable).
- De verificat cu Alex: politica de confidențialitate ar putea menționa Vercel Analytics (măsurare anonimă, fără cookies). Textele juridice nu s-au atins.

## Date structurate JSON-LD (T-14, 2026-10-22)

- Totul trece prin `src/lib/jsonld.ts` (constructori) și `src/components/seo/JsonLd.tsx` (randează `<script type="application/ld+json">`, cu `<` scăpat ca `\u003c`, cum recomandă ghidul Next).
- Firma se descrie o singură dată, în `layout.tsx` (`siteGraph()`): `ProfessionalService` (subtip de `LocalBusiness`) cu `@id` `https://www.amorph.ro/#organization`, plus `WebSite` (`/#website`). Paginile o referă prin `@id`, nu o repetă.
- Datele firmei (`COMPANY`: denumire, CUI, adresă, email, telefon) s-au mutat din `legal/content.tsx` în `src/lib/site.ts`; `content.tsx` le reexportă, textul paginilor legale e neschimbat.
- Adresa e sediul din paginile legale (Bd. Dacia nr. 133, Etaj D, Sector 2). Fără cod poștal, program (`openingHours`) și `priceRange`: nu sunt publicate pe site; se adaugă după ce le confirmă Alex. Fără `sameAs` (site-ul nu are linkuri sociale).
- Pagini de servicii: `servicePageJsonLd(slug, FAQ)` dă `Service` + `BreadcrumbList` + `FAQPage` din `services.ts` și din FAQ-ul afișat. `/analiza-teren`: `Service` cu `Offer` (590 RON) + firimituri + FAQ. `/servicii` și `/contact`: firimituri + FAQ.
- Articole: `BlogPosting` + `BreadcrumbList` (Acasă, Jurnal, articol); imaginea = `opengraph-image` al articolului. **Autorul e studioul (Organization)** până la C-01, ca numele fictive din `journal.ts` să nu apară ca persoane în datele structurate. La C-01 se trece pe `Person`.
- `FAQPage`: Google afișează rich results de FAQ doar pentru site-uri guvernamentale și de sănătate (din 2023), deci nu ne dă fragment extins în căutare; rămâne util pentru înțelegerea paginii de către Google și motoarele AI. Regula: întrebările din JSON-LD sunt exact cele afișate (aceeași listă trimisă și la `ServiciiFAQ`, și la `faqJsonLd`).
- Pagină nouă cu FAQ sau serviciu nou: adaugă `<JsonLd data={...} />` imediat după `<main>`.

