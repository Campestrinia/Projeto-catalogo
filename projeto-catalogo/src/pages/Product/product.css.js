import styled from "styled-components";

const ContainerDad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 40px 20px;

  h1 {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 40px;
  }

  h3 {
    font-size: 24px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const ImagamProduct = styled.div`
  flex-shrink: 0;
`;

const Imagi = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 16px;
  object-fit: cover;
  background-color: var(--cor-superficie);
`;

const ContainerSon = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const ContainerButtonAndAbout = styled.div`
  display: flex;
  gap: 20px;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 24px;
  border-radius: 16px;
  background-color: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
  flex-grow: 1;

  h3,
  h4,
  h5 {
    margin: 0;
    color: var(--cor-texto);
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-weight: normal;
    line-height: 1.5;
  }

  h5 {
    font-size: 14px;
    color: var(--cor-texto-secundario);
  }
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Button = styled.button`
  padding: 12px 24px;
  width: 150px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--cor-primaria);

  // Estilo primário (com fundo) e secundário (vazado)
  background-color: ${(props) =>
    props.primary ? "var(--cor-primaria)" : "transparent"};
  color: ${(props) => (props.primary ? "#fff" : "var(--cor-primaria)")};

  &:hover {
    background-color: ${(props) =>
      props.primary ? "#0088cc" : "var(--cor-primaria)"};
    color: #fff;
    transform: scale(1.05);
  }
`;

const HeartIcon = styled.div`
  font-size: 32px;
  color: var(--cor-texto);
  cursor: pointer;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.1);
    color: var(--cor-primaria);
  }
`;

const ContainerSemelhantes = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 15px; // Evita que a scrollbar corte a sombra
`;

const Card = styled.div`
  background-color: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
  width: 200px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--cor-primaria);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const AboutSemelhantes = styled.div`
  padding: 12px;
  font-size: 14px;
  text-align: center;
  color: var(--cor-texto);

  // Para que o preço e nome fiquem em linhas separadas
  &:first-of-type {
    font-weight: bold;
    font-size: 16px;
  }
`;

export {
  ContainerDad,
  Container,
  Imagi,
  ContainerSon,
  About,
  Button,
  HeartIcon,
  ImagamProduct,
  ContainerButton,
  ContainerButtonAndAbout,
  ContainerSemelhantes,
  Card,
  Image,
  AboutSemelhantes,
};
