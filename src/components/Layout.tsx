// src/components/Layout.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={location.pathname === "/" ? "home-page" : ""}>
      <header id="header">
        <nav className="navbar">
          <div className="nav-container">
            {/* Logo Links to Home */}
            <div className="homelink">
              <Link to="/">
                <img
                  className="logo-image"
                  src="/images/LogoRectangle.png"
                  alt="Fortis Global Systems"
                />
              </Link>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
              <li><Link className="nav-button" to="/">Home</Link></li>
              <li><Link className="nav-button" to="/services">Services</Link></li>
              <li><Link className="nav-button" to="/quality-assurance">Quality Assurance</Link></li>
              <li><Link className="nav-button" to="/about-us">About Us</Link></li>
              <li><Link className="nav-button" to="/our-responsibility">Our Responsibility</Link></li>
            </ul>

            {/* Mobile Menu Toggle Button */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">
        <div className="container" id="main-content">
          {children}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <ul className="footer-nav-links">
          <li><Link className="nav-button" to="/">Home</Link></li>
          <li><Link className="nav-button" to="/services">Services</Link></li>
          <li><Link className="nav-button" to="/quality-assurance">Quality Assurance</Link></li>
          <li><Link className="nav-button" to="/about-us">About Us</Link></li>
          <li><Link className="nav-button" to="/our-responsibility">Our Responsibility</Link></li>
        </ul>

        {/* Contact Form Component */}
        <ContactForm />
      </footer>
    </div>
  );
};

export default Layout;
