"use client";

import { MapPin, Phone, Mail, Clock, Play } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-wider mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            NOUS <span className="text-[#e63030]">CONTACTER</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Une question? Besoin de plus d&apos;informations? N&apos;hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#e63030]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-wider mb-1" style={{ fontFamily: "var(--font-bebas)" }}>
                    ADRESSE
                  </h3>
                  <p className="text-gray-400">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#e63030]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-wider mb-1" style={{ fontFamily: "var(--font-bebas)" }}>
                    TÉLÉPHONE
                  </h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-gray-400 hover:text-white transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#e63030]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-wider mb-1" style={{ fontFamily: "var(--font-bebas)" }}>
                    EMAIL
                  </h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-gray-400 hover:text-white transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#e63030]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-wider mb-1" style={{ fontFamily: "var(--font-bebas)" }}>
                    HORAIRES
                  </h3>
                  <p className="text-gray-400">Lundi - Vendredi: 12h - 22h</p>
                  <p className="text-gray-400">Samedi: 9h - 16h</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="aspect-video bg-gray-900 border border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.5!2d7.708!3d48.588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479bf2f5abcb5f93%3A0x3c2e!2s11+Place+Andr%C3%A9+Maurois%2C+67200+Strasbourg!5e0!3m2!1sfr!2sfr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Académie Européenne des Sports"
              />
            </div>
          </div>

          {/* Video Reel */}
          <div className="bg-gray-900/50 border border-gray-800 p-8">
            <h3
              className="text-2xl font-bold tracking-wider mb-6"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              DÉCOUVREZ NOTRE ACADÉMIE
            </h3>
            <div className="relative rounded-lg overflow-hidden bg-black w-1/2 mx-auto">
              <video
                controls
                className="w-full aspect-[9/16]"
                poster="/placeholder-video.jpg"
              >
                <source src="/academie-reel.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
            <p className="text-gray-400 text-sm mt-4 text-center">
              Visionnez notre présentation pour en savoir plus sur nos cours et installations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}