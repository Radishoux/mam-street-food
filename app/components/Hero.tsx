export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Warm gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(145deg, #FDF0D5 0%, #FAEBD7 40%, #F5DEB3 100%)",
        }}
      />

      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 -translate-y-1/3 translate-x-1/3"
        style={{ backgroundColor: "var(--color-mustard)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 translate-y-1/3 -translate-x-1/3"
        style={{ backgroundColor: "var(--color-orange)" }}
      />

      {/* Wavy border bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full" style={{ fill: "var(--color-cream)" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-8 border-2"
          style={{
            backgroundColor: "white",
            borderColor: "var(--color-mustard)",
            color: "var(--color-brown)",
          }}
        >
          <span>⭐ 4,9 / 5</span>
          <span
            className="w-px h-4"
            style={{ backgroundColor: "var(--color-cream-dark)" }}
          />
          <span>+350 avis Google</span>
          <span
            className="w-px h-4"
            style={{ backgroundColor: "var(--color-cream-dark)" }}
          />
          <span>Toulouse</span>
        </div>

        {/* Headline */}
        <h1
          className="text-6xl md:text-8xl font-black leading-[0.95] mb-6"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-brown)" }}
        >
          Du bon,{" "}
          <em style={{ color: "var(--color-orange)" }}>du fait maison</em>
        </h1>

        <p
          className="text-lg md:text-xl mb-10 max-w-lg mx-auto font-medium leading-relaxed"
          style={{ color: "var(--color-brown-mid)" }}
        >
          Croque-monsieur artisanaux, produits frais et locaux, et un patron qui vous reçoit comme un ami.
          Bienvenue chez Mam.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="px-8 py-4 rounded-full font-bold text-white text-base transition-all hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "var(--color-orange)",
              boxShadow: "4px 4px 0 var(--color-brown)",
            }}
          >
            Voir la carte 🥪
          </a>
          <a
            href="#location"
            className="px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 border-2"
            style={{
              borderColor: "var(--color-brown)",
              color: "var(--color-brown)",
              backgroundColor: "white",
              boxShadow: "4px 4px 0 var(--color-brown-mid)",
            }}
          >
            Nous trouver 📍
          </a>
        </div>

        {/* Hours teaser */}
        <p
          className="mt-10 text-sm font-semibold"
          style={{ color: "var(--color-brown-light)" }}
        >
          Mar – Mer : 12h–14h30 · 18h30–22h30 &nbsp;|&nbsp; Jeu – Ven : jusqu&apos;à 23h &nbsp;|&nbsp; Sam : jusqu&apos;à 23h
        </p>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6" style={{ color: "var(--color-brown-light)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
