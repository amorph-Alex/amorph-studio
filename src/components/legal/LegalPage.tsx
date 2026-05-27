"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY, DOCS, type DocKey, type LegalSectionData } from "./content";
import { openCookiePreferences } from "@/lib/cookie-consent";

function IconArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function IconCookie({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden
    >
      <path d="M12 2a10 10 0 1 0 10 10 5 5 0 0 1-5-5 5 5 0 0 1-5-5z" />
      <circle cx="9" cy="10" r="0.9" fill="currentColor" />
      <circle cx="14" cy="14" r="0.9" fill="currentColor" />
      <circle cx="9" cy="16" r="0.9" fill="currentColor" />
      <circle cx="16" cy="9" r="0.9" fill="currentColor" />
    </svg>
  );
}

const TABS: { key: DocKey; label: string }[] = [
  { key: "confidentialitate", label: "confidențialitate" },
  { key: "cookies", label: "cookies" },
  { key: "termeni", label: "termeni & condiții" },
];

function DocTabs({ active }: { active: DocKey }) {
  return (
    <div className="max-w-[1400px] mx-auto px-5 md:px-14 pt-6 md:pt-10">
      <div className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-3xl md:rounded-full bg-dark/[0.06] border border-dark-card/20">
        {TABS.map((t) => {
          const isActive = active === t.key;
          return (
            <Link
              key={t.key}
              href={DOCS[t.key].slug}
              className={`inline-flex items-center gap-2 px-4 md:px-5 py-2 rounded-full text-[12px] md:text-[13px] font-light transition ${
                isActive
                  ? "bg-dark text-platinum"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition ${
                  isActive ? "bg-accent" : "bg-dark-card/40"
                }`}
              />
              {t.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function LegalHero({ doc }: { doc: (typeof DOCS)[DocKey] }) {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-16 pb-10 md:pb-16">
      <div className="text-muted text-[11px] md:text-[13px] tracking-[0.22em] uppercase">
        ↳ {doc.eyebrow}
      </div>

      <h1 className="mt-5 md:mt-7 font-light lowercase tracking-tight leading-[0.95] text-[44px] sm:text-[68px] md:text-[104px] lg:text-[124px]">
        {doc.titleLead} <span className="font-bold">{doc.titleBold}</span>
        <span className="text-accent">.</span>
      </h1>

      <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-6 md:gap-10 items-end">
        <div className="md:col-span-7 lg:col-span-6">
          <p className="text-[15px] md:text-[17px] font-light text-foreground/85 leading-[1.7] max-w-[640px]">
            {doc.intro}
          </p>
        </div>
        <div className="md:col-span-5 lg:col-span-6 flex md:justify-end">
          <div className="inline-flex items-center gap-4 px-5 py-3 rounded-full border border-dark-card/35">
            <span className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-muted">
              ultima actualizare
            </span>
            <span className="text-[13px] md:text-[14px] font-medium">
              {doc.updatedAt}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-14 flex items-center">
        <div className="flex-1 h-[2px] bg-dark-card" />
        <div className="w-[18px] h-[18px] rounded-full bg-foreground" />
        <div className="flex-1 h-[2px] bg-dark-card" />
      </div>
    </section>
  );
}

function TOC({
  sections,
  activeId,
}: {
  sections: LegalSectionData[];
  activeId: string | null;
}) {
  return (
    <nav aria-label="cuprins" className="hidden lg:block">
      <div className="sticky top-10">
        <div className="text-[11px] tracking-[0.22em] uppercase text-muted mb-5">
          ↳ cuprins
        </div>
        <ul className="flex flex-col gap-3.5">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`group flex items-start gap-3 text-[13px] font-light transition ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  <span
                    className={`mt-[10px] h-px transition-all duration-300 ${
                      isActive
                        ? "w-7 bg-accent"
                        : "w-4 bg-dark-card/40 group-hover:bg-foreground/60"
                    }`}
                  />
                  <span
                    className={`tabular-nums ${
                      isActive ? "text-accent" : "text-foreground/50"
                    }`}
                  >
                    {s.number}
                  </span>
                  <span
                    className={`leading-snug ${isActive ? "font-medium" : ""}`}
                  >
                    {s.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function LegalSection({
  section,
  isFirst,
}: {
  section: LegalSectionData;
  isFirst: boolean;
}) {
  return (
    <section
      id={section.id}
      className={`scroll-mt-24 ${
        isFirst ? "" : "mt-14 md:mt-20 pt-14 md:pt-20 border-t border-dark-card/15"
      }`}
    >
      <div className="grid grid-cols-12 gap-x-4 md:gap-x-8">
        <div className="col-span-12 md:col-span-2">
          <div className="text-[48px] md:text-[64px] font-light leading-none text-accent tabular-nums">
            {section.number}
          </div>
        </div>
        <div className="col-span-12 md:col-span-10 -mt-2 md:mt-1">
          <h2 className="text-[26px] md:text-[36px] lg:text-[40px] font-light lowercase tracking-tight leading-[1.05]">
            {section.title}
            <span className="text-accent">.</span>
          </h2>
          <div className="prose-legal mt-6 md:mt-8 text-[15px] md:text-[17px] font-light text-foreground/90 max-w-[68ch]">
            {section.body}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyCard() {
  return (
    <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-0 rounded-[20px] overflow-hidden border border-dark-card/35">
      <div className="p-7 md:p-9 bg-dark text-platinum">
        <div className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-accent">
          ↳ operator
        </div>
        <div className="mt-3 text-[22px] md:text-[28px] font-light lowercase tracking-tight leading-tight">
          {COMPANY.name}
          <span className="text-accent">.</span>
        </div>
        <div className="mt-5 text-[13px] md:text-[14px] font-light leading-[1.7] text-platinum/80">
          <div>CUI: {COMPANY.cui}</div>
          <div>nr. Reg. Com.: {COMPANY.regCom}</div>
          <div>sediu: {COMPANY.address}</div>
        </div>
      </div>
      <div className="p-7 md:p-9 bg-platinum">
        <div className="text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-muted">
          ↳ contact dpo
        </div>
        <div className="mt-3 text-[18px] md:text-[20px] font-light leading-snug">
          pentru orice solicitare privind{" "}
          <span className="font-medium">protecția datelor</span>
          <span className="text-accent">.</span>
        </div>
        <div className="mt-5 flex flex-col gap-2 text-[14px] md:text-[15px] font-light">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.22em] uppercase text-muted w-14">
              email
            </span>
            <a
              href={`mailto:${COMPANY.email}`}
              className="underline underline-offset-4 decoration-dark-card/40 hover:text-accent transition"
            >
              {COMPANY.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.22em] uppercase text-muted w-14">
              dpo
            </span>
            <span>{COMPANY.dpoName}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.22em] uppercase text-muted w-14">
              telefon
            </span>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="hover:text-accent transition"
            >
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className="group inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-dark text-platinum hover:bg-dark-card transition-all"
    >
      <span className="grid place-items-center w-9 h-9 rounded-full bg-accent text-foreground">
        <IconCookie className="w-4 h-4" />
      </span>
      <span className="text-[13px] md:text-[14px] font-light">
        modifică preferințele cookies
      </span>
      <IconArrow className="w-4 h-4 -rotate-45 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

export default function LegalPage({ docKey }: { docKey: DocKey }) {
  const doc = DOCS[docKey];
  const [activeId, setActiveId] = useState<string | null>(
    doc.sections[0]?.id ?? null,
  );

  useEffect(() => {
    const ids = doc.sections.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [doc.key, doc.sections]);

  return (
    <article>
      <DocTabs active={doc.key} />
      <LegalHero doc={doc} />

      <div className="max-w-[1400px] mx-auto px-5 md:px-14">
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-14">
          <aside className="col-span-12 lg:col-span-3">
            <TOC sections={doc.sections} activeId={activeId} />
          </aside>

          <div className="col-span-12 lg:col-span-9">
            {doc.sections.map((s, i) => (
              <LegalSection key={s.id} section={s} isFirst={i === 0} />
            ))}

            {doc.key === "cookies" && (
              <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-4">
                <CookiePreferencesButton />
                <span className="text-[12px] md:text-[13px] font-light text-muted">
                  poți reveni oricând la setările tale.
                </span>
              </div>
            )}

            <CompanyCard />
          </div>
        </div>
      </div>
    </article>
  );
}
