// import { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   FaHome,
//   FaPills,
//   FaClock,
//   FaHistory,
//   FaChartLine,
//   FaUserCircle,
//   FaCog,
//   FaSignOutAlt,
//   FaCapsules,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// import "./Sidebar.css";

// const Sidebar = () => {
//   const [token, setToken] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     setToken(localStorage.getItem("token"));
//   }, []);

//   const closeSidebar = () => setIsOpen(false);

//   const handleLogout = async () => {
//     try {
//       await fetch("http://localhost:5000/api/auth/logout", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       localStorage.removeItem("token");
//       localStorage.removeItem("user");

//       navigate("/admin-login");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}

//       <button className="menu-btn" onClick={() => setIsOpen(true)}>
//         <FaBars />
//       </button>

//       {/* Overlay */}

//       {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

//       <div className={`sidebar ${isOpen ? "show" : ""}`}>
//         {/* Close Button */}

//         <button className="close-btn" onClick={closeSidebar}>
//           <FaTimes />
//         </button>

//         <div className="sidebar-logo">
//           <div className="logo-icon">
//             <FaCapsules />
//           </div>

//           <div>
//             <h2>PillsCare</h2>
//             <span>Medication Tracker</span>
//           </div>
//         </div>

//         <div className="sidebar-menu">
//           <NavLink
//             to="/admin/dashboard"
//             end
//             className="sidebar-link"
//             onClick={closeSidebar}
//           >
//             <FaHome />
//             <span>Dashboard</span>
//           </NavLink>

//           <NavLink
//             to="/admin/dashboard/medications"
//             className="sidebar-link"
//             onClick={closeSidebar}
//           >
//             <FaPills />
//             <span>Medications</span>
//           </NavLink>

//           <NavLink
//             to="/admin/dashboard/users"
//             className="sidebar-link"
//             onClick={closeSidebar}
//           >
//             <FaClock />
//             <span>Users</span>
//           </NavLink>

//           <NavLink
//             to="/admin/dashboard/subscription"
//             className="sidebar-link"
//             onClick={closeSidebar}
//           >
//             <FaHistory />
//             <span>Subscription</span>
//           </NavLink>

//           <NavLink
//             to="/admin/dashboard/reports"
//             className="sidebar-link"
//             onClick={closeSidebar}
//           >
//             <FaChartLine />
//             <span>Reports</span>
//           </NavLink>

//           <NavLink
//             to="/admin/dashboard/profile"
//             className="sidebar-link"
//             onClick={closeSidebar}
//           >
//             <FaUserCircle />
//             <span>Profile</span>
//           </NavLink>

//           <NavLink
//             to="/admin/dashboard/settings"
//             className="sidebar-link"
//             onClick={closeSidebar}
//           >
//             <FaCog />
//             <span>Settings</span>
//           </NavLink>
//         </div>

//         <div className="sidebar-bottom">
//           <div className="sidebar-user">
//             <img src="https://i.pravatar.cc/150?img=12" alt="" />

//             <div>
//               <h4>John Doe</h4>
//               <p>Admin</p>
//             </div>
//           </div>

//           <button className="logout-btn" onClick={handleLogout}>
//             <FaSignOutAlt />
//             Logout
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [token] = useState(localStorage.getItem("token") || "");

  const navigate = useNavigate();

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      navigate("/admin-login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}

      {!isOpen && (
        <button className="menu-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      )}

      {/* Overlay */}

      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}

      <aside className={`sidebar ${isOpen ? "show" : ""}`}>
        {/* Close Button */}

        <button
          className="close-btn"
          onClick={closeSidebar}
          aria-label="Close Sidebar"
        >
          <FaTimes />
        </button>

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

        {/* Navigation */}

        <nav className="sidebar-menu">
          <NavLink
            to="/admin/dashboard"
            end
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/admin/dashboard/medications"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaPills />
            <span>Medications</span>
          </NavLink>

          <NavLink
            to="/admin/dashboard/users"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaClock />
            <span>Users</span>
          </NavLink>

          <NavLink
            to="/admin/dashboard/subscription"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaHistory />
            <span>Subscription</span>
          </NavLink>

          <NavLink
            to="/admin/dashboard/reports"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaChartLine />
            <span>Reports</span>
          </NavLink>

          <NavLink
            to="/admin/dashboard/profile"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaUserCircle />
            <span>Profile</span>
          </NavLink>

          <NavLink
            to="/admin/dashboard/settings"
            className="sidebar-link"
            onClick={closeSidebar}
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </nav>

        {/* Footer */}

        <div className="sidebar-bottom">
          {/* <div className="sidebar-user">
            <img src="https://i.pravatar.cc/150?img=12" alt="Admin" />

            <div>
              <h4>John Doe</h4>
              <p>Admin</p>
            </div>
          </div> */}

          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
