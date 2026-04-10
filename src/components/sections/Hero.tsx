import Image from "next/image";
import { ArrowRight, Calendar, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Académie Européenne des Sports"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(230,48,48,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e63030' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8">
          <Image
            src="/logo.png"
            alt="Académie Européenne des Sports"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          ACADÉMIE EUROPÉENNE <span className="text-[#e63030]">DES SPORTS</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Excellence sportive et performance. Rejoignez une communauté de warriors déterminés à atteindre leurs objectifs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tarifs"
            className="inline-flex items-center gap-2 bg-[#e63030] hover:bg-[#d42929] text-white px-8 py-4 text-lg font-semibold uppercase tracking-wider transition-all transform hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Voir les tarifs
          </a>
          <a
            href="#disciplines"
            className="inline-flex items-center gap-2 border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-semibold uppercase tracking-wider transition-all transform hover:scale-105"
          >
            Découvrir les cours
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator - Arrow pointing down */}
        <div className="mt-20 animate-bounce">
          <a href="#disciplines" className="inline-block">
            <ChevronDown className="w-10 h-10 text-[#e63030]" />
          </a>
        </div>
      </div>
    </section>
  );
}