const hours = [
  { day: "Lundi", hours: "Fermé" },
  { day: "Mardi", hours: "12h00 – 14h30  ·  18h30 – 22h30" },
  { day: "Mercredi", hours: "12h00 – 14h30  ·  18h30 – 22h30" },
  { day: "Jeudi", hours: "12h00 – 14h30  ·  18h30 – 23h00" },
  { day: "Vendredi", hours: "12h00 – 14h30  ·  18h30 – 23h00" },
  { day: "Samedi", hours: "12h00 – 15h00  ·  18h30 – 23h00" },
  { day: "Dimanche", hours: "Fermé" },
];

export default function Location() {
  return (
    <section id="location" className="py-24 px-4 bg-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-brand)" }}>
            Venez nous voir
          </p>
          <h2 className="text-4xl md:text-5xl font-black">Nous Trouver</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Embedded map */}
          <div className="rounded-2xl overflow-hidden aspect-video border border-stone-700">
            <iframe
              title="Mam Street Food sur Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d1.4674!3d43.5946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb5e5fb2f6bb%3A0x9a3e00a93d5a0ab8!2sMam%20Street%20Food!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Address */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-brand)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Adresse
              </h3>
              <a
                href="https://maps.app.goo.gl/5CvkDxfKrGiBeViL8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-white transition-colors"
              >
                11 Av. de la Gloire<br />31500 Toulouse, France
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-brand)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Téléphone
              </h3>
              <a
                href="tel:+33534431473"
                className="text-stone-400 hover:text-white transition-colors"
              >
                +33 5 34 43 14 73
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-brand)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horaires
              </h3>
              <div className="space-y-1.5">
                {hours.map(({ day, hours: h }) => (
                  <div key={day} className="flex justify-between gap-4">
                    <span className={h === "Fermé" ? "text-stone-600" : "text-stone-400"}>{day}</span>
                    <span className={h === "Fermé" ? "text-stone-600 italic" : "text-stone-400 text-right"}>{h}</span>
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
