import styled, { css } from "styled-components";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

// --- Paleta de Cores "HardwareHerói" ---
const bgColor = "#1e222a";
const cardColor = "#2c3340";
const textColor = "#f2f4f9";
const primary = "#00a8ff";
const danger = "#e74c3c";

// ======================================
// DEFINIÇÃO DOS COMPONENTES DE LAYOUT
// ======================================

const ProfilePageLayout = styled.div`
  display: flex;
  gap: 24px;
  min-height: 60vh;
  max-height: 89vh;
  padding: 24px;
  background-color: ${bgColor};

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const SidebarNav = styled.nav`
  flex: 0 0 280px;
  background-color: ${cardColor};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  @media (max-width: 992px) {
    width: 100%;
    flex-basis: auto;
  }
`;

const SidebarHeader = styled.div`
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${bgColor};

  h3 {
    margin: 8px 0 4px 0;
    color: ${textColor};
    font-size: 1.25rem;
  }

  p {
    color: #bdc3c7;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const NavMenu = styled.div`
  flex-grow: 1;
`;

const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px;
  margin-bottom: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: ${textColor};
  background-color: transparent;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${bgColor};
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: ${primary};
      color: ${bgColor} !important;
      &:hover {
        background-color: ${primary};
      }
    `}
`;

const SidebarFooter = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContentPanel = styled.main`
  flex: 1;
  background-color: ${cardColor};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow: hidden; /* Previne que algo vaze do painel */
`;

// ======================================
// DEFINIÇÃO DOS COMPONENTES DE CONTEÚDO
// ======================================

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0 0 5px 0;
  padding-bottom: 16px;
  color: ${textColor};
  font-weight: 600;
  border-bottom: 1px solid ${bgColor};
`;

const Cards = styled.div`
  /* Estilo padrão para listas (Endereços, Cartões) */
  max-height: 480px;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${primary};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${bgColor};
  }

  /* Seletor :has() para aplicar o grid APENAS se os filhos forem links (Favoritos, Vendas) */
  &:has(> a) {
    display: grid;
    /* Cria colunas responsivas com um mínimo de 200px */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
    padding-right: 4px;
  }
`;

const InfoItem = styled.div`
  background-color: ${bgColor};
  border-radius: 8px;
  padding: 12px;
  border-left: 4px solid ${primary};
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;

  p {
    margin: 4px 0;
    font-size: 0.95rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  strong {
    color: #bdc3c7;
  }
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 4 / 3; /* Proporção da imagem para evitar distorção */
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const Button = styled.button`
  background-color: ${primary};
  color: ${bgColor};
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.2s ease;
  margin-top: 10px;
  width: auto;

  &:hover {
    opacity: 0.9;
  }

  ${(props) =>
    props.variant === "danger" &&
    css`
      background-color: ${danger};
      color: ${textColor};
    `}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

// ======================================
// DEFINIÇÃO DOS COMPONENTES DE FORMULÁRIO
// ======================================

const InputStyled = styled(InputMask)`
  width: 100%;
  height: 48px;
  padding: 0 16px 0 45px;
  font-size: 1rem;
  border: 2px solid ${bgColor};
  border-radius: 8px;
  background-color: ${bgColor};
  color: ${textColor};
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #7f8c8d;
  }

  &:focus {
    outline: none;
    border-color: ${primary};
  }
`;

const InputWithIcon = styled.div`
  position: relative;
  width: 100%;
`;

const LeftIconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #7f8c8d;
`;

const TitleModal = styled.h2`
  font-size: 2rem;
  margin-bottom: 24px;
  text-align: center;
  color: ${textColor};
`;

// ======================================
// BLOCO DE EXPORTAÇÃO ÚNICO E CORRIGIDO
// ======================================
export {
  ProfilePageLayout,
  SidebarNav,
  SidebarHeader,
  NavMenu,
  NavItem,
  SidebarFooter,
  ContentPanel,
  Title,
  Cards,
  InfoItem,
  ProductImage,
  StyledLink,
  Button,
  InputStyled,
  InputWithIcon,
  LeftIconWrapper,
  TitleModal,
};
