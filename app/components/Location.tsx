"use client";

const hours = [
  { day: "Lundi", time: null },
  { day: "Mardi", time: "12h00 – 14h30  ·  18h30 – 22h30" },
  { day: "Mercredi", time: "12h00 – 14h30  ·  18h30 – 22h30" },
  { day: "Jeudi", time: "12h00 – 14h30  ·  18h30 – 23h00" },
  { day: "Vendredi", time: "12h00 – 14h30  ·  18h30 – 23h00" },
  { day: "Samedi", time: "12h00 – 15h00  ·  18h30 – 23h00" },
  { day: "Dimanche", time: null },
];

export default function Location() {
  return (
    <section
      id="location"
      className="py-24 px-4"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-6xl mx-auto">
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
            Venez nous voir
          </span>
          <h2
            className="text-5xl md:text-6xl font-black"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-brown)" }}
          >
            Nous Trouver
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div
            className="rounded-3xl overflow-hidden border-4"
            style={{ borderColor: "var(--color-brown-light)" }}
          >
            <iframe
              title="Mam Street Food sur Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d1.4674!3d43.5946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb5e5fb2f6bb%3A0x9a3e00a93d5a0ab8!2sMam%20Street%20Food!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info cards */}
          <div className="space-y-5">
            {/* Address */}
            <div
              className="rounded-2xl p-5 border-2 flex gap-4 items-start"
              style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-cream-dark)" }}
            >
              <span className="text-2xl mt-0.5">📍</span>
              <div>
                <p className="font-black mb-1" style={{ color: "var(--color-brown)" }}>Adresse</p>
                <a
                  href="https://maps.app.goo.gl/5CvkDxfKrGiBeViL8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors"
                  style={{ color: "var(--color-brown-mid)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-brown-mid)")}
                >
                  11 Av. de la Gloire<br />31500 Toulouse, France
                </a>
              </div>
            </div>

            {/* Phone */}
            <div
              className="rounded-2xl p-5 border-2 flex gap-4 items-start"
              style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-cream-dark)" }}
            >
              <span className="text-2xl mt-0.5">📞</span>
              <div>
                <p className="font-black mb-1" style={{ color: "var(--color-brown)" }}>Téléphone</p>
                <a
                  href="tel:+33534431473"
                  className="font-medium transition-colors"
                  style={{ color: "var(--color-brown-mid)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-orange)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-brown-mid)")}
                >
                  +33 5 34 43 14 73
                </a>
              </div>
            </div>

            {/* Hours */}
            <div
              className="rounded-2xl p-5 border-2"
              style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-cream-dark)" }}
            >
              <div className="flex gap-4 items-start mb-4">
                <span className="text-2xl">🕐</span>
                <p className="font-black" style={{ color: "var(--color-brown)" }}>Horaires</p>
              </div>
              <div className="space-y-2 pl-10">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center gap-4">
                    <span
                      className="font-semibold text-sm w-24"
                      style={{ color: time ? "var(--color-brown)" : "var(--color-brown-light)", opacity: time ? 1 : 0.5 }}
                    >
                      {day}
                    </span>
                    {time ? (
                      <span className="text-sm font-medium text-right" style={{ color: "var(--color-brown-mid)" }}>
                        {time}
                      </span>
                    ) : (
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "var(--color-cream-dark)", color: "var(--color-brown-light)" }}
                      >
                        Fermé
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
