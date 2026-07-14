import React from "react";
import TimelineStep from "./TimelineStep";

const STEPS = [
  {
    title: "Download & create an account",
    text: "Get Pillscare from the App Store or Google Play, then set up your profile as the person taking medication, or as a caregiver.",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0116 0v1" />
      </>
    ),
  },
  {
    title: "Add medications",
    text: "Enter each medication, its dose, and what time of day it's taken.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  {
    title: "Get reminded",
    text: "Pillscare sends a reminder at each scheduled time until the dose is marked taken.",
    icon: (
      <>
        <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </>
    ),
  },
  {
    title: "Stay on track together",
    text: "Linked caregivers see the day's progress, so no one has to guess or call to check in.",
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>

          <h2>From download to the first reminder</h2>
        </div>

        <div className="timeline">
          {STEPS.map((step) => (
            <TimelineStep key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}