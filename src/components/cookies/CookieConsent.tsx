"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  OPEN_PREFERENCES_EVENT,
  readConsent,
  writeConsent,
} from "@/lib/cookie-consent";

// Tokeni — identici cu globals.css / design-ul.
const AM = {
  bg: "#d9d9d9",
  fg: "#2d2d2d",
  dark: "#2d2d2d",
  darkCard: "#3a3a3a",
  accent: "#f6aa1c",
  muted: "#6b6b6b",
  border: "#b0b0b0",
  platinum: "#d9d9d9",
} as const;

const BOUNCY = "cubic-bezier(.34,1.56,.64,1)";

type View = "hidden" | "banner" | "modal";

// ─── Toggle switch ─────────────────────────────────────────────
function CookieToggle({
  on,
  locked = false,
  onChange,
  ariaLabel,
}: {
  on: boolean;
  locked?: boolean;
  onChange?: (next: boolean) => void;
  ariaLabel?: string;
}) {
  const trackBg = locked ? AM.darkCard : on ? AM.accent : "#bdbdbd";
  const knobBg = locked ? "#9a9a9a" : AM.fg;
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={ariaLabel}
      disabled={locked}
      onClick={() => !locked && onChange && onChange(!on)}
      style={{
        width: 46,
        height: 26,
        padding: 0,
        border: "none",
        borderRadius: 999,
        background: trackBg,
        position: "relative",
        cursor: locked ? "not-allowed" : "pointer",
        opacity: locked ? 0.55 : 1,
        transition: `background .25s ${BOUNCY}`,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: on ? 23 : 3,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: knobBg,
          transition: `left .28s ${BOUNCY}`,
          boxShadow: "0 1px 3px rgba(0,0,0,0.18)",
        }}
      />
    </button>
  );
}

// ─── Category row (în modal) ───────────────────────────────────
function CategoryRow({
  title,
  desc,
  on,
  locked,
  onChange,
  lockedHint,
}: {
  title: string;
  desc: string;
  on: boolean;
  locked?: boolean;
  onChange?: (next: boolean) => void;
  lockedHint?: string;
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 22,
        padding: "18px 20px",
        border: `1.5px solid ${AM.border}`,
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 6,
          }}
        >
          <div
            style={{
              fontSize: 15.5,
              fontWeight: 600,
              color: AM.fg,
              letterSpacing: -0.1,
            }}
          >
            {title}
          </div>
          {locked && (
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: AM.muted,
                fontWeight: 400,
                padding: "3px 9px",
                border: `1px solid ${AM.border}`,
                borderRadius: 999,
              }}
            >
              {lockedHint || "mereu activ"}
            </span>
          )}
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 300,
            lineHeight: 1.55,
            color: AM.muted,
          }}
        >
          {desc}
        </div>
      </div>
      <CookieToggle on={on} locked={locked} onChange={onChange} ariaLabel={title} />
    </div>
  );
}

// ─── Banner dark ───────────────────────────────────────────────
function Banner({
  isMobile,
  onAcceptAll,
  onReject,
  onSettings,
}: {
  isMobile: boolean;
  onAcceptAll: () => void;
  onReject: () => void;
  onSettings: () => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 40,
        ...(isMobile
          ? { left: 12, right: 12, bottom: 84 }
          : { left: 24, bottom: 28 }),
      }}
    >
      <div
        style={{
          background: AM.dark,
          color: AM.platinum,
          borderRadius: isMobile ? 28 : 24,
          padding: isMobile ? "22px 22px 20px" : "22px 24px 20px",
          width: isMobile ? "auto" : 380,
          boxShadow:
            "0 18px 50px rgba(0,0,0,0.32), 0 4px 14px rgba(0,0,0,0.18)",
          border: `1.5px solid ${AM.darkCard}`,
          animation: `fadeUp .55s ${BOUNCY} both`,
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 400,
            color: "#a8a8a8",
            marginBottom: 10,
          }}
        >
          privacy
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: -0.2,
            lineHeight: 1.15,
            marginBottom: 10,
          }}
        >
          cookies<span style={{ color: AM.accent }}>.</span>
        </div>
        <div
          style={{
            fontSize: 13.5,
            fontWeight: 300,
            lineHeight: 1.55,
            color: "#d4d4d4",
            marginBottom: 18,
          }}
        >
          folosim cookie-uri ca site-ul să funcționeze și ca să înțelegem ce vă
          interesează. detalii în{" "}
          <Link
            href="/cookies"
            style={{ textDecoration: "underline", color: AM.platinum }}
          >
            politica de cookies
          </Link>
          .
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={onAcceptAll}
            style={{
              border: "none",
              cursor: "pointer",
              background: AM.accent,
              color: AM.fg,
              padding: "11px 22px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: 0.2,
              transition: `all .25s ${BOUNCY}`,
            }}
          >
            accept toate
          </button>
          <button
            type="button"
            onClick={onReject}
            style={{
              cursor: "pointer",
              background: "transparent",
              color: AM.platinum,
              padding: "11px 22px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 400,
              border: `1.5px solid ${AM.platinum}`,
              transition: `all .25s ${BOUNCY}`,
            }}
          >
            refuz
          </button>
          <button
            type="button"
            onClick={onSettings}
            style={{
              cursor: "pointer",
              marginLeft: "auto",
              background: "transparent",
              color: "#d4d4d4",
              padding: "11px 6px",
              border: "none",
              fontSize: 13.5,
              textDecoration: "underline",
              fontWeight: 300,
            }}
          >
            setări
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Modal de preferințe ───────────────────────────────────────
function PreferencesModal({
  isMobile,
  stats,
  mkt,
  setStats,
  setMkt,
  onClose,
  onSave,
  onAcceptAll,
  onReject,
}: {
  isMobile: boolean;
  stats: boolean;
  mkt: boolean;
  setStats: (v: boolean) => void;
  setMkt: (v: boolean) => void;
  onClose: () => void;
  onSave: () => void;
  onAcceptAll: () => void;
  onReject: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="preferințe cookies"
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        background: "rgba(20,20,20,0.55)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        display: "flex",
        alignItems: isMobile ? "flex-end" : "center",
        justifyContent: "center",
        padding: isMobile ? "0" : "40px",
        animation: "fadeIn .35s ease both",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: AM.platinum,
          borderRadius: isMobile ? "28px 28px 0 0" : 28,
          width: isMobile ? "100%" : 540,
          maxWidth: "100%",
          maxHeight: isMobile ? "88%" : "calc(100vh - 80px)",
          border: `1.5px solid ${AM.darkCard}`,
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
          display: "flex",
          flexDirection: "column",
          color: AM.fg,
          animation: `${isMobile ? "sheetUp" : "modalIn"} .5s ${BOUNCY} both`,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: isMobile ? "22px 24px 18px" : "28px 28px 20px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 400,
                color: AM.muted,
                marginBottom: 10,
              }}
            >
              preferințe
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: -0.3,
                lineHeight: 1.1,
              }}
            >
              setări cookies<span style={{ color: AM.accent }}>.</span>
            </div>
            <div
              style={{
                fontSize: 13.5,
                fontWeight: 300,
                color: AM.muted,
                marginTop: 8,
                lineHeight: 1.55,
                maxWidth: 420,
              }}
            >
              alegi tu ce ne lași să măsurăm. poți reveni oricând din subsolul
              site-ului.
            </div>
          </div>
          <button
            type="button"
            aria-label="închide"
            onClick={onClose}
            style={{
              background: "transparent",
              border: `1.5px solid ${AM.fg}`,
              width: 38,
              height: 38,
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
              transition: `all .25s ${BOUNCY}`,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke={AM.fg}
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Categories */}
        <div
          style={{
            padding: isMobile ? "4px 18px 18px" : "4px 28px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            overflowY: "auto",
            flex: 1,
          }}
        >
          <CategoryRow
            title="strict necesare"
            desc="fac site-ul să funcționeze — navigare, formulare, securitate. nu pot fi dezactivate."
            on={true}
            locked={true}
            lockedHint="mereu activ"
          />
          <CategoryRow
            title="statistici"
            desc="ne arată ce pagini citiți, cât stați, de unde veniți. anonim. (google analytics, vercel analytics)"
            on={stats}
            onChange={setStats}
          />
          <CategoryRow
            title="marketing"
            desc="ne ajută să arătăm articole și proiecte relevante și să măsurăm campaniile."
            on={mkt}
            onChange={setMkt}
          />
        </div>

        {/* Actions */}
        <div
          style={{
            padding: isMobile ? "14px 18px 22px" : "18px 28px 26px",
            borderTop: `1px solid ${AM.border}`,
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            alignItems: "center",
            background: "#cfcfcf",
          }}
        >
          <button
            type="button"
            onClick={onSave}
            style={{
              border: "none",
              cursor: "pointer",
              background: AM.accent,
              color: AM.fg,
              padding: "12px 22px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: 0.2,
              transition: `background .25s ${BOUNCY}`,
            }}
          >
            salvează preferințele
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            style={{
              cursor: "pointer",
              background: AM.dark,
              color: AM.platinum,
              padding: "12px 22px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 400,
              border: "none",
            }}
          >
            accept toate
          </button>
          <div style={{ flex: 1 }} />
          <button
            type="button"
            onClick={onReject}
            style={{
              cursor: "pointer",
              background: "transparent",
              color: AM.muted,
              padding: "12px 6px",
              border: "none",
              fontSize: 13.5,
              textDecoration: "underline",
              fontWeight: 300,
            }}
          >
            refuz toate
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Componenta globală ────────────────────────────────────────
export default function CookieConsent() {
  const [view, setView] = useState<View>("hidden");
  const [isMobile, setIsMobile] = useState(false);
  const [stats, setStats] = useState(true);
  const [mkt, setMkt] = useState(false);

  // Detecție viewport (banner bottom-sheet + modal sheet pe mobil).
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // La mount: dacă nu există consimțământ salvat, arată banner-ul.
  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      setStats(stored.stats);
      setMkt(stored.mkt);
    } else {
      setView("banner");
    }
  }, []);

  // Redeschidere din footer (sau alt loc).
  useEffect(() => {
    const open = () => {
      const stored = readConsent();
      setStats(stored ? stored.stats : true);
      setMkt(stored ? stored.mkt : false);
      setView("modal");
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
  }, []);

  // Esc închide modalul.
  useEffect(() => {
    if (view !== "modal") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  const acceptAll = () => {
    setStats(true);
    setMkt(true);
    writeConsent({ stats: true, mkt: true });
    setView("hidden");
  };

  const rejectAll = () => {
    setStats(false);
    setMkt(false);
    writeConsent({ stats: false, mkt: false });
    setView("hidden");
  };

  const savePrefs = () => {
    writeConsent({ stats, mkt });
    setView("hidden");
  };

  // Închiderea modalului fără alegere: dacă deja există consimțământ
  // (re-deschidere din footer) doar închidem; altfel revenim la banner
  // ca utilizatorul să fie nevoit să aleagă.
  const closeModal = () => {
    setView(readConsent() ? "hidden" : "banner");
  };

  if (view === "hidden") return null;

  return (
    <>
      {view === "banner" && (
        <Banner
          isMobile={isMobile}
          onAcceptAll={acceptAll}
          onReject={rejectAll}
          onSettings={() => setView("modal")}
        />
      )}
      {view === "modal" && (
        <PreferencesModal
          isMobile={isMobile}
          stats={stats}
          mkt={mkt}
          setStats={setStats}
          setMkt={setMkt}
          onClose={closeModal}
          onSave={savePrefs}
          onAcceptAll={acceptAll}
          onReject={rejectAll}
        />
      )}
    </>
  );
}
