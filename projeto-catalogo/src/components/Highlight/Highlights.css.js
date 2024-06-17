import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .no-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  .no-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  no-scrollbar
`;

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 10px;
  box-sizing: border-box;
`;



const Card = styled.div`
  background-color: grey;
  width: 150px;
  height: 150px;
  margin-right: 10px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  scroll-snap-align: start;
  scroll-bar
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 1;
`;

const ButtonLeft = styled(NavButton)`
  left: 10px;
`;

const ButtonRight = styled(NavButton)`
  right: 10px;
`;

export { CarouselContainer, Container, Card, ButtonLeft, ButtonRight, GlobalStyle };
