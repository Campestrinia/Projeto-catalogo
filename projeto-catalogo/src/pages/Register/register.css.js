import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "react-tooltip/dist/react-tooltip.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222731;
  min-height: ${window.innerHeight - 100}px;
  padding-bottom: 60px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
      background-color: #222731;
  }
`;

const ContainerBox = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: #f2f4f9;
  margin: 40px auto 40px auto;
  padding: 20px 30px;
  border-radius: 24px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

const ContainerRegister = styled.div`
  display: flex;
  justify-content: Center;
  align-items: baseline;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 0px 20px 0px 20px;
`;

const NoLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: default;
  margin: 10px;
  height: 18px;
`;

const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 35px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  margin: 8px 0;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:focus {
    border-color: #6c63ff;
    background-color: #fff;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 24px;
  text-align: center;
  color: #222731;
  margin: 0px 15px 5px 15px;
`;

const Alert = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffe6e6;
  color: #d8000c;
  padding: 8px 12px;
  border-left: 4px solid #d8000c;
  border-radius: 8px;
  font-size: 14px;
  width: 94%;
  margin-bottom: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
  overflow: hidden;
  max-height: ${({ visible }) => (visible ? "100px" : "0")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  padding: ${({ visible }) => (visible ? "8px 12px" : "0 12px")};

  svg {
    margin-right: 8px;
  }
`;

const Button = styled.button`
  background-color: #f2f4f9;
  color: #222731;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border: 2px solid #222731;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  align-self: center;

  &:hover {
    background-color: #222731;
    color: #f2f4f9;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    opacity: 0.95;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

const InputWithIcon = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const LeftIconWrapper = styled.div`
  position: absolute;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const IconButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkButton = styled.button`
  background-color: #f2f4f9;
  color: #222731;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid #222731;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #222731;
    color: #f2f4f9;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    opacity: 0.95;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

export {
  Container,
  GlobalStyle,
  ContainerBox,
  ContainerRegister,
  Button,
  NoLink,
  InputStyled,
  Title,
  Alert,
  InputWithIcon,
  IconButton,
  LeftIconWrapper,
  LinkButton,
};
