import styled, { createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  .no-scrollbar {
    scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
  }
`;

const CarouselContainer = styled.div`
  background-color: #222731;
  position: relative;
  width: 100%;
  padding: 20px; /* Adiciona padding ao contêiner principal */
  box-sizing: border-box; /* Garante que o padding seja incluído no tamanho total */
`;

const Container = styled.div`
  display: flex;
  overflow: hidden; /* Esconde as barras de rolagem */
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  width: 94%;
  max-width: 100vw; /* Define uma largura máxima para evitar expansão */
  margin-left: 45px;
`;

const Card = styled.div`
  background-color: #f2f4f9;
  width: 150px;
  height: 190px;
  margin-right: 10px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  border-radius: 20px;
  padding-top: 10px; /* Add a padding top */
  box-sizing: border-box;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

const ButtonLeft = styled(NavButton)`
  left: 10px; 
  border-radius: 15px;
`;

const ButtonRight = styled(NavButton)`
  right: 10px;
  border-radius: 15px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain; /* Muda para contain */
  margin-bottom: 10px;
`;

const Text = styled.h5`
  color: #222731;
  margin: 1px;
  text-decoration: none;
  text-align: center;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* opcional, para manter a cor dos textos dentro */
`;

export { CarouselContainer, Container, Card, ButtonLeft, ButtonRight, GlobalStyle, Image, Text, StyledLink };
