"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

export type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp?: number;
};

const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const STORAGE_KEY = "cookie-consent";

// --- Store externe (localStorage) exposé via useSyncExternalStore -------------
// Le rendu serveur renvoie toujours `null` (getServerSnapshot) ; le vrai
// consentement n'est lu qu'après hydratation, sans mismatch serveur/client.

const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) listener();
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

let cachedRaw: string | null = null;
let cachedValue: CookieConsent | null = null;

function getSnapshot(): CookieConsent | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    if (!raw) {
      cachedValue = null;
    } else {
      try {
        cachedValue = JSON.parse(raw) as CookieConsent;
      } catch {
        cachedValue = DEFAULT_CONSENT;
      }
    }
  }
  return cachedValue;
}

function getServerSnapshot(): CookieConsent | null {
  return null;
}

export function useCookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [showBanner, setShowBanner] = useState(false);

  // Afficher le bandeau après un court délai si aucun choix n'a été enregistré
  useEffect(() => {
    if (consent) return;
    const timer = setTimeout(() => setShowBanner(true), 1500);
    return () => clearTimeout(timer);
  }, [consent]);

  const saveConsent = useCallback((newConsent: CookieConsent) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...newConsent, timestamp: Date.now() }),
    );
    emitChange();
    setShowBanner(false);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  }, [saveConsent]);

  const acceptNecessary = useCallback(() => {
    saveConsent(DEFAULT_CONSENT);
  }, [saveConsent]);

  return {
    showBanner,
    acceptAll,
    acceptNecessary,
    hasAnalytics: consent?.analytics ?? false,
  };
}
