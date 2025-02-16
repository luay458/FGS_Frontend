// src/components/Layout.tsx
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ContactForm from './ContactForm';
import '../styles/styles.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={location.pathname === '/' ? 'home-page' : ''}>
      <header id="header">
        <nav className="navbar">
            {/* Logo Links to Home */}
            <div className="homelink">
              <NavLink to="/" onClick={closeMenu}>
                <img className="logo-image" src="/images/LogoRectangle.png" alt="Fortis Global Systems"/>
              </NavLink>
            </div>
          <div className="nav-container">

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li> <NavLink className="nav-button" to="/" onClick={closeMenu} activeClassName="active" > Home </NavLink> </li>
              <li> <NavLink className="nav-button" to="/services" onClick={closeMenu} activeClassName="active" > Services </NavLink> </li>
              <li> <NavLink className="nav-button" to="/quality-assurance" onClick={closeMenu} activeClassName="active" > Quality Assurance </NavLink> </li>
              <li> <NavLink className="nav-button" to="/about-us" onClick={closeMenu} activeClassName="active" > About Us </NavLink> </li>
              <li> <NavLink className="nav-button" to="/our-responsibility" onClick={closeMenu} activeClassName="active" > Our Responsibility </NavLink> </li>
            </ul>

            {/* Mobile Menu Toggle Button */}
            <button className="menu-toggle" onClick={toggleMenu}> ☰ </button>
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
          <li> <NavLink className="nav-button" to="/" onClick={closeMenu}  activeClassName="active" > Home </NavLink> </li>
          <li> <NavLink className="nav-button" to="/services" onClick={closeMenu}  activeClassName="active" > Services </NavLink> </li>
          <li> <NavLink className="nav-button" to="/quality-assurance" onClick={closeMenu}  activeClassName="active" > Quality Assurance </NavLink> </li>
          <li> <NavLink className="nav-button" to="/about-us" onClick={closeMenu}  activeClassName="active" > About Us </NavLink> </li>
          <li> <NavLink className="nav-button" to="/our-responsibility" onClick={closeMenu}  activeClassName="active" > Our Responsibility </NavLink> </li>
        </ul>

        {/* Contact Form Component */}
        <ContactForm />
      </footer>
    </div>
  );
};

export default Layout;
