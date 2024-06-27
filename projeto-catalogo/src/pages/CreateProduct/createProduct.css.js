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
    align-items: center;
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
    flex-direction: column;
`;

const Itens = styled.div`
    margin: 5px
`;

const Input = styled.input`
width: 99%;
`;

const Select = styled.select`
width: 99%;
`;


export { ContainerDad, Container, Imagi, ContainerSon, About, Button, ImagamProduct, Itens, Input, Select, ContainerButton };