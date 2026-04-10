import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Coaches from "@/components/sections/Coaches";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Équipe | Académie Européenne des Sports",
  description: "Découvrez tous nos coachs experts en arts martiaux. Une équipe passionnée pour vous accompagner vers l'excellence.",
};

export default function EquipePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Header */}
        <section className="py-24 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-5xl md:text-6xl font-bold tracking-wider mb-4"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              NOTRE <span className="text-[#e63030]">ÉQUIPE</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Des experts passionnés avec des années d&apos;expérience dans leur discipline. 
              Ils vous guideront vers l&apos;excellence.
            </p>
          </div>
        </section>

        {/* All Coaches */}
        <Coaches />
      </main>
      <Footer />
    </>
  );
}