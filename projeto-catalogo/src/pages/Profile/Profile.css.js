import styled from "styled-components";
import InputMask from "react-input-mask";

const Container = styled.div`
  background-color: #222731;
`;
const MainContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
  background-color: #222731;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  h1 {
    color: #f2f4f9;
  }
`;

const GridContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Cards = styled.div`
  flex: 1;
  min-width: 280px;
  background: #f2f4f9;
  border-radius: 12px;
  padding: 10px 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: 0.2s;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 12px;
  margin-top: 10px;
  color: #222731;
  font-weight: 600;
`;

const Button = styled.button`
  background-color: #f2f4f9;
  color: #222731;
  border: none;
  padding: 8px 8px;
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
const ButtonOnSubmit = styled.button`
  background-color: #f2f4f9;
  color: #222731;
  border: none;
  padding: 8px 8px;
  font-size: 16px;
  border: 2px solid #f2f4f9;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  align-self: center;

  &:hover {
    background-color: #f2f4f9;
    color: #222731;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    opacity: 0.95;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
`;

const InputStyled = styled(InputMask)`
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
const TitleModal = styled.div`
  font-size: 32px;
  margin-bottom: 24px;
  text-align: center;
  color: #222731;
`;

export {
  Container,
  MainContainer,
  GridContainer,
  Cards,
  Title,
  Button,
  InputStyled,
  InputWithIcon,
  LeftIconWrapper,
  TitleModal,
  ButtonOnSubmit,
};
