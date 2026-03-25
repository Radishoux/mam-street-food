const categories = [
  {
    name: "Nos Croques",
    items: [
      {
        name: "MamanPoule",
        description: "Le croque signature de la maison — recette secrète, produits locaux.",
        price: "À venir",
      },
      {
        name: "MamaKini",
        description: "Une variante savoureuse du croque-monsieur maison.",
        price: "À venir",
      },
    ],
  },
  {
    name: "Accompagnements",
    items: [
      {
        name: "Merguez / Saucisses",
        description: "Grillées à la commande, parfaites en accompagnement.",
        price: "À venir",
      },
      {
        name: "Salade fraîche",
        description: "Salade du jour avec produits de saison.",
        price: "À venir",
      },
      {
        name: "Oignons croustillants",
        description: "En supplément sur tous nos plats.",
        price: "À venir",
      },
    ],
  },
  {
    name: "Desserts",
    items: [
      {
        name: "Bombe au chocolat",
        description: "Une explosion de gourmandise pour finir en beauté.",
        price: "À venir",
      },
      {
        name: "Parfait",
        description: "Dessert maison du moment.",
        price: "À venir",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-4 bg-stone-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-brand)" }}>
            Ce qu&apos;on vous prépare
          </p>
          <h2 className="text-4xl md:text-5xl font-black">La Carte</h2>
          <p className="text-stone-500 mt-4">Carte et tarifs complets à venir très prochainement.</p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-stone-800 flex items-center gap-3">
                <span style={{ color: "var(--color-brand)" }}>—</span>
                {cat.name}
              </h3>
              <div className="space-y-4">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-4 p-4 rounded-xl bg-stone-900 border border-stone-800"
                  >
                    <div className="flex gap-4 items-start">
                      {/* Image placeholder */}
                      <div className="w-14 h-14 rounded-lg bg-stone-800 flex-shrink-0 flex items-center justify-center text-stone-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-stone-300">{item.name}</p>
                        <p className="text-sm text-stone-500 mt-1">{item.description}</p>
                      </div>
                    </div>
                    <span className="font-bold text-stone-400 flex-shrink-0 text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
