type Variant = "banner" | "mixed";

export default function AmorphBackdrop({
  variant = "banner",
  invert = false,
  className = "",
}: {
  variant?: Variant;
  invert?: boolean;
  className?: string;
}) {
  const ink = "#2a2018";
  const fill = ink;
  const base = `absolute inset-0 w-full h-full pointer-events-none ${className}`;

  if (variant === "mixed") {
    return (
      <svg
        viewBox="0 0 600 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
        className={base}
      >
        <path
          d="M 30 280 Q 0 400 90 460 Q 200 520 280 460 Q 340 410 280 340 Q 220 270 130 260 Q 60 255 30 280 Z"
          fill={fill}
          opacity={invert ? 0.12 : 0.7}
        />
        <path d="M 460 60 L 560 80 L 490 170 Z" fill={ink} opacity="0.9" />
        <circle cx="180" cy="80" r="40" fill="none" stroke={ink} strokeWidth="3" />
        <path
          d="M 350 480 Q 420 460 480 510"
          stroke={fill}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <rect
          x="500"
          y="280"
          width="40"
          height="40"
          fill={ink}
          transform="rotate(20 520 300)"
        />
        <circle cx="60" cy="140" r="8" fill={ink} />
        <circle cx="540" cy="450" r="12" fill={fill} />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className={base}
    >
      <path
        d="M -50 480 Q 100 380 280 460 Q 460 540 580 460 Q 700 380 620 280 Q 520 180 380 220 Q 220 270 100 240 Q -20 220 -50 480 Z"
        fill={ink}
        opacity={invert ? 0.08 : 0.18}
      />
      <circle
        cx="1380"
        cy="180"
        r="140"
        fill="none"
        stroke={ink}
        strokeWidth="3"
        opacity={invert ? 0.5 : 0.3}
      />
      <path d="M 1480 540 L 1580 580 L 1500 660 Z" fill={ink} opacity="0.85" />
      <circle cx="1200" cy="640" r="20" fill={ink} />
      <path
        d="M 800 80 Q 900 60 980 110"
        stroke={ink}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />
      <rect
        x="1050"
        y="280"
        width="50"
        height="50"
        fill={ink}
        opacity="0.9"
        transform="rotate(15 1075 305)"
      />
      <circle cx="700" cy="540" r="10" fill={ink} />
    </svg>
  );
}
