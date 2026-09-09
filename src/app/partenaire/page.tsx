import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Partenaires | Académie Européenne des Sports",
  description: "Découvrez les partenaires officiels de l'Académie Européenne des Sports à Strasbourg. Sponsors et partenaires de confiance.",
};

export default function PartenairePage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Page Header */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold tracking-wider mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            NOS <span className="text-[#e63030]">PARTENAIRES</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nous remercions chaleureusement les collectivités territoriales et les donnateurs privés pour leur aide précieuse.
          </p>
        </div>
      </section>

      {/* Remerciement Image */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative w-full">
            <Image
              src="/remerciement.jpg"
              alt="Remerciements"
              width={1200}
              height={800}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Devenir Partenaire */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-bold tracking-wider mb-6"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            DEVENIR <span className="text-[#e63030]">PARTENAIRE</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Vous souhaitez soutenir l&apos;Académie Européenne des Sports ? 
            Contactez-nous pour discuter des opportunités de partenariat.
          </p>
          <a
            href="mailto:academie.europeenne.sports@gmail.com"
            className="inline-block bg-[#e63030] hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-colors"
          >
            NOUS CONTACTER
          </a>
        </div>
      </section>
    </main>
  );
}