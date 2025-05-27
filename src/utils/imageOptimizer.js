// Função para otimizar URL da imagem
export const optimizeImageUrl = (url, width) => {
  if (!url) return '';
  
  // Adiciona parâmetros de otimização à URL
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}w=${width}&q=80&format=webp`;
};

// Função para gerar srcSet otimizado
export const generateSrcSet = (url) => {
  const sizes = {
    mobile: 200,    // Reduzido de 300 para 200
    tablet: 400,    // Reduzido de 600 para 400
    desktop: 600    // Reduzido de 900 para 600
  };

  return Object.entries(sizes)
    .map(([device, size]) => `${optimizeImageUrl(url, size)} ${size}w`)
    .join(', ');
};

// Função para pré-carregar imagens
export const preloadImage = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = optimizeImageUrl(url, 200); // Reduzido para 200px
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
};

// Função para verificar se a imagem está em cache
export const isImageCached = (url) => {
  const img = new Image();
  img.src = url;
  return img.complete;
};

// Função para gerar placeholder otimizado
export const generatePlaceholder = (width = 200, height = 150) => { // Reduzido para 200x150
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f0f0f0"/>
      <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#999" text-anchor="middle" dy=".3em">
        Carregando...
      </text>
    </svg>
  `)}`;
}; 