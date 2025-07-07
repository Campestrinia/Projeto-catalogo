import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../context/Lcontext";
import { FaRegTrashAlt } from "react-icons/fa";
import { StyledLink, Image } from './Cart.css'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom';

export function Cart() {
  const { user } = useContext(LoginContext);
  const [productsInCart, setProductsInCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartProducts = async () => {
      if (!user || !user.id || !user.token) {
        console.warn("⚠️ Usuário inválido ou não autenticado.");
        setLoading(false);
        return;
      }

      try {
        const carrinhoRes = await axios.get(
          `${apiUrl}/api/carrinho/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log("✅ Carrinho encontrado:", carrinhoRes.data);
        if (!carrinhoRes?.data?.length) return;

        const promises = carrinhoRes.data.map(item =>
          axios.get(`${apiUrl}/api/product/${item.product_id}`).then(response => {
            // Aqui junta os dados do produto com o idCarrinho do item original
            return {
              ...response.data,      // dados do produto detalhado
              idCarrinho: item.id,   // ou item.idCarrinho, conforme seu campo
            };
          })
        );

        const dados = await Promise.all(promises);
        setProductsInCart(dados);

      } catch (error) {
        console.error("❌ Erro ao carregar carrinho:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartProducts();
  }, [user, apiUrl]);

  const removeCart = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${user.token}`
      };

      await axios.delete(`${apiUrl}/api/carrinho/${id}`, { headers });

      // Atualiza o state removendo o item com o id passado
      setProductsInCart(prevProducts =>
        prevProducts.filter(product => product.idCarrinho !== id)
      );

      message.success('Item removido com sucesso');
    } catch (error) {
      console.error("Erro ao remover item:", error);
      message.error('Erro ao remover o item do carrinho');
    }
  };

  const limparCart = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${user.token}`
      };
      productsInCart.map(async item =>
        await axios.delete(`${apiUrl}/api/carrinho/${item.idCarrinho}`, { headers }),
        // Atualiza o state removendo o item com o id passado
        setProductsInCart([])
      )

      message.success('Carrinho limpado com sucesso!');
    } catch (error) {
      console.error("Erro ao remover item:", error);
      message.error('Erro limpar o carrinho');
    }
  };
  return (
    <>
      {productsInCart && (
        loading ? (
          <p>Carregando carrinho...</p>
        ) : (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px' }}>
            <div style={{
              width: '60%',
              background: '#f2f4f9',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '30rem',
              border: '1px solid #ccc'
            }}>
              <h2 style={{ textAlign: 'center', fontSize: '26px', color: '#2a303c', margin: 0 }}>
                🛒 Seu Carrinho
              </h2>

              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
                {productsInCart.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {productsInCart.map(product => (
                      <div key={product.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#2a303c',
                        color: 'white',
                        padding: '15px',
                        borderRadius: '12px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                      }}>
                        <StyledLink to={`/product/${product.id}`} style={{ display: 'flex', flex: 1, textDecoration: 'none', color: 'inherit' }}>
                          <Image
                            src={`${apiUrl}/images/${product.imagem}`}
                            alt={product.nome}
                            style={{
                              width: '80px',
                              height: '80px',
                              objectFit: 'cover',
                              borderRadius: '10px',
                              marginRight: '20px'
                            }}
                          />
                          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px' }}>
                            <span style={{ fontSize: '18px', fontWeight: '600' }}>{product.nome}</span>
                            <span style={{ fontSize: '16px' }}>💰 R${product.preco}</span>
                            <span style={{ fontSize: '15px' }}>📦 Quantidade: {product.quantidade}</span>
                          </div>
                        </StyledLink>
                        <FaRegTrashAlt
                          title="Remover item"
                          style={{
                            cursor: 'pointer',
                            marginLeft: '20px',
                            transition: 'transform 0.2s',
                          }}
                          color="#ff4d4f"
                          size={22}
                          onClick={() => removeCart(product.idCarrinho)}
                          onMouseOver={e => e.currentTarget.style.transform = "scale(1.2)"}
                          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <h3 style={{ textAlign: 'center', color: '#444' }}>Seu carrinho está vazio.</h3>
                )}
              </div>

              {/* Botões fixos ao fim do container */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                marginTop: 'auto',
                paddingTop: '20px',
                borderTop: '1px solid #ccc'
              }}>
                <button style={{
                  padding: '12px 24px',
                  background: '#2a303c',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'background 0.3s'
                }}
                  onClick={limparCart}
                  onMouseOver={e => e.currentTarget.style.background = "#1f242d"}
                  onMouseOut={e => e.currentTarget.style.background = "#2a303c"}
                >
                  🗑️ Limpar carrinho
                </button>
                <button style={{
                  padding: '12px 24px',
                  background: '#4CAF50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  transition: 'background 0.3s'
                }}
                  onClick={() => navigate("/finalizar")}
                  onMouseOver={e => e.currentTarget.style.background = "#43a047"}
                  onMouseOut={e => e.currentTarget.style.background = "#4CAF50"}
                >
                  ✅ Finalizar compra
                </button>
              </div>
            </div>
          </div>

        )
      )}
    </>
  );
}
