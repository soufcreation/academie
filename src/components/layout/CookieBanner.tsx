"use client";

import Link from "next/link";
import { Cookie } from "lucide-react";
import { useCookieConsent } from "@/hooks/useCookieConsent";

function MapPlaceholder() {
  return (
    <div className="aspect-video bg-gray-900 border border-gray-800 flex items-center justify-center">
      <div className="text-center p-8">
        <Cookie className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-500 text-sm">
          Acceptez les cookies analytiques pour voir la carte
        </p>
      </div>
    </div>
  );
}

export default function CookieBanner() {
  const { showBanner, isReady, acceptAll, acceptNecessary } = useCookieConsent();

  const handleAccept = () => {
    acceptAll();
    window.location.reload();
  };

  const handleRefuse = () => {
    acceptNecessary();
    window.location.reload();
  };

  if (!isReady) return null;

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900 border-t border-gray-800 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Cookie className="w-6 h-6 text-[#e63030] flex-shrink-0" />
            <div className="text-sm">
              <p className="text-white font-medium">
                Nous utilisons des cookies pour améliorer votre expérience
              </p>
              <p className="text-gray-500 text-xs mt-1">
                <Link href="/mentions-legales" className="text-[#e63030] hover:underline">
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleRefuse}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-lg transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm bg-[#e63030] hover:bg-[#d42929] text-white rounded-lg transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { MapPlaceholder };