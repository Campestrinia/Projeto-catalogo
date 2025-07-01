// Em: /pages/Home/Home.js

import React, { useState, useEffect } from "react";
import axios from "axios";

// Componentes da página
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { Highlight } from "../../components/Highlight/Highlights";
import { Products } from "../../components/Products/Products";

// Estilos importados do arquivo .css.js (somente os que vamos usar)
import { GlobalStyle, MainContainer, HeroSection, CtaButton } from "./home.css";

export function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiBackEnd = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!apiBackEnd) return;
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiBackEnd}/api/product`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [apiBackEnd]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        {/* 1. Seção de Banner (Hero) - ATUALIZADA */}
        <HeroSection>
          <h1>HardwareHerói: Os Componentes para sua Vitória</h1>
          <CtaButton href="#products">CONFERIR COMPONENTES</CtaButton>
        </HeroSection>

        {/* SEÇÃO DE CATEGORIAS REMOVIDA */}

        {/* 2. Seus componentes de Destaques e Produtos */}
        <div id="products">
          <Highlight products={products.slice(-18)} />
          {/* <Products products={products} /> */}
        </div>
      </MainContainer>
    </>
  );
}
