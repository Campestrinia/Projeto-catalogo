import styled from "styled-components";

export const Container = styled.div`
  /* 1. Definindo o fundo claro que você quer */
  background-color: #f2f4f9;

  /* 2. Adicionando uma borda inferior para separar do conteúdo escuro */
  border-bottom: 1px solid #e0e2e7;

  padding: 5px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  font-size: 20px;
  font-family: mon;
`;

export const NoLink = styled.a`
  text-decoration: none;
  /* 3. Garantindo que o texto seja escuro para ser lido no fundo claro */
  color: #222731;
  cursor: pointer;
  margin: 10px;
  transition: color 0.2s;

  &:hover {
    color: var(--cor-superficie);
  }
`;

export const Foto = styled.img`
  height: 70px;
`;

export const LoginAndRegister = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  border: 1px solid #b0b5be; /* Cor da borda mais suave */
  border-radius: 30px;
  padding: 8px 15px;
  transition: all 0.2s;
  color: #222731; /* Cor do texto dentro do botão */

  &:hover {
    border-color: var(--cor-superficie);
  }
`;
