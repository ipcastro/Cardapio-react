import React from 'react';

const LoadingOptimizado = ({ tipo = 'spinner' }) => {
  const renderSpinner = () => (
    <div className="loading-spinner" role="status" aria-label="Carregando">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="#f0f0f0"
          strokeWidth="4"
        />
        <path
          d="M20 2C29.3888 2 37 9.61116 37 19"
          stroke="#2c3e50"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );

  const renderSkeleton = () => (
    <div className="loading-skeleton" role="status" aria-label="Carregando">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    </div>
  );

  return tipo === 'spinner' ? renderSpinner() : renderSkeleton();
};

export default React.memo(LoadingOptimizado); 