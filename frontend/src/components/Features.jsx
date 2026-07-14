import React from "react";
import FeatureCard from "./FeatureCard";

const FEATURES = [
  {
    bg: "#F6E4C7",
    stroke: "#8A5A17",
    title: "Timely reminders",
    text: "Gentle alerts for each dose, timed to morning, midday, evening, and night — not just a generic buzz.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    bg: "#E4DEF0",
    stroke: "#6B5B95",
    title: "Caregiver visibility",
    text: "A family member or caregiver can link their account to see whether today's doses were taken—with the senior's consent.",
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </>
    ),
  },
  {
    bg: "#DCEAE3",
    stroke: "#1F4B43",
    title: "A simple daily schedule",
    text: "Every medication, dosage, and time in one clear list—large text, plain layout, nothing to dig through.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  {
    bg: "#F6E4C7",
    stroke: "#8A5A17",
    title: "A record of what was taken",
    text: "Doses marked taken, skipped, or missed build a simple history useful to review before a doctor's visit.",
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
  {
    bg: "#E4DEF0",
    stroke: "#6B5B95",
    title: "Built for phones people already use",
    text: "Large buttons, high contrast, and a layout that doesn't change without warning.",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </>
    ),
  },
  {
    bg: "#DCEAE3",
    stroke: "#1F4B43",
    title: "Private by default",
    text: "Medication data is used to run the app and nothing else. It is never sold or shared with advertisers.",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What Pillscare does</span>

          <h2>Less guessing, fewer missed doses</h2>

          <p>
            Pillscare keeps the daily routine visible—for the person taking the
            medication, and for whoever's helping them stay on track.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}