import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <h1>Aprenda Física de Forma Divertida</h1>
          <p>
            Embarque em uma jornada fascinante pelo mundo da física com Amélia e Isaac Newton. 
            Juntos, eles tornarão o aprendizado da cinemática uma experiência única e envolvente!
          </p>
          <Link to="/personagens" className="btn btn-primary">
            Conhecer os Personagens
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="personagens" className="section">
        <div className="container">
          <h2 className="text-center">Conheça Nossos Personagens</h2>

          <div className="features">
            <div className="feature-card">
              <img src="/amelia.png" alt="Amélia" />
              <h3>Amélia</h3>
              <p>
                Uma jovem estudante curiosa e determinada que adora desvendar os mistérios da física. 
                Com sua inteligência e perseverança, ela transforma conceitos complexos em aventuras emocionantes.
              </p>
            </div>

            <div className="feature-card">
              <img src="/newton.png" alt="Isaac Newton" />
              <h3>Isaac Newton</h3>
              <p>
                O famoso físico que, de forma divertida e amigável, guia Amélia através das leis da física. 
                Com sua sabedoria e experiência, ele torna o aprendizado uma jornada fascinante.
              </p>
            </div>

            <div className="feature-card">
              <img src="/rocket.png" alt="Foguete" />
              <h3>Junte-se a Nós</h3>
              <p>
                Junte-se a Amélia e Isaac Newton nesta incrível jornada pelo mundo da física!
              </p>
              <Link to="/conteudo" className="btn btn-primary">
                Começar a Aventura
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="aprender" className="section section-alt">
        <div className="container">
          <h2 className="text-center">O que você vai aprender</h2>
          <div className="card">
            <h3>Movimento Retilíneo Uniforme</h3>
            <p>
              Compreenda como os objetos se movem em linha reta com velocidade constante.
            </p>
            <Link to="/conteudo" className="btn btn-primary">
              Ler mais
            </Link>
          </div>
        </div>
      </section>

      {/* HQ Section */}
      <section id="hq" className="section">
        <div className="container">
          <h2 className="text-center">Nossa HQ Educacional</h2>
          <div className="card">
            <h3>Física em Quadrinhos: Volume 1</h3>
            <p>
              Acompanhe as aventuras de Amélia e Newton enquanto exploram os conceitos fundamentais da cinemática. 
              Uma maneira divertida e envolvente de aprender física!
            </p>
            <div className="card-actions">
              <a href="#" className="btn btn-primary">Ler Online</a>
              <a href="#" className="btn btn-secondary">Baixar PDF</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section section-alt">
        <div className="container">
          <h2 className="text-center">Entre em Contato</h2>
          <div className="card">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea id="mensagem" className="form-input" rows="4" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </section>

      {/* Cadastro Section */}
      <section id="cadastro" className="section">
        <div className="container">
          <h2 className="text-center">Cadastre-se</h2>
          <div className="card">
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="nome-cadastro">Nome Completo</label>
                <input type="text" id="nome-cadastro" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email-cadastro">Email</label>
                <input type="email" id="email-cadastro" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="senha-cadastro">Senha</label>
                <input type="password" id="senha-cadastro" className="form-input" required />
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
          </div>
        </div>
      </section>

      {/* Acesso Section */}
      <section id="acesso" className="section section-alt">
        <div className="container">
          <h2 className="text-center">Acesso</h2>
          <div className="card">
            <form className="auth-form">
              <div className="form-group">
                <label htmlFor="email-acesso">Email</label>
                <input type="email" id="email-acesso" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="senha-acesso">Senha</label>
                <input type="password" id="senha-acesso" className="form-input" required />
              </div>
              <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 