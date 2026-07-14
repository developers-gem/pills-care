import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">

        <div className="footer-grid">

          {/* Brand */}

          <div className="footer-brand-col">

            <Link to="/" className="footer-brand">

              <svg
                className="footer-logo"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="40" height="40" rx="11" fill="#E39A3B" />
                <rect x="10" y="17" width="20" height="12" rx="6" fill="#1F4B43" />
                <rect x="10" y="17" width="10" height="12" rx="6" fill="#6B5B95" />
              </svg>

              <span>Pillscare</span>

            </Link>

            <p className="para">
              Medication reminders for seniors and the people who care
              for them. A product of Badexy Technologies LLC.
            </p>

          </div>

          {/* Product */}

          <div>

            <h4>Product</h4>

            <ul>

              <li><a href="#features">Features</a></li>

              <li><a href="#how-it-works">How it works</a></li>

              <li><a href="#download">Download the app</a></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h4>Company</h4>

            <ul>

              <li><Link to="/support">Support</Link></li>

              <li><Link to="/support#contact">Contact us</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4>Contact</h4>

            <ul className="footer-contact">

              <li>

                Info@badexytechnologies.com


              </li>

              <li>

                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}>
                  {SITE.phone}
                </a>

              </li>

              <li>



Badexy Technologies LLC
5726 Lake Cyrus Blvd
Birmingham, Alabama 35244
              </li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} {SITE.legalEntity}. All rights reserved.
          </p>

          <div>

            <Link to="/privacy-policy">Privacy Policy</Link>

            <span>•</span>

            <Link to="/terms">Terms & Conditions</Link>

            <span>•</span>

            <span>{SITE.domain}</span>

          </div>

        </div>

      </div>
    </footer>
  );
}