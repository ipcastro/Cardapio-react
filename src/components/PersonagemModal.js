import React, { useState, useEffect } from 'react';
import Button from './Button';

function PersonagemModal({ personagem, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    conceitos: '',
    imagem: '',
  });

  useEffect(() => {
    if (personagem) {
      setFormData({
        nome: personagem.nome || '',
        descricao: personagem.descricao || '',
        conceitos: personagem.conceitos ? personagem.conceitos.join(', ') : '',
        imagem: personagem.imagem || '',
      });
    }
  }, [personagem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const personagemData = {
      ...formData,
      conceitos: formData.conceitos.split(',').map((c) => c.trim()),
    };
    onSave(personagemData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {personagem?.id ? 'Editar Personagem' : 'Novo Personagem'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nome"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="descricao"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="conceitos"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Conceitos (separados por vírgula)
            </label>
            <input
              type="text"
              id="conceitos"
              name="conceitos"
              value={formData.conceitos}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="imagem"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              URL da Imagem
            </label>
            <input
              type="url"
              id="imagem"
              name="imagem"
              value={formData.imagem}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button type="submit">
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonagemModal; 