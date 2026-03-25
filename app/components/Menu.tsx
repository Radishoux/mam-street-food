const categories = [
  {
    emoji: "🥪",
    name: "Nos Croques",
    subtitle: "La spécialité de la maison",
    items: [
      {
        name: "MamanPoule",
        description: "Le croque signature — recette secrète, produits locaux, une pépite.",
        price: "À venir",
        tag: "⭐ Signature",
      },
      {
        name: "MamaKini",
        description: "Une déclinaison savoureuse du croque maison. Impossible de résister.",
        price: "À venir",
        tag: null,
      },
    ],
  },
  {
    emoji: "🍽️",
    name: "Accompagnements",
    subtitle: "Pour compléter votre plateau",
    items: [
      {
        name: "Merguez & Saucisses",
        description: "Grillées à la commande, généreuses et parfumées.",
        price: "À venir",
        tag: null,
      },
      {
        name: "Salade fraîche",
        description: "Produits de saison, vinaigrette maison.",
        price: "À venir",
        tag: null,
      },
      {
        name: "Oignons croustillants",
        description: "En supplément sur tous nos plats.",
        price: "À venir",
        tag: null,
      },
    ],
  },
  {
    emoji: "🍫",
    name: "Desserts",
    subtitle: "Pour finir en beauté",
    items: [
      {
        name: "Bombe au chocolat",
        description: "Une explosion de gourmandise. Le genre de dessert dont on se souvient.",
        price: "À venir",
        tag: "❤️ Coup de cœur",
      },
      {
        name: "Parfait maison",
        description: "Le dessert du moment, fait avec amour.",
        price: "À venir",
        tag: null,
      },
    ],
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      className="py-24 px-4"
      style={{ backgroundColor: "var(--color-cream-dark)" }}
    >
      {/* Wavy top */}
      <div className="w-full overflow-hidden leading-none -mt-24 mb-16">
        <svg viewBox="0 0 1440 60" className="w-full" style={{ fill: "var(--color-cream-dark)" }}>
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-5 border-2"
            style={{
              backgroundColor: "var(--color-mustard-light)",
              borderColor: "var(--color-mustard)",
              color: "var(--color-brown)",
            }}
          >
            Ce qu&apos;on vous prépare
          </span>
          <h2
            className="text-5xl md:text-6xl font-black"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-brown)" }}
          >
            La Carte
          </h2>
          <p className="mt-3 font-medium" style={{ color: "var(--color-brown-light)" }}>
            Tarifs complets à venir — passez nous voir ou appelez-nous !
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat.name}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{cat.emoji}</span>
                <div>
                  <h3
                    className="text-2xl font-black"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-brown)" }}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: "var(--color-brown-light)" }}>
                    {cat.subtitle}
                  </p>
                </div>
                <div
                  className="flex-1 h-0.5 ml-2 rounded"
                  style={{ backgroundColor: "var(--color-brown-light)", opacity: 0.2 }}
                />
              </div>

              {/* Items */}
              <div className="grid sm:grid-cols-2 gap-4">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 border-2 flex flex-col gap-3 relative"
                    style={{
                      backgroundColor: "var(--color-card)",
                      borderColor: "var(--color-cream-dark)",
                    }}
                  >
                    {item.tag && (
                      <span
                        className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "var(--color-mustard-light)",
                          color: "var(--color-brown)",
                        }}
                      >
                        {item.tag}
                      </span>
                    )}
                    {/* Photo placeholder */}
                    <div
                      className="w-full h-32 rounded-xl flex items-center justify-center border-2 border-dashed"
                      style={{
                        backgroundColor: "var(--color-cream-dark)",
                        borderColor: "var(--color-brown-light)",
                        opacity: 0.6,
                      }}
                    >
                      <span className="text-3xl">📷</span>
                    </div>
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <p
                          className="font-black text-lg"
                          style={{ fontFamily: "var(--font-heading)", color: "var(--color-brown)" }}
                        >
                          {item.name}
                        </p>
                        <span
                          className="font-bold text-sm flex-shrink-0"
                          style={{ color: "var(--color-orange)" }}
                        >
                          {item.price}
                        </span>
                      </div>
                      <p
                        className="text-sm mt-1 leading-relaxed font-medium"
                        style={{ color: "var(--color-brown-mid)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 rounded-3xl p-8 text-center border-2"
          style={{
            backgroundColor: "var(--color-card)",
            borderColor: "var(--color-mustard)",
          }}
        >
          <p
            className="text-2xl font-black mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-brown)" }}
          >
            Curieux d&apos;en savoir plus ?
          </p>
          <p className="font-medium mb-5" style={{ color: "var(--color-brown-mid)" }}>
            Appelez-nous ou venez directement — on s&apos;occupe de tout.
          </p>
          <a
            href="tel:+33534431473"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--color-orange)",
              boxShadow: "4px 4px 0 var(--color-brown)",
            }}
          >
            📞 +33 5 34 43 14 73
          </a>
        </div>
      </div>
    </section>
  );
}
