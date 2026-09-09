import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { coaches, getCoachBySlug } from "@/lib/data";

interface CoachPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coaches.map((coach) => ({ slug: coach.slug }));
}

export async function generateMetadata({ params }: CoachPageProps): Promise<Metadata> {
  const { slug } = await params;
  const coach = getCoachBySlug(slug);
  if (!coach) {
    return { title: "Coach introuvable | Académie Européenne des Sports" };
  }
  return {
    title: `${coach.name} | Académie Européenne des Sports`,
    description: `${coach.name} - ${coach.discipline}. ${coach.achievements}. À l'Académie Européenne des Sports à Strasbourg.`,
    alternates: { canonical: `/equipe/${coach.slug}/` },
  };
}

export default async function CoachPage({ params }: CoachPageProps) {
  const { slug } = await params;
  const coach = getCoachBySlug(slug);
  if (!coach) {
    notFound();
  }

  const otherCoaches = coaches.filter((c) => c.id !== coach.id).slice(0, 3);

  return (
    <main className="min-h-screen pt-24">
      {/* Coach Hero */}
        <section className="min-h-screen flex flex-col justify-center bg-gray-950 pt-24 pb-8">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/equipe"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#e63030] transition-colors mb-6"
            >
              ← Retour à l&apos;équipe
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Image */}
              <div className="aspect-[4/5] bg-black border border-gray-800 relative overflow-hidden max-h-[75vh] w-full">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className={`object-cover ${coach.id === 3 ? 'object-[50%_25%] scale-110' : 'object-top'}`}
                />
              </div>

              {/* Infos */}
              <div>
                <p className="text-[#e63030] text-xs uppercase tracking-[0.2em] mb-1">
                  Notre équipe
                </p>
                <h1
                  className="text-4xl md:text-5xl font-bold tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {coach.name}
                </h1>
                <p className="text-lg text-[#e63030] uppercase tracking-wider mb-4">
                  {coach.discipline}
                </p>

                <p className="text-gray-300 leading-relaxed mb-5">{coach.bio}</p>

                <div className="space-y-3 mb-5">
                  <div className="border border-gray-800 bg-black p-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Expérience</p>
                    <p className="text-white font-semibold text-sm">{coach.experience}</p>
                  </div>
                  <div className="border border-gray-800 bg-black p-4">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Palmarès</p>
                    <p className="text-white font-semibold text-sm">{coach.achievements}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/#tarifs"
                    className="inline-flex items-center gap-2 bg-[#e63030] hover:bg-[#d42929] text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all"
                  >
                    Rejoindre un cours
                  </Link>
                  <Link
                    href="/planning"
                    className="inline-flex items-center gap-2 border border-gray-700 hover:border-[#e63030] text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all"
                  >
                    Voir le planning
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Autres coachs */}
        <section className="py-10 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold tracking-wider mb-6 text-center"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              D&apos;AUTRES <span className="text-[#e63030]">COACHS</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherCoaches.map((other) => (
                <Link
                  key={other.id}
                  href={`/equipe/${other.slug}`}
                  className="group relative overflow-hidden bg-black border border-gray-800 hover:border-[#e63030] transition-all"
                >
                  <div className="aspect-[4/5] bg-gray-900 relative">
                    <Image
                      src={other.image}
                      alt={other.name}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${other.id === 3 ? 'object-[50%_25%]' : 'object-top'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="text-2xl font-bold tracking-wider mb-1"
                      style={{ fontFamily: "var(--font-bebas)" }}
                    >
                      {other.name}
                    </h3>
                    <p className="text-[#e63030] text-sm uppercase tracking-wider">
                      {other.discipline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}