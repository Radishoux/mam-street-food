import Image from "next/image";

const photos = [
  { src: "/images/photo-03.jpg", alt: "L'intérieur et le comptoir" },
  { src: "/images/photo-06.jpg", alt: "Croque à emporter" },
  { src: "/images/photo-13.jpg", alt: "Service au comptoir" },
  { src: "/images/photo-25.jpg", alt: "Un déjeuner chez Mam" },
  { src: "/images/photo-01.jpg", alt: "Croque maison" },
  { src: "/images/photo-35.jpg", alt: "Croque et limonade" },
];

export default function Gallery() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-5 border-2"
            style={{ backgroundColor: "var(--color-mustard-light)", borderColor: "var(--color-mustard)", color: "var(--color-brown)" }}
          >
            L&apos;ambiance
          </span>
          <h2 className="text-5xl md:text-6xl font-black" style={{ fontFamily: "var(--font-heading)", color: "var(--color-brown)" }}>
            Chez Mam en images
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl border-2 ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"}`}
              style={{ borderColor: "var(--color-cream-dark)" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
