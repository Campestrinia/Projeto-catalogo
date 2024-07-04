import styled, { createGlobalStyle } from "styled-components";

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
  background-color: rgba(45, 86, 219);
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
  width: 100%;
  max-width: 100vw; /* Define uma largura máxima para evitar expansão */
`;

const Card = styled.div`
  background-color: white;
  width: 150px;
  height: 175px;
  margin-right: 10px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column; /* Change to column to stack items vertically */
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  scroll-snap-align: start;
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
`;

const ButtonRight = styled(NavButton)`
  right: 10px; 
`;

const Image = styled.img`
  width: 80%;
  height: 100px;
  margin: 10px 0;
`;

export { CarouselContainer, Container, Card, ButtonLeft, ButtonRight, GlobalStyle, Image };
