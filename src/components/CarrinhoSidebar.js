import React from 'react';
import Extrainfo from '../Extrainfo';

const CarrinhoSidebar = ({ showCarrinho, setShowCarrinho, carrinho, removerDoCarrinho, calcularTotal }) => {
  return (
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

      <h2>Informações Adicionais</h2>
      <Extrainfo />
      
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
  );
};

export default CarrinhoSidebar; 