import React from 'react';

const ImagemPlaceholder = ({ className }) => {
  return (
    <div className={`imagem-placeholder ${className || ''}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="300" height="200" fill="#F5F5F5" />
        <path
          d="M150 80C161.046 80 170 71.0457 170 60C170 48.9543 161.046 40 150 40C138.954 40 130 48.9543 130 60C130 71.0457 138.954 80 150 80Z"
          fill="#E0E0E0"
        />
        <path
          d="M100 160C100 142.327 114.327 128 132 128H168C185.673 128 200 142.327 200 160V160H100V160Z"
          fill="#E0E0E0"
        />
      </svg>
    </div>
  );
};

export default React.memo(ImagemPlaceholder); 