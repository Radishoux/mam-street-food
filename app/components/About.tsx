export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-stone-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image placeholder — remplacer par une photo réelle */}
        <div className="rounded-2xl overflow-hidden aspect-square bg-stone-800 flex flex-col items-center justify-center text-stone-600 gap-4 border border-stone-700">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-sm">Photo à venir</span>
        </div>

        {/* Text */}
        <div>
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-brand)" }}>
            Notre histoire
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Fait avec amour,<br /> servi avec fierté
          </h2>
          <p className="text-stone-400 text-lg leading-relaxed mb-6">
            Mam Street Food, c&apos;est une adresse incontournable du quartier de la Gloire à Toulouse. Un endroit petit en taille mais grand en saveurs, où le patron vous accueille comme à la maison et concocte des croque-monsieur d&apos;exception avec des produits frais et locaux.
          </p>
          <p className="text-stone-400 text-lg leading-relaxed">
            Ici, pas de chichis — juste une cuisine généreuse, honnête et délicieuse, préparée chaque jour avec passion.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { stat: "4,9★", label: "Note Google" },
              { stat: "100%", label: "Produits frais" },
              { stat: "Local", label: "Circuit court" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-black" style={{ color: "var(--color-brand)" }}>{item.stat}</p>
                <p className="text-stone-500 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
