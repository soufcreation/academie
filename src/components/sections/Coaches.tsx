"use client";

import Image from "next/image";
import Link from "next/link";
import { coaches } from "@/lib/data";

interface CoachesProps {
  limit?: number;
}

export default function Coaches({ limit }: CoachesProps) {
  const displayedCoaches = limit ? coaches.slice(0, limit) : coaches;

  return (
    <section id="coachs" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-wider mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            NOS <span className="text-[#e63030]">COACHS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des experts passionnés avec des années d&apos;expérience dans leur discipline. Ils vous guideront vers l&apos;excellence.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCoaches.map((coach) => (
            <div
              key={coach.id}
              className="group relative overflow-hidden bg-black border border-gray-800 hover:border-[#e63030] transition-all"
            >
              {/* Image */}
              <div className="aspect-[4/5] bg-gray-900 relative">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className={`object-cover ${coach.id === 3 ? 'object-[50%_25%] scale-110' : 'object-top'}`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-2xl font-bold tracking-wider mb-1"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {coach.name}
                </h3>
                <p className="text-[#e63030] text-sm uppercase tracking-wider mb-2">
                  {coach.discipline}
                </p>
                <div className="flex flex-col gap-1 text-gray-300 text-sm">
                  <span>{coach.experience}</span>
                  <span className="text-gray-500">{coach.achievements}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/equipe"
              className="inline-flex items-center gap-2 bg-[#e63030] hover:bg-[#d42929] text-white px-8 py-3 text-base font-semibold uppercase tracking-wider transition-all"
            >
              Rencontrer notre équipe
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}