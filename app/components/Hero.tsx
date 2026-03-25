export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — remplacer par une vraie photo quand disponible */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-black" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Logo placeholder */}
        <div
          className="w-24 h-24 mx-auto mb-8 rounded-full border-2 flex items-center justify-center text-3xl bg-stone-800/60"
          style={{ borderColor: "var(--color-brand)" }}
        >
          🥪
        </div>

        <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-brand)" }}>
          Toulouse · 11 Av. de la Gloire
        </p>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
          Du goût,{" "}
          <span style={{ color: "var(--color-brand)" }}>du cœur</span>
        </h1>
        <p className="text-stone-400 text-lg md:text-xl mb-4 max-w-xl mx-auto">
          Street food authentique fait maison, avec des produits frais et locaux.
        </p>
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="text-yellow-400 text-lg">★★★★★</span>
          <span className="text-stone-300 font-semibold">4,9 / 5</span>
          <span className="text-stone-500 text-sm">(+350 avis Google)</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="px-8 py-3 rounded-full font-semibold text-white transition-colors"
            style={{ backgroundColor: "var(--color-brand)" }}
          >
            Voir la carte
          </a>
          <a
            href="#location"
            className="px-8 py-3 rounded-full font-semibold text-stone-300 bg-stone-800 hover:bg-stone-700 transition-colors"
          >
            Nous trouver
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-stone-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
