import type { Metadata } from "next";
import { metadata as appMetadata } from "@/lib/metadata";
import { Inter, Bebas_Neue } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import "./globals.css";

export const metadata: Metadata = appMetadata;

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${bebane.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}