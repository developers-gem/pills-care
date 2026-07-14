import React from "react";

const TIMES = ["7 AM", "12 PM", "6 PM", "9 PM"];

export default function DayArc({
  taken = 2,
  compact = false,
}) {
  const dots = compact
    ? [
        { cx: 20, cy: 100 },
        { cx: 113, cy: 52 },
        { cx: 207, cy: 52 },
        { cx: 300, cy: 100 },
      ]
    : [
        { cx: 20, cy: 150 },
        { cx: 113, cy: 88 },
        { cx: 207, cy: 88 },
        { cx: 300, cy: 150 },
      ];

  const path = compact
    ? "M20 100 C20 40 300 40 300 100"
    : "M20 150 C20 70 300 70 300 150";

  const labelY = compact
    ? []
    : [172, 72, 72, 172];

  return (
    <svg
      className="dayarc-svg"
      viewBox={`0 0 320 ${compact ? 120 : 180}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Daily medication schedule"
    >
      {/* Arc */}
      <path
        d={path}
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Dose Points */}
      {dots.map((dot, index) => (
        <circle
          key={index}
          cx={dot.cx}
          cy={dot.cy}
          r={compact ? 8 : 9}
          fill={
            index < taken
              ? "var(--color-dawn)"
              : "var(--color-dusk)"
          }
        />
      ))}

      {/* Time Labels */}
      {!compact &&
        dots.map((dot, index) => (
          <text
            key={TIMES[index]}
            x={dot.cx}
            y={labelY[index]}
            textAnchor="middle"
            fontSize="11"
            fontFamily="Inter, sans-serif"
            fill="var(--color-ink-soft)"
          >
            {TIMES[index]}
          </text>
        ))}
    </svg>
  );
}