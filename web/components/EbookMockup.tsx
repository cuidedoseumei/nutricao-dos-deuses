import { site } from "@/content/site";

/**
 * Mockup do e-book em SVG puro (sem imagem externa) — leve, nítido e responsivo.
 * Serve de placeholder até termos a capa final do design.
 */
export default function EbookMockup({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 420"
      role="img"
      aria-label={`Capa do e-book ${site.brand}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cover" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1c4a3c" />
          <stop offset="1" stopColor="#14342B" />
        </linearGradient>
      </defs>
      {/* sombra */}
      <rect x="34" y="26" width="256" height="372" rx="10" fill="#000" opacity="0.18" />
      {/* capa */}
      <rect x="26" y="18" width="256" height="372" rx="10" fill="url(#cover)" />
      {/* lombada */}
      <rect x="26" y="18" width="14" height="372" rx="7" fill="#0e241d" opacity="0.6" />
      {/* selo dourado (círculo/mandala simplificada) */}
      <circle cx="154" cy="150" r="52" fill="none" stroke="#E0A83B" strokeWidth="2" />
      <circle cx="154" cy="150" r="40" fill="none" stroke="#E0A83B" strokeWidth="1" opacity="0.7" />
      {[...Array(12)].map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        return (
          <circle
            key={i}
            cx={154 + Math.cos(a) * 46}
            cy={150 + Math.sin(a) * 46}
            r="2.2"
            fill="#E0A83B"
          />
        );
      })}
      {/* folha central */}
      <path
        d="M154 128 C 140 145, 140 162, 154 176 C 168 162, 168 145, 154 128 Z"
        fill="#3FA34D"
      />
      <line x1="154" y1="134" x2="154" y2="170" stroke="#14342B" strokeWidth="1.5" />
      {/* título */}
      <text
        x="154"
        y="250"
        textAnchor="middle"
        fill="#F5F1E8"
        fontFamily="Georgia, serif"
        fontSize="26"
        fontWeight="700"
      >
        Alimentação
      </text>
      <text
        x="154"
        y="282"
        textAnchor="middle"
        fill="#E0A83B"
        fontFamily="Georgia, serif"
        fontSize="26"
        fontWeight="700"
      >
        dos Deuses
      </text>
      {/* subtítulo */}
      <text
        x="154"
        y="316"
        textAnchor="middle"
        fill="#cfe3d3"
        fontFamily="system-ui, sans-serif"
        fontSize="11"
        letterSpacing="1.5"
      >
        NUTRIÇÃO VEGANA • YOGA • CIÊNCIA
      </text>
      <text
        x="154"
        y="360"
        textAnchor="middle"
        fill="#9fb8a5"
        fontFamily="system-ui, sans-serif"
        fontSize="10"
      >
        Cuide do seu Mei
      </text>
    </svg>
  );
}
