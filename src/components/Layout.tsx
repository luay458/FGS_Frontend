// src/components/Layout.tsx
import React, { useState, useEffect } from 'react';

import ContactForm from './ContactForm';
import '../styles/styles.css';
import Header from "./Header/Header";

import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';



const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const [isOpen, setOpen] = useState(false);

    const closeMenu = () => {
        setOpen(false);
    };

    // On component mount, load the saved theme or default to 'dark'
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    // Function to toggle between dark and light modes
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

  return (
    <div className={location.pathname === '/' ? 'home-page' : ''}>
      <Header
        isOpen={isOpen}
        setOpen={setOpen}
        closeMenu={closeMenu}
        toggleTheme={toggleTheme}
      />

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
