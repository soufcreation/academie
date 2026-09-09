"use client";

import { useState, useCallback, useEffect } from "react";

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

function loadStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return DEFAULT_CONSENT;
  }
}

export function useCookieConsent() {
  // Chargé une seule fois, de façon synchrone au montage (pas de setState dans un effet)
  const [consent, setConsentState] = useState<CookieConsent | null>(loadStoredConsent);
  const [showBanner, setShowBanner] = useState(false);

  // Afficher le banner après un court délai si aucun consentement n'est enregistré
  useEffect(() => {
    if (consent) return;
    const timer = setTimeout(() => {
      setShowBanner(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [consent]);

  const saveConsent = useCallback((newConsent: CookieConsent) => {
    const consentWithTimestamp = {
      ...newConsent,
      timestamp: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consentWithTimestamp));
    setConsentState(consentWithTimestamp);
    setShowBanner(false);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  }, [saveConsent]);

  const acceptNecessary = useCallback(() => {
    saveConsent(DEFAULT_CONSENT);
  }, [saveConsent]);

  return {
    showBanner,
    isReady: true,
    acceptAll,
    acceptNecessary,
    hasAnalytics: consent?.analytics ?? false,
  };
}