import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planning des Cours | Académie Européenne des Sports",
  description: "Consultez le planning hebdomadaire de tous nos cours d'arts martiaux. Boxe, MMA, Jiu-Jitsu, Muay Thai et plus.",
};

export default function PlanningPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        {/* Page Header */}
        <section className="py-12 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-5xl md:text-6xl font-bold tracking-wider mb-4"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              PLANNING <span className="text-[#e63030]">HEBDOMADAIRE</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Horaires des cours pour tous les niveaux. Consultez nos disponibilités et choisissez vos créneaux.
            </p>
          </div>
        </section>

        {/* Planning Image */}
        <section className="py-12 bg-black">
          <div className="max-w-5xl mx-auto px-4">
            <div className="relative w-full">
              <img
                src="/planning.png"
                alt="Planning hebdomadaire des cours"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="py-12 bg-gray-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-lg">
              <span className="text-[#e63030] font-bold">Information:</span>{" "}
              Malgré les vacances scolaires, l'Académie reste ouverte aux horaires habituels.
              N'hésitez pas à nous contacter pour toute question.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}