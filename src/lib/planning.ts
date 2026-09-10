// Planning hebdomadaire des cours.
//
// Source de vérité unique : la couleur d'un créneau et les offres qui y donnent
// accès sont portées par sa catégorie, jamais recopiées sur chaque créneau.
// Pour modifier un horaire, éditer `planningDays` ci-dessous.

import { pricing, type PricingSlug } from "./data";

/** Code couleur historique du planning de l'Académie */
export type PlanningColor = "noir" | "vert" | "rouge" | "bleu" | "orange";

export type PlanningCategory =
  | "mma-boxe"
  | "enfant"
  | "bag-cardio"
  | "jjb"
  | "kick-muay"
  | "cardio-thai"
  | "libre"
  | "reserve";

type CategoryDefinition = {
  color: PlanningColor;
  /** Offres donnant accès aux cours de cette catégorie */
  plans: readonly PricingSlug[];
};

/** Offres donnant accès à l'ensemble des créneaux d'entraînement libre */
const ALL_PLANS: readonly PricingSlug[] = ["pack-adulte", "pack-enfant", "jjb", "boxe-thai"];

/**
 * Le Bag / Cardio apparaît en deux catégories : les créneaux en noir sont
 * inclus dans le pack adulte et l'offre Boxe Thaï, ceux en rouge relèvent
 * de la seule offre Boxe Thaï.
 */
export const planningCategories: Record<PlanningCategory, CategoryDefinition> = {
  "mma-boxe": {
    color: "noir",
    plans: ["pack-adulte"],
  },
  enfant: {
    color: "noir",
    plans: ["pack-enfant"],
  },
  "bag-cardio": {
    color: "noir",
    plans: ["pack-adulte", "boxe-thai"],
  },
  jjb: {
    color: "vert",
    plans: ["jjb"],
  },
  "kick-muay": {
    color: "rouge",
    plans: ["boxe-thai"],
  },
  "cardio-thai": {
    color: "rouge",
    plans: ["boxe-thai"],
  },
  libre: {
    color: "bleu",
    plans: ALL_PLANS,
  },
  reserve: {
    color: "orange",
    plans: [],
  },
};

export type PlanningSession = {
  /** Heure de début au format 24h, ex. "18:15" */
  start: string;
  /** Heure de fin au format 24h, ex. "19:00" */
  end: string;
  label: string;
  /** Précision affichée sous l'intitulé (salle, niveau, tranche d'âge) */
  note?: string;
  category: PlanningCategory;
};

export type PlanningDay = {
  name: string;
  sessions: PlanningSession[];
};

/** Planning hebdomadaire, dans l'ordre d'affichage des colonnes */
export const planningDays: PlanningDay[] = [
  {
    name: "Lundi",
    sessions: [
      { start: "12:30", end: "13:15", label: "Bag / Cardio", category: "cardio-thai" },
      { start: "12:30", end: "14:00", label: "Jiu-Jitsu Brésilien", note: "Salle Annexe", category: "jjb" },
      { start: "13:15", end: "17:45", label: "Entraînement libre", category: "libre" },
      { start: "18:00", end: "19:30", label: "Jiu-Jitsu Brésilien", note: "Salle Annexe", category: "jjb" },
      { start: "18:15", end: "19:00", label: "Bag / Cardio", category: "bag-cardio" },
      { start: "19:00", end: "20:00", label: "Kick-boxing Muay Thaï", category: "kick-muay" },
      { start: "20:00", end: "21:30", label: "Boxe anglaise", category: "mma-boxe" },
    ],
  },
  {
    name: "Mardi",
    sessions: [
      { start: "12:30", end: "13:15", label: "Kick-boxing Muay Thaï", category: "kick-muay" },
      { start: "13:15", end: "14:15", label: "Entraînement libre", category: "libre" },
      { start: "14:30", end: "16:00", label: "Réservé Foyer CER", category: "reserve" },
      { start: "17:00", end: "18:00", label: "Power Fit", note: "Crossfit", category: "jjb" },
      { start: "18:00", end: "19:30", label: "Jiu-Jitsu Brésilien", category: "jjb" },
      { start: "19:30", end: "21:00", label: "MMA", category: "mma-boxe" },
    ],
  },
  {
    name: "Mercredi",
    sessions: [
      { start: "12:15", end: "13:15", label: "Réservé cycle collège", category: "reserve" },
      { start: "14:00", end: "16:00", label: "Projet Collège des Gants et Crayons", category: "reserve" },
      { start: "17:00", end: "18:15", label: "Boxe – Savate boxe française", note: "6 à 14 ans", category: "enfant" },
      { start: "18:15", end: "19:00", label: "Bag / Cardio", category: "bag-cardio" },
      { start: "19:00", end: "20:00", label: "Kick-boxing Muay Thaï", category: "kick-muay" },
      { start: "20:00", end: "21:15", label: "Strike Kick", category: "kick-muay" },
    ],
  },
  {
    name: "Jeudi",
    sessions: [
      { start: "12:30", end: "14:00", label: "Jiu-Jitsu Brésilien", category: "jjb" },
      { start: "14:15", end: "17:15", label: "Entraînement libre", category: "libre" },
      { start: "17:30", end: "19:00", label: "Jiu-Jitsu Brésilien", category: "jjb" },
      { start: "18:30", end: "20:00", label: "MMA / Grappling", category: "mma-boxe" },
      { start: "20:00", end: "21:15", label: "Kick-boxing / Muay Thaï", category: "kick-muay" },
    ],
  },
  {
    name: "Vendredi",
    sessions: [
      { start: "12:30", end: "13:15", label: "Bag / Cardio", category: "cardio-thai" },
      { start: "13:15", end: "16:45", label: "Entraînement libre", category: "libre" },
      { start: "17:00", end: "18:15", label: "Boxe – Savate boxe française", note: "6 à 14 ans", category: "enfant" },
      { start: "18:00", end: "19:30", label: "Jiu-Jitsu Brésilien", note: "Salle Annexe — débutants", category: "jjb" },
      { start: "18:45", end: "20:00", label: "Kick-boxing Muay Thaï", category: "kick-muay" },
      { start: "20:00", end: "21:30", label: "Boxe anglaise", category: "mma-boxe" },
    ],
  },
  {
    name: "Samedi",
    sessions: [
      { start: "09:00", end: "10:30", label: "Jiu-Jitsu Brésilien", note: "Compétiteurs", category: "jjb" },
      { start: "10:30", end: "11:30", label: "Jiu-Jitsu Brésilien", note: "Enfants", category: "jjb" },
      { start: "11:30", end: "13:00", label: "Jiu-Jitsu Brésilien", note: "Adultes", category: "jjb" },
      { start: "13:00", end: "14:30", label: "MMA / Grappling", category: "mma-boxe" },
      { start: "14:00", end: "16:00", label: "Power Fit", note: "Crossfit", category: "jjb" },
      { start: "14:30", end: "16:30", label: "Sparring MMA / Boxe", category: "mma-boxe" },
    ],
  },
  {
    name: "Dimanche",
    sessions: [],
  },
];

/** Légende affichée sous le planning : une entrée par couleur */
export const planningLegend: { color: PlanningColor; label: string }[] = [
  { color: "noir", label: "MMA, boxe anglaise, savate, bag / cardio" },
  { color: "vert", label: "Jiu-Jitsu Brésilien, Power Fit" },
  { color: "rouge", label: "Kick-boxing, Muay Thaï, strike kick" },
  { color: "bleu", label: "Entraînement libre" },
  { color: "orange", label: "Créneaux réservés (collège, foyer CER)" },
];

/** Offres donnant accès à des cours, proposées au filtrage du planning */
export const planningFilterPlans = pricing.filter((plan) => plan.planningLabel !== null);

export function isPlanningFilterSlug(value: string | null): value is PricingSlug {
  return planningFilterPlans.some((plan) => plan.slug === value);
}

/** Indique si un créneau est compris dans l'offre donnée */
export function isSessionIncluded(session: PlanningSession, planSlug: PricingSlug): boolean {
  return planningCategories[session.category].plans.includes(planSlug);
}

/** "18:15" -> "18h15" */
export function formatHour(time: string): string {
  return time.replace(":", "h");
}
