import React from 'react';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import Img from './img/img.jpg'; // Ajuste conforme seu projeto

import * as S from './About.css.js'; // usando * as S pra deixar o código mais limpo depois

export function About() {
    return (
        <>
            <NavBar />
            <S.Container>
                <S.Geral>
                    <S.Left>
                        <S.Card>
                            <S.Title>QUEM SOMOS?</S.Title>
                            <S.Bar />
                            <S.TextOne>
                                A Hardware Herói nasceu de um sonho compartilhado entre colegas de faculdade, todos apaixonados por tecnologia e inovação. Durante longas noites de estudo e projetos, eles perceberam uma lacuna significativa no mercado de hardware de TI: a falta de um fornecedor confiável que oferecesse produtos de alta qualidade a preços acessíveis. Unidos por essa visão, decidiram transformar essa ideia em realidade.
                            </S.TextOne>
                        </S.Card>
                    </S.Left>
                    <S.Right>
                        <img src={Img} alt="Imagem sobre nós" />
                    </S.Right>
                </S.Geral>

                <S.Section>
                    <S.Card>
                        <S.Title>NOSSOS VALORES</S.Title>
                        <S.Bar />
                        <S.CardsValores>
                            <S.ValorCard>
                                <S.ValorTitle>Missão</S.ValorTitle>
                                <S.ValorBar />
                                <S.Text>
                                    Nossa missão é fornecer soluções tecnológicas de ponta, oferecendo hardwares de alta qualidade com um atendimento personalizado e suporte técnico especializado. Buscamos capacitar nossos clientes com as melhores ferramentas e produtos, contribuindo para o avanço tecnológico de suas atividades.
                                </S.Text>
                            </S.ValorCard>

                            <S.ValorCard>
                                <S.ValorTitle>Visão</S.ValorTitle>
                                <S.ValorBar />
                                <S.Text>
                                    Nossa visão é nos tornarmos a empresa líder de mercado em revenda de hardwares de TI, reconhecida pela inovação, excelência e confiança. Aspiramos ser a primeira escolha para entusiastas e profissionais de TI, continuando a expandir nosso portfólio de produtos e serviços, mantendo-nos na vanguarda das tendências tecnológicas.
                                </S.Text>
                            </S.ValorCard>

                            <S.ValorCard>
                                <S.ValorTitle>Valores</S.ValorTitle>
                                <S.ValorBar />
                                <S.Text>
                                    Prezamos pela integridade, transparência, inovação e compromisso com a qualidade. Acreditamos que o sucesso de nossos clientes é o nosso sucesso, e trabalhamos constantemente para superar expectativas.
                                </S.Text>
                            </S.ValorCard>
                        </S.CardsValores>
                    </S.Card>
                </S.Section>
            </S.Container>
            <Footer />
        </>
    );
}
