import React from 'react';

const ImagemContainer = ({ children, className, aspectRatio = '4/3' }) => {
  return (
    <div
      className={`imagem-container ${className || ''}`}
      style={{ 
        aspectRatio,
        maxWidth: '100%',
        maxHeight: '300px'
      }}
    >
      {children}
    </div>
  );
};

export default React.memo(ImagemContainer); 