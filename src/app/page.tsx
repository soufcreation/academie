import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Disciplines from "@/components/sections/Disciplines";
import Coaches from "@/components/sections/Coaches";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Disciplines />
        <Coaches limit={3} />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}