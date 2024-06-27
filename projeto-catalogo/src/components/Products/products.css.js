import styled from "styled-components";

const CarouselContainer = styled.div`
  background-color: rgba(45, 86, 219);
  position: relative;
  width: 100%;
  padding: 20px; /* Adiciona padding ao contêiner principal */
  box-sizing: border-box; /* Garante que o padding seja incluído no tamanho total */
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 100px;
`;

const Card = styled.div`
  background-color: white;
  width: 200px;
  height: 250px;
  margin-right: 10px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column; /* Change to column to stack items vertically */
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  scroll-snap-align: start;
  margin: 25px;
`;

const Image = styled.img`
    width: 80%;
    height: 100px;
    margin: 10px 0;

`;
export { CarouselContainer, Container, Card, Image };