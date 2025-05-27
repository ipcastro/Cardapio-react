import React from 'react';

const Badge = ({ categoria, className }) => {
  const getCorCategoria = (categoria) => {
    const cores = {
      'Entrada': '#4CAF50',
      'Principal': '#2196F3',
      'Sobremesa': '#9C27B0',
      'Bebida': '#FF9800',
      'Promoção': '#F44336'
    };

    return cores[categoria] || '#757575';
  };

  return (
    <span
      className={`badge ${className || ''}`}
      style={{ backgroundColor: getCorCategoria(categoria) }}
    >
      {categoria}
    </span>
  );
};

export default React.memo(Badge); 