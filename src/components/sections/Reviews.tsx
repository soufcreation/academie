import Link from "next/link";
import { Star } from "lucide-react";
import { reviews, googleLink, googleReviews } from "@/lib/data";

export default function Reviews() {
  const { average, count } = googleReviews;

  return (
    <section id="avis" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-wider mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            VOS <span className="text-[#e63030]">AVIS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ce que nos membres disent de nous sur Google.
          </p>

          {/* Résumé de notation */}
          <div className="inline-flex items-center gap-4 mt-8 bg-black border border-gray-800 px-8 py-4">
            <span
              className="text-5xl font-bold"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              {average.toFixed(1)}
            </span>
            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.round(average) ? "fill-[#e63030] text-[#e63030]" : "fill-gray-700 text-gray-700"}`}
                  />
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-1">
                Basé sur {count} avis Google
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid — 4 avis par ligne, 8 au total (les plus récents en premier) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex flex-col bg-black border border-gray-800 hover:border-[#e63030] transition-colors p-3"
            >
              <div className="flex items-center justify-between mb-2 gap-1">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < review.rating ? "fill-[#e63030] text-[#e63030]" : "fill-gray-700 text-gray-700"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-[10px] leading-tight text-right">{review.date}</p>
              </div>
              <p className="text-gray-300 text-xs leading-relaxed mb-3 flex-1">
                “{review.text}”
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#e63030] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                  {review.author.charAt(0)}
                </div>
                <p className="text-white text-xs font-semibold leading-tight">
                  {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={googleLink.writeReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e63030] hover:bg-[#d42929] text-white px-8 py-3 text-base font-semibold uppercase tracking-wider transition-all"
            >
              Laisser un avis sur Google
            </a>
            <Link
              href="/avis"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-[#e63030] text-white px-8 py-3 text-base font-semibold uppercase tracking-wider transition-all"
            >
              Voir tous les avis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}