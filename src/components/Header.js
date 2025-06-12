import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">feel<span className="logo-highlight">INg</span></span>
            <span className="logo-tagline">data that feels with you</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <button onClick={() => scrollToSection('overview')} className="nav-link">
              Visão Geral
            </button>
            <button onClick={() => scrollToSection('emotion')} className="nav-link">
              eMOTION
            </button>
            <button onClick={() => scrollToSection('fellcore')} className="nav-link">
              fellINgCORE
            </button>
            <button onClick={() => scrollToSection('evolution')} className="nav-link">
              Evolução
            </button>
            <button onClick={() => scrollToSection('team')} className="nav-link">
              Equipe
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contato
            </button>
            <button onClick={() => scrollToSection('demo')} className="btn btn-primary">
              Experimentar
            </button>
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 