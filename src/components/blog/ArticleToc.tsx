"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; text: string };

const SOCIALS = ["in", "𝕏", "✉", "⎘"];

// Sumar (table of contents). Pe desktop: sticky, evidențiază secțiunea activă.
// Pe mobil (variant="card"): card simplu, fără sticky/observer.
export default function ArticleToc({
  items,
  variant = "rail",
}: {
  items: TocItem[];
  variant?: "rail" | "card";
}) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (variant !== "rail") return;
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items, variant]);

  const onJump = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: "smooth" });
      setActive(id);
    }
  };

  if (variant === "card") {
    return (
      <div className="px-[18px] py-4 rounded-[18px] bg-platinum border-[1.5px] border-dark-card">
        <div className="text-[10px] tracking-[0.22em] text-muted mb-2.5">
          SUMAR
        </div>
        <ol className="list-none p-0 m-0 flex flex-col gap-2">
          {items.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => onJump(e, s.id)}
                className="flex gap-2.5 text-sm font-normal text-foreground"
              >
                <span className="text-muted w-[22px] text-[11px] tracking-[0.1em] shrink-0">
                  0{i + 1}
                </span>
                {s.text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <aside className="sticky top-[100px]">
      <div className="text-[11px] tracking-[0.25em] text-muted mb-[18px]">
        SUMAR
      </div>
      <ol className="list-none p-0 m-0 flex flex-col gap-3.5 [font-feature-settings:'tnum']">
        {items.map((s, i) => {
          const isActive = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => onJump(e, s.id)}
                className={`grid grid-cols-[28px_1fr] gap-2 text-sm font-normal transition-colors ${
                  isActive
                    ? "text-accent border-l-2 border-accent pl-2 -ml-2"
                    : "text-foreground hover:text-accent"
                }`}
              >
                <span className="text-muted text-[11px] tracking-[0.15em]">
                  0{i + 1}
                </span>
                <span>{s.text}</span>
              </a>
            </li>
          );
        })}
      </ol>
      <div className="mt-8 pt-[22px] border-t border-border text-[11px] tracking-[0.22em] text-muted">
        ↳ ÎMPĂRTĂȘEȘTE
      </div>
      <div className="flex gap-2 mt-3.5">
        {SOCIALS.map((s) => (
          <div
            key={s}
            className="w-9 h-9 rounded-full border-[1.5px] border-dark-card flex items-center justify-center text-[13px] text-foreground"
          >
            {s}
          </div>
        ))}
      </div>
    </aside>
  );
}
