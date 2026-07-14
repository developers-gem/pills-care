import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <svg
            className="brand-mark"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="40" height="40" rx="11" fill="#1F4B43" />
            <rect x="10" y="17" width="20" height="12" rx="6" fill="#E39A3B" />
            <rect x="10" y="17" width="10" height="12" rx="6" fill="#6B5B95" />
          </svg>
          Pillscare
        </Link>

        {/* Desktop Navigation */}
        <nav className="main-nav" aria-label="Primary">
          <a href="/#features">Features</a>
          <a href="/#how-it-works">How it works</a>

          <Link to="/support">Support</Link>
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>

        {/* CTA Button */}
        <div className="nav-actions">
          <a href="/#download" className="btn btn-primary">
            Download the app
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1E2A20"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <a href="/#features" onClick={() => setOpen(false)}>
          Features
        </a>

        <a href="/#how-it-works" onClick={() => setOpen(false)}>
          How it works
        </a>

        <Link to="/support" onClick={() => setOpen(false)}>
          Support
        </Link>

        <Link to="/privacy-policy" onClick={() => setOpen(false)}>
          Privacy
        </Link>

        <Link to="/terms" onClick={() => setOpen(false)}>
          Terms
        </Link>

        <div className="nav-actions">
          <a
            href="/#download"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Download the app
          </a>
        </div>
      </div>
    </header>
  );
}