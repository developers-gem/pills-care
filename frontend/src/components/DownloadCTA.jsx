import React from "react";
import { SITE } from "../data/site";

export default function DownloadCTA() {
  return (
    <section id="download" className="download-section">
      <div className="container">
        <div className="cta-band">

          <h2>Get Pillscare on your phone</h2>

          <p>
            Pillscare is a mobile app — creating an account and setting up
            your schedule happens right on your device.
          </p>

          <div className="store-badges">

            <a
              href={SITE.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
              />
            </a>

            <a
              href={SITE.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}