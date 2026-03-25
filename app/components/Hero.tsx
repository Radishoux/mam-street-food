import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/photo-10.jpg"
          alt="Mam Street Food"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(44,16,7,0.55) 0%, rgba(44,16,7,0.35) 50%, rgba(44,16,7,0.7) 100%)" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-8 border-2"
          style={{ backgroundColor: "rgba(253,246,232,0.15)", borderColor: "var(--color-mustard)", color: "white", backdropFilter: "blur(6px)" }}
        >
          <span>⭐ 4,9 / 5</span>
          <span className="w-px h-4 bg-white/30" />
          <span>+350 avis Google</span>
          <span className="w-px h-4 bg-white/30" />
          <span>Toulouse</span>
        </div>

        <h1
          className="text-6xl md:text-8xl font-black leading-[0.95] mb-6 text-white"
          style={{ fontFamily: "var(--font-heading)", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
        >
          Du bon,{" "}
          <em style={{ color: "var(--color-mustard-light)" }}>du fait maison</em>
        </h1>

        <p className="text-lg md:text-xl mb-10 max-w-lg mx-auto font-medium leading-relaxed text-white/85">
          Croque-monsieur artisanaux, produits frais et locaux, et un patron qui vous reçoit comme un ami.
          Bienvenue chez Mam.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="px-8 py-4 rounded-full font-bold text-white text-base transition-all hover:scale-105"
            style={{ backgroundColor: "var(--color-orange)", boxShadow: "4px 4px 0 rgba(0,0,0,0.3)" }}
          >
            Voir la carte 🥪
          </a>
          <a
            href="#location"
            className="px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105 border-2 border-white/60 text-white"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)" }}
          >
            Nous trouver 📍
          </a>
        </div>

        <p className="mt-10 text-sm font-semibold text-white/60">
          Mar – Mer : 12h–14h30 · 18h30–22h30 &nbsp;|&nbsp; Jeu – Ven : jusqu&apos;à 23h &nbsp;|&nbsp; Sam : jusqu&apos;à 23h
        </p>
      </div>

      {/* Wavy bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="w-full" style={{ fill: "var(--color-cream)" }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
