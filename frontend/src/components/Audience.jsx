import React from "react";
import AudienceCard from "./AudienceCard";

const AUDIENCE = [
  {
    theme: "dawn",
    title: "If you're managing your own medication",
    description:
      "Pillscare keeps today simple: what to take, how much, and when — without a cluttered app to fight with.",
    points: [
      "Large, high-contrast reminder screens",
      "One tap to mark a dose taken",
      "Choose whether a caregiver can see your schedule",
    ],
  },
  {
    theme: "dusk",
    title: "If you're caring for someone else",
    description:
      "Link your account, with their permission, to follow along on their medication days — without hovering.",
    points: [
      "See which doses were taken today",
      "Get notified about repeated missed doses",
      "Manage schedules together, or hand off fully",
    ],
  },
];

export default function Audience() {
  return (
    <section className="audience-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">
            Built for two people, one routine
          </span>

          <h2 className="">Made for seniors. Trusted by caregivers.</h2>
        </div>

        <div className="audience-grid">
          {AUDIENCE.map((item) => (
            <AudienceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}