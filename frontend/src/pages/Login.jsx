import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../PagesStyle/loginStyle.css";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
    // rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    // const { name, value, type, checked } = e.target;
    // setLoginDetails((prev) => ({
    //   ...prev,
    //   [name]: type === "checkbox" ? checked : value,
    // }));

    setLoginDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginDetails.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!loginDetails.password.trim()) {
      alert("Please enter your password.");
      return;
    }

    console.log(loginDetails);

    // axios.post("/api/login", loginDetails)
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Tell Header to update
      window.dispatchEvent(new Event("authChanged"));

      alert("Login Successful");

      navigate("/");
    } else {
      alert(data.msg);
    }
    setLoginDetails({ email: "", password: "" });
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>

        <p className="login-subtitle">
          Login to continue managing your medications.
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-input">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginDetails.email}
              onChange={handleInput}
            />
          </div>

          <div className="login-input">
            <label>Password</label>

            <div className="login-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={loginDetails.password}
                onChange={handleInput}
              />

              <button
                type="button"
                className="login-show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="login-options">
            {/* <label className="remember">
              <input
                type="checkbox"
                name="rememberMe"
                checked={loginDetails.rememberMe}
                onChange={handleInput}
              />
              Remember Me
            </label> */}

            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <div className="login-footer">
          Don't have an account?
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
