"use client";

import { useCallback, useSyncExternalStore } from "react";
import { isPlanningFilterSlug } from "@/lib/planning";
import type { PricingSlug } from "@/lib/data";

const QUERY_KEY = "offre";

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  // Ré-enregistrer la même référence est sans effet : le navigateur déduplique
  window.addEventListener("popstate", emit);

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      window.removeEventListener("popstate", emit);
    }
  };
}

function getSnapshot(): string | null {
  return new URLSearchParams(window.location.search).get(QUERY_KEY);
}

/** Le HTML pré-généré ne connaît aucune offre : le filtre s'applique à l'hydratation */
function getServerSnapshot(): string | null {
  return null;
}

/**
 * L'offre active est portée par l'URL plutôt que par un état local : le lien
 * reste partageable et le bouton Précédent du navigateur fonctionne.
 *
 * `useSearchParams` n'est pas utilisable ici : le site est exporté en statique
 * (`output: 'export'`), où ce hook impose une frontière Suspense et fait
 * clignoter un fallback au chargement.
 */
export function useOfferFilter() {
  const slug = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const activeSlug = isPlanningFilterSlug(slug) ? slug : null;

  const selectOffer = useCallback((next: PricingSlug | null) => {
    const url = new URL(window.location.href);
    if (next) {
      url.searchParams.set(QUERY_KEY, next);
    } else {
      url.searchParams.delete(QUERY_KEY);
    }
    // `replaceState` ne déclenche pas `popstate` : on notifie nous-mêmes
    window.history.replaceState(null, "", url);
    emit();
  }, []);

  return { activeSlug, selectOffer };
}
