import Image from "next/image";

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

          {/* Images stacked */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4"
              style={{ backgroundColor: "var(--color-mustard)", opacity: 0.35 }}
            />
            {/* Main interior photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border-4" style={{ borderColor: "var(--color-brown-light)" }}>
              <Image
                src="/images/photo-20.jpg"
                alt="L'intérieur de Mam Street Food"
                fill
                className="object-cover"
              />
            </div>
            {/* Team badge */}
            <div
              className="absolute -bottom-6 -right-6 w-36 h-36 rounded-2xl overflow-hidden border-4 shadow-xl"
              style={{ borderColor: "white" }}
            >
              <Image
                src="/images/photo-11.jpg"
                alt="L'équipe Mam"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:pl-6">
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-6 border-2"
              style={{ backgroundColor: "var(--color-mustard-light)", borderColor: "var(--color-mustard)", color: "var(--color-brown)" }}
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

            <p className="text-lg leading-relaxed mb-5 font-medium" style={{ color: "var(--color-brown-mid)" }}>
              Mam Street Food, c&apos;est l&apos;endroit où on revient. Un comptoir chaleureux avenue de la Gloire à Toulouse, tenu par une équipe passionnée qui vous accueille comme à la maison et met toute son énergie dans chaque assiette.
            </p>
            <p className="text-lg leading-relaxed font-medium" style={{ color: "var(--color-brown-mid)" }}>
              Ici, les croques-monsieur sont une religion. Faits avec des produits frais sourcés localement, ils sont généreux, honnêtes et franchement bons.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="rounded-2xl p-4 text-center border-2 flex flex-col items-center gap-2"
                  style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-cream-dark)" }}
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
