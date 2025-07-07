import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

const animationStyles = css`
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s ease
    forwards;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  ${animationStyles}
`;

const ModalBox = styled.div`
  background: #f2f4f9;
  padding: 30px;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  position: relative;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  ${animationStyles}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
`;

export { Backdrop, ModalBox, CloseButton };
