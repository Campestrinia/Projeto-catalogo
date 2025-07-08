import styled from "styled-components";
import { Link } from "react-router-dom";

// --- Paleta de Cores "HardwareHerói" ---
const bgColor = "#1e222a";
const cardColor = "#2c3340";
const textColor = "#f2f4f9";
const primary = "#00a8ff";
const accent = "#4a5568";

// --- Layout Principal da Página ---

export const PageContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 24px;
  background-color: ${bgColor};
  color: ${textColor};
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// --- Barra de Filtros (Sidebar) ---

export const FilterSidebar = styled.aside`
  flex: 0 0 250px; /* Largura fixa para a barra lateral */
  background-color: ${cardColor};
  border-radius: 16px;
  padding: 24px;
  height: fit-content; /* Faz a altura se ajustar ao conteúdo */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    flex-basis: auto;
  }
`;

export const FilterGroup = styled.div`
  margin-bottom: 24px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: #bdc3c7;
  }
`;

export const FilterTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid ${accent};
  color: ${primary};
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  background-color: ${bgColor};
  border: 1px solid ${accent};
  border-radius: 8px;
  color: ${textColor};
  font-size: 1rem;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: ${primary};
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

// --- Grade de Produtos ---

export const ProductGridContainer = styled.main`
  flex: 1; /* Ocupa o restante do espaço */

  h1 {
    font-size: 2rem;
    margin: 0 0 24px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid ${cardColor};
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
`;

// --- Card de Produto ---

export const ProductCard = styled(Link)`
  background-color: ${cardColor};
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  color: ${textColor};
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
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
  color: ${primary};
  margin: 0;
  align-self: flex-end;
`;
