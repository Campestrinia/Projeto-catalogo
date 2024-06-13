import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: red;
  justify-content: space-between;
  `;
const Logo = styled.div`
  display: flex;
  background-color: blue;
    width: 100px;
    align-items: center;
    justify-content: center;
  `;
const Menu = styled.div`
  display: flex;
  background-color: green;
  width: 225px;
justify-content: center;
    align-items: center;
    justify-content: space-evenly;
  `;
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

export { Container, Logo, Menu, GlobalStyle };