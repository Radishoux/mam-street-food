const values = [
  { icon: "🌿", label: "Produits frais", desc: "Sélectionnés chaque matin" },
  { icon: "🏡", label: "Circuit local", desc: "Producteurs du coin" },
  { icon: "👨‍🍳", label: "Fait maison", desc: "Tout est préparé sur place" },
];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "var(--color-cream)" }} className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image placeholder with decorative frame */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4"
              style={{ backgroundColor: "var(--color-mustard)", opacity: 0.4 }}
            />
            <div
              className="relative rounded-3xl overflow-hidden aspect-[4/5] flex flex-col items-center justify-center gap-4 border-4"
              style={{
                backgroundColor: "var(--color-cream-dark)",
                borderColor: "var(--color-brown-light)",
                color: "var(--color-brown-light)",
              }}
            >
              <svg className="w-16 h-16 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-semibold opacity-50">Photo à venir</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-6 border-2"
              style={{
                backgroundColor: "var(--color-mustard-light)",
                borderColor: "var(--color-mustard)",
                color: "var(--color-brown)",
              }}
            >
              Notre histoire
            </span>

            <h2
              className="text-5xl md:text-6xl font-black leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-brown)" }}
            >
              Une adresse,{" "}
              <em style={{ color: "var(--color-orange)" }}>une âme</em>
            </h2>

            <p
              className="text-lg leading-relaxed mb-5 font-medium"
              style={{ color: "var(--color-brown-mid)" }}
            >
              Mam Street Food, c&apos;est l&apos;endroit où on revient. Un comptoir chaleureux avenue de la Gloire à Toulouse, tenu par un patron passionné qui vous accueille par votre prénom et qui met toute son énergie dans chaque assiette.
            </p>
            <p
              className="text-lg leading-relaxed font-medium"
              style={{ color: "var(--color-brown-mid)" }}
            >
              Ici, les croques-monsieur sont une religion. Faits avec des produits frais sourcés localement, ils sont généreux, honnêtes et franchement bons.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="rounded-2xl p-4 text-center border-2 flex flex-col items-center gap-2"
                  style={{
                    backgroundColor: "var(--color-card)",
                    borderColor: "var(--color-cream-dark)",
                  }}
                >
                  <span className="text-3xl">{v.icon}</span>
                  <p className="font-bold text-sm" style={{ color: "var(--color-brown)" }}>{v.label}</p>
                  <p className="text-xs" style={{ color: "var(--color-brown-light)" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
