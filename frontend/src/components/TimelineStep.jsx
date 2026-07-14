import React from "react";

export default function TimelineStep({
  title,
  text,
  icon,
}) {
  return (
    <article className="timeline-step">

      <div className="timeline-icon">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1F4B43"
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