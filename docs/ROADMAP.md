# ROADMAP amorph.ro

Ultima actualizare: 2026-10-22 (sesiune Cowork: Resend + sincronizare repo)
Versiune: 1.3

---

## 0. Cum se folosește acest document (citește înainte de orice)

Acesta este planul de lucru pe termen mediu pentru site-ul amorph.ro. Este sursa de adevăr pentru „unde suntem" și „ce urmează". Există în două locuri, ținute identice manual:

1. Project-ul Claude „Site - Amorph.ro" (doc `claude/ROADMAP.md`), citit de sesiunile Cowork.
2. Repo: `amorph-studio/docs/ROADMAP.md`, citit de Claude Code.

### Protocolul unei sesiuni noi

1. Citește acest document integral. Uită-te la secțiunea 6 (log) ca să vezi ultima mișcare.
2. Identifică taskurile cu status `[ ]` din etapa curentă (prima etapă care nu e complet `[x]`). Nu sări etape decât dacă Alex cere explicit.
3. Când Alex alege un task (sau cere o recomandare), sesiunea Cowork face trei lucruri, în ordine:
   a. **Planifică**: citește fișierele relevante din repo (prin device_list_dir / stage), descrie ce se schimbă, ce fișiere sunt atinse, riscurile, criteriile de acceptare.
   b. **Pregătește promptul pentru Claude Code**: un prompt complet, autonom, care poate fi lipit direct în Claude Code în folderul `amorph-studio`. Promptul conține: contextul minim necesar, fișierele de atins, ce NU trebuie atins, criteriile de acceptare, comanda de verificare (`npm run build` + `npm run lint`), și instrucțiunea de a nu face commit fără confirmare.
   c. **Actualizează roadmap-ul**: marchează taskul `[~]` (în lucru) cu data, apoi `[x]` când Alex confirmă că s-a livrat. Scrie o linie în log. Salvează în ambele locuri.
4. Un task = un prompt = un PR/commit. Taskurile mari se sparg în sub-taskuri înainte de a scrie promptul.

### Legenda statusurilor

- `[ ]` neînceput
- `[~]` în lucru (cu data la care a început)
- `[x]` livrat și verificat pe producție
- `[-]` anulat sau amânat (cu motiv)

Prioritate: **P1** = fără asta site-ul nu își face treaba; **P2** = important, dar poate aștepta o etapă; **P3** = nice to have.

---

## 1. Direcție

**Ce este site-ul**: cartea de vizită completă a A-Morph Studio, cu toate cele 6 servicii tratate echilibrat (planificare urbană, strategii urbane, regenerare urbană, design interior, graphic design, dezvoltare web), și un motor de lead-uri pentru fiecare dintre ele.

**Ce trebuie să facă în 6-12 luni**:

1. Să fie găsit organic pe subiectele pe care le stăpânim (urbanism, autorizări, PUZ/PUD/PUG, regenerare), prin conținut util, scris cu Claude și verificat tehnic de Alex.
2. Să convertească vizitatorii în conversații: instrumente utile (calculatoare, checklist-uri, brief-uri), formulare care ajung într-un loc de unde se urmăresc, nu doar în inbox.
3. Să fie solid tehnic: măsurabil (analytics), rapid (Core Web Vitals), corect indexat (sitemap, structured data), ușor de publicat în (conținut fără redeploy).

**Ce NU facem acum**: versiune în engleză (amânat până există trafic RO stabil), redesign vizual (designul din Claude Design este bun și implementat), migrare de stack (rămânem pe Next.js + Vercel).

**Principii de lucru**:

- Nu se inventează conținut care angajează studioul (prețuri, termene legale, cifre). Claude propune, Alex validează.
- Autorii publici ai conținutului sunt oameni reali din studio. Numele fictive din codul actual („Andra M.", „Vlad R.") trebuie înlocuite înainte de a crește volumul de conținut (vezi C-01).
- Fiecare funcționalitate nouă are un criteriu de acceptare măsurabil (ce se vede, ce se întâmplă, unde ajunge datele).
- Roadmap-ul se actualizează la fiecare task livrat, nu la sfârșit de etapă.

---

## 2. Starea curentă (baseline la 2026-09-11)

**Stack**: Next.js 16.2.2 (App Router), React 19.2.4, Tailwind CSS 4, TypeScript 5, ESLint 9, nodemailer. Deploy pe Vercel (folder `.vercel` prezent). Font: Comfortaa (next/font/google). Fără teste automate, fără CI configurat vizibil, fără analytics.

**Structura repo** (`amorph-studio/`):
- `src/app/` cu paginile: `/` (acasă), `/despre-noi`, `/servicii` + 6 pagini statice pe serviciu (`planificare-urbana`, `strategii-urbane`, `regenerare-urbana`, `design-interior`, `graphic-design`, `dezvoltare-web`), `/blog` + `/blog/[slug]`, `/contact`, `/confidentialitate`, `/termeni`, `/cookies`.
- `src/app/api/contact/route.ts`: POST cu validare, honeypot, trimitere prin SMTP (Google Workspace). Nu salvează lead-ul nicăieri.
- `src/lib/journal.ts`: articolele de blog ca date tipizate în cod (6 articole: 3 complete despre certificat de urbanism, PUZ, autorizație de construire + 3 scurte despre design urban, design interior, regenerare; corectat la 2026-10-22). Un articol nou = editare fișier + redeploy. Autori fictivi (Andra M., Vlad R., Maria D.).
- `src/lib/services.ts`: datele celor 6 servicii. `src/lib/flags.ts`: `SHOW_SERVICE_PORTFOLIO = false` (portofoliul de pe paginile de servicii e ascuns până există proiecte reale).
- `src/components/`: layout (Header, Footer), sections (Hero, Promisiune, AboutTeaser, BlogPreview, NewsletterBand, ContactForm, ContactMain, ServiciiFAQ), blog (TOC, progres citire, share, filtru), cookies (consent complet cu preferințe), legal (conținut + template).
- `src/app/layout.tsx`: metadata de bază (title template, description, keywords, OG fără imagine). Lipsesc: `metadataBase`, `sitemap.ts`, `robots.ts`, JSON-LD, imagine OG, canonical.
- `NewsletterBand` există vizual; nu are backend confirmat (de verificat la T-05).
- `design-handoff/`: bundle din Claude Design (mai 2026) cu prototipurile HTML și transcripturile de chat. Este referința vizuală; nu se editează.
- `CLAUDE.md` din repo conține doar `@AGENTS.md`, iar `AGENTS.md` are doar avertismentul Next.js. Nu există context de proiect pentru Claude Code (vezi T-01).

**Live** (amorph.ro): toate paginile de mai sus sunt publicate. Copy în română, ton conversațional, cele 3 promisiuni (fără silozuri, răspuns în 24h, transparență totală). Contact: office@amorph.ro, +40 747 089 434.

**Puncte slabe observate** (care motivează etapele de mai jos):
1. Site-ul nu e măsurat: nu știm câți vizitatori, de unde vin, ce pagini convertesc.
2. Indexare incompletă: fără sitemap, robots, structured data, OG image. Google vede mai puțin decât ar putea.
3. Publicarea de conținut cere un developer (redeploy). Cu 3 articole e ok; cu 30 nu.
4. Lead-urile trăiesc doar în inbox. Nu există istoric, status, follow-up.
5. Portofoliul e ascuns. Fără proiecte reale, credibilitatea stă doar în copy.
6. Claude Code pornește fără context de proiect la fiecare sesiune.

---

## 3. Etape

Etapele sunt secvențiale ca prioritate, dar taskurile din interiorul unei etape pot fi atacate în orice ordine dacă nu au dependențe.

### Etapa 0: Fundație de lucru (1-2 sesiuni)

Scop: ca orice sesiune viitoare (Cowork sau Claude Code) să pornească informată și să poată verifica ce livrează.

- [x] **T-01** (P1) *(2026-10-22: `CLAUDE.md` scris, necomis)* `CLAUDE.md` de proiect pentru Claude Code: stack, structura folderelor, convenții (design tokens din `globals.css`, tipar pagini de servicii, cum se adaugă un articol), comenzi de verificare, ce nu se atinge (`design-handoff/`, `.env.local`), regula „fără em dash în copy", limbă RO cu diacritice. Include pointer la `docs/ROADMAP.md`.
- [x] **T-02** (P1) *(2026-10-22: `docs/DECISIONS.md` creat, cu baseline; necomis)* Crearea folderului `docs/` în repo cu `ROADMAP.md` (acest fișier) și `DECISIONS.md` (jurnal scurt de decizii de arhitectură, o linie per decizie).
- [x] **T-03** (P2) *(2026-10-22: `master` = `origin/master` = producția Vercel `c37cb48`; `.env.local` nu e în git; necomise doar `docs/`, `.claude/`, `CLAUDE.md`)* Verificare stare repo: `git status`, branch-uri, ce e uncommitted, dacă `main` corespunde cu producția Vercel. Curățenie dacă e cazul. Confirmare că `.env.local` nu e în git.
- [x] **T-04** (P2) *(2026-10-22: build verde, 26 pagini; lint 4 erori + 1 warning, inventariate în DECISIONS)* Rulare `npm run build` + `npm run lint` local și notarea warning-urilor existente în `DECISIONS.md` (baseline). Fără fix-uri încă, doar inventar.
- [x] **T-05** (P2) *(2026-10-22: rezultatul în DECISIONS; a generat T-06, T-07, T-08)* Audit rapid al ce e „decorativ" vs „funcțional": NewsletterBand (are backend?), ShareMenu, JournalFilter, link-uri moarte, imagini placeholder rămase. Rezultatul devine listă de sub-taskuri în Etapa 1 sau 2.
- [x] **T-06** (P1, URGENT) *(2026-10-22: livrat în `7d1fed3`; `8336712` a redenumit honeypot-ul în `hp_zx7` pe toate formularele, pentru că autofill-ul din Chrome completa câmpul `company` și emailurile erau înghițite)* Formularul „hai să vorbim" de pe acasă (`ContactForm.tsx`) este simulat: arată succes după 1,5 s, dar nu trimite nimic. Se leagă la `/api/contact` ca `ContactMain` (topic implicit `question`, honeypot `company`, mesaje de eroare reale). Verificare: trimitere de test din producție ajunge în office@amorph.ro.
- [ ] **T-07** (P3) Curățare lint: 4 erori `react/no-unescaped-entities` în `legal/content.tsx` + directivă nefolosită în `CookieConsent.tsx`. Fără schimbare de text vizibil.
- [ ] **T-08** (P3) Ștergerea rutei moarte `src/app/servicii/[slug]/page.tsx` (toate serviciile au pagini statice; `design-interior` e generat dublu). Build-ul trebuie să genereze aceleași URL-uri publice.

### Etapa 1: Măsurare și indexare (2-3 sesiuni)

Scop: să vedem ce se întâmplă pe site și să fim indexați corect. Toate sunt lucrări mici, cu impact mare, fără schimbări vizuale.

- [ ] **T-10** (P1) `metadataBase` + canonical + OG image default (1200x630, generat din brand) în `layout.tsx`; OG/Twitter per pagină pentru servicii și articole.
- [ ] **T-11** (P1) `app/sitemap.ts` (generat din `services.ts` + `journal.ts` + paginile statice, inclusiv `/analiza-teren`) și `app/robots.ts`. Verificare în Google Search Console după deploy.
- [ ] **T-12** (P1) Google Search Console: proprietate pentru amorph.ro, verificare domeniu, trimitere sitemap. (Task manual pentru Alex; sesiunea pregătește pașii.)
- [ ] **T-13** (P1) Analytics conform cu consimțământul de cookies existent: opțiunea recomandată este Vercel Analytics + Speed Insights (fără cookies, simplu) sau GA4 condiționat de `cookie-consent.ts`. Decizia se notează în `DECISIONS.md`. Evenimente minime: trimitere formular contact, **comandă analiză teren** (conversia principală acum), click pe telefon/email, click CTA „ofertă rapidă".
- [ ] **T-14** (P2) JSON-LD: `Organization` + `LocalBusiness` (adresă, telefon, email, program) în layout; `Service` pe paginile de servicii; `Article` + `BreadcrumbList` pe articole; `FAQPage` pe secțiunile FAQ existente (ServiciiFAQ și FAQ-urile de pe paginile de servicii).
- [ ] **T-15** (P2) Audit Lighthouse / Core Web Vitals pe acasă, o pagină de serviciu, un articol. Lista de probleme devine sub-taskuri (imagini PNG mari din `public/images` sunt suspectul principal: conversie la WebP/AVIF, dimensiuni corecte, `priority` pe hero).
- [ ] **T-16** (P3) Pagină 404 personalizată (`app/not-found.tsx`) în stilul site-ului.

### Etapa 2: Conținut și motor editorial (continuu, pornit după Etapa 1)

Scop: publicare de conținut util, regulat, fără fricțiune tehnică, cu autori reali.

- [ ] **C-01** (P1) Autori reali: înlocuire „Andra M." / „Vlad R." / „Maria D." cu Alex (și Anca, dacă e de acord) în `journal.ts`; bio-uri reale, scurte. Pagina Despre noi și articolele trebuie să spună aceeași poveste.
- [ ] **C-02** (P1) Decizie de arhitectură a conținutului: (a) MDX în repo (`content/blog/*.mdx`) cu frontmatter, fără redeploy manual dacă folosim Vercel + git push, sau (b) CMS headless (Sanity / Payload / Keystatic). Recomandare inițială: **MDX + Keystatic** (editare din browser, fișierele rămân în git, zero cost). Se notează în `DECISIONS.md`.
- [ ] **C-03** (P1) Migrarea `journal.ts` la formatul ales în C-02, păstrând designul editorial existent (lead cu drop-cap, quote, deflist, TOC generat). Cele 3 articole existente se migrează fără pierderi.
- [ ] **C-04** (P1) Strategie de conținut: lista de 20-30 de subiecte grupate pe cele 6 servicii, cu keyword principal, intenție de căutare și pagina de serviciu spre care trimit. Se pornește de la ce știe Alex (CATUC / Legea 169/2026, PUZ/PUD/PUG, certificat de urbanism, autorizații, regenerare, DTAC/DTAD/DTOE) și se validează cu date (Ahrefs disponibil în Cowork).
- [ ] **C-05** (P2) Pipeline de publicare: șablon de prompt „articol nou" (brief → schiță Claude → revizie Alex → publicare), cu checklist SEO (title, meta, H2, linkuri interne, FAQ, JSON-LD). Ritm țintă: 2 articole / lună.
- [ ] **C-06** (P2) Linkare internă: fiecare articol trimite la serviciul relevant și la 2-3 articole conexe; paginile de servicii afișează articolele din categoria lor (există `getRelated` în journal.ts; se extinde).
- [ ] **C-07** (P1, urcat de la P2 pe 2026-10-22: pagina `/analiza-teren` spune că Legea 169/2026 a înlocuit Legea 50/1991 și 350/2001, iar articolele încă descriu regimul vechi) Actualizarea articolelor existente după CATUC / Legea 169/2026 (certificat de urbanism, PUZ, autorizație de construire) ca să nu dea informații depășite. Alex verifică conținutul juridic.
- [ ] **C-08** (P3) Newsletter real: dacă T-05 arată că NewsletterBand nu are backend, se decide (Resend / Buttondown / Mailchimp) sau se scoate banda până e gata.

### Etapa 3: Conversie și instrumente (după Etapa 1, în paralel cu Etapa 2)

Scop: vizitatorul găsește ceva util imediat, iar noi captăm și urmărim lead-urile.

- [ ] **L-01** (P1) Persistarea lead-urilor: `api/contact` și `api/analiza-teren` salvează fiecare trimitere (nume, email, telefon, subiect, mesaj, pagina sursă, UTM, timestamp) într-un store, pe lângă email. Opțiuni: Supabase (există conector în Cowork), Google Sheets (există deja pipeline-ul de lead-gen pe Sheets), Notion. Decizie în `DECISIONS.md`.
- [ ] **L-02** (P1) Formular de contact cu context: câmp „serviciu" (cele 6), „localitate / județ" pentru urbanism, „buget orientativ" opțional; sursa paginii se trimite automat. Răspuns automat de confirmare către client (template branded, ton Amorph).
- [ ] **L-03** (P1) Primul instrument: **checklist interactiv „Ce documente îmi trebuie pentru certificat de urbanism / autorizație de construire"** (pornit din articolele existente și skill-urile DTAC). Rezultatul se poate descărca ca PDF branded (există generatorul docx/pdf Amorph) contra email. Acesta e și magnetul de lead-uri.
- [ ] **L-04** (P2) Al doilea instrument: **estimator de durată și pași pentru PUZ / PUD** (nu prețuri; durate orientative, avize necesare, cine face ce). Alex validează logica.
- [ ] **L-05** (P2) Pagină „Cere o ofertă" per serviciu (brief structurat, 6-8 întrebări), înlocuind CTA-urile generice „ofertă rapidă" de pe paginile de servicii. Trimite în același store ca L-01.
- [ ] **L-06** (P2) Programare directă: buton „Programează 20 min" (Cal.com sau Google Calendar appointment) pe contact și pe paginile de servicii.
- [ ] **L-07** (P3) Instrument pentru serviciile digitale: „audit rapid al site-ului tău" (PageSpeed API + câteva verificări), reutilizând ce există în pipeline-ul de lead-gen web.
- [ ] **L-08** (P3) Dashboard intern de lead-uri (pagină protejată sau view în Supabase/Sheets) cu status: nou / contactat / ofertat / câștigat / pierdut.
- [x] **L-09** (P1) *(2026-10-22: livrat în `7d1fed3`, adăugat în roadmap după livrare)* **Analiză teren la preț fix** (`/analiza-teren`): primul produs vândut direct de pe site. 590 lei cu TVA / parcelă, livrare în 3 zile lucrătoare, garanție banii înapoi, suma se scade din PUD/PUZ ulterior. Pagină cu ce primești (8 răspunsuri), secțiune despre Legea 169/2026, pași, garanții, FAQ, JSON-LD `Service` + `Offer`. Formular de comandă (teren, județ, nr. cadastral, situație, intenție, PF/PJ cu CUI, acceptare termeni) + `/api/analiza-teren` (email intern + confirmare automată către client). Link în meniu, footer și FAQ planificare urbană.
- [x] **L-12** (P1) *(2026-10-22: livrat în `acf59fc`, verificat de Alex)* Notificări interne prin Resend de pe `comenzi@amorph.ro` (`src/lib/notify.ts`), cu fallback pe SMTP. Comenzile și mesajele de contact intră acum în Inbox ca emailuri noi.
- [ ] **L-10** (P1) Termeni pentru serviciul plătit: `/termeni` nu acoperă încă vânzarea online a analizei (preț, plată pe proformă, termen de livrare, condiții de rambursare, dreptul de retragere pentru persoane fizice la contracte la distanță). De verificat cu un jurist; textul se adaugă în `legal/content.tsx` sau ca pagină dedicată, iar checkbox-ul din formular trimite acolo.
- [ ] **L-11** (P2) Flux intern pentru comenzile de analiză: șablon de proformă, șablon de raport PDF branded (8 secțiuni, aceeași ordine ca pe pagină), evidența comenzilor (intră în store-ul de la L-01).

### Etapa 4: Credibilitate: portofoliu și dovezi (când există materiale)

Scop: activarea `SHOW_SERVICE_PORTFOLIO` cu proiecte reale.

- [ ] **P-01** (P1) Inventar proiecte publicabile (ce se poate arăta, ce e sub NDA, ce imagini există): Crișan (parc, mobilier urban, școală/sală de sport), PUG Jurilovca, altele. Alex decide lista.
- [ ] **P-02** (P1) Model de date `projects.ts` (sau MDX, conform C-02): titlu, serviciu, localitate, an, rol, rezumat, 3-5 imagini, rezultate.
- [ ] **P-03** (P1) Pagini `/proiecte` și `/proiecte/[slug]` + activarea secțiunilor de portofoliu pe paginile de servicii (`flags.ts`).
- [ ] **P-04** (P2) Studii de caz scurte pentru 2-3 proiecte (problema, abordarea, rezultatul), publicate și ca articole.
- [ ] **P-05** (P2) Testimoniale reale (cu acordul clienților) pe acasă și pe paginile de servicii.
- [ ] **P-06** (P3) Pagina echipei pe Despre noi cu oameni reali și atestări (R.U.R.), consistentă cu C-01.

### Etapa 5: Robustețe (continuu, la nevoie)

- [ ] **R-01** (P2) Teste minime: unit pentru validarea din `api/contact`, smoke test Playwright pentru navigare + trimitere formular (mock SMTP). Rulate în CI (GitHub Actions) la fiecare push.
- [ ] **R-02** (P2) Rate limiting pe `api/contact` (Vercel / upstash) și protecție suplimentară anti-spam dacă honeypot-ul nu ajunge.
- [ ] **R-03** (P2) Monitorizare: alerte pe erori (Vercel logs sau Sentry gratuit), uptime.
- [ ] **R-04** (P3) Accesibilitate: audit axe pe paginile principale, contrast pe galbenul accent, focus states, navigare din tastatură în meniu și cookie modal.
- [ ] **R-05** (P3) Upgrade-uri de dependențe planificate (Next, React) cu build verde, o dată la trimestru.

### Etapa 6: Extindere (nu se începe fără trafic stabil)

- [ ] **E-01** (P3) Versiune EN (i18n routing, traduceri, hreflang) doar pentru serviciile digitale și Despre noi, dacă apar lead-uri din afară.
- [ ] **E-02** (P3) Resurse descărcabile (ghiduri PDF branded) ca hub separat `/resurse`.
- [ ] **E-03** (P3) Automatizări din conținut spre social media (LinkedIn) pentru fiecare articol publicat.

---

## 4. Ordinea recomandată pentru primele 6 taskuri

1. ~~T-01 CLAUDE.md~~ (livrat 2026-10-22)
2. ~~T-02 + T-03 docs/ și starea repo-ului~~ (livrat 2026-10-22)
2b. ~~T-06 formularul de pe acasă~~ (livrat 2026-10-22)
2c. **L-10 termeni pentru serviciul plătit** (acum că site-ul vinde)
3. T-10 + T-11 metadata, sitemap, robots (o sesiune)
4. T-13 analytics (o sesiune)
5. C-01 autori reali (sesiune scurtă, dar necesară înainte de orice conținut nou)
6. L-01 persistarea lead-urilor (o sesiune; de aici încolo avem date)

După acestea, se alternează Etapa 2 (conținut) cu Etapa 3 (instrumente), câte un task din fiecare.

---

## 5. Decizii deschise (de luat cu Alex la momentul potrivit)

- **D-1** Store pentru lead-uri: Supabase vs Google Sheets vs Notion (vezi L-01).
- **D-2** Motor de conținut: MDX + Keystatic vs CMS headless (vezi C-02).
- **D-3** Analytics: Vercel Analytics vs GA4 (vezi T-13).
- **D-4** Cine apare ca autor: doar Alex, sau și Anca (vezi C-01).
- **D-5** Ce proiecte pot fi publicate și cu ce imagini (vezi P-01).
- **D-6** Programări: Cal.com vs Google Calendar (vezi L-06).

---

## 6. Log de actualizări

| Data | Sesiune | Ce s-a întâmplat |
|---|---|---|
| 2026-10-22 | Claude Code + Cowork | Livrat L-12 (Resend pentru notificări interne, `acf59fc`), verificat de Alex cap-coadă. Repo-ul local sincronizat cu GitHub; comise `CLAUDE.md`, `docs/`, `.env.local.example` (variabile Resend). Următorul pas recomandat: L-10. |
| 2026-10-22 | Claude Code + Cowork | Livrat `/analiza-teren` (L-09, adăugat și bifat) și T-06 în `7d1fed3`; fix honeypot în `8336712` (autofill Chrome). Live pe producție. Review: build verde (28 pagini), lint fără erori noi. Adăugate L-10 (termeni serviciu plătit), L-11 (flux intern comenzi); C-07 urcat la P1; T-11, T-13, L-01 extinse cu analiza de teren. Repo-ul local de pe PC-ul cu `docs/` e în urmă cu 2 commituri: `git pull` înainte de commit. |
| 2026-10-22 | Cowork | Etapa 0 închisă: T-01 (`CLAUDE.md`), T-02 (`docs/DECISIONS.md`), T-03 (repo sincron cu producția, `c37cb48`), T-04 (build verde, lint 4 erori + 1 warning), T-05 (audit). Descoperit: formularul de pe acasă e simulat (T-06, urgent). Adăugate T-07, T-08. Corectat: jurnalul are 6 articole, nu 3. Fișierele noi din repo sunt încă necomise. |
| 2026-09-11 | Cowork | Creare roadmap v1.0 pe baza auditului repo + site live + răspunsurilor lui Alex (scop echilibrat pe 6 servicii; direcții: SEO/conținut, conversie/instrumente, tehnic; Claude draftează conținutul, Alex revizuiește). Niciun task început încă. |
