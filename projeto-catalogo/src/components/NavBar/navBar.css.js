import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: rgba(45, 86, 219);
  justify-content: space-between;
  `;
const Logo = styled.div`
  display: flex;
    width: 100px;
    align-items: center;
    justify-content: center;
  `;
const Menu = styled.div`
  display: flex;
  width: auto;
justify-content: center;
    align-items: center;
    justify-content: space-evenly;
        font-size: 20px;
        font-family:mon
  `;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;
const NoLink = styled.a`
    text-decoration: none;
    color: inherit;
    cursor: default;
    margin: 10px;
`;
const Foto = styled.img`
    height: 70px;
`;

const LoginAndRegister = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
    border: 1px solid;
`;

export { Container, Logo, Menu, GlobalStyle, NoLink, Foto, LoginAndRegister };