import styled from "styled-components";

// Os estilos agora usam as variáveis de cores globais da sua aplicação
// (ex: --cor-fundo, --cor-primaria)

export const ContainerDad = styled.div`
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  min-height: 100vh;
  padding: 40px 20px;

  h1 {
    text-align: center;
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
  background-color: var(--cor-superficie);
  border-radius: 16px;
  border: 1px solid var(--cor-borda);
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Imagi = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid var(--cor-borda);
`;

export const FileInputLabel = styled.label`
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid var(--cor-borda);
  transition: background-color 0.3s;

  &:hover {
    background-color: #3c4250; // Um tom um pouco mais claro que a superfície
  }
`;

export const FileInput = styled.input`
  display: none; // O input real fica escondido
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 500px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 14px;
  color: var(--cor-texto-secundario);
`;

const commonInputStyles = `
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--cor-borda);
  background-color: var(--cor-fundo);
  color: var(--cor-texto);
  font-size: 16px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: var(--cor-primaria);
    box-shadow: 0 0 0 3px rgba(0, 170, 255, 0.2);
  }
`;

export const Input = styled.input`
  ${commonInputStyles}
`;

export const Select = styled.select`
  ${commonInputStyles}
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  flex-grow: 1;
  padding: 12px 24px;
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  // Estilo Primário
  ${(props) =>
    props.primary &&
    `
    background-color: var(--cor-primaria);
    color: #fff;
    &:hover {
      background-color: #0088cc;
    }
  `}

  // Estilo de Perigo
  ${(props) =>
    props.danger &&
    `
    background-color: transparent;
    color: #ff4d4f;
    border-color: #ff4d4f;
    &:hover {
      background-color: #ff4d4f;
      color: #fff;
    }
  `}

  // Estilo Secundário (Padrão)
  ${(props) =>
    !props.primary &&
    !props.danger &&
    `
    background-color: transparent;
    color: var(--cor-texto-secundario);
    border-color: var(--cor-borda);
    &:hover {
      border-color: var(--cor-texto);
      color: var(--cor-texto);
    }
  `}
`;
