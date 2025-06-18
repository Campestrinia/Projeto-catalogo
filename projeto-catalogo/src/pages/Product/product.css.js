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

const ImagamProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto;
`;

const ContainerButtonAndAbout = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`;

const ContainerSemelhantes = styled.div`
  display: flex;
  width: 600px;
  margin: 0px auto;
  overflow-x: auto;
  background-color: ${accent};
  border-radius: 16px;
  padding: 16px;
  gap: 12px;
  height: 220px;
`;

const Card = styled.div`
  background-color: ${textColor};
  width: 7vw;
  height: 180px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
  border-radius: 16px;
  padding: 12px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
  border-radius: 10px;
`;

const NavButton = styled.button`
  position: absolute;
  top: 85%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  color: ${textColor};
  border: none;
  padding: 8px 20px;
  border-radius: 10px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(60, 60, 60, 0.7);
  }
`;

const ButtonLeft = styled(NavButton)`
  left: 5%;
`;

const ButtonRight = styled(NavButton)`
  right: 5%;
`;

const AboutSemelhantes = styled.div`
  color: ${bgColor};
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  ContainerDad,
  Container,
  Imagi,
  ContainerSon,
  About,
  Button,
  ImagamProduct,
  ContainerButton,
  ContainerButtonAndAbout,
  ContainerSemelhantes,
  Card,
  Image,
  ButtonLeft,
  ButtonRight,
  AboutSemelhantes,
};
