import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
        setIsScrolled(currentScrollY > 50);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isVisible ? '' : 'hidden'}`}>
      <video src="https://maacdelhi.com/img/maac-logo.mp4" autoPlay loop muted className="navbar-logo"></video>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item"><Link to="/" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>Home</Link></li>
        <li className="nav-item dropdown">
          <div className="dropdown-toggle">
            Courses
            <span className="dropdown-arrow">&#x25BC;</span>
          </div>
          <ul className="dropdown-content">
            <li><Link to="/3DAnimation" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>3D Animation</Link></li>
            <li><Link to="/VFX" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>VFX</Link></li>
            <li><Link to="/Gaming" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>Gaming</Link></li>
            <li><Link to="/WebGraphicPage" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>Web & Graphic design</Link></li>
          </ul>
        </li>
        <li className="nav-item"><Link to="/ShortTermSpecializedPage" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>Short term</Link></li>
        <li className="nav-item"><Link to="/MoreCareerCoursesPage" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>More Career</Link></li>
        <li className="nav-item"><Link to="/Placement" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>Placements</Link></li>
      </ul>
      <button className="apply-now"><span><Link to="/Contact" onClick={() => setIsMenuOpen(false)} style={{ color: 'white' }}>APPLY NOW</Link></span></button>
      <div className="contact" style={{ color: 'white' }}>Call: +91 8859833392</div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
