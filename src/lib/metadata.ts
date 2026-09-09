import type { Metadata } from "next";

/**
 * Application metadata configuration for SEO and social sharing.
 * Defines title, description, keywords, Open Graph, Twitter cards, and robots settings.
 */
export const metadata: Metadata = {
  title: "Académie Européenne des Sports | Arts Martiaux & Sports de Combat",
  description:
    "Club d'arts martiaux et sports de combat à Strasbourg : MMA & grappling, boxe anglaise, handi-boxe, jiu-jitsu brésilien, kick-boxing & muay thaï, cardio bag. Coachs experts, équipements professionnels.",
  keywords:
    "salle de sport, arts martiaux, sports de combat, MMA, grappling, boxe anglaise, handi-boxe, jiu-jitsu brésilien, JJB, kick-boxing, muay thaï, cardio bag, Strasbourg, Hautepierre",
  metadataBase: new URL("https://academie-europeenne.eu/"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon-32.png",
    apple: "/favicon-32.png",
  },
  openGraph: {
    title: "Académie Européenne des Sports",
    description: "Excellence sportive et performance à Strasbourg",
    type: "website",
    locale: "fr_FR",
    siteName: "Académie Européenne des Sports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Académie Européenne des Sports",
    description: "Excellence sportive et performance à Strasbourg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default metadata;