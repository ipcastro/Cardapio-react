import React, { useState } from 'react';
import './App.css';

function App() {
  const [categorias] = useState([
    {
      nome: 'Entradas',
      itens: [
        { 
          nome: 'Bruschetta', 
          preco: 'R$ 25,00', 
          descricao: 'Pão italiano com tomate, manjericão e azeite',
          imagem: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
          categoria: 'entrada'
        },
        { 
          nome: 'Carpaccio', 
          preco: 'R$ 35,00', 
          descricao: 'Finas fatias de carne crua com rúcula e parmesão',
          imagem: 'https://www.minhareceita.com.br/app/uploads/2025/02/R1224_Carpaccio_de_Lagarto_com_Pesto_de_Rucula_e_Lascas_de_Parmesao-capa.webp',
          categoria: 'entrada'
        },
      ]
    },
    {
      nome: 'Pratos Principais',
      itens: [
        { 
          nome: 'Filé Mignon', 
          preco: 'R$ 85,00', 
          descricao: 'Filé mignon grelhado com molho de vinho tinto',
          imagem: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
          categoria: 'prato-principal'
        },
        { 
          nome: 'Risoto de Camarão', 
          preco: 'R$ 75,00', 
          descricao: 'Risoto cremoso com camarões frescos',
          imagem: 'https://s2-receitas.glbimg.com/KWpGf7SHzNbPSab_Z3fmhDOGCmo=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/A/5/RQBWn4SlyzO0JWxYflwg/capa-materia-gshow-102-.png',
          categoria: 'prato-principal'
        },
      ]
    },
    {
      nome: 'Sobremesas',
      itens: [
        { 
          nome: 'Tiramisu', 
          preco: 'R$ 25,00', 
          descricao: 'Clássico italiano com café e mascarpone',
          imagem: 'https://br.giallozafferano.com/images/5-598/Tiramisu_650x433_wm.jpg',
          categoria: 'sobremesa'
        },
        { 
          nome: 'Cheesecake', 
          preco: 'R$ 22,00', 
          descricao: 'Cheesecake de frutas vermelhas',
          imagem: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          categoria: 'sobremesa'
        },
      ]
    }
  ]);

  const [carrinho, setCarrinho] = useState([]);
  const [showCarrinho, setShowCarrinho] = useState(false);
  const [itemAdicionado, setItemAdicionado] = useState(null);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Entradas');
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
    setItemAdicionado(item.nome);
    setTimeout(() => setItemAdicionado(null), 2000);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => {
      const preco = parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
      return total + preco;
    }, 0).toFixed(2);
  };

  const scrollToSection = (categoria) => {
    setCategoriaAtiva(categoria);
    // Fechar o menu mobile após a seleção (apenas em telas pequenas)
    setMenuMobileOpen(false);
    const element = document.getElementById(categoria);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenuMobile = () => {
    setMenuMobileOpen(!menuMobileOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cardápio do Restaurante</h1>
        <p className="subtitulo">Sabor e qualidade em cada prato</p>
      </header>

      <nav className="menu-nav">
        <div className="menu-nav-content">
          {/* Logo e toggle para menu mobile */}
          <div className="menu-mobile">
            <a href="#" className="logo" onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <i className="fas fa-utensils"></i>
              <span>Gourmet</span>
            </a>
            <button className="menu-toggle" onClick={toggleMenuMobile}>
              <i className={`fas ${menuMobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          
          {/* Logo para telas grandes - visível apenas em telas maiores pelo CSS */}
          <a href="#" className="logo desktop-only-logo" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <i className="fas fa-utensils"></i>
            <span>Gourmet</span>
          </a>
          
          {/* Menu de categorias */}
          <ul className={`menu-items ${menuMobileOpen ? 'active' : ''}`}>
            {categorias.map((categoria, index) => (
              <li 
                key={index}
                className={categoriaAtiva === categoria.nome ? 'active' : ''}
              >
                <button onClick={() => scrollToSection(categoria.nome)}>
                  {categoria.nome}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Removemos o ícone do carrinho do menu desktop */}
        </div>
      </nav>

      <div className="main-content">
        <main className="menu-container">
          {categorias.map((categoria, index) => (
            <section key={index} className="categoria" id={categoria.nome}>
              <h2>{categoria.nome}</h2>
              <div className="itens-container">
                {categoria.itens.map((item, itemIndex) => (
                  <div key={itemIndex} className="item-card">
                    <div className="imagem-container">
                      <img src={item.imagem} alt={item.nome} />
                      <span className={`categoria-badge ${item.categoria}`}>
                        {item.categoria === 'entrada' ? 'Entrada' : 
                         item.categoria === 'prato-principal' ? 'Principal' : 'Sobremesa'}
                      </span>
                    </div>
                    <div className="item-info">
                      <h3>{item.nome}</h3>
                      <p className="preco">{item.preco}</p>
                      <p className="descricao">{item.descricao}</p>
                      <button 
                        className="adicionar-ao-carrinho"
                        onClick={() => adicionarAoCarrinho(item)}
                      >
                        <i className="fas fa-plus"></i> Adicionar ao carrinho
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Botão flutuante do carrinho */}
        <div className="carrinho-container">
          <button className="carrinho-button" onClick={() => setShowCarrinho(true)}>
            <div className="carrinho-icon">
              <i className="fas fa-shopping-cart"></i>
              {carrinho.length > 0 && (
                <span className="carrinho-count">{carrinho.length}</span>
              )}
            </div>
          </button>
        </div>

        {/* Sidebar do carrinho */}
        <aside className={`carrinho-sidebar ${showCarrinho ? 'active' : ''}`}>
          <div className="carrinho-header">
            <h2>Carrinho de Compras</h2>
            <button 
              className="fechar-carrinho"
              onClick={() => setShowCarrinho(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <div className="carrinho-content">
            {carrinho.length === 0 ? (
              <p className="carrinho-vazio">Seu carrinho está vazio</p>
            ) : (
              <>
                <ul className="carrinho-itens">
                  {carrinho.map((item, index) => (
                    <li key={index} className="item-carrinho">
                      <div className="item-info-carrinho">
                        <span className="item-nome">{item.nome}</span>
                        <span className="item-preco">{item.preco}</span>
                      </div>
                      <button 
                        className="remover-item"
                        onClick={() => removerDoCarrinho(index)}
                      >
                        Remover
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="carrinho-total">
                  <p>Total: R$ {calcularTotal().replace('.', ',')}</p>
                </div>
                <button className="finalizar-pedido">Finalizar Pedido</button>
              </>
            )}
          </div>
        </aside>
      </div>

      {/* Notificação */}
      {itemAdicionado && (
        <div className="notificacao">
          <i className="fas fa-check-circle"></i>
          {itemAdicionado} adicionado ao carrinho!
        </div>
      )}

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <i className="fas fa-utensils"></i> Gourmet
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-info">
          © 2025 Restaurante Gourmet. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;