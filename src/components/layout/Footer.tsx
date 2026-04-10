import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig, socialLinks, navigation } from "@/lib/data";

// Simple social icons using text
const SocialIcon = ({ type, href }: { type: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-gray-900 hover:bg-[#e63030] transition-colors text-xs font-bold uppercase"
  >
    {type}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold tracking-wider mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
              ACADÉMIE EUROPÉENNE DES SPORTS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-left">
              Votre salle de sport dédiée aux arts martiaux depuis plus de 15 ans.
            </p>
            <div className="flex justify-center gap-4 mt-6 md:justify-start">
              <SocialIcon type="FB" href={socialLinks.facebook} />
              <SocialIcon type="IG" href={socialLinks.instagram} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold tracking-wider mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
              LIENS RAPIDES
            </h4>
            <ul className="space-y-3">
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
                  <li key={item.href}>
                    <a
                      href={href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-gray-400 hover:text-[#e63030] transition-colors text-sm uppercase tracking-wider"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold tracking-wider mb-4" style={{ fontFamily: "var(--font-bebas)" }}>
              CONTACT
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center justify-center md:justify-end gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#e63030]" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center justify-center md:justify-end gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#e63030]" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-end gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#e63030]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-end gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 text-[#e63030]" />
                <span>Lun-Ven: 12h-22h | Sam: 9h-16h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 mt-10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Académie Européenne des Sports. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}