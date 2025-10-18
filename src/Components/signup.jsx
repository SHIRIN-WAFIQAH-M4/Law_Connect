import React, { useState } from "react";
import "../Styling/SignUp.css";

const Signup = () => {
  const [activeRole, setActiveRole] = useState("lawyer");

  const showForm = (role) => {
    setActiveRole(role);
  };

  return (
    <div className="container">
      {/* Left Section: Form Area */}
      <div className="left-section">
        <div className="form-header">
          <h2>Sign Up</h2>
          <div className="role-selector">
            <button
              className={`role-btn ${activeRole === "lawyer" ? "active" : ""}`}
              onClick={() => showForm("lawyer")}
            >
              Lawyer
            </button>
            <button
              className={`role-btn ${activeRole === "client" ? "active" : ""}`}
              onClick={() => showForm("client")}
            >
              Client
            </button>
            <button
              className={`role-btn ${activeRole === "fresher" ? "active" : ""}`}
              onClick={() => showForm("fresher")}
            >
              Fresher
            </button>
          </div>
        </div>

        {/* LAWYER SIGNUP FORM */}
        {activeRole === "lawyer" && (
          <form className="signup-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email ID</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <label>Profile Photo (JPG)</label>
            <input type="file" accept=".jpg,.jpeg" required />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" required />

            <label>College Name</label>
            <input type="text" placeholder="Enter your college name" required />

            <label>Previous Cases Solved</label>
            <input type="number" placeholder="Number of cases solved" required />

            <label>Bar Council Registration Number</label>
            <input type="text" placeholder="Enter registration number" required />

            <label>Practicing Address</label>
            <textarea placeholder="Enter practicing address" required></textarea>

            <label>Languages Known (with fluency %)</label>
            <input type="text" placeholder="e.g., English 90%, Hindi 80%" required />

            <label>Available Consultation Modes</label>
            <select required>
              <option value="">Select</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
              <option value="both">Both</option>
            </select>

            <label>Certificate Upload (PDF)</label>
            <input type="file" accept=".pdf" required />

            <label>ID Proof Upload</label>
            <input type="file" accept=".pdf,.jpg,.jpeg" required />

            <label>Bar Council ID Upload</label>
            <input type="file" accept=".pdf,.jpg,.jpeg" required />

            <label>Consultation Fees (₹)</label>
            <input type="number" placeholder="Enter consultation fee" required />

            <label>Case Types Handled</label>
            <input type="text" placeholder="e.g., Criminal, Civil, Family" required />

            <label>Achievements (optional)</label>
            <textarea placeholder="Mention any achievements"></textarea>

            <button type="submit">Register</button>
            <p className="login-text">
              Already have an account? <a href="login.html">Login</a>
            </p>
          </form>
        )}

        {/* CLIENT SIGNUP FORM */}
        {activeRole === "client" && (
          <form className="signup-form">
            <label>Email ID / Phone Number</label>
            <input type="text" placeholder="Enter your email or phone number" required />

            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <label>Gender</label>
            <select required>
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <label>Date of Birth</label>
            <input type="date" required />

            <label>Address</label>
            <textarea placeholder="Enter your address" required></textarea>

            <label>ID Proof Upload</label>
            <input type="file" accept=".pdf,.jpg,.jpeg" required />

            <button type="submit">Register</button>
            <p className="login-text">
              Already have an account? <a href="login.html">Login</a>
            </p>
          </form>
        )}

        {/* FRESHER SIGNUP FORM */}
        {activeRole === "fresher" && (
          <form className="signup-form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />

            <label>Email ID</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Mobile Number</label>
            <input type="tel" placeholder="Enter your mobile number" required />

            <label>Profile Photo</label>
            <input type="file" accept=".jpg,.jpeg" required />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />

            <label>College Name</label>
            <input type="text" placeholder="Enter your college name" required />

            <label>Roll Number</label>
            <input type="text" placeholder="Enter your roll number" required />

            <label>Course Name</label>
            <input type="text" placeholder="e.g., LLB, BA LLB" required />

            <label>Year of Study</label>
            <input type="number" placeholder="e.g., 2" required />

            <label>Expected Graduation Year</label>
            <input type="number" placeholder="e.g., 2026" required />

            <label>Specializations / Areas of Interest</label>
            <input type="text" placeholder="e.g., Corporate Law, Criminal Law" required />

            <label>College ID Card Upload</label>
            <input type="file" accept=".jpg,.jpeg,.pdf" required />

            <label>Bonafide Certificate / Admission Proof Upload</label>
            <input type="file" accept=".jpg,.jpeg,.pdf" required />

            <label>Intended Role</label>
            <select required>
              <option value="">Select</option>
              <option>Legal Intern</option>
              <option>Legal Research</option>
              <option>Volunteer</option>
            </select>

            <label>Availability</label>
            <input type="text" placeholder="e.g., Part-time / Full-time" required />

            <button type="submit">Register</button>
            <p className="login-text">
              Already have an account? <a href="login.html">Login</a>
            </p>
          </form>
        )}
      </div>

      {/* Right Section: Logo */}
      <div className="right-section">
        <div className="logo-section">
          <img
            src="05a9a994-d7d4-4b0c-8412-f642ac200fc6.jpg"
            alt="Law Connect Logo"
            className="logo"
          />
          <h1>Law Connect</h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;