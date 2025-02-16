// src/components/Layout.tsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ContactForm from "./ContactForm";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scrolling to update the header style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to smoothly scroll down when clicking the "Scroll Down" button
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className={location.pathname === "/" ? "home-page" : ""}>
      <header id="header" className={scrolled ? "scrolled" : ""}>
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
              <li>
                <Link
                  className={`nav-button ${location.pathname === "/" ? "active" : ""}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-button ${location.pathname === "/services" ? "active" : ""}`}
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-button ${location.pathname === "/quality-assurance" ? "active" : ""}`}
                  to="/quality-assurance"
                >
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-button ${location.pathname === "/about-us" ? "active" : ""}`}
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-button ${location.pathname === "/our-responsibility" ? "active" : ""}`}
                  to="/our-responsibility"
                >
                  Our Responsibility
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Toggle Button */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
        </nav>

        {/* Scroll Down Button (Only on Home Page) */}
        {location.pathname === "/" && (
          <div className="down-container">
            <img
              className="down-image"
              onClick={scrollDown}
              src="/images/ScrollDown.png"
              alt="Scroll Down"
            />
          </div>
        )}
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
