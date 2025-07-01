// no seu arquivo /components/Footer/footer.css.js

import styled from "styled-components";

// O container principal do footer. Usamos a tag semântica <footer>
export const FooterWrapper = styled.footer`
  background-color: var(--cor-superficie); /* Cor de fundo consistente */
  color: var(--cor-texto-secundario);
  padding: 50px 5%;
`;

// O grid que organiza as colunas do footer de forma responsiva
export const FooterGrid = styled.div`
  display: grid;
  /* MÁGICA DA RESPONSIVIDADE: 
     Cria colunas de no mínimo 220px. Se não couberem, elas quebram a linha automaticamente.
  */
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px; /* Espaçamento entre as colunas */
  max-width: 1200px;
  margin: 0 auto;
`;

// Cada coluna individual do footer
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espaçamento entre os itens da coluna */
`;

// Título de cada coluna
export const ColumnTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff; /* Títulos em branco para destaque */
  margin-bottom: 10px;
  position: relative;
  padding-bottom: 10px;

  /* Adiciona uma pequena linha azul abaixo do título */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 30px;
    height: 2px;
    background-color: var(--cor-primaria);
  }
`;

// Parágrafo de texto usado na descrição e contatos
export const FooterText = styled.p`
  line-height: 1.6;
  font-size: 0.9rem;
  margin: 0; /* Reseta margens do parágrafo */

  /* Estilo para ícones dentro do texto */
  svg {
    margin-right: 8px;
    vertical-align: middle;
    color: var(--cor-primaria);
  }
`;

// Links do footer
export const FooterLink = styled.a`
  color: var(--cor-texto-secundario);
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--cor-primaria);
  }
`;

// Barra de copyright no final
export const CopyrightBar = styled.div`
  background-color: var(--cor-fundo); /* Fundo mais escuro para distinção */
  text-align: center;
  padding: 15px;
  font-size: 0.8rem;
  color: var(--cor-texto-secundario);
  margin-top: 40px;
`;
