// src/components/Dropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.css';

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
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Menu
      </button>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/option1">Option 1</a></li>
          <li><a href="/option2">Option 2</a></li>
          <li><a href="/option3">Option 3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
