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

      if (!apiUrl) {
        console.error("❌ Variável REACT_APP_API_URL não definida.");
        setLoading(false);
        return;
      }

      try {
        console.log("📦 Iniciando fetchCartProducts");
        console.log("🔍 API URL:", apiUrl);
        console.log("👤 Usuário:", user);

        const carrinhoRes = await axios.get(
          `${apiUrl}/api/carrinho/usuario/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log("✅ Carrinho encontrado:", carrinhoRes.data);

        const idCarrinho = carrinhoRes.data.id;

        const itemsRes = await axios.get(
          `${apiUrl}/api/carrinhoItem/carrinho/${idCarrinho}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log("📦 Itens do carrinho:", itemsRes.data);

        setProductsInCart(itemsRes.data);
      } catch (error) {
        console.error("❌ Erro ao carregar carrinho:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartProducts();
  }, [user, apiUrl]);

  const removeCart = async (id) => {
    message.info(id)
  };
  return (
    <>
      {loading ? (
        <p>Carregando carrinho...</p>
      ) : (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '10px' }}>

          <div style={{ display: "flex", border: '1px solid', width: '50%', flexDirection: 'column', padding: '10px' }}>
            Carrinho
            {
              productsInCart.map((product) => (
                <React.Fragment key={product.id}>
                  <div style={{ display: "flex", background: '#f2f4f9', padding: '10px', border: '1px solid', borderRadius: '10px', flexDirection: 'column' }}>

                    <div style={{ background: '#2a303c', width: '100%', display: 'flex', padding: '15px', borderRadius: '10px', alignItems: 'center', justifyContent: 'space-between' }}>
                      <StyledLink to={`/product/${product.id}`}>
                        <Image
                          src={`${apiUrl}/images/${product.imagem}`}
                          alt={product.nome}
                        />
                        <div style={{
                          background: '#2a303c', display: 'flex', width: '100%', justifyContent: 'space-between', padding: '15px', margin: '5px', borderRadius: '10px',
                          alignItems: 'center'
                        }}>
                          <Text>{product.nome}</Text>
                          <Text>R${product.preco}</Text>
                          <Text>Quantidade: {product.quantidade}</Text>
                        </div>
                      </StyledLink>
                      <FaRegTrashAlt color="red" size={20} onClick={() => removeCart(product.id)} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>
                      <button style={{ margin: '5px', padding: '3px' }}>Limpar carrinho</button>
                      <button style={{ margin: '5px', padding: '3px' }}>Finalizar carrinho</button>
                    </div>

                  </div>
                </React.Fragment>
              ))
            }
          </div>
        </div>
      )}
    </>
  );
}
