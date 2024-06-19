import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: rgb(45, 86, 219);
    height: 100vh;
    width: 100%;
`;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const ContainerBox = styled.div`
    width: 30%; /* ou a largura que você desejar */
    height: 50vh; /* ou a altura que você desejar */
    background-color: rgb(44 83 209);
    margin: auto; /* centraliza horizontalmente */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* ajusta a posição exata do centro */
    display: flex;
    justify-content: center;
`;

const ContainerLogin = styled.div`
    display: flex;
    justify-content: Center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
`;
const H3 = styled.h3`
    margin: 5px;
    display: flex;
    justify-content: flex-start;
    width: 162px;
`;

const Button = styled.button`
    margin: 10px
`;
const NoLink = styled.a`
    text-decoration: none;
    color: inherit;
    cursor: default;
    margin: 10px;
`;

export { Container, GlobalStyle, ContainerBox, ContainerLogin, H3, Button, NoLink }