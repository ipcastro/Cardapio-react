import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPersonagens } from '../services/api';
import PersonagemModal from '../components/PersonagemModal';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';

function Admin() {
  const navigate = useNavigate();
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPersonagem, setSelectedPersonagem] = useState(null);

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin-login');
  };

  const handleEdit = (personagem) => {
    setSelectedPersonagem(personagem);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este personagem?')) {
      try {
        // Implementar a chamada à API para deletar
        setPersonagens(personagens.filter((p) => p.id !== id));
      } catch (err) {
        setError('Erro ao excluir personagem');
      }
    }
  };

  const handleSave = async (personagemData) => {
    try {
      if (selectedPersonagem?.id) {
        // Implementar a chamada à API para atualizar
        setPersonagens(
          personagens.map((p) =>
            p.id === selectedPersonagem.id ? { ...p, ...personagemData } : p
          )
        );
      } else {
        // Implementar a chamada à API para criar
        const newPersonagem = {
          id: Date.now(), // Temporário, será substituído pelo ID do backend
          ...personagemData,
        };
        setPersonagens([...personagens, newPersonagem]);
      }
      setSelectedPersonagem(null);
    } catch (err) {
      setError('Erro ao salvar personagem');
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">
          Painel Administrativo
        </h1>
        <Button variant="danger" onClick={handleLogout}>
          Sair
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Gerenciar Personagens
          </h2>
          <Button onClick={() => setSelectedPersonagem({})}>
            Novo Personagem
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Descrição
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conceitos
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {personagens.map((personagem) => (
                <tr key={personagem.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {personagem.nome}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">
                      {personagem.descricao}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {personagem.conceitos.map((conceito, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                        >
                          {conceito}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-sm font-medium">
                    <Button
                      variant="secondary"
                      className="mr-2"
                      onClick={() => handleEdit(personagem)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(personagem.id)}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedPersonagem && (
        <PersonagemModal
          personagem={selectedPersonagem}
          onClose={() => setSelectedPersonagem(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default Admin; 