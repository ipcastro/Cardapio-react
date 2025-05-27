import React, { useEffect } from 'react';

const OtimizacaoAcessibilidade = ({ alt, role = 'img' }) => {
  useEffect(() => {
    const optimizeAccessibility = () => {
      // Adiciona atributos ARIA
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.hasAttribute('aria-label') && img.alt) {
          img.setAttribute('aria-label', img.alt);
        }
        if (!img.hasAttribute('role')) {
          img.setAttribute('role', role);
        }
      });

      // Adiciona suporte a teclado
      const focusableElements = document.querySelectorAll('img[tabindex]');
      focusableElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            element.click();
          }
        });
      });
    };

    optimizeAccessibility();
  }, [role]);

  return null;
};

export default React.memo(OtimizacaoAcessibilidade); 