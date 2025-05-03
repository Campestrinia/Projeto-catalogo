import styled from 'styled-components';

const Container = styled.div`
  background-color: #222731;
  min-height: 100vh;
  padding: 40px 20px;
`;

const Section = styled.section`
  margin: 40px 0;
`;

const Geral = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const Left = styled.div`
  flex: 1;
  min-width: 300px;
`;

const Right = styled.div`
  flex: 1;
  min-width: 300px;

  img {
    width: 100%;
    max-width: 717px;
    max-height: 300px;
    border-radius: 20px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }
`;

const Card = styled.div`
  background: #f2f4f9; /* um tom mais claro que #222731 para destacar o card */
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ##222731;
  text-align: center;
  margin-bottom: 20px;
`;

const BarW = styled.div`
  width: 80px;
  height: 4px;
  background: #f2f4f9;
  margin: 10px auto 20px;
  border-radius: 2px;
`;

const BarB = styled.div`
  width: 80px;
  height: 4px;
  background: #222731;
  margin: 10px auto 20px;
  border-radius: 2px;
`;

const TextOne = styled.p`
  font-size: 1rem;
  color: #222731;
  line-height: 1.6;
  text-align: justify;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #f2f4f9;
  line-height: 1.6;
  text-align: justify;
`;

const CardsValores = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
`;

const ValorCard = styled.div`
  background: #2c3242; /* mesmo background dos cards principais */
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  padding: 30px;
  flex: 1;
  min-width: 250px;
  max-width: 350px;
`;

const ValorTitle = styled.div`
  font-weight: bold;
  font-size: 1.4rem;
  color: #f2f4f9;
  text-align: center;
  margin-bottom: 10px;
`;

const ValorBar = styled.div`
  width: 60px;
  height: 4px;
  background: #4caf50;
  margin: 0 auto 20px;
  border-radius: 2px;
`;

export {
    Container,
    Section,
    Geral,
    Left,
    Right,
    Card,
    Title,
    BarW,
    BarB,
    Text,
    CardsValores,
    ValorCard,
    ValorTitle,
    ValorBar,
    TextOne
};
