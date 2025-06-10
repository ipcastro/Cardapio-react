import React, { useState, useEffect } from 'react';
import { getPersonagens } from '../services/api';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function Personagens() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonagens = async () => {
      try {
        const data = await getPersonagens();
        setPersonagens(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar personagens');
        setLoading(false);
      }
    };

    fetchPersonagens();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        Nossos Personagens
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personagens.map((personagem) => (
          <div
            key={personagem.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={personagem.imagem}
              alt={personagem.nome}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {personagem.nome}
              </h2>
              <p className="text-gray-600 mb-4">{personagem.descricao}</p>
              <div className="flex flex-wrap gap-2">
                {personagem.conceitos.map((conceito, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {conceito}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personagens; 