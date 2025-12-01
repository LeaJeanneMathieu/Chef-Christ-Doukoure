import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for styling
      setIsScrolled(currentScrollY > 50);
      
      // Hide/show header based on scroll direction
      if (currentScrollY < 10) {
        // Always show header at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname !== '/') {
      return; // Let Link handle navigation
    }
    e.preventDefault();
    scrollToSection('accueil');
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}>
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Chef Christ Doukouré" />
        </Link>
        <nav className="header-nav">
          <a href="#accueil" onClick={handleHomeClick}>ACCUEIL</a>
          <a href="#prestations" onClick={(e) => { e.preventDefault(); scrollToSection('prestations'); }}>RÉALISATIONS</a>
          <Link to="/menu">MENU</Link>
          <Link to="/apropos">A PROPOS</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

