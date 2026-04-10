"use client";

import { Check } from "lucide-react";
import { pricing } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-wider mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            NOS <span className="text-[#e63030]">TARIFS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-center">
            Des formules adaptées à vos objectifs.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 border-2 flex flex-col ${
                plan.popular
                  ? "border-[#e63030] bg-gray-900/50"
                  : "border-gray-800 bg-gray-900/30"
              } transition-all hover:border-gray-600`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#e63030] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1">
                    Populaire
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3
                  className="text-2xl font-bold tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold" style={{ fontFamily: "var(--font-bebas)" }}>
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#e63030] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - Only show if not equipment */}
              {!plan.equipment && (
                <div className="mt-auto">
                  <a
                    href={plan.pdf || "/inscription.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 font-semibold uppercase tracking-wider transition-all text-center ${
                      plan.popular
                        ? "bg-[#e63030] hover:bg-[#d42929] text-white"
                        : "border-2 border-white hover:bg-white hover:text-black text-white"
                    }`}
                  >
                    Choisir cette formule
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Tous les tarifs incluent l&apos;accès aux vestiaires et douches.</p>
          <p className="mt-2">Possibilité de paiement en 3 fois.</p>
        </div>
      </div>
    </section>
  );
}