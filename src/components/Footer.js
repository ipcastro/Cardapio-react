import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <i className="fas fa-utensils"></i> Gourmet
        </div>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="footer-info">
        © {new Date().getFullYear()} Restaurante Gourmet. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer; 