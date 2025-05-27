import React, { useMemo } from 'react';
import { optimizeImageUrl, generateSrcSet } from '../utils/imageOptimizer';

const OtimizacaoImagem = ({ src, sizes }) => {
  const srcSet = useMemo(() => generateSrcSet(src, sizes), [src, sizes]);

  return {
    src: optimizeImageUrl(src, sizes.mobile),
    srcSet,
    sizes: `(max-width: 768px) ${sizes.mobile}px, (max-width: 1024px) ${sizes.tablet}px, ${sizes.desktop}px`
  };
};

export default OtimizacaoImagem; 