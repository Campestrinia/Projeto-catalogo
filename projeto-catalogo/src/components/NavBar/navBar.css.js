import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
      background-color: #222731;
  }
`;

const Container = styled.div`
  display: flex;
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

const NoLink = styled.a`
    text-decoration: none;
    color: #f2f4f9;
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
    border-radius: 30px
`;

export { Container, Logo, Menu, GlobalStyle, NoLink, Foto, LoginAndRegister };