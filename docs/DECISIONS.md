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
