// src/components/ProductList/ProductList.js
import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/SearchContext';

const ProductList = () => {
  const { searchTerm } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Definindo a URL base da API
  // Recomendação: Coloque isso em uma variável de ambiente (ex: .env)
  // para facilitar a troca entre desenvolvimento e produção.
  const apiUrl = "http://localhost:3001"; // <--- SUA API BASE

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      const delayDebounceFn = setTimeout(async () => {
        try {
          // CONSTRUÇÃO DA URL DA BUSCA:
          // Se searchTerm estiver vazio, busca todos os produtos.
          // Se searchTerm não estiver vazio, adiciona '?nome=TERMO_DE_BUSCA'
          const url = searchTerm
            ? `${apiUrl}/product?nome=${encodeURIComponent(searchTerm)}`
            : `${apiUrl}/product`; // Sem termo, busca todos

          const response = await fetch(url);

          if (!response.ok) {
            throw new Error(`Erro na rede: ${response.status} - ${response.statusText}`);
          }

          const data = await response.json();
          setProducts(data);
        } catch (err) {
          console.error("Erro ao buscar produtos:", err);
          setError("Não foi possível carregar os produtos. Verifique sua conexão ou tente novamente.");
        } finally {
          setLoading(false);
        }
      }, 500);

      return () => clearTimeout(delayDebounceFn);
    };

    fetchProducts();
  }, [searchTerm, apiUrl]); // Adicione apiUrl às dependências

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  if (products.length === 0 && searchTerm) {
    return <p>Nenhum produto encontrado para "{searchTerm}".</p>;
  }

  if (products.length === 0 && !searchTerm) {
    return <p>Nenhum produto cadastrado no catálogo.</p>;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          {/* Assumindo que 'imagem' é o nome do arquivo da imagem e está em /src/image/product/ no backend */}
          {product.imagem && (
            <img
              src={`${apiUrl}/images/product/${product.imagem}`} // Ajuste este caminho se suas imagens não estão em /images/product/
              alt={product.nome || 'Imagem do produto'}
            />
          )}
          <h3>{product.nome || 'Nome não disponível'}</h3>
          <p>{product.descricao || 'Descrição não disponível'}</p>
          <span>R$ {product.preco ? product.preco.toFixed(2) : 'N/A'}</span>
          {/* Adicione mais detalhes do produto aqui */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;