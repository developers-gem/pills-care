import React, { useState } from "react";
import { SITE } from "../data/site";

const faqs = [
  {
    question: "How do I add a medication?",
    answer:
      'Open the Pillscare app, go to your schedule and tap "Add Medication". Enter the medication name, dosage and reminder times.',
  },
  {
    question: "How do I link a caregiver?",
    answer:
      'Open Settings > Caregivers and tap "Invite Caregiver". Send the invitation to their email address.',
  },
  {
    question: "I'm not receiving reminder notifications.",
    answer:
      "Please check that notifications are enabled for Pillscare in your phone settings and Low Power Mode isn't blocking reminders.",
  },
  {
    question: "Can I export my medication history?",
    answer:
      "Yes. From Settings choose Export Data to download your medication history.",
  },
  {
    question: "How do I delete my account?",
    answer: `Go to Settings > Delete Account or email ${SITE.privacyEmail}.`,
  },
  {
    question: "Does Pillscare provide medical advice?",
    answer:
      "No. Pillscare is only a medication reminder application. Always consult your doctor or pharmacist.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            Frequently Asked Questions
          </span>

          <h2>Everything you need to know</h2>

          <p>
            Find quick answers to the most common questions about
            Pillscare.
          </p>

        </div>

        <div className="faq-list">

          {faqs.map((item, index) => (

            <div
              className={`faq-card ${
                open === index ? "active" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
              >

                <span>{item.question}</span>

                <span className="faq-icon">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              <div
                className={`faq-answer ${
                  open === index ? "show" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}