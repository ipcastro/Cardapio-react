import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';
import OtimizadaImagem from './components/OtimizadaImagem';

// Lazy loading para componentes não críticos
const Extrainfo = lazy(() => import('./Extrainfo'));
const CarrinhoSidebar = lazy(() => import('./components/CarrinhoSidebar'));
const Footer = lazy(() => import('./components/Footer'));

// Componente de loading
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <i className="fas fa-spinner fa-spin"></i>
  </div>
);

function App() {
  const [categorias] = useState([
    {
      nome: 'Entradas',
      id: 'entradas',
      itens: [
        { 
          nome: 'Bruschetta', 
          preco: 'R$ 25,00', 
          descricao: 'Pão italiano com tomate, manjericão e azeite',
          imagem: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
          descricaoImagem: 'Pão italiano torrado com tomates cereja, manjericão fresco e azeite extra virgem, servido em uma tábua de madeira rústica',
          loading:'lazy',
          categoria: 'entrada'
        },
        { 
          nome: 'Carpaccio', 
          preco: 'R$ 35,00', 
          descricao: 'Finas fatias de carne crua com rúcula e parmesão',
          imagem: 'https://www.minhareceita.com.br/app/uploads/2025/02/R1224_Carpaccio_de_Lagarto_com_Pesto_de_Rucula_e_Lascas_de_Parmesao-capa.webp',
          descricaoImagem: 'Finas fatias de lagarto bovino com rúcula fresca e lascas de parmesão, decorado com azeite trufado e pimenta do reino',
          loading:'lazy',
          categoria: 'entrada'
        },
      ]
    },
    {
      nome: 'Pratos Principais',
      id: 'pratos-principais',
      itens: [
        { 
          nome: 'Filé Mignon', 
          preco: 'R$ 85,00', 
          descricao: 'Filé mignon grelhado com molho de vinho tinto',
          imagem: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80',
          descricaoImagem: 'Filé mignon grelhado ao ponto com molho de vinho tinto, servido com batata rösti e legumes da estação',
          loading:'lazy',
          categoria: 'prato-principal'
        },
        { 
          nome: 'Risoto de Camarão', 
          preco: 'R$ 75,00', 
          descricao: 'Risoto cremoso com camarões frescos',
          imagem: 'https://s2-receitas.glbimg.com/KWpGf7SHzNbPSab_Z3fmhDOGCmo=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/A/5/RQBWn4SlyzO0JWxYflwg/capa-materia-gshow-102-.png',
          descricaoImagem: 'Risoto cremoso com camarões frescos, decorado com cebolinha e tomilho, servido em um prato fundo',
          loading:'lazy',
          categoria: 'prato-principal'
        },
      ]
    },
    {
      nome: 'Sobremesas',
      id: 'sobremesas',
      itens: [
        { 
          nome: 'Tiramisu', 
          preco: 'R$ 25,00', 
          descricao: 'Clássico italiano com café e mascarpone',
          imagem: 'https://br.giallozafferano.com/images/5-598/Tiramisu_650x433_wm.jpg',
          descricaoImagem: 'Tiramisu tradicional com camadas de biscoito champanhe, creme de mascarpone e cacau em pó, servido em uma taça de sobremesa',
          categoria: 'sobremesa'
        },
        { 
          nome: 'Cheesecake', 
          preco: 'R$ 22,00', 
          descricao: 'Cheesecake de frutas vermelhas',
          imagem: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
          descricaoImagem: 'Cheesecake cremosa com frutas vermelhas frescas e calda, decorada com hortelã, servida em um prato de sobremesa',
          categoria: 'sobremesa'
        },
      ]
    }
  ]);

  const [carrinho, setCarrinho] = useState([]);
  const [showCarrinho, setShowCarrinho] = useState(false);
  const [itemAdicionado, setItemAdicionado] = useState(null);
  const [categoriaAtiva, setCategoriaAtiva] = useState('entradas');
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

  const scrollToSection = (categoriaId) => {
    setCategoriaAtiva(categoriaId);
    setMenuMobileOpen(false);
    const element = document.getElementById(categoriaId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenuMobile = () => {
    setMenuMobileOpen(!menuMobileOpen);
  };

  // Otimização de carregamento de imagens
  useEffect(() => {
    // Pré-carregar imagens da primeira categoria
    if (categorias[0]?.itens) {
      const preloadImages = categorias[0].itens.map(item => {
        const img = new Image();
        img.src = item.imagem;
        return img;
      });

      // Limpar preload quando componente desmontar
      return () => {
        preloadImages.forEach(img => {
          img.src = '';
        });
      };
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cardápio Gourmet</h1>
        <p className="subtitulo">Sabor e qualidade em cada prato</p>
      </header>

      <nav className="menu-nav">
        <div className="menu-nav-content">
          <div className="menu-mobile">
            <button className="menu-toggle" onClick={toggleMenuMobile}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className={`menu-items ${menuMobileOpen ? 'active' : ''}`}>
            {categorias.map(categoria => (
              <li key={categoria.id} className={categoriaAtiva === categoria.id ? 'active' : ''}>
                <button onClick={() => scrollToSection(categoria.id)}>
                  {categoria.nome}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="main-content">
        {categorias.map(categoria => (
          <section key={categoria.id} id={categoria.id} className="categoria">
            <h2>{categoria.nome}</h2>
            <div className="categoria-container">
              {categoria.itens.map(item => (
                <div key={item.nome} className="item-card">
                  <OtimizadaImagem
                    src={item.imagem}
                    alt={item.descricaoImagem}
                    categoria={item.categoria}
                  />
                  <div className="item-info">
                    <h3>{item.nome}</h3>
                    <p className="preco">{item.preco}</p>
                    <p className="descricao">{item.descricao}</p>
                    <button className="adicionar-ao-carrinho" onClick={() => adicionarAoCarrinho(item)}>
                      <i className="fas fa-plus"></i>
                      Adicionar
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

      <Suspense fallback={<LoadingSpinner />}>
        <CarrinhoSidebar 
          showCarrinho={showCarrinho}
          setShowCarrinho={setShowCarrinho}
          carrinho={carrinho}
          removerDoCarrinho={removerDoCarrinho}
          calcularTotal={calcularTotal}
        />
      </Suspense>

      {/* Notificação */}
      {itemAdicionado && (
        <div className="notificacao">
          <i className="fas fa-check-circle"></i>
          {itemAdicionado} adicionado ao carrinho!
        </div>
      )}

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;