import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

// Container principal da página do carrinho
export const CartPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

// Título da página
export const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
`;

// Layout principal que divide a página em "Itens" e "Resumo"
export const CartLayout = styled.div`
  display: grid;
  /* Em telas maiores, 2/3 para os itens, 1/3 para o resumo */
  grid-template-columns: 2fr 1fr;
  gap: 30px;

  /* Em telas menores (abaixo de 900px), as colunas ficam uma sobre a outra */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// Coluna da esquerda: Lista de itens no carrinho
export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Card para cada item individual no carrinho
export const CartItemCard = styled.div`
  display: flex;
  gap: 20px;
  background-color: var(--cor-superficie);
  padding: 20px;
  border-radius: 8px;
  border: 1px solid var(--cor-borda);
`;

export const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.1rem;
    color: #fff;
    margin: 0 0 5px 0;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--cor-primaria);
    margin: 0;
  }
`;

// Seletor de quantidade (+ e -)
export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    background-color: var(--cor-borda);
    color: #fff;
    border: none;
    width: 30px;
    height: 30px;
    font-size: 1.2rem;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: var(--cor-primaria);
    }
  }

  span {
    font-size: 1.1rem;
    font-weight: bold;
    min-width: 20px;
    text-align: center;
  }
`;

// Botão de remover item
export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--cor-texto-secundario);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ff4d4d; /* Vermelho para indicar exclusão */
  }
`;

// Coluna da direita: Resumo do pedido
export const OrderSummary = styled.div`
  background-color: var(--cor-superficie);
  padding: 30px;
  border-radius: 8px;
  border: 1px solid var(--cor-borda);
  height: fit-content; /* Para que a caixa não se estique desnecessariamente */
  position: sticky;
  top: 100px; /* Mantém o resumo fixo ao rolar a página */

  h2 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--cor-borda);
  }
`;

export const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 1rem;
  color: var(--cor-texto-secundario);

  &.total {
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--cor-borda);
  }
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background-color: var(--cor-primaria);
  color: #fff;
  padding: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.2s, background-color 0.2s;

  &:hover {
    background-color: #0088cc;
    transform: scale(1.02);
  }
`;

// Mensagem para quando o carrinho está vazio
export const EmptyCartWrapper = styled.div`
  text-align: center;
  padding: 80px 20px;

  h2 {
    font-size: 1.8rem;
    color: #fff;
    margin-bottom: 15px;
  }

  p {
    color: var(--cor-texto-secundario);
    margin-bottom: 30px;
  }

  a {
    /* Estilo para o botão 'Continuar Comprando' */
    background-color: var(--cor-primaria);
    color: #fff;
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: #0088cc;
    }
  }
`;
