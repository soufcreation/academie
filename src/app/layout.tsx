import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebane = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Académie Européenne des Sports | Arts Martiaux & Fitness",
  description: "Salle de sport spécialisée en arts martiaux : MMA, Boxe, Judo, Jujitsu, Karaté, Krav-Maga. Coachs experts, équipements professionnels.",
  keywords: "salle de sport, arts martiaux, MMA,-boxe, judo, jujitsu, karaté, krav-maga, fitness, combat sport",
  openGraph: {
    title: "Académie Européenne des Sports",
    description: "Excellence sportive et performance",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${bebane.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}