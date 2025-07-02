import styled from "styled-components";

// 🎨 Paleta de cores "Herói"
const bgColor = "#1e222a";
const cardColor = "#2c3340";
const textColor = "#f2f4f9";
const primary = "#00a8ff"; // Azul principal para destaque

const ContainerDad = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${bgColor}; // Fundo com cor sólida
  color: ${textColor};
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    font-size: 42px;
    font-weight: bold;
    margin: 30px 0;
    position: relative;
    text-align: center;
    color: ${textColor};

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 4px;
      background-color: ${primary}; // Sublinhado com cor sólida
      margin-top: 8px;
      border-radius: 2px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  margin: 20px 80px;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

// Estilo de Card Simplificado
const baseCardStyle = `
  padding: 20px;
  border-radius: 16px;
  background-color: ${cardColor};
  color: ${textColor};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); // Sombra mais simples
`;

const ContainerSon = styled.div`
  ${baseCardStyle}
  display: flex;
  align-items: center;
`;

const Imagi = styled.img`
  width: 300px;
  height: 300px;
  margin: 15px;
  border-radius: 12px;
  object-fit: cover;
`;

const About = styled.div`
  ${baseCardStyle}
  display: flex;
  flex-direction: column;
  margin: 25px;
  width: 400px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 12px 24px;
  background-color: ${primary};
  color: ${textColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
`;

const ContainerButton = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImagamProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Itens = styled.div`
  margin: 15px 0;
  width: 100%;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

const sharedInputStyles = `
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  margin-top: 5px;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: ${bgColor};
  color: ${textColor};
  font-size: 14px;

  /* O foco foi mantido por questões de usabilidade, para o usuário saber onde está digitando */
  &:focus {
    outline: none;
    border-color: ${primary};
  }
`;

const Input = styled.input`
  ${sharedInputStyles}
`;

const Select = styled.select`
  ${sharedInputStyles}
`;

export {
  ContainerDad,
  Container,
  Imagi,
  ContainerSon,
  About,
  Button,
  ImagamProduct,
  Itens,
  Input,
  Select,
  ContainerButton,
};
