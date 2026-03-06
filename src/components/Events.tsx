"use client";

const events = [
  {
    day: "FRI",
    date: "Mar 7",
    band: "The Hideout Sessions",
    genre: "Rock & Blues",
    time: "7:00 PM",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
  },
  {
    day: "SAT",
    date: "Mar 8",
    band: "Neon Avenue",
    genre: "Indie / Alternative",
    time: "7:30 PM",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80",
  },
  {
    day: "FRI",
    date: "Mar 14",
    band: "Whiskey Alibi",
    genre: "Country Rock",
    time: "7:00 PM",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80",
  },
  {
    day: "SAT",
    date: "Mar 15",
    band: "Brass & Bone",
    genre: "Jazz Fusion",
    time: "7:30 PM",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&q=80",
  },
  {
    day: "FRI",
    date: "Mar 21",
    band: "Desert Volt",
    genre: "Psychedelic Rock",
    time: "7:00 PM",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80",
  },
  {
    day: "SAT",
    date: "Mar 22",
    band: "The Usual Suspects",
    genre: "Classic Rock Covers",
    time: "7:30 PM",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&q=80",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-bmb-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-bmb-gold mb-2">
              What&apos;s Happening
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Live Music &amp; Events
            </h2>
          </div>
          <p className="text-bmb-muted max-w-md text-sm leading-relaxed">
            Every Friday &amp; Saturday night, we bring local and touring artists
            to our stage. Grab a pint, order a pizza, and enjoy the show.
          </p>
        </div>

        {/* Event cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto no-scrollbar md:grid md:grid-cols-3 pb-4">
          {events.map((e, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-[300px] md:w-auto bg-bmb-card rounded-xl overflow-hidden border border-white/5 hover:border-bmb-gold/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${e.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bmb-card to-transparent" />
                {/* Date badge */}
                <div className="absolute top-4 left-4 bg-bmb-black/80 backdrop-blur-sm rounded-lg px-3 py-2 text-center border border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-bmb-gold font-semibold">
                    {e.day}
                  </p>
                  <p className="text-sm font-display">{e.date}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display text-xl mb-1 group-hover:text-bmb-gold transition-colors">
                  {e.band}
                </h3>
                <p className="text-bmb-muted text-sm mb-3">{e.genre}</p>
                <div className="flex items-center gap-2 text-xs text-bmb-muted">
                  <svg
                    className="w-3.5 h-3.5 text-bmb-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {e.time} &middot; Free Entry
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
