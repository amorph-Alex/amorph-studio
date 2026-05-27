// Persistența consimțământului pentru cookies.
// Prototipul de design nu avea persistență; aici e integrarea reală.

export type ConsentState = {
  necessary: true; // strict necesare — mereu activ, nu poate fi dezactivat
  stats: boolean;
  mkt: boolean;
};

type StoredConsent = {
  stats: boolean;
  mkt: boolean;
  ts: number;
};

const STORAGE_KEY = "amorph-cookie-consent";

// Eveniment global pentru a redeschide modalul de preferințe (ex. din footer).
export const OPEN_PREFERENCES_EVENT = "amorph:open-cookie-preferences";

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    return {
      necessary: true,
      stats: Boolean(parsed.stats),
      mkt: Boolean(parsed.mkt),
    };
  } catch {
    return null;
  }
}

export function writeConsent(state: { stats: boolean; mkt: boolean }): void {
  if (typeof window === "undefined") return;
  try {
    const payload: StoredConsent = {
      stats: state.stats,
      mkt: state.mkt,
      ts: Date.now(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // localStorage indisponibil (private mode etc.) — ignorăm.
  }
}

export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
