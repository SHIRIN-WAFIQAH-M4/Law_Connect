import React from "react";
import "../Styling/HomePage.css";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ create navigate instance

  return (
    <div className="hero-container">
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="logo">
          <img src="/images/logo.jpeg" alt="LawConnect Logo" />
          <span>Law Connect</span>
        </div>

        <nav className="nav-links">
          <a href="#">Features</a>
          <a href="#">Why</a>
          <a href="#">How</a>
        </nav>

        <div className="nav-buttons">
          {/* ✅ Navigates to Login Page */}
          <button className="sign-in" onClick={() => navigate("/login")}>
            Login
          </button>

          <button className="get-started">Get Started</button>
        </div>
      </header>

      {/* ===== HERO CONTENT ===== */}
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Your Legal Journey, <span>Simplified</span>
          </h1>
          <p>
            Connect with verified lawyers, manage your cases, and navigate the
            legal system with confidence. Professional legal help is now
            accessible, transparent, and organized.
          </p>

          <div className="button-group">
            <button className="primary-btn">Get Started Free →</button>
            <button className="secondary-btn">Browse Lawyers</button>
          </div>

          <div className="features">
            <div>✅ Verified Lawyers</div>
            <div>🔒 Secure Platform</div>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/homepage.jpg" alt="Lawyers meeting" />
        </div>
      </div>

      {/* ===== SECOND SECTION ===== */}
      <section className="second-section">
        <div className="legal-support-container">
          <h2>Everything you need for legal support</h2>
          <p>
            A comprehensive platform designed to simplify your legal journey
          </p>

          <div className="legal-cards">
            <div className="legal-card">
              <div className="icon">👥</div>
              <h3>Connect with Lawyers</h3>
              <p>
                Access a network of verified legal professionals specialized in
                various practice areas.
              </p>
            </div>

            <div className="legal-card">
              <div className="icon">📄</div>
              <h3>Legal Guidance</h3>
              <p>
                Get basic legal information and guidance to understand your
                rights and options.
              </p>
            </div>

            <div className="legal-card">
              <div className="icon">💬</div>
              <h3>Case Management</h3>
              <p>
                Track your cases, manage documents, and communicate with your
                lawyer in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THIRD SECTION ===== */}
      <section className="third-section">
        <h2>Why choose LawConnect?</h2>

        <div className="why-choose-container">
          <div className="why-card">
            <div className="icon">🛡</div>
            <h3>Verified Lawyers</h3>
            <p>All lawyers are verified and licensed professionals</p>
          </div>

          <div className="why-card">
            <div className="icon">⏱</div>
            <h3>Quick Response</h3>
            <p>Get connected with lawyers within 24 hours</p>
          </div>

          <div className="why-card">
            <div className="icon">⭐</div>
            <h3>Trusted Platform</h3>
            <p>Rated 4.8/5 by thousands of satisfied clients</p>
          </div>
        </div>
      </section>

      {/* ===== FOURTH SECTION ===== */}
      <section className="fourth-section">
        <h2>How LawConnect Works</h2>
        <p className="section-subtitle">
          Follow these simple steps to connect with the right lawyer and get the
          legal help you need.
        </p>

        <div className="steps-cards">
          <div className="step-card">
            <div className="step-icon">🔍</div>
            <h3>Find a Lawyer</h3>
            <p>
              Browse through our network of verified lawyers and select the one
              that matches your legal needs.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">💬</div>
            <h3>Connect & Discuss</h3>
            <p>
              Schedule a consultation, discuss your case details, and understand
              your available options.
            </p>
          </div>

          <div className="step-card">
            <div className="step-icon">⚖</div>
            <h3>Get Legal Support</h3>
            <p>
              Work with your lawyer through our secure platform to resolve your
              case efficiently and confidently.
            </p>
          </div>
        </div>

        <button className="journey-btn">Start Your Journey →</button>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-container">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.jpeg" alt="LawConnect Logo" />
              <h3>LawConnect</h3>
            </div>
            <p>Legal help made simple and accessible for everyone.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Resources</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>📧 lawconnect@gmail.com</li>
              <li>📞 1234567890</li>
              <li>📍 Vizag, India</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 LawConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection;