import React, { useState } from "react";
import "../PagesStyle/registerStyle.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "male",
    role: "user",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputForm = (e) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userDetails.name.trim()) {
      alert("Name is required.");
      return;
    }

    if (!userDetails.email.trim()) {
      alert("Email is required.");
      return;
    }

    if (userDetails.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (userDetails.password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!userDetails.dob) {
      alert("Please select your Date of Birth.");
      return;
    }

    console.log(userDetails);

    // axios.post("/api-auth/signup", userDetails)
    let res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    const data = await res.json();
    console.log("hello");

    if (data.success) {
      alert("You are registered Successfully!");
    } else {
      alert("user already registered!");
    }

    setUserDetails({
      name: "",
      email: "",
      password: "",
      dob: "",
      gender: "male",
      role: "user",
    });

    setConfirmPassword("");
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>

        <p className="register-subtitle">
          Register to start managing your medications.
        </p>

        <form className="register-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="register-input">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={userDetails.name}
              onChange={handleInputForm}
              required
            />
          </div>

          {/* Email */}
          <div className="register-input">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={userDetails.email}
              onChange={handleInputForm}
              required
            />
          </div>

          {/* Password */}
          <div className="register-input">
            <label>Password</label>

            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={userDetails.password}
                onChange={handleInputForm}
                required
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="register-input">
            <label>Confirm Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {confirmPassword && (
              <p
                className={
                  userDetails.password === confirmPassword
                    ? "password-success"
                    : "password-error"
                }
              >
                {userDetails.password === confirmPassword
                  ? "✓ Passwords match"
                  : "✗ Passwords do not match"}
              </p>
            )}
          </div>

          {/* DOB & Gender */}
          <div className="register-row">
            <div className="register-input">
              <label>Date of Birth</label>

              <input
                type="date"
                name="dob"
                value={userDetails.dob}
                onChange={handleInputForm}
                required
              />
            </div>

            <div className="register-input">
              <label>Gender</label>

              <select
                name="gender"
                value={userDetails.gender}
                onChange={handleInputForm}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Role */}
          <div className="register-input">
            <label>Role</label>

            <select
              name="role"
              value={userDetails.role}
              onChange={handleInputForm}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="register-btn" type="submit">
            Register
          </button>
        </form>
        <div className="register-footer">
          Already have an account?
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
