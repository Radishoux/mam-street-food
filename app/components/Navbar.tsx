"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "À propos", href: "#about" },
  { label: "La carte", href: "#menu" },
  { label: "Nous trouver", href: "#location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "var(--color-cream)" : "transparent",
        borderBottom: scrolled ? "2px solid var(--color-cream-dark)" : "2px solid transparent",
        boxShadow: scrolled ? "0 2px 16px rgba(44,16,7,0.07)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-black tracking-tight"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-brown)" }}
        >
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black"
            style={{ backgroundColor: "var(--color-orange)", color: "white" }}
          >
            M
          </span>
          Mam <span style={{ color: "var(--color-orange)" }}>Street Food</span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold transition-colors"
              style={{ color: "var(--color-brown-mid)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-brown-mid)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+33534431473"
            className="text-sm px-5 py-2 rounded-full font-bold text-white transition-all hover:scale-105"
            style={{ backgroundColor: "var(--color-orange)" }}
          >
            📞 Appeler
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden p-1 rounded"
          onClick={() => setOpen(!open)}
          style={{ color: "var(--color-brown)" }}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-5 py-5 flex flex-col gap-4 border-t-2"
          style={{ backgroundColor: "var(--color-cream)", borderColor: "var(--color-cream-dark)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-semibold text-base"
              style={{ color: "var(--color-brown-mid)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+33534431473"
            className="font-bold text-white text-center py-3 rounded-full"
            style={{ backgroundColor: "var(--color-orange)" }}
          >
            📞 Appeler
          </a>
        </div>
      )}
    </header>
  );
}
