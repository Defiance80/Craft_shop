"use client";
import { useState } from "react";

const links = [
  { label: "Events", href: "#events" },
  { label: "On Tap", href: "#taplist" },
  { label: "Menu", href: "#menu" },
  { label: "Event Space", href: "#space" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bmb-black/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-bmb-gold flex items-center justify-center text-bmb-black font-display font-bold text-lg group-hover:scale-110 transition-transform">
            B
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-lg leading-tight tracking-wide">
              Black Market
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-bmb-gold">
              Brewing Co.
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-widest text-bmb-muted hover:text-bmb-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#space"
          className="hidden md:inline-flex px-5 py-2.5 bg-bmb-gold text-bmb-black text-xs uppercase tracking-widest font-semibold rounded hover:bg-bmb-amber transition-colors"
        >
          Book an Event
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bmb-dark border-t border-white/5 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm uppercase tracking-widest text-bmb-muted hover:text-bmb-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#space"
            onClick={() => setOpen(false)}
            className="inline-flex mt-2 px-5 py-2.5 bg-bmb-gold text-bmb-black text-xs uppercase tracking-widest font-semibold rounded"
          >
            Book an Event
          </a>
        </div>
      )}
    </nav>
  );
}
