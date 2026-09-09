"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { navigation } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  // Note: on évite position:fixed qui peut annuler le state update sur Safari iOS
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu si on redimensionne vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const getHref = (item: { href: string; external?: boolean }) => {
    if (item.external) return item.href;
    if (item.href.startsWith("#")) return `/${item.href}`;
    return item.href.startsWith("/") ? item.href : `/${item.href}`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
          isScrolled ? "bg-black/95 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 min-w-0">
              <div className="relative w-10 h-10 shrink-0">
                <Image
                  src="/logo.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className="text-sm sm:text-base lg:text-xl font-bold tracking-wider truncate"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                ACADÉMIE EUROPÉENNE DES SPORTS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={getHref(item)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button desktop */}
            <div className="hidden lg:block">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-[#e63030] hover:bg-[#d42929] text-white px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4" />
                Nous contacter
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden shrink-0 w-10 h-10 flex items-center justify-center text-white touch-manipulation active:scale-95 transition-all cursor-pointer bg-black/90 border border-gray-700 hover:border-gray-500 rounded-xl"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay — EN DEHORS du <nav> pour éviter tout conflit de stacking context */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[150] bg-black overflow-y-auto overscroll-none"
          style={{ paddingTop: "72px" }}
        >
          <div className="flex flex-col gap-4 p-4 min-h-full">
            <div className="bg-black border border-gray-800 rounded-lg p-4 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={getHref(item)}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-800 active:text-white active:scale-95 transition-all uppercase tracking-wider py-3 min-h-[48px] flex items-center rounded"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#e63030] hover:bg-[#d42929] text-white px-6 py-4 text-lg font-semibold uppercase tracking-wider transition-all active:scale-95 mt-2 min-h-[48px] rounded w-full"
                onClick={closeMobileMenu}
              >
                <Phone className="w-5 h-5" />
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
