import React, { useState } from "react";
import { SITE } from "../data/site";

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    setSending(true);
    setStatus(null);

    const form = e.target;

    const payload = Object.fromEntries(
      new FormData(form).entries()
    );

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      form.reset();

      setStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message:
          "Unable to send your message right now. Please email us directly.",
      });
    }

    setSending(false);
  }

  return (
    <section className="contact-section">

      <div className="container contact-grid">

        {/* LEFT */}

        <div className="contact-left">

          <span className="eyebrow">
            Contact us
          </span>

          <h2>Talk to our team</h2>

          <p>
            Most questions are answered within
            1–2 business days.
          </p>

          <div className="contact-card">

            <div className="contact-icon">

              📧

            </div>

            <div>

              <h4>Email</h4>
<p>
    Info@badexytechnologies.com


</p>
              <a href={`mailto:${SITE.supportEmail}`}>
                {SITE.supportEmail}
              </a>

            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">

              📞

            </div>

            <div>

              <h4>Phone</h4>

              <a href={`tel:${SITE.phone}`}>
                {SITE.phone}
              </a>

            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">

              📍 

            </div>

            <div>

              <h4>Address</h4>

              <p>
Badexy Technologies LLC
5726 Lake Cyrus Blvd
Birmingham, Alabama 35244
               
              

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-form-card">

          <h3>Send us a message</h3>

          {status && (

            <div className={`form-alert ${status.type}`}>

              {status.message}

            </div>

          )}

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                name="name"
                required
              />

            </div>

            <div className="form-group">

              <label>Email</label>

              <input
                type="email"
                name="email"
                required
              />

            </div>

            <div className="form-group">

              <label>Message</label>

              <textarea
                rows="6"
                name="message"
                required
              />

            </div>

            <button
              className="btn btn-primary btn-block"
              disabled={sending}
            >

              {sending
                ? "Sending..."
                : "Send Message"}

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}