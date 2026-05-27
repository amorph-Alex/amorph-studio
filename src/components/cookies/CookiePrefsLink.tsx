"use client";

import { openCookiePreferences } from "@/lib/cookie-consent";

export default function CookiePrefsLink({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={`text-left hover:text-accent transition-colors ${className}`}
    >
      setări cookies
    </button>
  );
}
