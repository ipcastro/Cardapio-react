import React, { useState, useEffect } from 'react';
import { getConteudo } from '../services/api';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

function Conteudo() {
  const [conteudos, setConteudos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConteudos = async () => {
      try {
        const data = await getConteudo();
        setConteudos(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar conteúdos');
        setLoading(false);
      }
    };

    fetchConteudos();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">
        Conteúdos Educacionais
      </h1>

      <div className="grid gap-8">
        {conteudos.map((conteudo) => (
          <div
            key={conteudo.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {conteudo.titulo}
              </h2>
              <div className="prose max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: conteudo.conteudo }}
                  className="text-gray-600"
                />
              </div>
              {conteudo.referencias && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Referências
                  </h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {conteudo.referencias.map((ref, index) => (
                      <li key={index}>{ref}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Conteudo; 