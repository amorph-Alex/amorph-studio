"use client";

import { useEffect, useRef, useState } from "react";

const ShareIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />
  </svg>
);

export default function ShareMenu({
  title,
  label = "partajează",
  compact = false,
}: {
  title: string;
  label?: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const url = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard indisponibil — ignorăm în liniște
    }
  };

  const shareLinks: { label: string; ico: string; href: string }[] = [
    {
      label: "LinkedIn",
      ico: "in",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "Twitter / X",
      ico: "𝕏",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: "email",
      ico: "✉",
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={`inline-flex items-center gap-2 rounded-full border-[1.5px] border-foreground font-normal transition-colors ${
          open ? "bg-foreground text-platinum" : "bg-transparent text-foreground"
        } ${compact ? "px-3.5 py-2 text-xs" : "px-[18px] py-2.5 text-[13px]"}`}
      >
        <ShareIcon size={compact ? 12 : 14} />
        {compact ? "share" : label}
      </button>

      {open && (
        <div
          className="absolute top-[calc(100%+10px)] right-0 bg-dark text-platinum rounded-[18px] p-2 min-w-[200px] z-20"
          style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.18)" }}
        >
          <button
            type="button"
            onClick={copyLink}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-light hover:bg-white/10 transition-colors text-left"
          >
            <span className="w-6 h-6 rounded-full bg-accent text-foreground inline-flex items-center justify-center text-[11px] font-bold shrink-0">
              ⎘
            </span>
            {copied ? "link copiat!" : "copiază link"}
          </button>
          {shareLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-light hover:bg-white/10 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-accent text-foreground inline-flex items-center justify-center text-[11px] font-bold shrink-0">
                {s.ico}
              </span>
              {s.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
