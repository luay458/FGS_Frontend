import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ContactForm from './ContactForm';
import { Sling as Hamburger } from 'hamburger-react'; // Importing a specific hamburger style
import '../styles/styles.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={location.pathname === '/' ? 'home-page' : ''}>
      <header id="header">
        <nav className="navbar">
            {/* Logo Links to Home */}
            <div className="homelink">
              <Link to="/" onClick={() => setOpen(false)}>
                <img
                  className="logo-image"
                  src="/images/LogoRectangle.png"
                  alt="Fortis Global Systems"
                />
              </Link>
            </div>
          <div className="nav-container">

            {/* Navigation Links */}
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
              <li>
                <Link className="nav-button" to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-button" to="/services" onClick={() => setOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-button" to="/quality-assurance" onClick={() => setOpen(false)}>
                  Quality Assurance
                </Link>
              </li>
              <li>
                <Link className="nav-button" to="/about-us" onClick={() => setOpen(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-button" to="/our-responsibility" onClick={() => setOpen(false)}>
                  Our Responsibility
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Toggle Button */}
            <div className="menu-toggle">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
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
          <li>
            <Link className="nav-button" to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-button" to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link className="nav-button" to="/quality-assurance" onClick={() => setOpen(false)}>
              Quality Assurance
            </Link>
          </li>
          <li>
            <Link className="nav-button" to="/about-us" onClick={() => setOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="nav-button" to="/our-responsibility" onClick={() => setOpen(false)}>
              Our Responsibility
            </Link>
          </li>
        </ul>

        {/* Contact Form Component */}
        <ContactForm />
      </footer>
    </div>
  );
};

export default Layout;
