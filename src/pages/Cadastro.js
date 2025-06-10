import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastrar } from '../services/api';

function Cadastro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    try {
      await cadastrar({
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
      });
      navigate('/acesso');
    } catch (err) {
      setError('Erro ao realizar cadastro. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="auth-container">
          <h1 className="text-center">Cadastro</h1>

          {error && (
            <div className="alert alert-error">
              {error}
            </div>
          )}

          <div className="card">
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="form-input"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full"
              >
                {loading ? 'Cadastrando...' : 'Cadastrar'}
              </button>
            </form>

            <div className="auth-footer">
              <p>
                Já tem uma conta?{' '}
                <button
                  onClick={() => navigate('/acesso')}
                  className="btn-link"
                >
                  Faça login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro; 