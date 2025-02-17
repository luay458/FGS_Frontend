// src/components/Layout.tsx
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import '../styles/styles.css';
import { NavLink, useLocation } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className={location.pathname === '/' ? 'home-page' : ''}>
      <header id="header">
        <nav className="navbar">
          <div className="homelink">
            <NavLink to="/" onClick={closeMenu}>
              <img className="logo-image" src="/images/LogoRectangle.png" alt="Fortis Global Systems" />
            </NavLink>
          </div>
          <div className="nav-container">
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
              <li><NavLink className="nav-button" to="/" onClick={closeMenu} activeClassName="active">Home</NavLink></li>
              <li><NavLink className="nav-button" to="/services" onClick={closeMenu} activeClassName="active">Services</NavLink></li>
              <li><NavLink className="nav-button" to="/quality-assurance" onClick={closeMenu} activeClassName="active">Quality Assurance</NavLink></li>
              <li><NavLink className="nav-button" to="/about-us" onClick={closeMenu} activeClassName="active">About Us</NavLink></li>
              <li><NavLink className="nav-button" to="/our-responsibility" onClick={closeMenu} activeClassName="active">Our Responsibility</NavLink></li>
            </ul>
            <div className="menu-toggle">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </nav>
      </header>
      <main className="content">
        <div className="container" id="main-content">
          {children}
        </div>
      </main>
      <footer className="footer">
        <ul className="footer-nav-links">
          <li><NavLink className="nav-button" to="/" onClick={closeMenu} activeClassName="active">Home</NavLink></li>
          <li><NavLink className="nav-button" to="/services" onClick={closeMenu} activeClassName="active">Services</NavLink></li>
          <li><NavLink className="nav-button" to="/quality-assurance" onClick={closeMenu} activeClassName="active">Quality Assurance</NavLink></li>
          <li><NavLink className="nav-button" to="/about-us" onClick={closeMenu} activeClassName="active">About Us</NavLink></li>
          <li><NavLink className="nav-button" to="/our-responsibility" onClick={closeMenu} activeClassName="active">Our Responsibility</NavLink></li>
        </ul>
        <ContactForm />
      </footer>
    </div>
  );
};

export default Layout;
