// src/components/Dropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css'; // Ensure this CSS file contains your existing styles

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className="dropdown-toggle nav-button" onClick={toggleDropdown}>
        Menu
      </button>
      <ul className={`dropdown-menu nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link className="nav-button" to="/">Home</Link></li>
        <li><Link className="nav-button" to="/services">Services</Link></li>
        <li><Link className="nav-button" to="/quality-assurance">Quality Assurance</Link></li>
        <li><Link className="nav-button" to="/about-us">About Us</Link></li>
        <li><Link className="nav-button" to="/our-responsibility">Our Responsibility</Link></li>
      </ul>
    </div>
  );
};

export default Dropdown;
