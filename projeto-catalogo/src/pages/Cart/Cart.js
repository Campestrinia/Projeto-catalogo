import React, { useEffect, useState, useContext } from 'react';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { Products } from '../../components/Products/Products';
import axios from 'axios';
import { LoginContext } from '../../context/Lcontext';

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

        const carrinhoRes = await axios.get(`${apiUrl}/api/carrinho/usuario/${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });
        console.log("✅ Carrinho encontrado:", carrinhoRes.data);

        const idCarrinho = carrinhoRes.data.id;

        const itemsRes = await axios.get(`${apiUrl}/api/carrinhoItem/carrinho/${idCarrinho}`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        });
        console.log("📦 Itens do carrinho:", itemsRes.data);

        const mappedProducts = itemsRes.data.map(item => ({
          ...item.produto,
          quantidade: item.quantidade
        }));

        setProductsInCart(mappedProducts);
      } catch (error) {
        console.error("❌ Erro ao carregar carrinho:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartProducts();
  }, [user, apiUrl]);

  return (
    <>
      <NavBar />
      {loading ? (
        <p>Carregando carrinho...</p>
      ) : (
        <Products products={productsInCart} />
      )}
      <Footer />
    </>
  );
}
