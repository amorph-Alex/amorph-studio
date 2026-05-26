"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Category, JournalPost } from "@/lib/journal";

export default function JournalFilter({
  posts,
  categories,
}: {
  posts: JournalPost[];
  categories: readonly Category[];
}) {
  const [cat, setCat] = useState<Category>("toate");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat = cat === "toate" || p.cat === cat;
      const matchQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [posts, cat, query]);

  return (
    <>
      {/* Filters bar */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-12 md:pt-[88px]">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          {/* Category chips */}
          <div className="flex gap-2 md:gap-2.5 flex-wrap max-md:overflow-x-auto max-md:flex-nowrap max-md:w-full">
            {categories.map((c) => {
              const sel = c === cat;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-[13px] md:text-sm font-normal whitespace-nowrap inline-flex items-center gap-2 transition-all duration-200 ${
                    sel
                      ? "bg-foreground text-platinum border-[1.5px] border-foreground"
                      : "bg-transparent text-foreground border-[1.5px] border-dark-card hover:border-accent"
                  }`}
                >
                  {c}
                  {sel && c !== "toate" && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      className="opacity-70"
                      aria-hidden
                    >
                      <path d="M6 6l12 12M18 6L6 18" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search — desktop only, per design */}
          <label className="hidden md:flex items-center gap-2.5 px-5 py-2.5 rounded-full border-[1.5px] border-dark-card min-w-[280px] focus-within:bg-platinum focus-within:shadow-[0_0_0_2px_var(--accent)] transition-all">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--foreground)"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="caută în jurnal…"
              className="flex-1 min-w-0 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted"
            />
          </label>
        </div>
      </section>

      {/* Posts grid */}
      <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-7 md:pt-12">
        {visible.length === 0 ? (
          <div className="px-6 md:px-10 py-16 md:py-[120px] text-center border-[1.5px] border-dashed border-dark-card rounded-[22px] md:rounded-[28px]">
            <div className="text-[11px] md:text-[13px] tracking-[0.22em] md:tracking-[0.25em] text-muted">
              ↳ NIMIC AICI
            </div>
            <div className="text-[24px] md:text-[36px] font-light text-foreground mt-3 md:mt-[18px] tracking-[-0.4px] md:tracking-[-0.8px] leading-[1.2]">
              încă nu am scris despre{" "}
              <span className="font-bold">{cat === "toate" ? "asta" : cat}</span>
              <span className="text-accent">.</span>
            </div>
            <div className="text-[13px] md:text-base font-light text-muted mt-3 md:mt-3.5 max-w-[520px] mx-auto leading-[1.6]">
              Categoria e în plan, dar momentan nu avem un text gata. Scrie-ne
              dacă vrei să-l vezi mai repede.
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 md:mt-8 px-6 md:px-7 py-2.5 md:py-3 rounded-full border-[1.5px] border-foreground text-foreground text-[13px] md:text-sm font-normal hover:bg-foreground hover:text-platinum transition-colors"
            >
              propune un subiect
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-8 md:gap-y-16">
            {visible.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col gap-[18px] transition-transform duration-300 md:hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[18px] border-[1.5px] border-dark-card relative">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-center gap-2 text-[12px] tracking-[0.18em] text-muted uppercase">
                  <span>№ {p.n}</span>
                  <span>·</span>
                  <span
                    className={
                      p.cat === cat ? "text-accent font-bold" : ""
                    }
                  >
                    {p.cat}
                  </span>
                  <span>·</span>
                  <span>{p.read}</span>
                </div>
                <h3 className="text-[26px] font-normal text-foreground leading-[1.15] m-0 tracking-[-0.4px] transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="text-sm font-light text-muted leading-[1.6] m-0">
                  {p.excerpt}
                </p>
                <div className="mt-1 text-[12px] tracking-[0.18em] text-muted uppercase">
                  {p.author} · {p.date}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
