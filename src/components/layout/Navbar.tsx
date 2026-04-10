"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { navigation } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="Académie Européenne des Sports"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-wider" style={{ fontFamily: "var(--font-bebas)" }}>
              ACADÉMIE EUROPÉENNE DES SPORTS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              let href = item.href;
              // Les liens externes (planning) gardent leur chemin
              if (item.external) {
                href = item.href;
              }
              // Les ancres (#disciplines, #coachs, etc.) doivent pointer vers la racine
              else if (item.href.startsWith("#")) {
                href = `/${item.href}`;
              }
              // Les autres liens internes utilisent un chemin absolu
              else {
                href = item.href.startsWith("/") ? item.href : `/${item.href}`;
              }
              return (
                <a
                  key={item.href}
                  href={href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[#e63030] hover:bg-[#d42929] text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4" />
              Nous contacter
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-4 pt-4">
              {navigation.map((item) => {
                let href = item.href;
                if (item.external) {
                  href = item.href;
                } else if (item.href.startsWith("#")) {
                  href = `/${item.href}`;
                } else {
                  href = item.href.startsWith("/") ? item.href : `/${item.href}`;
                }
                return (
                  <a
                    key={item.href}
                    href={href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#e63030] hover:bg-[#d42929] text-white px-6 py-3 text-base font-semibold uppercase tracking-wider transition-colors mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Nous contacter
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}