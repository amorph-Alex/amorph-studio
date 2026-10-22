@AGENTS.md

# amorph.ro: context de proiect

Site-ul de prezentare și motor de lead-uri al A-Morph Studio S.R.L. (urbanism, strategii, regenerare urbană, design interior, graphic design, dezvoltare web). Live pe amorph.ro, deploy automat pe Vercel la push pe `master`.

**Înainte de orice task, citește `docs/ROADMAP.md`** (ce urmează, statusuri, protocol) și `docs/DECISIONS.md` (decizii deja luate, baseline de build/lint).

## Stack

- Next.js 16.2.2 (App Router, Turbopack), React 19.2.4, TypeScript 5, Tailwind CSS 4 (config în CSS, fără `tailwind.config`), ESLint 9 (flat config).
- Emailuri: `src/lib/notify.ts`. Notificările interne (contact, comenzi) pleacă prin Resend de pe `comenzi@amorph.ro` (`RESEND_API_KEY`, `NOTIFY_FROM`), cu fallback pe SMTP Gmail; confirmările către client pleacă prin SMTP Gmail (nodemailer). Variabile în `.env.local`, model în `.env.local.example`, iar în producție în Vercel → Environment Variables.
- Font: Comfortaa prin `next/font/google` (`--font-comfortaa`).
- Analytics: Vercel Web Analytics + Speed Insights în `layout.tsx` (fără cookies). Planul e Hobby: `track()` (evenimente personalizate) nu se colectează, deci nu adăuga apeluri `track()` fără să schimbăm planul.
- Next 16 are breaking changes față de ce știi: verifică în `node_modules/next/dist/docs/` înainte să folosești un API (metadata, `params` ca Promise, route handlers etc.).

## Structură

- `src/app/`: rute. Acasă `/`, `/despre-noi`, `/servicii` + câte o pagină statică per serviciu în `src/app/servicii/<slug>/page.tsx`, `/blog` + `/blog/[slug]`, `/contact`, `/confidentialitate`, `/termeni`, `/cookies`, `/analiza-teren` (produs la preț fix, 590 lei), `api/contact/route.ts`, `api/analiza-teren/route.ts`.
- `src/app/servicii/[slug]/page.tsx`: rută generică veche; toate cele 6 servicii au acum pagini statice dedicate, deci e cod mort (vezi DECISIONS).
- `src/lib/services.ts`: datele celor 6 servicii, combinații, pași de proces, FAQ-ul de pe /servicii.
- `src/lib/journal.ts`: articolele de blog ca date tipizate (`JournalPost`, `ContentBlock`: lead, heading, paragraph, quote, deflist, list). Helpers: `getAllPosts`, `getFeatured`, `getPostBySlug`, `getRelated`, `tocFromContent`.
- `src/lib/flags.ts`: `SHOW_SERVICE_PORTFOLIO = false` ascunde portofoliul de pe paginile de servicii până există proiecte reale.
- `src/lib/cookie-consent.ts`: citire/scriere consimțământ (localStorage) + eveniment pentru deschiderea preferințelor. Orice script de tracking trebuie condiționat de el.
- `src/components/`: `layout/` (Header cu pastila flotantă, Footer), `sections/` (Hero, Promisiune, AboutTeaser, BlogPreview, NewsletterBand, ContactForm, ContactMain, ServiciiFAQ), `blog/`, `cookies/`, `legal/`, `ui/` (Button, AmorphBackdrop, SectionDivider).
- `public/images/`: imagini PNG (hero-*, service-*, blog-thumbnail, authors*, logo).
- `design-handoff/` (în folderul părinte): prototipurile din Claude Design. Este referința vizuală.

## Convenții

- **Limba**: tot copy-ul în română, cu diacritice corecte (ș, ț cu virgulă, nu cedilă). Ton conversațional, la persoana a II-a, titluri mici (lowercase), ca în design.
- **Fără em dash (—) în copy nou.** Folosește virgulă, două puncte, paranteză sau frază nouă. Copy-ul existent are încă em dash-uri; nu le schimba decât dacă taskul o cere.
- **Culori și tipografie**: doar tokenii din `src/app/globals.css` (`background` #d9d9d9, `foreground`/`dark` #2d2d2d, `accent` #f6aa1c, `accent-hover`, `dark-card`, `muted`, `border`, `platinum`) prin clase Tailwind (`bg-accent`, `text-foreground` etc.). Fără culori hex noi în componente.
- **Pagini de servicii**: fiecare e o pagină statică cu același tipar (hero, carduri de servicii, proces în 5 pași, principii, banner, FAQ, CTA). O pagină nouă copiază structura uneia existente și ia datele de bază din `services.ts`.
- **Articol nou** (până la migrarea din roadmap C-02/C-03): o intrare nouă în `posts` din `journal.ts`, `n` incremental, `slug` fără diacritice, `id`-uri unice pe `heading` (devin ancore în TOC). Nu se inventează cifre, termene legale sau prețuri; Alex validează conținutul tehnic.
- Imagini prin `next/image`, nu `<img>`.
- **Metadata**: orice pagină nouă exportă `metadata = pageMetadata({ title, description, path })` din `src/lib/site.ts` (canonical + OG + Twitter). Dacă segmentul are `opengraph-image.tsx` propriu, adaugă `ownOgImage: true`. O pagină statică nouă se adaugă și în `staticPaths` din `src/app/sitemap.ts`. Domeniul canonic e `https://www.amorph.ro` (`SITE_URL`).
- **Date structurate (JSON-LD)**: constructorii sunt în `src/lib/jsonld.ts`, componenta în `src/components/seo/JsonLd.tsx`. Firma e în layout; o pagină de serviciu nouă pune `<JsonLd data={servicePageJsonLd(slug, FAQ)} />` după `<main>`, o pagină cu FAQ pune `faqJsonLd(FAQ)` cu aceeași listă afișată. Datele firmei sunt în `COMPANY` din `src/lib/site.ts`.
- Formulare: câmpul honeypot se numește `hp_zx7` peste tot (nu `company` sau alte nume pe care browserul le completează automat).
- Prețul analizei de teren apare în `src/app/analiza-teren/page.tsx` (`PRICE`) și în textele din `src/app/api/analiza-teren/route.ts`; se schimbă în ambele.
- Nu se inventează conținut care angajează studioul (prețuri, termene, proiecte, testimoniale, nume de oameni).

## Ce nu se atinge

- `.env.local` (secrete; nu se citește, nu se afișează, nu se comite).
- `design-handoff/` (referință, read-only).
- `.vercel/`.
- Textele juridice din `src/components/legal/content.tsx` doar la cerere explicită.

## Verificare (obligatoriu înainte de a declara un task gata)

```bash
npm run build   # trebuie să treacă
npm run lint    # nu trebuie să adauge erori noi față de baseline-ul din docs/DECISIONS.md
```

Pentru schimbări vizuale: `npm run dev` și verificare pe desktop + mobil (390px).

## Git

- Branch principal `master`; push pe `master` = deploy în producție pe Vercel.
- **Nu face commit sau push fără confirmarea lui Alex.** Un task din roadmap = un commit, cu mesaj care începe cu ID-ul taskului (ex. `T-10: metadataBase + OG image`).
- După livrare, actualizează statusul în `docs/ROADMAP.md` și adaugă o linie în log.
