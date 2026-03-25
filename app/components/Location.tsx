export default function Location() {
  return (
    <section id="location" className="py-24 px-4 bg-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--color-brand)" }}>
            Come Visit Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black">Find Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden aspect-video bg-stone-800 flex flex-col items-center justify-center text-stone-600 gap-4 border border-stone-700">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">Map coming soon</span>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span style={{ color: "var(--color-brand)" }}>
                  <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Address
              </h3>
              <p className="text-stone-400">Address to be confirmed</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span style={{ color: "var(--color-brand)" }}>
                  <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Opening Hours
              </h3>
              <div className="space-y-2 text-stone-400">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span>11:00 – 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>12:00 – 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 – 21:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <span style={{ color: "var(--color-brand)" }}>
                  <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                Contact
              </h3>
              <p className="text-stone-400">Contact info coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
