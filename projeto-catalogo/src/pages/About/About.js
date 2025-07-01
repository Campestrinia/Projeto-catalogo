import React from "react";
import Img from "./img/img.jpg";

import * as S from "./About.css.js";

const valores = [
  {
    titulo: "Missão",
    texto:
      "Nossa missão é fornecer soluções tecnológicas de ponta, oferecendo hardwares de alta qualidade com um atendimento personalizado e suporte técnico especializado. Buscamos capacitar nossos clientes com as melhores ferramentas e produtos, contribuindo para o avanço tecnológico de suas atividades.",
  },
  {
    titulo: "Visão",
    texto:
      "Nossa visão é nos tornarmos a empresa líder de mercado em revenda de hardwares de TI, reconhecida pela inovação, excelência e confiança. Aspiramos ser a primeira escolha para entusiastas e profissionais de TI, continuando a expandir nosso portfólio de produtos e serviços.",
  },
  {
    titulo: "Valores",
    texto:
      "Prezamos pela integridade, transparência, inovação e compromisso com a qualidade. Acreditamos que o sucesso de nossos clientes é o nosso sucesso, e trabalhamos constantemente para superar expectativas.",
  },
];

export function About() {
  return (
    // Usando o novo container principal
    <S.AboutContainer>
      {/* --- Seção Quem Somos --- */}
      <S.Section>
        {/* Usando o novo wrapper flex e as colunas renomeadas */}
        <S.FlexWrapper>
          <S.LeftColumn>
            {/* Usando o novo card claro */}
            <S.LightCard>
              {/* Usando os novos componentes de Título, Divisor e Texto */}
              <S.SectionTitle>QUEM SOMOS?</S.SectionTitle>
              <S.Divider />
              <S.Text>
                A HardwareHerói nasceu de um sonho compartilhado entre colegas
                de faculdade, todos apaixonados por tecnologia e inovação.
                Durante longas noites de estudo e projetos, eles perceberam uma
                lacuna significativa no mercado de hardware de TI: a falta de um
                fornecedor confiável que oferecesse produtos de alta qualidade a
                preços acessíveis. Unidos por essa visão, decidiram transformar
                essa ideia em realidade.
              </S.Text>
            </S.LightCard>
          </S.LeftColumn>

          <S.RightColumn>
            <img src={Img} alt="Imagem sobre nós" />
          </S.RightColumn>
        </S.FlexWrapper>
      </S.Section>

      {/* --- Seção Nossos Valores --- */}
      {/* Note que esta seção inteira também está dentro de um LightCard, como no seu código original */}
      <S.Section>
        <S.LightCard>
          <S.SectionTitle>NOSSOS VALORES</S.SectionTitle>
          <S.Divider />

          {/* Usando o novo grid de valores e o array para gerar os cards */}
          <S.ValuesGrid>
            {valores.map((valor, index) => (
              <S.ValueCard key={index}>
                <h3>{valor.titulo}</h3>
                <S.Text>{valor.texto}</S.Text>
              </S.ValueCard>
            ))}
          </S.ValuesGrid>
        </S.LightCard>
      </S.Section>
    </S.AboutContainer>
  );
}
