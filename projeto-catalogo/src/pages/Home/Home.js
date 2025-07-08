import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaMicrochip, // Processador (Padrão)
  FaPowerOff, // Fonte de Alimentação
  FaFan, // Placa de Vídeo
  FaMemory, // Memórias
  FaHdd, // Armazenamento (SSD, HD)
  FaServer, // Gabinete / Placa-mãe
  FaKeyboard, // Teclados
  FaDesktop, // Monitores
  FaMouse, // Mouses
  FaHeadset, // Headsets
  FaVideo, // Webcams
  FaNetworkWired, // Placa de rede
  FaPlug, // Cabos / Adaptadores
  FaSnowflake, // Cooler
} from "react-icons/fa";

import { Highlight } from "../../components/Highlight/Highlights";
import { Pagination } from 'antd';
import {
  GlobalStyle,
  MainContainer,
  HeroSection,
  CtaButton,
  SectionTitle,
  CategoriesSection,
  CategoryGrid,
  CategoryCard,
  ProductGridContainer,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./home.css";

const getCategoryIcon = (categoryName) => {
  const name = categoryName.toLowerCase();

  if (name.includes("processador")) return <FaMicrochip />;
  if (name.includes("fonte")) return <FaPowerOff />;
  if (name.includes("gabinete")) return <FaServer />;
  if (name.includes("cooler")) return <FaSnowflake />;
  if (name.includes("armazenamento")) return <FaHdd />;
  if (name.includes("memoria")) return <FaMemory />; //
  if (name.includes("placa mãe") || name.includes("placa-mãe"))
    return <FaServer />;
  if (name.includes("placa de vídeo")) return <FaFan />;
  if (name.includes("placa de rede")) return <FaNetworkWired />;
  if (name.includes("teclado")) return <FaKeyboard />;
  if (name.includes("monitor")) return <FaDesktop />;
  if (name.includes("mouse")) return <FaMouse />;
  if (name.includes("headset")) return <FaHeadset />;
  if (name.includes("webcam")) return <FaVideo />;
  if (name.includes("adaptador")) return <FaPlug />;
  if (name.includes("cabo")) return <FaPlug />;

  // Se nenhuma categoria corresponder, usa o ícone padrão.
  return <FaMicrochip />;
};

export function Home() {
  const [products, setProducts] = useState([]);
  const [ProductsByOrdem, setProductsByOrde] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiBackEnd = process.env.REACT_APP_API_URL;

  useEffect(() => {
    if (!apiBackEnd) return;
    const fetchInitialData = async () => {
      try {
        const [productsResponse, categoriesResponse] = await Promise.all([
          axios.get(`${apiBackEnd}/api/product`),
          axios.get(`${apiBackEnd}/api/categoria`),
        ]);
        setProducts(productsResponse.data);
        setProductsByOrde(productsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [apiBackEnd]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <HeroSection>
          <h1>HardwareHerói: Os Componentes para sua Vitória</h1>
          <CtaButton href="#products">CONFERIR COMPONENTES</CtaButton>
        </HeroSection>

        {/* Seção de Categorias */}
        <CategoriesSection>
          <SectionTitle>Navegue por Categorias</SectionTitle>
          <CategoryGrid>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                to={`/productWithCategoria/${category.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <i>{getCategoryIcon(category.nome)}</i>
                {category.nome}
              </CategoryCard>
            ))}
          </CategoryGrid>
        </CategoriesSection>

        <div id="products">
          <Highlight products={products.slice(-18)} />
        </div>
      </MainContainer>
      <ProductGridContainer>
        {ProductsByOrdem.length > 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ minWidth: '80%' }}>

              <ProductGrid>
                {ProductsByOrdem.map((product) => (
                  <ProductCard to={`/product/${product.id}`} key={product.id}>
                    <ProductImage
                      src={`${apiBackEnd}/images/${product.imagem}`}
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
              <Pagination style={{ justifyContent: 'center', marginTop: '15px', marginBottom: '15px' }} defaultCurrent={6} total={ProductsByOrdem.length} />
            </div>
          </div>
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </ProductGridContainer>
    </>
  );
}
