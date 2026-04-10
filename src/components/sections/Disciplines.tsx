"use client";

import Image from "next/image";
import { Shield, Activity, Zap, Target } from "lucide-react";
import { disciplines } from "@/lib/data";

// Mapping des icônes Lucide
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Activity,
  Zap,
  Target,
};

export default function Disciplines() {
  return (
    <section id="disciplines" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-wider mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            NOS <span className="text-[#e63030]">DISCIPLINES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez notre large palette d&apos;arts martiaux et sports de combat. De la traditionnelle aux techniques modernes, nous avons tout ce qu&apos;il vous faut.
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((discipline, index) => {
            const IconComponent = iconMap[discipline.icon] || Shield;
            const hasImage = discipline.image;
            
            return (
              <div key={discipline.id}>
                <div
                  className="group p-6 bg-gray-900/50 border border-gray-800 hover:border-[#e63030] transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-black group-hover:bg-[#e63030] transition-colors overflow-hidden">
                    {hasImage ? (
                      <Image
                        src={discipline.image}
                        alt={discipline.name}
                        width={40}
                        height={40}
                        unoptimized
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <IconComponent className="w-7 h-7 text-white" />
                    )}
                  </div>
                  <h3
                    className="text-2xl font-bold tracking-wider mb-3"
                    style={{ fontFamily: "var(--font-bebas)" }}
                  >
                    {discipline.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {discipline.description}
                  </p>
                </div>
                
                {/* Planning Rectangle - après Kick boxing (index 4) */}
                {index === 4 && (
                  <a
                    href="/planning"
                    className="mt-4 block py-4 border-2 border-white hover:bg-white hover:text-black text-white font-semibold uppercase tracking-wider transition-all text-center"
                  >
                    <span
                      className="text-xl tracking-wider"
                      style={{ fontFamily: "var(--font-bebas)" }}
                    >
                      PLANNING
                    </span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}