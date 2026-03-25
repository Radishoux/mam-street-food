"use client";

export default function Footer() {
  return (
    <footer
      className="border-t-4 py-10 px-4"
      style={{
        backgroundColor: "var(--color-brown)",
        borderColor: "var(--color-orange)",
        color: "var(--color-cream)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p
            className="text-2xl font-black mb-1"
            style={{ fontFamily: "var(--font-heading)", color: "white" }}
          >
            Mam <span style={{ color: "var(--color-mustard-light)" }}>Street Food</span>
          </p>
          <p className="text-sm" style={{ color: "var(--color-brown-light)", filter: "brightness(2)" }}>
            11 Av. de la Gloire · 31500 Toulouse · +33 5 34 43 14 73
          </p>
        </div>

        <div className="flex gap-8 text-sm font-semibold" style={{ color: "var(--color-cream-dark)" }}>
          <a href="#about"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-mustard-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-cream-dark)")}
            className="transition-colors">
            À propos
          </a>
          <a href="#menu"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-mustard-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-cream-dark)")}
            className="transition-colors">
            La carte
          </a>
          <a href="#location"
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-mustard-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-cream-dark)")}
            className="transition-colors">
            Nous trouver
          </a>
        </div>

        <p className="text-xs" style={{ color: "var(--color-brown-light)", filter: "brightness(1.5)" }}>
          © {new Date().getFullYear()} Mam Street Food
        </p>
      </div>
    </footer>
  );
}
