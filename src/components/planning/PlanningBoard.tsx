"use client";

import Link from "next/link";
import {
  isSessionIncluded,
  planningDays,
  planningFilterPlans,
  planningLegend,
  type PlanningSession,
} from "@/lib/planning";
import SessionCard, { type SessionState } from "./SessionCard";
import { useOfferFilter } from "./useOfferFilter";
import { colorStyles } from "./colors";

export default function PlanningBoard() {
  const { activeSlug, selectOffer } = useOfferFilter();

  function sessionState(session: PlanningSession): SessionState {
    if (!activeSlug) return "neutral";
    return isSessionIncluded(session, activeSlug) ? "included" : "excluded";
  }

  const activePlan = planningFilterPlans.find((plan) => plan.slug === activeSlug) ?? null;
  const includedCount = activeSlug
    ? planningDays.reduce(
        (total, day) => total + day.sessions.filter((session) => isSessionIncluded(session, activeSlug)).length,
        0,
      )
    : 0;

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filtres par offre */}
        <div className="mb-8">
          <p id="filtre-offre" className="text-gray-400 text-xs mb-2">
            Afficher les cours inclus dans une offre :
          </p>
          <div
            role="group"
            aria-labelledby="filtre-offre"
            className="flex flex-wrap gap-1.5"
          >
            <FilterButton isActive={activeSlug === null} onClick={() => selectOffer(null)}>
              Toutes les offres
            </FilterButton>
            {planningFilterPlans.map((plan) => (
              <FilterButton
                key={plan.slug}
                isActive={activeSlug === plan.slug}
                onClick={() => selectOffer(plan.slug)}
              >
                {plan.name}
                <span className="ml-1.5 opacity-70">
                  {plan.price}
                  {plan.period}
                </span>
              </FilterButton>
            ))}
          </div>
        </div>

        {/* Rappel de l'offre sélectionnée */}
        {activePlan && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-l-4 border-[#e63030] bg-gray-900/60 px-4 py-3">
            <p className="text-gray-300 text-sm">
              <span className="font-bold text-white">{includedCount} cours</span> inclus dans l&apos;offre{" "}
              <span className="font-bold text-white">{activePlan.name}</span>. Les autres créneaux sont grisés.
            </p>
            <Link href="/#tarifs" className="text-[#e63030] hover:text-white text-sm underline">
              Voir l&apos;offre
            </Link>
          </div>
        )}

        {/* Grille hebdomadaire.
            Les 7 jours restent visibles simultanément à toutes les tailles.
            L'échelle est proportionnelle (voir .planning-* dans globals.css) :
            sur téléphone le planning est petit mais intact, comme l'affiche
            imprimée — le visiteur zoome pour lire le détail. */}
        <div className="planning-scale">
          <div className="planning-grid">
            {planningDays.map((day) => (
              <div key={day.name}>
                <h2
                  className="planning-day bg-[#e63030] text-center italic tracking-wider text-white"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {day.name}
                </h2>
                {day.sessions.length === 0 ? (
                  <p className="planning-closed border border-gray-800 text-center text-gray-600">Fermé</p>
                ) : (
                  <ul className="planning-sessions">
                    {day.sessions.map((session) => (
                      <SessionCard
                        key={`${session.start}-${session.label}`}
                        session={session}
                        state={sessionState(session)}
                      />
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Légende */}
        <div className="mt-10 border-t border-gray-800 pt-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">Légende</h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {planningLegend.map((entry) => (
              <li key={entry.color} className="flex items-center gap-2 text-sm text-gray-400">
                <span aria-hidden="true" className={`h-3.5 w-3.5 flex-shrink-0 ${colorStyles[entry.color].dot}`} />
                {entry.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type FilterButtonProps = {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

function FilterButton({ isActive, onClick, children }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`shrink-0 cursor-pointer whitespace-nowrap border px-2.5 py-1 text-xs font-medium transition-colors active:scale-95 ${
        isActive
          ? "border-[#e63030] bg-[#e63030] text-white"
          : "border-gray-700 text-gray-300 hover:border-white hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
