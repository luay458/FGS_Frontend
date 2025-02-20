// src/components/Header/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react';
import useScrollDirection from '../../hooks/useScrollDirection';
import '../../styles/styles.css';
import './Header.css';

interface HeaderProps {
 isOpen: boolean;
 setOpen: React.Dispatch<React.SetStateAction<boolean>>;
 closeMenu: () => void;
 toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, setOpen, closeMenu, toggleTheme }) => {
 const scrollDirection = useScrollDirection();
 const [hidden, setHidden] = React.useState(false);

 React.useEffect(() => {
   setHidden(scrollDirection === 'down');
 }, [scrollDirection]);

 return (
   <header className={`header ${hidden ? 'hidden' : ''}`}>
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
           <button id="theme-toggle" onClick={toggleTheme}>Theme</button>
         </ul>
         <div className="menu-toggle">
           <Hamburger toggled={isOpen} toggle={setOpen} />
         </div>
       </div>
     </nav>
   </header>
 );
};

export default Header;
