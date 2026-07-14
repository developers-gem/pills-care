import React from "react";

export default function AudienceCard({
  theme,
  title,
  description,
  points,
}) {
  return (
    <article className={`audience-card ${theme}`}>
      <h3>{title}</h3>

      <p>{description}</p>

      <ul>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}