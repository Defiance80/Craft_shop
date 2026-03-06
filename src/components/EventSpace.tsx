export default function EventSpace() {
  return (
    <section id="space" className="py-24 bg-bmb-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1575037614876-c38a4c44f5b8?w=800&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bmb-dark/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4">
                <div className="bg-bmb-gold/90 rounded-lg px-4 py-3 text-center">
                  <p className="text-bmb-black text-2xl font-display font-bold">
                    6K
                  </p>
                  <p className="text-bmb-black text-[10px] uppercase tracking-widest">
                    Sq. Ft.
                  </p>
                </div>
                <p className="text-white text-sm">
                  Production brewery space customized for your event
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-bmb-gold mb-2">
              Private Events
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Host It Here
            </h2>
            <p className="text-bmb-muted text-lg leading-relaxed mb-8">
              Birthdays, corporate mixers, holiday parties, fundraisers — our
              6,000 sq ft production brewery is a unique alternative to
              traditional event venues. Full bar, catering menu, and a vibe
              your guests will remember.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: "🍕", label: "Full Catering" },
                { icon: "🎤", label: "Sound System & Stage" },
                { icon: "🍺", label: "30+ Beers On Tap" },
                { icon: "🎉", label: "Custom Packages" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03]"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:events@blackmarketbrew.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-bmb-gold text-bmb-black text-sm uppercase tracking-widest font-semibold rounded hover:bg-bmb-amber transition-colors"
              >
                Inquire About Booking
              </a>
              <a
                href="tel:9512965039"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-widest font-semibold rounded hover:border-bmb-gold hover:text-bmb-gold transition-colors"
              >
                Call 951.296.5039
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
