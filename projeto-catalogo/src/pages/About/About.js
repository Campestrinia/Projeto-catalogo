import React from 'react';
import { NavBar } from '../../components/NavBar';
import style from "./About.Modules.css"
import Img from "./img/img.jpg"
import { Footer } from '../../components/Footer/Footer.js'

export function About() {
    return (<>
        <NavBar />

        <div className='geral'>

            <div className='left'>
                <div className='quadrado'>
                    <div className='title'>
                        <h1>QUEM SOMOS?</h1>
                        <div className='bar'></div>
                    </div>
                    <p>
                        A Hardware Herói nasceu de um sonho compartilhado entre colegas de faculdade, todos apaixonados por tecnologia e inovação. Durante longas noites de estudo e projetos, eles perceberam uma lacuna significativa no mercado de hardware de TI: a falta de um fornecedor confiável que oferecesse produtos de alta qualidade a preços acessíveis. Unidos por essa visão, decidiram transformar essa ideia em realidade.
                    </p>

                </div>
            </div>

            <div className='right'>
                <img src={Img}></img>
            </div>
        </div>


        <section className='section'>

            <div className='valores'>

                <div className='title'>
                    <h1>NOSSOS VALORES</h1>
                    <div className='bar'></div>
                </div>

                <div className='cards'>
                    <div className='card'>
                        <div className='title-card'>
                            <div className='title'>
                                Missão
                            </div>
                            <div className='bar'></div>
                        </div>
                        <div className='text'>
                            Nossa missão é fornecer soluções tecnológicas de ponta, oferecendo hardwares de alta qualidade com um atendimento personalizado e suporte técnico especializado. Buscamos capacitar nossos clientes com as melhores ferramentas e produtos, contribuindo para o avanço tecnológico de suas atividades.
                        </div>
                    </div>

                    <div className='card'>
                        <div className='title-card'>
                            <div className='title'>
                                Visão
                            </div>
                            <div className='bar'></div>
                        </div>
                        <div className='text'>
                            Nossa visão é nos tornarmos a empresa líder de mercado em revenda de hardwares de TI, reconhecida pela inovação, excelência e confiança. Aspiramos ser a primeira escolha para entusiastas e profissionais de TI, continuando a expandir nosso portfólio de produtos e serviços, mantendo-nos na vanguarda das tendências tecnológicas.
                        </div>
                    </div>

                    <div className='card'>
                        <div className='title-card'>
                            <div className='title'>
                                Valores
                            </div>
                            <div className='bar'></div>
                        </div>
                        <div className='text'>
                            Nossa visão é nos tornarmos a empresa líder de mercado em revenda de hardwares de TI, reconhecida pela inovação, excelência e confiança. Aspiramos ser a primeira escolha para entusiastas e profissionais de TI, continuando a expandir nosso portfólio de produtos e serviços, mantendo-nos na vanguarda das tendências tecnológicas.
                        </div>
                    </div>
                </div>

            </div>

        </section>
        <Footer />
    </>
    )
}