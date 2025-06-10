import React, { useState } from 'react';
import { enviarContato } from '../services/api';
import SuccessMessage from '../components/SuccessMessage';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await enviarContato(formData);
      setSuccess(true);
      setFormData({
        nome: '',
        email: '',
        mensagem: '',
      });
    } catch (err) {
      setError('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Entre em Contato</h1>

      {success && (
        <SuccessMessage message="Mensagem enviada com sucesso! Entraremos em contato em breve." />
      )}

      {error && (
        <div className="bg-red-100 text-red-600 p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Informações de Contato
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800">Email</h3>
              <p className="text-gray-600">contato@fisicadivertida.com</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">Endereço</h3>
              <p className="text-gray-600">
                Universidade Federal de Minas Gerais
                <br />
                Av. Antônio Carlos, 6627 - Pampulha
                <br />
                Belo Horizonte - MG, 31270-901
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato; 