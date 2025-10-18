import React from "react";
import "../Styling/LoginPage.css"; // ✅ Create & link this CSS file

const LoginPage = () => {
  return (
    <div className="container">
      {/* ===== Left Section: Login Form ===== */}
      <div className="left-section">
        <form className="login-form">
          <h2>Login</h2>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>

          <p className="signup-text">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>

      {/* ===== Right Section: Logo + Name ===== */}
      <div className="right-section">
        <div className="logo-section">
          <img
            src="/images/logo.jpg"
            alt="Law Connect Logo"
            className="logo"
          />
          <h1>Law Connect</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;