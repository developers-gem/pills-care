import React from "react";
import DayArc from "./DayArc";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="eyebrow">
            Morning • Noon • Evening • Night
          </span>

          <h1>
            The right medication,
            <br />
            at the right moment —
            <br />
            every time.
          </h1>

          <p className="lede">
            Pillscare turns a daily medication routine into four simple
            check-ins. Built for seniors who want independence, and caregivers
            who want peace of mind.
          </p>

          <div className="hero-actions">
            <a href="#download" className="btn btn-primary">
              Download the app
            </a>

            <a href="#how-it-works" className="btn btn-outline">
              See how it works
            </a>
          </div>

          <p className="hero-note">
            Pillscare is a mobile app. Accounts are created inside the app.
          </p>
        </div>

        <div className="hero-illustration">
          <div className="dayarc-card">
            <DayArc taken={2} />

            <div className="dose-legend">
              <div className="dose-item">
                <span className="taken"></span>
                Lisinopril — taken
              </div>

              <div className="dose-item">
                <span className="taken"></span>
                Metformin — taken
              </div>

              <div className="dose-item">
                <span className="upcoming"></span>
                Atorvastatin — upcoming
              </div>

              <div className="dose-item">
                <span className="upcoming"></span>
                Vitamin D — upcoming
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}