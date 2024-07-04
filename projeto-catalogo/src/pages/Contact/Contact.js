import React, { useState } from 'react';
import { NavBar } from '../../components/NavBar';
import { GlobalStyle, BoxAll, Box1, Text, Img, Box2, Box3, Boxin, Box2mini, Box3Hidde, Conteiner, Cont, BoxUlt, Tend, Boxn, Arrow, Boxwn} from './contact.css';
import TESTE from './TESTE.png';
import arrow from './arrow.png'
import { Footer } from '../../components/Footer/Footer';
import { FaPhone } from "react-icons/fa6";
import { GoMail} from "react-icons/go"




export function Contact() {
    const [garantia, setGarantia] = useState(false);
    const [arrependimento, setArrependimento] = useState(false);
    const [pedido, setpedido] = useState(false);
    const [cartao, setcartao] = useState(false);
    const [prazo, setprazo] = useState(false);

    const exibirGrantia= ()=>{
        if(garantia){
            setGarantia(false)
        }else(
            setGarantia(true)
        )
    }

    const exibirArrependimento= ()=>{
        if(arrependimento  ){
            setArrependimento(false)
        }else(
            setArrependimento(true)
        )
    }

    const exibirPedido= ()=>{
        if(pedido  ){
            setpedido(false)
        }else(
            setpedido(true)
        )
    }

    const exibircartao= ()=>{
        if(cartao  ){
            setcartao(false)
        }else(
            setcartao(true)
        )
    }
    const exibirprazo= ()=>{
        if(prazo  ){
            setprazo(false)
        }else(
            setprazo(true)
        )
    }
    return (<>
        <GlobalStyle />
        <NavBar />
        <BoxAll>
        <Box1>
                <Text>
                
                    <h1>Perguntas Frequentes</h1>

                    <p>Tire todas as suas dúvidas sobre o HardwareHeroi! aqui, confira nossas perguntas frequentes sobre cadastro, compra, garantia e outros assuntos, e se não encontrar o que estava procurando, você também pode entrar em contato com nossos vigilantes do atendimento por email ou telefone.</p> 
  

                </Text>
                <Img>
                    <img src={TESTE} alt="logo" />
                </Img>
              
            </Box1>

            <Boxin>
                <Box2>
                    <Box2mini>
                        <h3>Perguntas frequentes</h3>
                    </Box2mini>
                    <ul>
                        <li><a href='#Garantia'>Garantia e Atendimento </a></li>
                        <li><a href='#Pedido'>Pedido </a></li>
                        <li><a href='#Pagamento'>Pagamento e Estorno </a></li>
                        <li><a href='#Pedido'>Pedido </a></li>
                        <li><a href='#Contato'>Contato </a></li>
                    </ul>
                    
                </Box2>
                <Box3>
                    <Tend>
                    <h2 id='Garantia'>Garantia e Atendimento </h2>
                    </Tend>
                   
                    <Box3Hidde>
                        <Conteiner>
                            <Boxwn>
                            <Tend>
                                <h4>Preciso acionar a garantia de um produto. Como proceder?</h4>
                            </Tend>
                          
                            <Arrow  onClick={exibirGrantia}>
                                <img src={arrow} alt='arrow'/>
                            </Arrow>
                            </Boxwn>

                            </Conteiner>
                            {garantia?(
                        <Conteiner>
                            <p>1. Faça o login em nosso site, usando seu e-mail e senha;</p>
                                <p>2. Depois, você irá localizar o pedido referente ao item que deseja acionar a garantia; selecione 'Detalhes do pedido'.</p>
                                <p> 3. Busque o produto que deseja solicitar garantia, clique em 'Garantia' e, depois em 'Continuar';</p>
                                <p>4. Selecione a etiqueta/número de série do produto e clique em 'Garantia';</p>
                                <p>5. Preencha o formulário e conclua a solicitação.</p>
                                <p> Pronto! Após ter aberto este protocolo, somente terá que aguardar o retorno de nosso departamento responsável em até 3 dias úteis. Você receberá uma notificação em seu e-mail de cadastro, então, é importante que acompanhe sua caixa de entrada, caixa de spam ou lixo eletrônico!

                                Atenção: Caso você receba o contato do fabricante, será necessário acioná-lo diretamente, para solicitar a garantia de seu produto.

                                Acompanhe seu protocolo de atendimento na aba 'Atendimento' que fica no canto superior direito em 'Minha Conta'. Neste local você poderá visualizar todo o andamento do seu pedido e, se tiver dúvidas, poderá interagir com um de nossos vigilantes  no mesmo local.</p>

                            </Conteiner>
                            ):null}

                        <Conteiner >
                            <Boxwn>
                                <Tend>
                                    <h4>Como acionar o Direito de Arrependimento?</h4>
                                </Tend>
                            
                                <Arrow  onClick={exibirArrependimento}>
                                    <img src={arrow} alt='arrow'/>
                                </Arrow>
                                </Boxwn>
                            
                            </Conteiner>
                            {arrependimento?(
                        <Conteiner>
                            <p>O Direito de Arrependimento só pode ser acionado após o recebimento da compra em sua casa, no prazo de até 7 dias corridos. Nesse caso, siga o passo a passo abaixo:</p>

                            <p>1. Faça o login em nosso site, usando seu e-mail e senha;</p>
                            <p>2. Depois, você irá localizar o pedido referente ao item que deseja acionar o direito de arrependimento e deverá selecionar 'Detalhes do pedido'.</p>
                            <p>3. Busque o produto que deseja solicitar o arrependimento e, em seguida, selecione 'Arrependimento' e depois em 'Continuar';</p>
                            <p>4. Selecione a etiqueta/número de série do produto e clique em 'Arrependimento';</p>
                            <p>5. Preencha o formulário e conclua a solicitação.</p>

                            <p>Após ter aberto este protocolo, somente terá de aguardar o retorno de nosso departamento responsável em até 3 dias úteis. Você receberá uma notificação em seu e-mail de cadastro, então, é importante que acompanhe sua caixa de entrada, caixa de spam ou lixo eletrônico!</p>

                            <p>Acompanhe seu protocolo de atendimento na aba 'Atendimento' que fica no canto superior direito em 'Minha Conta'. Neste local você poderá visualizar todo o andamento do seu pedido e, se tiver dúvidas, poderá interagir com um de nossos vigilantes  no mesmo local.</p>

                                                
                            </Conteiner>
                            ):null}

                    </Box3Hidde>
                        <Tend>
                        <h2 id='Pedido'>Pedido </h2>
                        </Tend>
                        
                        <Conteiner>
                            <Boxwn>
                                <Tend>
                                 <h4>Duvida sobre status do pedido</h4>
                                </Tend>
                            
                                <Arrow  onClick={exibirPedido}>
                                    <img src={arrow} alt='arrow'/>
                                </Arrow>
                            </Boxwn>
                            
                        </Conteiner>
                        {pedido?(
                        <Conteiner>
                            <p>Para verificar o status do seu pedido, acesse sua conta e clique no pedido que deseja ter informações. Logo abaixo do item, você visualizará uma barra de status que mostrará em que momento seu pedido está. Essa barra é atualizada conforme o pedido for avançando no processo de aprovação da compra ou entrega, caso ocorra algum problema com o seu pedido, entraremos em contato para notificar e levar a melhor solução. Fique de atento ao seu e-mail, nossa comunicação acontece por este canal.</p>
                        </Conteiner>
                        ):null}

                        <Tend>
                            <h2 id='Pagamento'>Pagamento e Estorno </h2>
                         </Tend>
                         <Conteiner>
                            <Boxwn>
                                <Tend>
                                <h4>Fiz a compra com cartão, apareceu aprovado, mas o pedido foi cancelado. Por quê?</h4>
                                </Tend>
                            
                                <Arrow  onClick={exibircartao}>
                                    <img src={arrow} alt='arrow'/>
                                </Arrow>
                            </Boxwn>
                            
                        </Conteiner> 
                        {cartao?(
                        <Conteiner>
                            <p>Para segurança dos nossos clientes o HardwareHeroi! possui um serviço de anti-fraude que faz toda a investigação dos dados das compras para garantir que tudo vai ocorrer de acordo com o esperado. Caso o pedido não seja aprovado por data divergente, limite ou outros, a reserva do seu limite será liberada em até 48 horas após o cancelamento oficia</p>
                        </Conteiner>
                        ):null}

                        <Conteiner>
                            <Boxwn>
                                <Tend>
                                 <h4>Qual é o prazo para confirmação de pagamento?</h4>
                                </Tend>
                            
                                <Arrow  onClick={exibirprazo}>
                                    <img src={arrow} alt='arrow'/>
                                </Arrow>
                            </Boxwn>
                            
                        
                        </Conteiner> 
                        {prazo?(
                        <Conteiner>
                            <p>Pagamentos efetuados via Boleto Bancário e Cartão de Crédito têm um prazo de 1 a 2 dias úteis para confirmação; já para pagamentos via PIX, o prazo de confirmação é de até 30 minutos. Se esse período for expirado e o pagamento de seu pedido permanecer indicado como pendente, será necessário entrar em contato com o nosso Atendimento.</p>
                        </Conteiner>
                        ):null}                 
                        <Tend>
                        <h2 id='Contato'> Contato </h2>
                        </Tend>
                       
                        <h6>Não encontrou o que procurava, use nossos canais de contato </h6>
                        <Cont>
                        <BoxUlt>
                                <Boxn>
                                <h4><FaPhone/> Telefone</h4>

                                </Boxn>
                                <p>Segunda à sexta das 8:00 às 20:00, sábado das 09:00 às 15:00. Horário de Brasília. Exceto domingo e feriados</p>
                                <Boxn>
                                <h3>47 12345-6789</h3>
                                    <h5>ONLINE</h5>
                                </Boxn>
                                
                            </BoxUlt>
                            <BoxUlt>
                                <Boxn>
                                <h4><GoMail/> Email</h4>
                                </Boxn>
                                <p>Envie um e-mail para nossos herois no endereço HardwareHeroi@gmail.com, responderemos o seu contato em até 1 dia útil.</p>
                                <Boxn>
                                
                                </Boxn>

                            </BoxUlt>
                                
                           

                        </Cont>
                        
                
                </Box3>
            </Boxin>
            

          <br/>
        </BoxAll>
        
        <Footer/>
    </>
    )
}
