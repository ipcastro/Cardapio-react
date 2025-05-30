import React, { useEffect } from 'react';

const OtimizacaoCache = () => {
  useEffect(() => {
    const cacheImages = async () => {
      const images = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    cacheImages();
  }, []);

  return null;
};

export default React.memo(OtimizacaoCache); 