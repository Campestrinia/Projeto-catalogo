import styled from "styled-components";

// Paleta de cores
const bgColor = "#222731";
const textColor = "#f2f4f9";
const accent = "#3a3f4b";

const ContainerDad = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${bgColor};
  color: ${textColor};
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  h1 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 16px;
    position: relative;
    text-align: center;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background-color: ${textColor};
      margin: 8px auto 0 auto;
      border-radius: 2px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  margin: 40px 60px;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
`;

const ContainerSon = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 24px;
  border: 1px solid ${accent};
  border-radius: 16px;
  background-color: ${accent};
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Imagi = styled.img`
  width: 360px;
  height: 360px;
  margin: 10px auto;
  border-radius: 12px;
  object-fit: cover;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 24px;
  width: 420px;
  border: 1px solid ${accent};
  border-radius: 16px;
  background-color: ${accent};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
`;

const Button = styled.button`
  margin: 12px;
  padding: 12px 24px;
  background-color: ${textColor};
  color: ${bgColor};
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.03);
  }
`;

const ContainerButton = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const ImagemProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 63px 20px 60px 294px;
  flex-direction: column;
`;

const Itens = styled.div`
  margin: 5px;
`;

const Input = styled.input`
  width: 99%;
`;

const Select = styled.select`
  width: 99%;
`;

export {
  ContainerDad,
  Container,
  Imagi,
  ContainerSon,
  About,
  Button,
  ImagemProduct,
  Itens,
  Input,
  Select,
  ContainerButton,
};
