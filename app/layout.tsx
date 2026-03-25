import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mam Street Food — Toulouse",
  description: "Street food authentique à Toulouse. Croque-monsieur faits maison avec des produits frais et locaux. 11 Av. de la Gloire, 31500 Toulouse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-stone-950 text-stone-100 antialiased">
        {children}
      </body>
    </html>
  );
}
