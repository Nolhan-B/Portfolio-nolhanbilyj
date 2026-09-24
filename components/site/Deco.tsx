// Formes géométriques façon Memphis, affichées uniquement avec les palettes rétro (classe .deco).

type ShapeProps = { className?: string; color: string; "data-speed"?: string };

export function Squiggle({ className, color, ...rest }: ShapeProps) {
  return (
    <svg viewBox="0 0 200 60" className={className} fill="none" aria-hidden {...rest}>
      <path
        d="M5 30 Q 25 5 45 30 T 85 30 T 125 30 T 165 30 T 195 30"
        stroke={`hsl(var(${color}))`}
        strokeWidth="12"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Circle({ className, color, ...rest }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden {...rest}>
      <circle cx="50" cy="50" r="44" fill={`hsl(var(${color}))`} stroke="hsl(var(--ink))" strokeWidth="5" />
    </svg>
  );
}

export function Triangle({ className, color, ...rest }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden {...rest}>
      <polygon points="50,6 96,92 4,92" fill={`hsl(var(${color}))`} stroke="hsl(var(--ink))" strokeWidth="5" strokeLinejoin="round" />
    </svg>
  );
}

export function Zigzag({ className, color, ...rest }: ShapeProps) {
  return (
    <svg viewBox="0 0 160 50" className={className} fill="none" aria-hidden {...rest}>
      <polyline
        points="5,40 30,10 55,40 80,10 105,40 130,10 155,40"
        stroke={`hsl(var(${color}))`}
        strokeWidth="10"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Dots({ className, color, ...rest }: ShapeProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden {...rest}>
      {Array.from({ length: 25 }, (_, i) => (
        <circle key={i} cx={10 + (i % 5) * 20} cy={10 + Math.floor(i / 5) * 20} r="4.5" fill={`hsl(var(${color}))`} />
      ))}
    </svg>
  );
}
