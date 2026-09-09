import type { Metadata } from "next";
import { Star } from "lucide-react";
import { reviews, googleLink, googleReviews, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Avis Google | Académie Européenne des Sports",
  description: "Découvrez les avis de nos membres publiés sur Google. Académie Européenne des Sports à Strasbourg : une équipe de coachs passionnés.",
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-[#e63030] text-[#e63030]" : "fill-gray-700 text-gray-700"}`}
        />
      ))}
    </div>
  );
}

export default function AvisPage() {
  const { average, count } = googleReviews;

  return (
    <main className="min-h-screen pt-24">
        {/* Page Header */}
        <section className="py-12 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-5xl md:text-6xl font-bold tracking-wider mb-4"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              VOS <span className="text-[#e63030]">AVIS</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Ce que nos membres disent de nous sur Google.
            </p>

            {/* Résumé de notation */}
            <div className="inline-flex items-center gap-4 mt-6 bg-black border border-gray-800 px-8 py-4">
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
        </section>

        {/* Reviews Grid */}
        <section className="py-12 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col bg-gray-950 border border-gray-800 hover:border-[#e63030] transition-colors p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <StarRow rating={review.rating} />
                    <p className="text-gray-500 text-xs">{review.date}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                    “{review.text}”
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e63030] flex items-center justify-center font-bold text-white">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{review.author}</p>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">Avis Google</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                Vous êtes membre de l&apos;académie ? Votre avis compte pour nous !
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={googleLink.writeReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#e63030] hover:bg-[#d42929] text-white px-8 py-3 text-base font-semibold uppercase tracking-wider transition-all"
                >
                  Laisser un avis sur Google
                </a>
                <a
                  href={googleLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-700 hover:border-[#e63030] text-white px-8 py-3 text-base font-semibold uppercase tracking-wider transition-all"
                >
                  Voir tous les avis
                </a>
              </div>
              <p className="text-gray-600 text-sm mt-6">
                {siteConfig.name} — {siteConfig.address}
              </p>
            </div>
          </div>
        </section>
    </main>
  );
}