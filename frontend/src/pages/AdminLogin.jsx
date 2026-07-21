import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../PagesStyle/adminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [adminDetails, setAdminDetails] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    setAdminDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!adminDetails.email || !adminDetails.password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminDetails),
      });

      const data = await res.json();
      console.log("data inside the admin login ", data);

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        window.dispatchEvent(new Event("authChanged"));

        alert("Admin Login Successful");

        navigate("/admin/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-icon">🛡️</div>

        <h2>Administrator Login</h2>

        <p>Login to access the PillsCare Admin Dashboard</p>

        <form onSubmit={handleSubmit}>
          <div className="admin-input-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter admin email"
              value={adminDetails.email}
              onChange={handleInput}
            />
          </div>

          <div className="admin-input-group">
            <label>Password</label>

            <div className="admin-password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={adminDetails.password}
                onChange={handleInput}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button className="admin-login-btn" type="submit">
            Login as Admin
          </button>
        </form>

        <div className="admin-footer">
          <Link to="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
