"use client";

// Buton rotund „înapoi sus" din rail-ul dreapta (desktop). Sticky.
export default function BackToTop() {
  return (
    <aside className="sticky top-[100px]">
      <div className="text-[11px] tracking-[0.25em] text-muted mb-3.5">
        ↑ SUS
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Înapoi sus"
        className="w-20 h-20 rounded-full border-[1.5px] border-dark-card flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-foreground"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </aside>
  );
}
