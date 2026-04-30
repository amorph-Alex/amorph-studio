"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/services";

export default function ServiciiFAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="border-b-[1.5px] border-dark-card"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full text-left bg-transparent border-0 cursor-pointer flex items-center justify-between gap-4 md:gap-6 py-[18px] md:py-7"
              aria-expanded={isOpen}
            >
              <span className="text-[15px] md:text-[22px] font-medium text-foreground leading-tight md:tracking-[-0.3px]">
                {f.q}
              </span>
              <span
                className="shrink-0 w-[26px] h-[26px] md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: isOpen ? "var(--accent)" : "transparent",
                  border: `${isOpen ? "1.5px" : "1.5px"} solid ${
                    isOpen ? "var(--accent)" : "var(--dark-card)"
                  }`,
                }}
              >
                <svg
                  className="md:w-[14px] md:h-[14px]"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{
                    transform: isOpen ? "rotate(45deg)" : "none",
                    transition: "transform .3s cubic-bezier(.2,.8,.2,1)",
                    color: "var(--foreground)",
                  }}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height] duration-[400ms]"
              style={{
                maxHeight: isOpen ? 600 : 0,
                transitionTimingFunction: "cubic-bezier(.2,.8,.2,1)",
              }}
            >
              <div className="pb-[18px] md:pb-7 text-[13px] md:text-base font-light text-foreground leading-[1.6] md:leading-[1.65] max-w-[680px]">
                {f.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
