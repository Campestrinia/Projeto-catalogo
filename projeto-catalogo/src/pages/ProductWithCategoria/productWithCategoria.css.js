import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// --- Barra de Filtros (Sidebar) ---

export const FilterSidebar = styled.aside`
  flex: 0 0 250px;
  background-color: var(--cor-superficie);
  border-radius: 16px;
  padding: 24px;
  height: fit-content;
  border: 1px solid var(--cor-borda);

  @media (max-width: 768px) {
    width: 100%;
    flex-basis: auto;
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 32px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: var(--cor-texto-secundario);
  }
`;

export const FilterTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--cor-borda);
  color: var(--cor-primaria);
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  background-color: var(--cor-fundo);
  border: 1px solid var(--cor-borda);
  border-radius: 8px;
  color: var(--cor-texto);
  font-size: 1rem;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: var(--cor-primaria);
  }

  /* Remove as setas do input de número */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

// --- Link de Categoria (Novo Componente) ---
export const CategoryLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 8px 12px;
  margin-bottom: 4px;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;

  // Estilo condicional para o link ativo, baseado na prop 'isactive'
  background-color: ${(props) =>
    props.isactive ? "var(--cor-primaria)" : "transparent"};
  color: ${(props) =>
    props.isactive ? "#fff" : "var(--cor-texto-secundario)"};
  font-weight: ${(props) => (props.isactive ? "bold" : "normal")};

  &:hover {
    background-color: var(--cor-fundo);
    color: var(--cor-texto);
  }
`;

// --- Grade de Produtos ---

export const ProductGridContainer = styled.main`
  flex: 1; /* Ocupa o restante do espaço */

  h1 {
    font-size: 2rem;
    margin: 0 0 24px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--cor-borda);
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
`;

// --- Card de Produto ---

export const ProductCard = styled(Link)`
  background-color: var(--cor-superficie);
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: var(--cor-texto);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--cor-borda);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--cor-primaria);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProductName = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  flex-grow: 1;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--cor-primaria);
  margin: 0;
  align-self: flex-end;
`;
