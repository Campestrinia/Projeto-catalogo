import styled from "styled-components";

const ContainerDadDad = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 40em;
`;
const ContainerDad = styled.div`
    margin:10px;
    margin: 0;
    padding: 0;
    background-color: #f2f4f9;
    box-shadow: 0px 8px 30px rgba(0, 0, 0);
    color: #222731;
    max-width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
`;

const Container = styled.div`
    display: flex;
    margin: 0px 80px;
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


export { ContainerDad, Container, Imagi, ContainerSon, About, Button, ImagamProduct, Itens, Input, Select, ContainerButton, ContainerDadDad };