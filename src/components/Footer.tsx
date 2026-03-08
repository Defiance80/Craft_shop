import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-bmb-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo size={56} />
              <div>
                <p className="font-display text-lg leading-tight">Black Market</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-bmb-gold">Brewing Co.</p>
              </div>
            </div>
            <p className="text-bmb-muted text-sm leading-relaxed max-w-xs">
              Independently owned craft brewery in the heart of Temecula.
              Brewing bold, drinking local since day one.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-bmb-gold mb-4">
              Visit Us
            </h4>
            <address className="not-italic text-sm text-bmb-muted space-y-2">
              <p>41740 Enterprise Cir. N, #109</p>
              <p>Temecula, CA 92590</p>
              <p className="pt-2">
                <a
                  href="tel:9512965039"
                  className="text-white hover:text-bmb-gold transition-colors"
                >
                  951.296.5039
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@blackmarketbrew.com"
                  className="text-white hover:text-bmb-gold transition-colors"
                >
                  info@blackmarketbrew.com
                </a>
              </p>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-bmb-gold mb-4">
              Hours
            </h4>
            <div className="text-sm text-bmb-muted space-y-2">
              <div className="flex justify-between max-w-[200px]">
                <span>Mon – Sat</span>
                <span className="text-white">11am – 9pm</span>
              </div>
              <div className="flex justify-between max-w-[200px]">
                <span>Sunday</span>
                <span className="text-white">11am – 8pm</span>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/blackmarketbrew/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-bmb-muted hover:bg-bmb-gold hover:text-bmb-black transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/blackmarketbrew/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-bmb-muted hover:bg-bmb-gold hover:text-bmb-black transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-bmb-muted">
          <p>© {new Date().getFullYear()} Black Market Brewing Company, Temecula, CA. All rights reserved.</p>
          <p>
            Redesign concept by{" "}
            <a
              href="https://www.shopbluewolf.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bmb-gold hover:text-bmb-amber transition-colors"
            >
              Blue Wolf Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
