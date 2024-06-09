import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { FaLaptopCode } from 'react-icons/fa'
import { GoChecklist } from 'react-icons/go'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick = (hash) => {
    setActiveNav(hash);
    scrollToTop();
  };

  return (
    <nav>
      <Link to="/Home" onClick={() => handleClick('#Home')} className={location.pathname === '/Home' ? 'active' : ''}>Home</Link>
      <Link to="/Experience" onClick={() => handleClick('#Experience')} className={location.pathname === '/Experience' ? 'active' : ''}>Experience</Link>
      <Link to="/Projects" onClick={() => handleClick('#Projects')} className={location.pathname === '/Projects' ? 'active' : ''}>Projects</Link>
      <Link to="/Contact" onClick={() => handleClick('#Contact')} className={location.pathname === '/Contact' ? 'active' : ''}>Contact</Link>
    </nav>
  );
};

export default Nav;
