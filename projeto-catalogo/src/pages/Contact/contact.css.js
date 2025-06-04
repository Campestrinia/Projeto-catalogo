import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0px;
  padding: 0px;
  }
`;

const BoxAll = styled.div`
  background-color: #f2f4f9;
  height: 120%;
  width: 100%;
  box-sizing: border-box;
`;

const Box1 = styled.div`
  background-image: linear-gradient(359deg, #222731, #222731);
  width: 100%;
  height: 200px;
  margin: auto;
  display: flex;
`;

const Text = styled.div`
  margin: 0;
  color: #f2f4f9;
  font-family: system-ui;
  margin-left: 60px;
  h1 {
    margin: 0px;
    margin-top: 20px;
    margin-block-end: 10px;
  }
  p {
    margin: 0px;
  }
`;

const Img = styled.div`
  background-color: #222731;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  img {
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
  }
`;

const Box2 = styled.div`
  width: 356px;
  height: 300px;
  background-color: #222731;
  margin-right: 20px;
  margin-top: 20px;
  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  ul {
    list-style: none;
    padding-left: 0px;
  }
  a {
    text-decoration: none;
    margin: 10px;
    color: white;
    font-family: monospace;
    font-size: 17px;
    height: 10px;
  }
`;

const Box2mini = styled.div`
    text-align: center;
    
    h3{
    font-family: sans-serif;
    margin: 0px
        font-family: sans-serif;
    margin: 0px;
    border-bottom: ridge #f2f4f9;
    color: #f2f4f9;
    
    }

    
`;

const Box3 = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222731;
  margin-right: 10%;
  margin-top: 20px;
  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  p {
    font-family: system-ui;
  }
  h4 {
    text-align: center;
    font-family: sans-serif;
    font-size: 18px;
  }
  H6 {
    text-align: center;
    font-size: 20px;
    font-family: monospace;
    color: #f2f4f9;
    margin-top: 20px;
  }
`;

const Boxin = styled.div`
  display: flex;
`;

const Box3Hidde = styled.div``;

const Conteiner = styled.div`
    height: 80%;
    box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
    height: 80%;
    background-color: #f2f4f9;
    border-radius: 20px;
    padding: 5px;
    margin-block-end: 10px;
     margin-left: 20px;
     margin-right: 20px;
    -
`;

const Cont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const BoxUlt = styled.div`
  background-color: white;
  width: 400px;
  height: 151px;
  margin-left: 100px;
  margin-right: 100px;
  padding: 16px 24px;
  margin-block-end: 50px;
  box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  h4 {
    margin: 0px;
    margin-top: 1px;
    margin-left: 5px;
    font-family: system-ui;
  }
  h3 {
    font-family: cursive;
    color: #222731;
    margin-right: 195px;
  }
  h5 {
    font-size: 15px;
    font-family: system-ui;
    margin-top: 20px;
    color: #222731;
  }
`;

const Tend = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  h2 {
    font-family: sans-serif;
    color: #f2f4f9;
    border-bottom: solid white;
    width: 300px;

    text-align: center;
  }
  p {
    margin-left: 10px;
  }
`;
const Boxn = styled.div`
  display: flex;
`;

const Boxwn = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Arrow = styled.div`
  overflow: hidden;
  cursor: pointer;
  transform: rotate(180deg);
  img {
    -webkit-transition: -webkit-transform 0.5s ease;
    transition: transform 0.5s ease;
  }
  img:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transform: rotate(-180deg);
  }
`;

export {
  GlobalStyle,
  BoxAll,
  Box1,
  Text,
  Img,
  Box2,
  Box3,
  Boxin,
  Box2mini,
  Box3Hidde,
  Conteiner,
  Cont,
  BoxUlt,
  Tend,
  Boxn,
  Arrow,
  Boxwn,
};
