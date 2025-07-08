import { createGlobalStyle, styled } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Paleta de cores baseada no seu background original */
    --cor-primaria: #00aaff;
    --cor-fundo: #222731;
    --cor-superficie: #2a303c;
    --cor-texto: #e0e0e0;
    --cor-texto-secundario: #a0a0a0;
    --cor-borda: #3c4250;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
  }

  h1, h2, h3 {
    color: #ffffff;
  }
`;

// ========================================================================
// ESTILOS PARA AS SEÇÕES DA PÁGINA HOME
// ========================================================================

export const MainContainer = styled.main`
  width: 100%;
`;

export const HeroSection = styled.section`
  height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://placehold.co/1920x1080/222731/e0e0e0?text=HardwareHerói");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
    max-width: 600px;
  }
`;

// Botão de "Chamada para Ação" do banner
export const CtaButton = styled.a`
  background-color: var(--cor-primaria);
  color: #fff;
  padding: 15px 30px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #0088cc;
    transform: scale(1.05);
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
  color: var(--cor-texto);
`;

export const CategoriesSection = styled.section`
  padding: 60px 20px;
  background-color: var(--cor-superficie);
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CategoryCard = styled(Link)`
  background-color: var(--cor-fundo);
  border: 1px solid var(--cor-borda);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: var(--cor-texto-secundario);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  transition: transform 0.3s ease, border-color 0.3s ease;

  i {
    font-size: 40px;
    color: var(--cor-primaria);
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--cor-primaria);
  }
`;
