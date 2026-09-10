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
          <p id="filtre-offre" className="text-gray-400 text-sm mb-3">
            Afficher les cours inclus dans une offre :
          </p>
          {/* Une seule ligne défilante sur mobile, pour ne pas repousser le planning hors de l'écran */}
          <div
            role="group"
            aria-labelledby="filtre-offre"
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible lg:pb-0"
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
                <span className="ml-2 opacity-70">
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
            Les 7 jours restent visibles simultanément à toutes les tailles :
            pas de défilement horizontal, la typographie se réduit à la place
            (voir les classes .planning-* dans globals.css). */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2 lg:gap-4">
          {planningDays.map((day) => (
            <div key={day.name}>
              <h2
                className="planning-day mb-1 bg-[#e63030] py-1 text-center italic tracking-wider text-white sm:mb-2 lg:mb-3 lg:py-1.5"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                <span className="sm:hidden">{day.short}</span>
                <span className="hidden sm:inline">{day.name}</span>
              </h2>
              {day.sessions.length === 0 ? (
                <p className="planning-note border border-gray-800 py-3 text-center text-gray-600">Fermé</p>
              ) : (
                <ul className="space-y-1 sm:space-y-2">
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
      className={`btn-interactive shrink-0 whitespace-nowrap border-2 px-4 py-2 text-sm font-semibold transition-colors ${
        isActive
          ? "border-[#e63030] bg-[#e63030] text-white"
          : "border-gray-700 text-gray-300 hover:border-white hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}
