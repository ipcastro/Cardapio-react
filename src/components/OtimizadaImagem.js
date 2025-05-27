import React, { useMemo } from 'react';
import LoadingOptimizado from './LoadingOptimizado';
import ImagemErro from './ImagemErro';
import ImagemPlaceholder from './ImagemPlaceholder';
import Badge from './Badge';
import ImagemContainer from './ImagemContainer';
import OtimizacaoImagem from './OtimizacaoImagem';
import OtimizacaoCache from './OtimizacaoCache';
import OtimizacaoPerformance from './OtimizacaoPerformance';
import OtimizacaoAcessibilidade from './OtimizacaoAcessibilidade';
import useImageLoader from '../hooks/useImageLoader';

const OtimizadaImagem = ({ src, alt, categoria, className, aspectRatio }) => {
  const sizes = useMemo(() => ({
    mobile: 200,
    tablet: 400,
    desktop: 600
  }), []);

  const { isLoading, error, isLoaded, setIsLoaded, setError } = useImageLoader(src, sizes);
  const { src: optimizedSrc, srcSet, sizes: sizesAttr } = OtimizacaoImagem({ src, sizes });

  if (error) {
    return <ImagemErro className={className} />;
  }

  return (
    <ImagemContainer className={className} aspectRatio={aspectRatio}>
      {isLoading && <ImagemPlaceholder />}
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizesAttr}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={isLoading ? 'carregando' : ''}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        tabIndex="0"
      />
      {categoria && <Badge categoria={categoria} />}
      <OtimizacaoCache />
      <OtimizacaoPerformance />
      <OtimizacaoAcessibilidade alt={alt} />
    </ImagemContainer>
  );
};

export default React.memo(OtimizadaImagem); 