import type { ReactNode } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/site";

export type DocKey = "confidentialitate" | "cookies" | "termeni";

export type LegalSectionData = {
  id: string;
  number: string;
  title: string;
  body: ReactNode;
};

export type LegalDoc = {
  key: DocKey;
  slug: string;
  eyebrow: string;
  titleLead: string;
  titleBold: string;
  updatedAt: string;
  intro: string;
  sections: LegalSectionData[];
};

// Datele firmei stau în src/lib/site.ts (le folosesc și paginile legale, și JSON-LD).
export { COMPANY };

// Card evidențiat pentru informație importantă (ton light / dark).
function Callout({
  label,
  children,
  tone = "light",
}: {
  label?: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  if (tone === "dark") {
    return (
      <div className="my-7 rounded-[20px] bg-dark text-platinum p-6 md:p-7">
        {label && (
          <div className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-platinum/60 mb-3">
            ↳ {label}
          </div>
        )}
        <div className="font-light text-[14px] md:text-[16px] leading-[1.65]">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="my-7 rounded-[20px] border border-dark-card/40 bg-dark/[0.03] p-6 md:p-7">
      {label && (
        <div className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-muted mb-3">
          ↳ {label}
        </div>
      )}
      <div className="font-light text-[14px] md:text-[16px] leading-[1.65]">
        {children}
      </div>
    </div>
  );
}

const CONFIDENTIALITATE_SECTIONS: LegalSectionData[] = [
  {
    id: "introducere",
    number: "01",
    title: "despre această politică",
    body: (
      <>
        <p>
          Confidențialitatea ta contează pentru noi. Prezenta politică explică ce
          date personale colectăm atunci când vizitezi site-ul nostru, când ne
          scrii sau când lucrăm împreună la un proiect, de ce le colectăm, cum le
          folosim și ce drepturi ai în legătură cu ele.
        </p>
        <p>
          Documentul este redactat în conformitate cu{" "}
          <strong>Regulamentul (UE) 2016/679 — GDPR</strong>, cu Legea nr.
          190/2018 privind măsurile de aplicare a GDPR în România și cu Legea nr.
          506/2004 privind prelucrarea datelor cu caracter personal în sectorul
          comunicațiilor electronice.
        </p>
        <Callout label="în cuvinte simple">
          Nu vindem datele tale. Nu le împărtășim cu nimeni decât dacă e absolut
          necesar pentru ca tu să primești serviciul cerut. Și poți oricând să ne
          ceri să le ștergem.
        </Callout>
      </>
    ),
  },
  {
    id: "operator",
    number: "02",
    title: "cine este operatorul",
    body: (
      <>
        <p>
          Operatorul datelor tale personale este <strong>{COMPANY.name}</strong>,
          cu sediul în {COMPANY.address}, înregistrat la Registrul Comerțului cu
          numărul {COMPANY.regCom}, cod unic de identificare fiscală {COMPANY.cui}.
        </p>
        <p>
          Pentru orice întrebare sau solicitare privind datele tale personale, ne
          poți contacta la adresa de e-mail <strong>{COMPANY.email}</strong> sau
          în scris, la sediul nostru. Persoana responsabilă cu protecția datelor
          este <strong>{COMPANY.dpoName}</strong>, pe care îl poți contacta la{" "}
          <strong>{COMPANY.dpo}</strong>.
        </p>
      </>
    ),
  },
  {
    id: "date-colectate",
    number: "03",
    title: "ce date colectăm",
    body: (
      <>
        <p>
          Colectăm doar datele strict necesare pentru a-ți răspunde, a livra
          serviciile contractate și a opera site-ul. În funcție de modul în care
          interacționezi cu noi, acestea pot include:
        </p>
        <ul>
          <li>
            <strong>date de identificare:</strong> nume, prenume, denumirea
            companiei pe care o reprezinți;
          </li>
          <li>
            <strong>date de contact:</strong> adresă de e-mail, număr de telefon,
            adresă poștală;
          </li>
          <li>
            <strong>date despre proiect:</strong> brief, documentație tehnică,
            fișiere și fotografii pe care ni le transmiți;
          </li>
          <li>
            <strong>date contractuale și financiare:</strong> CUI, contract
            semnat, facturi, încasări;
          </li>
          <li>
            <strong>date tehnice:</strong> adresă IP, tipul de browser, sistemul
            de operare, paginile vizitate, durata vizitei;
          </li>
          <li>
            <strong>cookie-uri și identificatori similari</strong> — detaliate în
            politica de cookies.
          </li>
        </ul>
        <p>
          Nu colectăm intenționat date sensibile (origine etnică, opinii politice,
          date de sănătate, date biometrice). Dacă ne transmiți astfel de date
          prin formularul de contact, te rugăm să eviți acest lucru.
        </p>
      </>
    ),
  },
  {
    id: "scopuri",
    number: "04",
    title: "în ce scopuri folosim datele",
    body: (
      <>
        <p>Prelucrăm datele tale pentru următoarele scopuri concrete:</p>
        <ul>
          <li>
            să răspundem la mesajele și solicitările trimise prin formularul de
            contact;
          </li>
          <li>
            să întocmim oferte, contracte și facturi pentru serviciile
            contractate;
          </li>
          <li>
            să livrăm proiectele agreate și să comunicăm pe parcursul
            colaborării;
          </li>
          <li>
            să ne îndeplinim obligațiile legale (fiscalitate, arhivare,
            raportări);
          </li>
          <li>să măsurăm performanța site-ului și să-l îmbunătățim;</li>
          <li>
            opțional, dacă ți-ai dat consimțământul, să-ți trimitem newsletter cu
            proiectele noastre recente.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "temei-legal",
    number: "05",
    title: "temeiul legal al prelucrării",
    body: (
      <>
        <p>
          În funcție de scop, prelucrăm datele pe baza unuia dintre următoarele
          temeiuri:
        </p>
        <ul>
          <li>
            <strong>executarea unui contract</strong> — pentru livrarea
            serviciilor pe care le-ai contractat;
          </li>
          <li>
            <strong>obligație legală</strong> — pentru facturare, contabilitate,
            arhivare;
          </li>
          <li>
            <strong>interesul nostru legitim</strong> — pentru a-ți răspunde la
            mesaje, pentru securitatea site-ului și pentru a măsura, în mod
            agregat, traficul;
          </li>
          <li>
            <strong>consimțământul tău</strong> — pentru cookie-urile neesențiale
            și pentru newsletter, dacă l-ai cerut explicit.
          </li>
        </ul>
        <p>
          Îți poți retrage oricând consimțământul, fără ca acest lucru să afecteze
          legalitatea prelucrărilor efectuate anterior retragerii.
        </p>
      </>
    ),
  },
  {
    id: "destinatari",
    number: "06",
    title: "cui transmitem datele",
    body: (
      <>
        <p>
          Datele tale rămân, în principiu, în cadrul {COMPANY.name}. În anumite
          cazuri, justificate strict de scopurile descrise mai sus, ele pot ajunge
          la:
        </p>
        <ul>
          <li>
            furnizori de servicii de găzduire web și e-mail, în calitate de
            persoane împuternicite;
          </li>
          <li>
            furnizorul soluției de contabilitate și firma de contabilitate care ne
            deservește;
          </li>
          <li>
            subcontractanți cu care colaborăm punctual pe un proiect (fotograf,
            dezvoltator, tipografie), doar cu informațiile strict necesare;
          </li>
          <li>
            autorități publice, doar la solicitarea legală a acestora (ANAF,
            instanțe de judecată, organe de control).
          </li>
        </ul>
        <Callout label="contractual" tone="dark">
          Toți furnizorii cu care lucrăm semnează un acord de prelucrare a datelor
          (DPA) și sunt obligați contractual să respecte aceleași standarde de
          securitate și confidențialitate ca noi.
        </Callout>
      </>
    ),
  },
  {
    id: "transfer",
    number: "07",
    title: "transferuri în afara UE",
    body: (
      <>
        <p>
          În regulă generală, datele tale sunt stocate și prelucrate pe servere
          din Uniunea Europeană. Atunci când folosim furnizori din afara UE (de
          exemplu, instrumente de analiză sau e-mail cu infrastructură în SUA), ne
          asigurăm că transferul are loc în baza unor garanții adecvate: clauze
          contractuale standard aprobate de Comisia Europeană sau deciziile de
          adecvare emise de aceasta.
        </p>
      </>
    ),
  },
  {
    id: "durata",
    number: "08",
    title: "cât timp păstrăm datele",
    body: (
      <>
        <p>
          Păstrăm datele tale doar atât timp cât e necesar pentru scopul în care
          le-am colectat, după cum urmează:
        </p>
        <ul>
          <li>
            mesajele primite prin formularul de contact:{" "}
            <strong>maxim 24 de luni</strong> de la ultima interacțiune;
          </li>
          <li>
            documente contractuale și fiscale: <strong>10 ani</strong>, conform
            legii;
          </li>
          <li>
            fișiere de proiect: pe durata colaborării plus <strong>3 ani</strong>,
            ca arhivă tehnică;
          </li>
          <li>date de newsletter: până când îți retragi consimțământul;</li>
          <li>
            date de trafic și log-uri tehnice: <strong>maxim 12 luni</strong>.
          </li>
        </ul>
        <p>
          După expirarea perioadelor de mai sus, datele sunt șterse în siguranță
          sau anonimizate.
        </p>
      </>
    ),
  },
  {
    id: "drepturi",
    number: "09",
    title: "drepturile tale",
    body: (
      <>
        <p>
          Conform GDPR, ai următoarele drepturi în legătură cu datele tale
          personale:
        </p>
        <ul>
          <li>
            <strong>dreptul de acces</strong> — să afli ce date avem despre tine
            și să primești o copie;
          </li>
          <li>
            <strong>dreptul la rectificare</strong> — să corectezi datele
            inexacte;
          </li>
          <li>
            <strong>dreptul la ștergere</strong> („dreptul de a fi uitat") — în
            condițiile prevăzute de GDPR;
          </li>
          <li>
            <strong>dreptul la restricționare</strong> — să limitezi modul în care
            prelucrăm datele;
          </li>
          <li>
            <strong>dreptul la portabilitate</strong> — să primești datele
            într-un format structurat;
          </li>
          <li>
            <strong>dreptul la opoziție</strong> — să te opui prelucrării bazate
            pe interes legitim;
          </li>
          <li>
            <strong>dreptul de a-ți retrage consimțământul</strong>, oricând,
            pentru prelucrările bazate pe el;
          </li>
          <li>
            <strong>dreptul de a depune o plângere</strong> la{" "}
            <strong>ANSPDCP</strong> (www.dataprotection.ro).
          </li>
        </ul>
        <Callout label="cum îți exerciți drepturile">
          Trimite-ne un e-mail la <strong>{COMPANY.dpo}</strong>. Răspundem în
          maxim <strong>30 de zile</strong>. Dacă solicitarea este complexă, te
          anunțăm și putem extinde termenul cu încă 60 de zile, conform GDPR.
        </Callout>
      </>
    ),
  },
  {
    id: "securitate",
    number: "10",
    title: "securitatea datelor",
    body: (
      <>
        <p>
          Tratăm securitatea datelor tale cu seriozitate. Aplicăm măsuri tehnice
          și organizatorice adecvate riscurilor: criptare HTTPS pentru tot
          traficul site-ului, acces controlat la fișiere, autentificare în doi
          factori pentru conturile noastre interne, backup-uri periodice și
          revizuiri anuale ale procedurilor.
        </p>
        <p>
          Chiar și așa, nicio metodă de transmitere pe internet nu este 100%
          sigură. Dacă luăm la cunoștință de o breșă de securitate care îți
          afectează datele, te vom notifica conform obligațiilor GDPR.
        </p>
      </>
    ),
  },
  {
    id: "modificari",
    number: "11",
    title: "modificări ale politicii",
    body: (
      <>
        <p>
          Pe măsură ce serviciile noastre evoluează, este posibil să actualizăm
          prezenta politică. Versiunea curentă este afișată permanent pe site, cu
          data ultimei actualizări marcată la început. Pentru modificări
          substanțiale, te vom anunța și prin e-mail dacă suntem în contact direct
          cu tine.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "12",
    title: "contact",
    body: (
      <>
        <p>
          Pentru orice întrebare, solicitare sau reclamație legată de prelucrarea
          datelor tale personale, ne poți contacta pe oricare dintre canalele de
          mai jos. Suntem oameni reali și răspundem la fel.
        </p>
      </>
    ),
  },
];

const COOKIES_SECTIONS: LegalSectionData[] = [
  {
    id: "ce-sunt-cookies",
    number: "01",
    title: "ce sunt cookie-urile",
    body: (
      <>
        <p>
          Cookie-urile sunt fișiere de text de mici dimensiuni pe care site-ul le
          salvează în browserul tău. Ne ajută să recunoaștem dispozitivul, să
          reținem preferințele tale și să măsurăm cum funcționează site-ul. Pot fi
          setate de noi (cookie-uri „first-party") sau de servicii terțe pe care
          le folosim (cookie-uri „third-party").
        </p>
      </>
    ),
  },
  {
    id: "categorii",
    number: "02",
    title: "ce categorii folosim",
    body: (
      <>
        <p>Pe site-ul {COMPANY.name} folosim trei categorii de cookie-uri:</p>
        <ul>
          <li>
            <strong>strict necesare</strong> — pentru funcționarea de bază a
            site-ului (navigare, formular de contact, preferințele de cookies). Nu
            pot fi dezactivate.
          </li>
          <li>
            <strong>analitice</strong> — ne ajută să înțelegem, în mod agregat și
            anonim, ce pagini sunt vizitate și cât timp.
          </li>
          <li>
            <strong>de marketing</strong> — permit afișarea unor reclame relevante
            pe alte site-uri, dacă ne-ai dat consimțământul.
          </li>
        </ul>
        <Callout label="durată" tone="dark">
          Cookie-urile de sesiune dispar când închizi browserul. Cele persistente
          expiră automat — cel mult <strong>12 luni</strong> pentru cele analitice,{" "}
          <strong>6 luni</strong> pentru cele de marketing.
        </Callout>
      </>
    ),
  },
  {
    id: "consimtamant",
    number: "03",
    title: "consimțământ",
    body: (
      <>
        <p>
          La prima vizită, îți afișăm un banner unde poți accepta tot, refuza tot
          (cu excepția celor strict necesare) sau alege individual pe categorii.
          Poți reveni oricând asupra deciziei prin butonul de mai jos.
        </p>
      </>
    ),
  },
  {
    id: "control",
    number: "04",
    title: "cum dezactivezi cookie-urile",
    body: (
      <>
        <p>
          Poți gestiona cookie-urile direct din browserul tău (Chrome, Firefox,
          Safari, Edge — toate au setări dedicate). Ține cont că dezactivarea
          totală a cookie-urilor poate afecta unele funcționalități ale site-ului.
        </p>
      </>
    ),
  },
];

const LINK = "underline underline-offset-2 hover:text-accent transition-colors";

const TERMENI_SECTIONS: LegalSectionData[] = [
  {
    id: "introducere-t",
    number: "01",
    title: "despre acești termeni",
    body: (
      <>
        <p>
          Acești termeni reglementează folosirea site-ului amorph.ro și comenzile
          plasate prin el. Site-ul este operat de {COMPANY.name}, CUI {COMPANY.cui},
          nr. de ordine în Registrul Comerțului {COMPANY.regCom}, cu sediul în{" "}
          {COMPANY.address}, email{" "}
          <a href={`mailto:${COMPANY.email}`} className={LINK}>{COMPANY.email}</a>,
          telefon {COMPANY.phone}.
        </p>
        <p>
          Secțiunile 03-10 se aplică doar analizei de teren comandate online.
          Restul se aplică oricui folosește site-ul.
        </p>
      </>
    ),
  },
  {
    id: "servicii-t",
    number: "02",
    title: "serviciile oferite",
    body: (
      <>
        <p>
          Pe site prezentăm activitatea studioului: planificare urbană, strategii
          și regenerare urbană, design interior, graphic design și dezvoltare web.
          Pentru aceste servicii, informațiile de pe site nu sunt o ofertă fermă:
          fiecare colaborare se stabilește printr-o ofertă și un contract separat,
          semnat de ambele părți.
        </p>
        <p>
          Singurul serviciu care se comandă direct de pe site este{" "}
          <Link href="/analiza-teren" className={LINK}>analiza urbanistică a unui teren</Link>,
          în condițiile de mai jos.
        </p>
      </>
    ),
  },
  {
    id: "analiza-teren",
    number: "03",
    title: "analiza de teren: ce este",
    body: (
      <>
        <p>
          Analiza de teren este un raport scris, în format PDF, întocmit de un
          urbanist atestat RUR. Pentru o singură parcelă, răspunde la întrebările
          descrise pe pagina serviciului: suprafața construibilă, regimul de
          înălțime, funcțiunea, retragerile, restricțiile, documentația de
          urbanism care se aplică, pașii următori și o recomandare argumentată.
        </p>
        <Callout label="important" tone="dark">
          Analiza este informativă. Nu este un certificat de urbanism, nu este un
          act emis de o autoritate și nu înlocuiește certificatul, avizele sau
          autorizațiile cerute de lege. Nu este nici consultanță juridică: nu
          verificăm situația juridică a proprietății și nici clauzele unui
          antecontract.
        </Callout>
        <p>
          Analiza se bazează pe documentele pe care ni le trimiți și pe
          documentațiile de urbanism și legislația disponibile la data la care o
          întocmim. Dacă acestea se schimbă după aceea (de exemplu, se aprobă un
          PUZ nou sau se modifică legea), concluziile pot să nu mai fie valabile.
        </p>
        <p>
          Întrebările de clarificare despre raport, trimise pe email, sunt incluse
          în preț.
        </p>
      </>
    ),
  },
  {
    id: "comanda-t",
    number: "04",
    title: "cum se încheie contractul",
    body: (
      <>
        <ul>
          <li>
            <strong>trimiți formularul de comandă</strong> de pe pagina analizei.
            Comanda este o cerere și nu te obligă la plată. Îți confirmăm automat,
            pe email, că am primit-o.
          </li>
          <li>
            <strong>îți trimitem factura proformă</strong> pe email, în cel mult o
            zi lucrătoare. Contractul se consideră încheiat în momentul în care îți
            trimitem proforma.
          </li>
          <li>
            <strong>putem refuza o comandă</strong> înainte de a trimite proforma
            (de exemplu, dacă terenul nu poate fi identificat sau datele sunt
            incomplete). Te anunțăm pe email și nu datorezi nimic.
          </li>
        </ul>
        <p>
          Contractul se încheie în limba română și este format din acești termeni,
          în versiunea afișată la data comenzii, împreună cu datele din formular și
          din proformă. Comanda, proforma și corespondența rămân în emailurile
          noastre și ale tale; termenii îi poți salva sau tipări de pe această
          pagină.
        </p>
      </>
    ),
  },
  {
    id: "pret-t",
    number: "05",
    title: "preț și plată",
    body: (
      <>
        <ul>
          <li>
            Prețul este <strong>590 lei pentru o parcelă, TVA inclus</strong>.
            Fiecare parcelă este o analiză separată.
          </li>
          <li>
            Plata se face prin transfer bancar, în contul din factura proformă. Nu
            încasăm plăți cu cardul pe site și nu stocăm date de plată.
          </li>
          <li>
            Proforma este valabilă 5 zile lucrătoare. Dacă plata nu ajunge în acest
            termen, comanda se anulează, fără nicio obligație pentru tine. O poți
            plasa din nou oricând.
          </li>
          <li>După încasare îți trimitem factura fiscală.</li>
        </ul>
      </>
    ),
  },
  {
    id: "livrare-t",
    number: "06",
    title: "termenul de livrare",
    body: (
      <>
        <p>
          Analiza se livrează în <strong>3 zile lucrătoare</strong>. Termenul
          începe în ziua lucrătoare de după ce sunt îndeplinite ambele condiții:
          plata a intrat în contul nostru și am primit documentele pe care le ai
          despre teren (sau ne-ai confirmat că nu ai altele).
        </p>
        <p>
          Dacă ești persoană fizică și nu ne-ai cerut să începem imediat (vezi
          secțiunea 07), lucrul începe după ce expiră perioada de retragere de 14
          zile.
        </p>
        <p>
          Raportul se trimite pe email, în PDF. Dacă pe parcurs avem nevoie de o
          informație de la tine, termenul se suspendă până ne răspunzi. Dacă nu
          putem livra la timp din motive care țin de noi, te anunțăm înainte de
          expirarea termenului, cu noua dată; dacă nu ești de acord cu ea, poți
          renunța la comandă și îți returnăm integral suma.
        </p>
      </>
    ),
  },
  {
    id: "retragere-t",
    number: "07",
    title: "dreptul de retragere",
    body: (
      <>
        <p>
          Această secțiune se aplică dacă ești consumator, adică persoană fizică ce
          comandă în afara activității profesionale. Comenzile facturate pe firmă
          nu beneficiază de drept de retragere.
        </p>
        <p>
          Conform OUG nr. 34/2014 privind drepturile consumatorilor, te poți
          retrage din contract în <strong>14 zile calendaristice</strong> de la
          încheierea lui (ziua în care îți trimitem proforma), fără să îți
          motivezi decizia și fără alte costuri decât cele de mai jos.
        </p>
        <ul>
          <li>
            <strong>cum te retragi:</strong> ne trimiți o declarație clară pe email
            la <a href={`mailto:${COMPANY.email}`} className={LINK}>{COMPANY.email}</a>{" "}
            sau prin poștă la sediu, înainte să expire cele 14 zile. Poți folosi
            modelul de mai jos, dar nu e obligatoriu.
          </li>
          <li>
            <strong>ce primești înapoi:</strong> dacă ai plătit, îți returnăm suma
            în cel mult 14 zile de la primirea declarației, prin transfer în contul
            din care ai plătit, dacă nu convenim altfel.
          </li>
        </ul>
        <Callout label="dacă vrei să începem imediat" tone="dark">
          Ne poți cere expres, la comandă, să începem lucrul înainte să treacă
          cele 14 zile. În acest caz, dacă te retragi după ce am început, dar
          înainte să livrăm, plătești doar partea proporțională cu ce am lucrat
          până atunci și îți returnăm restul. După ce îți livrăm analiza, nu mai
          ai drept de retragere, pentru că serviciul a fost prestat complet la
          cererea ta (art. 16 lit. a) din OUG nr. 34/2014). Dacă nu ne ceri asta,
          începem lucrul după ce expiră cele 14 zile.
        </Callout>
        <Callout label="model de formular de retragere">
          Către {COMPANY.name}, {COMPANY.address}, {COMPANY.email}.
          <br />
          Vă informez prin prezenta cu privire la retragerea mea din contractul
          privind prestarea următorului serviciu: analiză urbanistică teren,
          pentru terenul din […].
          <br />
          Comandat la data: […]. Numele consumatorului: […]. Adresa
          consumatorului: […]. Data: […].
        </Callout>
      </>
    ),
  },
  {
    id: "garantii-t",
    number: "08",
    title: "banii înapoi și deducerea din onorariu",
    body: (
      <>
        <ul>
          <li>
            <strong>banii înapoi:</strong> dacă nu putem găsi sau obține
            documentațiile de urbanism care se aplică terenului (de exemplu,
            PUG-ul localității nu e public și nu ni se pune la dispoziție), te
            anunțăm și îți returnăm integral suma, în cel mult 14 zile de la data
            la care te-am anunțat.
          </li>
          <li>
            Garanția nu se aplică atunci când verdictul nu este cel pe care îl
            așteptai: un răspuns negativ, argumentat, este o analiză livrată.
          </li>
          <li>
            <strong>deducerea din onorariu:</strong> dacă, după analiză, încheiem
            cu tine un contract pentru o documentație de urbanism (PUD, PUZ) sau
            pentru proiectul unei construcții pe același teren, cei 590 de lei se
            scad din onorariul acelui contract.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "raspundere-analiza",
    number: "09",
    title: "răspunderea pentru analiză",
    body: (
      <>
        <p>
          Întocmim analiza cu grija profesională a unui urbanist atestat și
          răspundem pentru corectitudinea ei față de documentele și reglementările
          pe care le indică drept surse.
        </p>
        <p>
          Nu răspundem pentru informații greșite sau incomplete primite de la tine
          sau de la autorități, pentru schimbările de reglementare de după data
          analizei și nici pentru felul în care o autoritate interpretează
          ulterior aceleași reglementări. Decizia de a cumpăra sau de a investi îți
          aparține.
        </p>
        <p>
          Dacă ești firmă, răspunderea noastră pentru analiză este limitată la
          prețul plătit. Dacă ești consumator, acești termeni nu îți restrâng
          drepturile pe care ți le dă legea.
        </p>
      </>
    ),
  },
  {
    id: "reclamatii-t",
    number: "10",
    title: "reclamații",
    body: (
      <>
        <p>
          Dacă nu ești mulțumit de comandă sau de analiză, scrie-ne la{" "}
          <a href={`mailto:${COMPANY.email}`} className={LINK}>{COMPANY.email}</a>{" "}
          și îți răspundem în scris.
        </p>
        <p>
          Ca consumator, te poți adresa și Autorității Naționale pentru Protecția
          Consumatorilor (
          <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className={LINK}>anpc.ro</a>
          ), inclusiv prin procedura de{" "}
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer" className={LINK}>soluționare alternativă a litigiilor (SAL)</a>.
        </p>
      </>
    ),
  },
  {
    id: "proprietate",
    number: "11",
    title: "proprietate intelectuală",
    body: (
      <>
        <p>
          Conținutul site-ului (texte, imagini, identitate vizuală, cod sursă) este
          proprietatea {COMPANY.name} sau a colaboratorilor menționați și este
          protejat de legislația privind dreptul de autor. Reproducerea, parțială
          sau totală, fără acordul nostru scris este interzisă.
        </p>
        <p>
          Analiza de teren pe care o primești o poți folosi și arăta celor
          implicați în decizia ta (vânzător, bancă, notar, proiectant). Nu o poți
          publica sau revinde.
        </p>
      </>
    ),
  },
  {
    id: "raspundere",
    number: "12",
    title: "răspunderea pentru site",
    body: (
      <>
        <p>
          Facem eforturi rezonabile ca informațiile de pe site, inclusiv
          articolele, să fie corecte și actualizate, dar ele au caracter general
          și nu țin locul unei analize a situației tale. {COMPANY.name} nu răspunde
          pentru daunele indirecte rezultate din folosirea lor.
        </p>
      </>
    ),
  },
  {
    id: "legea-aplicabila",
    number: "13",
    title: "legea aplicabilă",
    body: (
      <>
        <p>
          Acestor termeni li se aplică legea română. Încercăm să rezolvăm orice
          neînțelegere pe cale amiabilă. Dacă nu reușim, litigiile cu firmele sunt
          de competența instanțelor din circumscripția sediului {COMPANY.name}, iar
          pentru consumatori instanța competentă se stabilește potrivit legii.
        </p>
      </>
    ),
  },
];

export const DOCS: Record<DocKey, LegalDoc> = {
  confidentialitate: {
    key: "confidentialitate",
    slug: "/confidentialitate",
    eyebrow: "legal · politică",
    titleLead: "politica de",
    titleBold: "confidențialitate",
    updatedAt: "15 mai 2026",
    intro:
      "Acest document explică, în limbaj cât mai simplu, ce date colectăm despre tine, de ce, ce facem cu ele și ce drepturi ai. Pentru orice nelămurire, ne găsești la datele din partea de jos a paginii.",
    sections: CONFIDENTIALITATE_SECTIONS,
  },
  cookies: {
    key: "cookies",
    slug: "/cookies",
    eyebrow: "legal · politică",
    titleLead: "politica de",
    titleBold: "cookies",
    updatedAt: "15 mai 2026",
    intro:
      "Folosim cookie-uri și tehnologii similare pentru ca site-ul să funcționeze, pentru a-l îmbunătăți și, dacă ne dai voie, pentru a măsura cum este folosit. Mai jos găsești detaliile complete.",
    sections: COOKIES_SECTIONS,
  },
  termeni: {
    key: "termeni",
    slug: "/termeni",
    eyebrow: "legal · contractual",
    titleLead: "termeni și",
    titleBold: "condiții",
    updatedAt: "22 octombrie 2026",
    intro:
      "Acești termeni reglementează folosirea site-ului și comenzile pentru analiza de teren plasate prin el. Te rugăm să îi citești cu atenție înainte să comanzi.",
    sections: TERMENI_SECTIONS,
  },
};
