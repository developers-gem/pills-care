import React from "react";

export default function FeatureCard({
  bg,
  stroke,
  title,
  text,
  icon,
}) {
  return (
    <article className="feature-card">
      <div
        className="feature-icon"
        style={{ background: bg }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </article>
  );
}