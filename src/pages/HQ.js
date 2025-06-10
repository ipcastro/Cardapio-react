import React, { useState } from 'react';

function HQ() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Exemplo com 5 páginas

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          História em Quadrinhos
        </h1>
        <p className="text-xl text-gray-600">
          Aprenda física de forma divertida através de histórias em quadrinhos
          interativas.
        </p>
      </div>

      {/* Área da HQ */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={`/hq/pagina-${currentPage}.jpg`}
            alt={`Página ${currentPage} da HQ`}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Controles de Navegação */}
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Página Anterior
        </button>

        <span className="text-gray-600">
          Página {currentPage} de {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Próxima Página
        </button>
      </div>

      {/* Informações Adicionais */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Sobre esta História
        </h2>
        <p className="text-gray-600 mb-4">
          Nesta história em quadrinhos, você acompanhará as aventuras dos nossos
          personagens enquanto eles exploram conceitos fundamentais da física de
          forma divertida e interativa.
        </p>
        <p className="text-gray-600">
          Cada página contém elementos interativos e explicações detalhadas dos
          conceitos físicos apresentados. Não se esqueça de clicar nos elementos
          interativos para descobrir mais informações!
        </p>
      </div>

      {/* Elementos Interativos */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Conceitos Físicos
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              Leis de Newton
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              Energia Mecânica
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              Movimento Circular
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Atividades Interativas
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              Simulações Físicas
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              Quiz Interativo
            </li>
            <li className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              Experimentos Virtuais
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HQ; 