import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../context/Lcontext";
import { FaRegTrashAlt } from "react-icons/fa";
import { StyledLink, Image, Text } from './Cart.css'
import { message } from 'antd'

export function Cart() {
  const { user } = useContext(LoginContext);
  const [productsInCart, setProductsInCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

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
  return (
    <>
      {productsInCart && (
        loading ? (
          <p>Carregando carrinho...</p>
        ) : (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>
            <div style={{
              display: "flex",
              border: '1px solid',
              width: '50%',
              flexDirection: 'column',
              padding: '10px',
              background: '#f2f4f9',
              borderRadius: '10px'
            }}>
              <h2>Carrinho</h2>
              {productsInCart.length > 0 ? (

                <div style={{
                  display: "flex",
                  padding: '10px',
                  border: '1px solid',
                  borderRadius: '10px',
                  flexDirection: 'column'
                }}>
                  {productsInCart.map(product => (
                    <React.Fragment key={product.id}>
                      <div style={{
                        background: '#2a303c',
                        width: '100%',
                        display: 'flex',
                        padding: '10px',
                        marginTop: '5px',
                        borderRadius: '10px',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <StyledLink to={`/product/${product.id}`}>
                          <Image
                            src={`${apiUrl}/images/${product.imagem}`}
                            alt={product.nome}
                          />
                          <div style={{
                            background: '#2a303c',
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            padding: '15px',
                            margin: '5px',
                            borderRadius: '10px',
                            alignItems: 'center'
                          }}>
                            <Text>{product.nome}</Text>
                            <Text>R${product.preco}</Text>
                            <Text>Quantidade: {product.quantidade}</Text>
                          </div>
                        </StyledLink>
                        <FaRegTrashAlt
                          style={{ cursor: 'pointer' }}
                          color="red"
                          size={20}
                          onClick={() => removeCart(product.idCarrinho)}
                        />
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <h1 style={{ color: 'black' }}>Nenhum item seu no carrinho</h1>
              )}

              <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>
                <button style={{ margin: '5px', padding: '3px' }}>Limpar carrinho</button>
                <button style={{ margin: '5px', padding: '3px' }}>Finalizar carrinho</button>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
