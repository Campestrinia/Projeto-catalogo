import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

export const PageContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h1 {
    font-size: 2.8rem;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: var(--cor-texto-secundario);
    max-width: 600px;
    margin: 0 auto;
  }
`;

// Seção de Contato Direto (Telefone e Email)
export const ContactInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 60px;
`;

export const ContactCard = styled.div`
  background: var(--cor-superficie);
  padding: 25px;
  border-radius: 8px;
  border: 1px solid var(--cor-borda);
  display: flex;
  align-items: center;
  gap: 20px;

  .icon {
    font-size: 2rem;
    color: var(--cor-primaria);
  }

  h3 {
    margin-bottom: 5px;
    color: #fff;
  }

  p,
  a {
    color: var(--cor-texto-secundario);
    text-decoration: none;
  }
`;

// Seção de Perguntas Frequentes (FAQ)
export const FaqSection = styled.section`
  width: 100%;
`;

export const AccordionItem = styled.div`
  background: var(--cor-superficie);
  border-radius: 8px;
  margin-bottom: 10px;
  border: 1px solid var(--cor-borda);
  overflow: hidden; /* Garante que a resposta não vaze durante a animação */
`;

// A parte da pergunta, que é clicável
export const QuestionHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h4 {
    font-size: 1.1rem;
    color: var(--cor-texto);
    margin: 0;
  }
`;

// Ícone de seta que rotaciona
export const ArrowIcon = styled(FaChevronDown)`
  color: var(--cor-texto-secundario);
  transition: transform 0.3s ease-in-out;
  /* 'isopen' é uma prop que vamos passar do React para o styled-component */
  transform: ${({ isopen }) => (isopen ? "rotate(180deg)" : "rotate(0deg)")};
`;

// A parte da resposta, que expande e retrai
export const Answer = styled.div`
  max-height: ${({ isopen }) =>
    isopen ? "500px" : "0"}; /* Define a altura máxima quando aberto */
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  color: var(--cor-texto-secundario);

  p {
    padding: 0 20px 20px 20px;
    line-height: 1.6;
  }
`;
