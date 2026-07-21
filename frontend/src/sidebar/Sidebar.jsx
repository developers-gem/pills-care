import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaPills,
  FaClock,
  FaHistory,
  FaChartLine,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaCapsules,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo */}

      <div className="sidebar-logo">
        <div className="logo-icon">
          <FaCapsules />
        </div>

        <div>
          <h2>PillsCare</h2>
          <span>Medication Tracker</span>
        </div>
      </div>

      {/* Menu */}

      <div className="sidebar-menu">
        <NavLink to="/admin/dashboard" end className="sidebar-link">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/dashboard/medications" className="sidebar-link">
          <FaPills />
          <span>Medications</span>
        </NavLink>

        <NavLink to="/admin/dashboard/schedule" className="sidebar-link">
          <FaClock />
          <span>Schedule</span>
        </NavLink>

        <NavLink to="/admin/dashboard/history" className="sidebar-link">
          <FaHistory />
          <span>History</span>
        </NavLink>

        <NavLink to="/admin/dashboard/reports" className="sidebar-link">
          <FaChartLine />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/admin/dashboard/profile" className="sidebar-link">
          <FaUserCircle />
          <span>Profile</span>
        </NavLink>

        <NavLink to="/admin/dashboard/settings" className="sidebar-link">
          <FaCog />
          <span>Settings</span>
        </NavLink>
      </div>

      {/* Bottom */}

      <div className="sidebar-bottom">
        <div className="sidebar-user">
          <img src="https://i.pravatar.cc/150?img=12" alt="profile" />

          <div>
            <h4>John Doe</h4>

            <p>Premium User</p>
          </div>
        </div>

        <button className="logout-btn">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
