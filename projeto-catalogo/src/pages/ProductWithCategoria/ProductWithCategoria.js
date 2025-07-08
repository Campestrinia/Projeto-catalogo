import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Importando os componentes, incluindo o novo FilterInput
import {
  PageContainer,
  FilterSidebar,
  FilterGroup,
  FilterTitle,
  FilterInput, // <-- NOVO
  ProductGridContainer,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./productWithCategoria.css";

export function ProductWithCategoria() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  // --- ESTADOS ATUALIZADOS ---
  const [allProducts, setAllProducts] = useState([]); // Guarda a lista original da API
  const [filteredProducts, setFilteredProducts] = useState([]); // Guarda a lista que será exibida
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // --- NOVOS ESTADOS PARA O FILTRO DE PREÇO ---
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // 1. useEffect para buscar os dados da API APENAS UMA VEZ
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setIsLoading(true);
      try {
        const [productsResponse, categoryResponse] = await Promise.all([
          axios.get(`${apiUrl}/api/productWithCategoria/${id}`),
          axios.get(`${apiUrl}/api/categoria/${id}`),
        ]);

        setAllProducts(productsResponse.data); // Guarda a lista completa
        setFilteredProducts(productsResponse.data); // Exibe a lista completa inicialmente
        setCategoryName(categoryResponse.data.nome);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [id, apiUrl]);

  // 2. NOVO useEffect para aplicar o filtro sempre que os preços ou a lista principal mudarem
  useEffect(() => {
    let products = [...allProducts];

    // Filtra por preço mínimo
    if (minPrice) {
      products = products.filter((p) => p.preco >= parseFloat(minPrice));
    }

    // Filtra por preço máximo
    if (maxPrice) {
      products = products.filter((p) => p.preco <= parseFloat(maxPrice));
    }

    setFilteredProducts(products);
  }, [minPrice, maxPrice, allProducts]);

  if (isLoading) {
    return (
      <div
        style={{
          background: "#1e222a",
          color: "white",
          height: "100vh",
          display: "grid",
          placeContent: "center",
        }}
      >
        Carregando produtos...
      </div>
    );
  }

  return (
    <PageContainer>
      <FilterSidebar>
        <FilterGroup>
          <FilterTitle>Faixa de Preço</FilterTitle>
          <label htmlFor="minPrice">Preço Mínimo (R$)</label>
          <FilterInput
            id="minPrice"
            type="number"
            placeholder="Ex: 50"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label htmlFor="maxPrice">Preço Máximo (R$)</label>
          <FilterInput
            id="maxPrice"
            type="number"
            placeholder="Ex: 300"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </FilterGroup>
        {/* Você pode adicionar outros grupos de filtro aqui no futuro */}
      </FilterSidebar>

      <ProductGridContainer>
        <h1>{categoryName || "Produtos"}</h1>
        {filteredProducts.length > 0 ? (
          <ProductGrid>
            {/* Mapeando a lista FILTRADA */}
            {filteredProducts.map((product) => (
              <ProductCard to={`/product/${product.id}`} key={product.id}>
                <ProductImage
                  src={`${apiUrl}/images/${product.imagem}`}
                  alt={product.nome}
                />
                <ProductInfo>
                  <ProductName>{product.nome}</ProductName>
                  <ProductPrice>
                    R$ {Number(product.preco).toFixed(2).replace(".", ",")}
                  </ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        ) : (
          <p>Nenhum produto encontrado com os filtros aplicados.</p>
        )}
      </ProductGridContainer>
    </PageContainer>
  );
}
