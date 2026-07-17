import React from "react";
import { useNavigate } from "react-router-dom";
import "../PagesStyle/logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Notify Header
      window.dispatchEvent(new Event("authChanged"));

      alert("Logged out successfully!");

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="logout-container">
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
