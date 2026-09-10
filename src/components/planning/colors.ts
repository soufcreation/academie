import type { PlanningColor } from "@/lib/planning";

type ColorStyle = {
  /** Fond et bordure de la carte de créneau */
  surface: string;
  /** Pastille de la légende */
  dot: string;
  /** Halo appliqué aux cours inclus dans l'offre filtrée */
  glow: string;
};

/**
 * Reprend le code couleur du planning imprimé. Le noir est légèrement éclairci
 * (#2b2725) et bordé de blanc : sur le fond noir du site, la teinte d'origine
 * serait invisible.
 *
 * Les classes sont écrites en toutes lettres — Tailwind ne détecte pas les
 * noms de classes construits dynamiquement.
 */
export const colorStyles: Record<PlanningColor, ColorStyle> = {
  noir: {
    surface: "bg-[#2b2725] border-white/25",
    dot: "bg-[#2b2725] border border-white/40",
    glow: "shadow-[0_0_20px_rgba(255,255,255,0.3)]",
  },
  vert: {
    surface: "bg-[#47af4f] border-[#47af4f]",
    dot: "bg-[#47af4f]",
    glow: "shadow-[0_0_20px_rgba(71,175,79,0.65)]",
  },
  rouge: {
    surface: "bg-[#cc2429] border-[#cc2429]",
    dot: "bg-[#cc2429]",
    glow: "shadow-[0_0_20px_rgba(204,36,41,0.65)]",
  },
  bleu: {
    surface: "bg-[#2c3d8c] border-[#2c3d8c]",
    dot: "bg-[#2c3d8c]",
    glow: "shadow-[0_0_20px_rgba(44,61,140,0.8)]",
  },
  orange: {
    surface: "bg-[#ea5a33] border-[#ea5a33]",
    dot: "bg-[#ea5a33]",
    glow: "shadow-[0_0_20px_rgba(234,90,51,0.65)]",
  },
};
