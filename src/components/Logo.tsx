export default function Logo({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer ring */}
      <circle cx="60" cy="60" r="58" stroke="#C5A55A" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="52" stroke="#C5A55A" strokeWidth="0.5" opacity="0.4" />

      {/* Top banner arc text background */}
      <path
        d="M20 60 A40 40 0 0 1 100 60"
        fill="none"
        stroke="#C5A55A"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Hop/wheat decorative elements — left */}
      <g opacity="0.7" transform="translate(18, 45) rotate(-15)">
        <ellipse cx="4" cy="0" rx="3.5" ry="6" fill="#C5A55A" opacity="0.6" />
        <ellipse cx="4" cy="-11" rx="3" ry="5" fill="#C5A55A" opacity="0.5" />
        <ellipse cx="4" cy="-20" rx="2.5" ry="4" fill="#C5A55A" opacity="0.4" />
        <line x1="4" y1="6" x2="4" y2="-24" stroke="#C5A55A" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* Hop/wheat decorative elements — right */}
      <g opacity="0.7" transform="translate(98, 45) rotate(15) scale(-1,1)">
        <ellipse cx="4" cy="0" rx="3.5" ry="6" fill="#C5A55A" opacity="0.6" />
        <ellipse cx="4" cy="-11" rx="3" ry="5" fill="#C5A55A" opacity="0.5" />
        <ellipse cx="4" cy="-20" rx="2.5" ry="4" fill="#C5A55A" opacity="0.4" />
        <line x1="4" y1="6" x2="4" y2="-24" stroke="#C5A55A" strokeWidth="0.8" opacity="0.5" />
      </g>

      {/* Center star / compass mark */}
      <polygon
        points="60,18 62,24 68,24 63,28 65,34 60,30 55,34 57,28 52,24 58,24"
        fill="#C5A55A"
        opacity="0.8"
      />

      {/* Main "BMB" lettermark */}
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fontFamily="Georgia, 'Playfair Display', serif"
        fontSize="36"
        fontWeight="bold"
        fill="#C5A55A"
        letterSpacing="3"
      >
        BMB
      </text>

      {/* "BLACK MARKET" arc text — top */}
      <defs>
        <path id="topArc" d="M25,68 A42,42 0 0,1 95,68" />
        <path id="bottomArc" d="M30,72 A38,38 0 0,0 90,72" />
      </defs>
      <text fill="#C5A55A" fontSize="7.5" fontFamily="Georgia, serif" letterSpacing="3.5" fontWeight="600">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          BLACK MARKET
        </textPath>
      </text>

      {/* "BREWING CO." arc text — bottom */}
      <text fill="#C5A55A" fontSize="7" fontFamily="Georgia, serif" letterSpacing="3" fontWeight="600">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          BREWING CO.
        </textPath>
      </text>

      {/* Divider dots */}
      <circle cx="32" cy="66" r="1.5" fill="#C5A55A" opacity="0.6" />
      <circle cx="88" cy="66" r="1.5" fill="#C5A55A" opacity="0.6" />

      {/* Bottom decorative line */}
      <line x1="40" y1="92" x2="80" y2="92" stroke="#C5A55A" strokeWidth="0.8" opacity="0.4" />
      <text x="60" y="100" textAnchor="middle" fill="#C5A55A" fontSize="5.5" fontFamily="Georgia, serif" letterSpacing="4" opacity="0.6">
        TEMECULA
      </text>
    </svg>
  );
}
