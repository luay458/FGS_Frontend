// src/components/Layout.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <nav className="navbar">
          <div className="nav-container">
            <div className="homelink">
              <Link to="/">
                <img className="logo-image" src="/images/LogoRectangle.png" alt="Fortis Global Systems" />
              </Link>
            </div>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li><Link className="nav-button" to="/">Home</Link></li>
              <li><Link className="nav-button" to="/services">Services</Link></li>
              <li><Link className="nav-button" to="/quality-assurance">Quality Assurance</Link></li>
              <li><Link className="nav-button" to="/about-us">About Us</Link></li>
              <li><Link className="nav-button" to="/our-responsibility">Our Responsibility</Link></li>
            </ul>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
        </nav>
      </header>
      <main className="content">
        <div className="container" id="main-content">{children}</div>
      </main>
      <footer className="footer">
        <ul className="footer-nav-links">
          <li><Link className="nav-button" to="/">Home</Link></li>
          <li><Link className="nav-button" to="/services">Services</Link></li>
          <li><Link className="nav-button" to="/quality-assurance">Quality Assurance</Link></li>
          <li><Link className="nav-button" to="/about-us">About Us</Link></li>
          <li><Link className="nav-button" to="/our-responsibility">Our Responsibility</Link></li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;
