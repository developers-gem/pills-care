// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logout from "./Logout";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const token = localStorage.getItem("token");
//   console.log(token);
//   const closeMenu = () => setOpen(false);

//   return (
//     <header className="site-header">
//       <div className="container">
//         {/* Logo */}
//         <Link to="/" className="brand" onClick={closeMenu}>
//           <svg
//             className="brand-mark"
//             viewBox="0 0 40 40"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <rect width="40" height="40" rx="11" fill="#1F4B43" />
//             <rect x="10" y="17" width="20" height="12" rx="6" fill="#E39A3B" />
//             <rect x="10" y="17" width="10" height="12" rx="6" fill="#6B5B95" />
//           </svg>

//           <span>PillsCare</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="main-nav">
//           <a href="/#features">Features</a>

//           <a href="/#how-it-works">How It Works</a>

//           <Link to="/support">Support</Link>

//           <Link to="/privacy-policy">Privacy</Link>

//           <Link to="/terms">Terms</Link>
//         </nav>

//         {/* Desktop Buttons */}
//         <div className="nav-actions">
//           {!token ? (
//             <>
//               <Link to="/login" className="btn btn-outline-small">
//                 Login
//               </Link>

//               <Link to="/register" className="btn btn-secondary">
//                 Register
//               </Link>
//             </>
//           ) : (
//             <Logout />
//           )}
//           <a href="/#download" className="btn btn-primary">
//             Download App
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="nav-toggle"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle Menu"
//         >
//           <svg
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="#1F4B43"
//             strokeWidth="2"
//             strokeLinecap="round"
//           >
//             <line x1="3" y1="6" x2="21" y2="6" />
//             <line x1="3" y1="12" x2="21" y2="12" />
//             <line x1="3" y1="18" x2="21" y2="18" />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <div className={`mobile-nav ${open ? "open" : ""}`}>
//         <a href="/#features" onClick={closeMenu}>
//           Features
//         </a>

//         <a href="/#how-it-works" onClick={closeMenu}>
//           How It Works
//         </a>

//         <Link to="/support" onClick={closeMenu}>
//           Support
//         </Link>

//         <Link to="/privacy-policy" onClick={closeMenu}>
//           Privacy
//         </Link>

//         <Link to="/terms" onClick={closeMenu}>
//           Terms
//         </Link>

//         <Link to="/login" className="btn btn-outline-small" onClick={closeMenu}>
//           Login
//         </Link>

//         <Link to="/register" className="btn btn-secondary" onClick={closeMenu}>
//           Register
//         </Link>

//         {/* <Logout /> */}

//         <a href="/#download" className="btn btn-primary" onClick={closeMenu}>
//           Download App
//         </a>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
  const [open, setOpen] = useState(false);

  // Make token reactive
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const updateAuth = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("authChanged", updateAuth);

    return () => {
      window.removeEventListener("authChanged", updateAuth);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="brand" onClick={closeMenu}>
          PillsCare
        </Link>

        {/* Desktop Navigation */}
        <nav className="main-nav">
          <a href="/#features">Features</a>

          <a href="/#how-it-works">How It Works</a>

          <Link to="/support">Support</Link>

          <Link to="/privacy-policy">Privacy</Link>

          <Link to="/terms">Terms</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="nav-actions">
          {!token ? (
            <>
              <Link to="/login" className="btn btn-outline-small">
                Login
              </Link>

              <Link to="/register" className="btn btn-secondary">
                Register
              </Link>
            </>
          ) : (
            <Logout />
          )}

          <a href="/#download" className="btn btn-primary">
            Download App
          </a>
        </div>

        {/* Mobile Button */}
        <button className="nav-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <a href="/#features" onClick={closeMenu}>
          Features
        </a>

        <a href="/#how-it-works" onClick={closeMenu}>
          How It Works
        </a>

        <Link to="/support" onClick={closeMenu}>
          Support
        </Link>

        <Link to="/privacy-policy" onClick={closeMenu}>
          Privacy
        </Link>

        <Link to="/terms" onClick={closeMenu}>
          Terms
        </Link>

        {!token ? (
          <>
            <Link
              to="/login"
              className="btn btn-outline-small"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-secondary"
              onClick={closeMenu}
            >
              Register
            </Link>
          </>
        ) : (
          <Logout />
        )}

        <a href="/#download" className="btn btn-primary" onClick={closeMenu}>
          Download App
        </a>
      </div>
    </header>
  );
};

export default Header;
