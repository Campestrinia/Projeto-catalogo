// Em: /pages/Home/home.css.js

import { createGlobalStyle, styled } from "styled-components";

// ========================================================================
// ESTILO GLOBAL - Com a sua paleta de cores original adaptada
// ========================================================================
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

// Seção HERO (Banner principal)
export const HeroSection = styled.section`
  height: 50vh;
  /* ATUALIZADO: O texto no placeholder da imagem agora é HardwareHerói */
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
