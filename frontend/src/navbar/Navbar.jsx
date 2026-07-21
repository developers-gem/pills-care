import React from "react";
import "./Navbar.css";

import { FaSearch, FaBell, FaSun, FaBars } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="navbar">
      {/* Left */}

      <div className="navbar-left">
        <button className="menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>

        <div className="search-box">
          <FaSearch className="search-icon" />

          <input type="text" placeholder="Search medication..." />
        </div>
      </div>

      {/* Right */}

      <div className="navbar-right">
        <button className="icon-btn">
          <FaSun />
        </button>

        <button className="icon-btn notification-btn">
          <FaBell />

          <span className="notification-count">3</span>
        </button>

        <div className="profile-box">
          <img src="https://i.pravatar.cc/150?img=12" alt="User" />

          <div>
            <h4>John Doe</h4>

            <span>Patient</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
