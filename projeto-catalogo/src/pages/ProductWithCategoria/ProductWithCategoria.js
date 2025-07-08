import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  PageContainer,
  FilterSidebar,
  FilterGroup,
  FilterTitle,
  FilterInput,
  ProductGridContainer,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  CategoryLink,
} from "./productWithCategoria.css";

export function ProductWithCategoria() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setIsLoading(true);
      try {
        const [productsResponse, categoryResponse, allCategoriesResponse] =
          await Promise.all([
            axios.get(`${apiUrl}/api/productWithCategoria/${id}`),
            axios.get(`${apiUrl}/api/categoria/${id}`),
            axios.get(`${apiUrl}/api/categoria`),
          ]);

        setAllProducts(productsResponse.data);
        setFilteredProducts(productsResponse.data);
        setCategoryName(categoryResponse.data.nome);
        setAllCategories(allCategoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [id, apiUrl]);

  useEffect(() => {
    let products = [...allProducts];
    if (minPrice) {
      products = products.filter((p) => p.preco >= parseFloat(minPrice));
    }
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

        <FilterGroup>
          <FilterTitle>Categorias</FilterTitle>
          {allCategories.map((cat) => (
            <CategoryLink
              key={cat.id}
              to={`/productWithCategoria/${cat.id}`}
              isactive={cat.id.toString() === id}
            >
              {cat.nome}
            </CategoryLink>
          ))}
        </FilterGroup>
      </FilterSidebar>

      <ProductGridContainer>
        <h1>{categoryName || "Produtos"}</h1>
        {filteredProducts.length > 0 ? (
          <ProductGrid>
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
