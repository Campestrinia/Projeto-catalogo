import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 40px 5%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin-bottom: 60px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;

  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

export const LightCard = styled.div`
  background: #f2f4f9;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  padding: 40px;

  /*
    * A CORREÇÃO:
    * Forçamos que qualquer título (h1, h2, h3) ou parágrafo (p)
    * DENTRO deste card tenha a cor escura do nosso tema.
    * Isso resolve o problema de legibilidade.
  */
  h1,
  h2,
  h3,
  p {
    color: var(--cor-fundo); /* --cor-fundo é #222731 */
  }
`;

export const SectionTitle = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 10px;
`;

export const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: var(--cor-primaria);
  margin: 0 auto 30px;
  border-radius: 2px;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  text-align: justify;
`;

export const ValuesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ValueCard = styled.div`
  background: var(--cor-superficie);
  border-radius: 12px;
  padding: 30px;
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: #fff; /* Texto claro no card escuro */
    margin-bottom: 10px;
  }

  /* Adicionamos a cor para o texto do card de valor também */
  p {
    color: var(--cor-texto);
  }
`;
