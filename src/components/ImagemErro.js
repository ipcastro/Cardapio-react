import React from 'react';

const ImagemErro = ({ mensagem = 'Erro ao carregar imagem', className }) => {
  return (
    <div className={`imagem-erro ${className || ''}`}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4ZM24 40C15.163 40 8 32.837 8 24C8 15.163 15.163 8 24 8C32.837 8 40 15.163 40 24C40 32.837 32.837 40 24 40Z"
          fill="#E0E0E0"
        />
        <path
          d="M24 12C22.895 12 22 12.895 22 14V26C22 27.105 22.895 28 24 28C25.105 28 26 27.105 26 26V14C26 12.895 25.105 12 24 12Z"
          fill="#E0E0E0"
        />
        <path
          d="M24 32C25.105 32 26 31.105 26 30C26 28.895 25.105 28 24 28C22.895 28 22 28.895 22 30C22 31.105 22.895 32 24 32Z"
          fill="#E0E0E0"
        />
      </svg>
      <span>{mensagem}</span>
    </div>
  );
};

export default React.memo(ImagemErro); 