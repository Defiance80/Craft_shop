import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bmb-black/70 via-bmb-black/50 to-bmb-black" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="animate-fade-up mb-6">
          <Logo size={100} className="mx-auto" />
        </div>

        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-bmb-gold/30 bg-bmb-gold/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-bmb-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-bmb-gold">
            Live Music Every Weekend
          </span>
        </div>

        <h1 className="animate-fade-up animate-fade-up-delay-1 font-display text-5xl sm:text-6xl md:text-8xl leading-[0.95] mb-6">
          Craft Beer.
          <br />
          <span className="text-gradient-gold">Live Music.</span>
          <br />
          Good Times.
        </h1>

        <p className="animate-fade-up animate-fade-up-delay-2 text-lg md:text-xl text-bmb-muted max-w-2xl mx-auto mb-10">
          Temecula&apos;s favorite brewery — 30+ beers on tap, wood-fired pizza,
          and a vibe you won&apos;t forget. Open 7 days a week.
        </p>

        <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#taplist"
            className="px-8 py-4 bg-bmb-gold text-bmb-black text-sm uppercase tracking-widest font-semibold rounded hover:bg-bmb-amber transition-colors"
          >
            View What&apos;s On Tap
          </a>
          <a
            href="#events"
            className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-widest font-semibold rounded hover:border-bmb-gold hover:text-bmb-gold transition-colors"
          >
            Upcoming Events
          </a>
        </div>

        {/* Hours pill */}
        <div className="mt-16 animate-fade-up animate-fade-up-delay-3 inline-flex items-center gap-6 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-bmb-muted">
          <span>
            <span className="text-white font-medium">Mon – Sat</span> 11am –
            9pm
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span>
            <span className="text-white font-medium">Sunday</span> 11am – 8pm
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-bmb-gold/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
