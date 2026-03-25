import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mam Street Food — Toulouse",
  description:
    "Street food authentique à Toulouse. Croque-monsieur faits maison avec des produits frais et locaux. 11 Av. de la Gloire, 31500 Toulouse.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${heading.variable} ${body.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ backgroundColor: "var(--color-cream)", color: "var(--color-brown)" }}
      >
        {children}
      </body>
    </html>
  );
}
