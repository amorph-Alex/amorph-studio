"use client";

import { useEffect, useState } from "react";

// Bară de progres la citit, fixată sus. Urmărește scroll-ul întregii pagini.
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] bg-border z-[60]"
      style={{ opacity: progress > 0.5 ? 1 : 0 }}
      aria-hidden
    >
      <div
        className="h-full bg-accent"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
