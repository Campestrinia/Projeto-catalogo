import styled from "styled-components";

// Cores principais
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
`;

const Container = styled.div`
  display: flex;
  margin: 40px 80px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ContainerSon = styled.div`
  display: flex;
  margin: 25px;
  padding: 20px;
  border: 2px solid ${accent};
  border-radius: 12px;
  background-color: ${accent};
  color: ${textColor};
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Imagi = styled.img`
  width: 300px;
  height: 300px;
  margin: 15px;
  border-radius: 8px;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px;
  padding: 20px;
  border: 2px solid ${accent};
  border-radius: 12px;
  background-color: ${accent};
  color: ${textColor};
  width: 400px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: ${textColor};
  color: ${bgColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;

const ContainerButton = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const ImagamProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Itens = styled.div`
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 6px;
  border: 1px solid #ccc;
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
