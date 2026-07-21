import React from "react";
import { Outlet } from "react-router-dom";
import "./DashboardLayout.css";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <Sidebar />
      </aside>

      <div className="dashboard-main">
        <Navbar />

        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
