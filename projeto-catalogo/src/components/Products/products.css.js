import styled from "styled-components";
import { Link } from 'react-router-dom';

const CarouselContainer = styled.div`
  background-color: #222731;
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
  background-color: #f2f4f9;
  width: 200px;
  height: 250px;
  margin: 25px 10px; /* ajustei aqui para manter espaçamento lateral e vertical */
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza horizontalmente */
  padding-top: 20px; /* NOVO: empurra o conteúdo um pouco pra baixo */
  box-sizing: border-box; /* Garante que padding não estoura o card */
  scroll-snap-align: start;
  border-radius: 20px;
`;

const Image = styled.img`
  width: 80%;
  height: 100px;
  object-fit: contain; /* NOVO: imagem inteira visível sem distorcer */
  margin-bottom: 10px; /* espaço entre imagem e texto */
`;


const Text = styled.h4`
  color: #222731;
  margin: 10px;
  text-decoration: none;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* opcional, para manter a cor dos textos dentro */
`;
export { CarouselContainer, Container, Card, Image, Text, StyledLink };