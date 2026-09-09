import type { Metadata } from "next";
import {
  Shield,
  Hand,
  Footprints,
  CircleDot,
  ShieldCheck,
  ShieldHalf,
  Sparkles,
  Coins,
  ShoppingBag,
} from "lucide-react";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nos Équipements | Académie Européenne des Sports",
  description:
    "Découvrez le pack équipement et les protections obligatoires de l'Académie Européenne des Sports : gants de boxe, protège-dents, protège-tibias, coquille, bandes et plus.",
};

const equipements = [
  { name: "Gants de boxe", description: "Gants de boxe ou de MMA adaptés à la discipline pratiquée.", icon: Hand },
  { name: "Bandes", description: "Bandages de mains obligatoires, portés sous les gants.", icon: CircleDot },
  { name: "Protège-dents", description: "Protège-dents obligatoire pour tous les entraînements.", icon: Shield },
  { name: "Protège-tibias", description: "Protège-tibias avec protection des pieds.", icon: Footprints },
  { name: "Coquille", description: "Coquille de protection pour les garçons.", icon: ShieldCheck },
  { name: "Protège-poitrine", description: "Protège-poitrine pour les filles.", icon: ShieldHalf },
  { name: "Protège-partie", description: "Protège-partie pour les filles.", icon: ShieldCheck },
  { name: "Chevillères", description: "Chevillères pour protéger les chevilles.", icon: Footprints },
  { name: "Casque de protection", description: "Casque de protection pour les échanges et combats.", icon: Shield },
];

const packDetails = [
  "Protège-dents",
  "Bandes",
  "Gants",
  "Coquille",
  "Protège-tibias",
];

export default function EquipementsPage() {
  return (
    <main className="pt-24 pb-16 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-wider mb-4 text-center"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          NOS <span className="text-[#e63030]">ÉQUIPEMENTS</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Aucun entraînement n&apos;est autorisé sans les protections obligatoires.
          Tout le matériel est disponible à l&apos;Académie et dans la boutique en ligne.
        </p>

        {/* Grille des équipements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {equipements.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-[#e63030]/60 transition-colors"
              >
                <Icon className="w-8 h-8 text-[#e63030] mb-4" />
                <h3
                  className="text-xl font-bold tracking-wider mb-2 text-white"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Pack équipement */}
        <section className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-2 mb-3">
                <Coins className="w-5 h-5 text-[#e63030]" />
                <p className="text-xs tracking-widest text-gray-500 uppercase">
                  Pack équipement complet
                </p>
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-wider mb-4 text-white"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                L&apos;ESSENTIEL <span className="text-[#e63030]">PRÊT À COMBATTRE</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Le pack complet pour débuter l&apos;année en toute sécurité, vendu sur place à
                l&apos;Académie et disponible dans la boutique en ligne.
              </p>
              <ul className="space-y-3 mb-8">
                {packDetails.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#e63030] flex-shrink-0" />
                    <span className="text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-6">
                <span
                  className="text-5xl font-bold text-white"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  80<span className="text-[#e63030]">€</span>
                </span>
                <a
                  href={siteConfig.boutiqueLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#e63030] hover:bg-white hover:text-black text-white px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Acheter en ligne
                </a>
              </div>
            </div>
            <div className="bg-[#e63030] p-8 md:p-10 flex flex-col justify-center">
              <h3
                className="text-2xl font-bold tracking-wider mb-4 text-white"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                RAPPEL DES PROTECTIONS OBLIGATOIRES
              </h3>
              <ul className="space-y-2 text-white/90">
                <li>• Protège-dents</li>
                <li>• Protège-tibias avec protection des pieds</li>
                <li>• Gants de boxe</li>
                <li>• Bandes</li>
                <li>• Coquille (garçons) / protège-partie (filles)</li>
                <li>• Chevillères</li>
                <li>• Protège-poitrine (filles)</li>
                <li>• Casque de protection</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}