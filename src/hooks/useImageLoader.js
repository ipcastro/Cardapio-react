import { useState, useEffect } from 'react';
import { preloadImage, optimizeImageUrl } from '../utils/imageOptimizer';

const useImageLoader = (src, sizes) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      if (!src) return;

      try {
        setIsLoading(true);
        setError(false);

        // Pré-carrega a versão menor da imagem
        await preloadImage(optimizeImageUrl(src, sizes.mobile));

        if (isMounted) {
          setIsLoaded(true);
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Erro ao carregar imagem:', err);
        if (isMounted) {
          setError(true);
          setIsLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [src, sizes.mobile]);

  return {
    isLoading,
    error,
    isLoaded,
    setIsLoaded,
    setError
  };
};

export default useImageLoader; 