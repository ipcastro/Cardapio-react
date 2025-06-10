import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // altura do header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src="/logo.png" alt="Física Divertida" className="nav-logo-img" />
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="nav-logo">
          Física Divertida
        </a>
      </div>
      
      <div className="nav-links">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('personagens'); }}>Personagens</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('aprender'); }}>Aprender</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hq'); }}>HQ</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('cadastro'); }} className="btn btn-primary">Cadastro</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('acesso'); }} className="btn btn-secondary">Acesso</a>
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Alternar tema">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="mobile-menu-button"
        aria-label="Menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('personagens'); }}>Personagens</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('aprender'); }}>Aprender</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hq'); }}>HQ</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('contato'); }}>Contato</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('cadastro'); }} className="btn btn-primary">Cadastro</a>
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('acesso'); }} className="btn btn-secondary">Acesso</a>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Alternar tema">
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 