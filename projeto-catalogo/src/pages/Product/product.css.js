import styled from "styled-components";

const ContainerDad = styled.div`
    margin:10px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    margin: 0px 80px 0px 80px;
    justify-content: space-around;
`;

const ContainerSon = styled.div`
    display: flex;
    margin: 25px;
    border: 2px solid;
    flex-direction: column;
`;

const Imagi = styled.img`
    width: 300px; 
    height: 300px; 
    margin: 15px; 
`;
const About = styled.div`
    display: flex;
    margin: 25px;
    flex-direction: column; 
    border: 2px solid;
    width: 400px;
`;
const Button = styled.button`
    margin: 10px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
`;
const ContainerButton = styled.div`
    margin: 10px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
`;

const ImagamProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 63px 20px 60px 294px;
`;

const ContainerButtonAndAbout = styled.div`
    display: flex;
    align-items: center;
`;

const ContainerSemelhantes = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 560px;
    overflow: hidden;

    `;

const Card = styled.div`
  background-color: white;
  width: 80px;
  height: 100px;
  margin-right: 10px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
  scroll-snap-align: start;
  margin: 15px;
`;

const Image = styled.img`
    width: 80%;
    height: 100px;
    margin: 10px 0;

`;
const NavButton = styled.button`
  position: absolute;
  top: 87%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 7px;
  cursor: pointer;
  z-index: 1;
  /* Adiciona padding à esquerda e direita */
  padding-left: 20px;
  padding-right: 20px;
`;

const ButtonLeft = styled(NavButton)`
  left: 54%; /* Ajusta a posição à esquerda */
`;

const ButtonRight = styled(NavButton)`
  right: 11%; /* Ajusta a posição à direita */
`;

export {
    ContainerDad, Container, Imagi, ContainerSon, About, Button, ImagamProduct, ContainerButton, ContainerButtonAndAbout,
    ContainerSemelhantes, Card, Image, ButtonLeft, ButtonRight
};