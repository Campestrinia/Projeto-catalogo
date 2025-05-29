import React, { useState, useContext } from 'react';
import { FaEye, FaEyeSlash, FaExclamationCircle, FaUser, FaLock } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import {
    Container, GlobalStyle, ContainerBox, ContainerRegister, Button,
    InputStyled, Title, Alert, InputWithIcon, IconButton, LeftIconWrapper,
    LinkButton, ForgotPassword
} from "./Login.css"
// import axios from "axios";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { LoginContext } from '../../context/Lcontext.js'

export function Login() {
    // const apiUrl = process.env.REACT_APP_API_URL;

    const { signIn } = useContext(LoginContext)
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidSenha, setIsValidSenha] = useState(true);

    const [showSenha, setShowSenha] = useState(false);

    const navigate = useNavigate();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,100}$/;

    const handleSubmit = async () => {
        setLoading(true)
        // Verifica se todos os campos estão preenchidos
        const camposPreenchidos = email && senha;

        // Verifica se todas as validações passaram
        const validacoesOk = isValidEmail && isValidSenha;

        // Verifica se as senhas coincidem

        if (!camposPreenchidos || !validacoesOk) {
            setIsValid(false); // Mostra alerta genérico
            return;
        }

        try {
            const response = await signIn(email, senha, 'Login')
            console.log(response.data)
            if (response.data === "Email inválido") {
                message.error('Erro ao fazer login, Email não cadastrado')
                setLoading(false)
            } else if (response.data === "Senha inválida") {
                message.error('Erro ao fazer login, senha inválida')
                setLoading(false)
            } else if (response.data.id) {
                message.success('Login realizado com sucesso')
                navigate('/')
                setLoading(false)
            } else {
                message.error('Erro ao tentar fazer o login, tente novamente em alguns instantes')
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.error("Erro ao registrar usuário:", error);
        }
    };

    const handleEmailChange = (event) => {
        const email = event.target.value
        setEmail(email)
        if (email.trim() !== '') {
            if (emailRegex.test(email)) {
                setIsValidEmail(true); // E-mail válido
            } else {
                setIsValidEmail(false); // E-mail inválido
            }
        } else {
            setIsValidEmail(false) // E-mail inválido
        }
    };

    const handleSenhaChange = (event) => {
        const senha = event.target.value
        setSenha(senha)
        if (senha.trim() !== '') {
            setIsValidSenha(true); // Senha válido
        } else {
            setIsValidSenha(false) // Senha inválido
        }
    };
    return (
        <>
            <GlobalStyle />
            <NavBar />
            <Container>
                <ContainerBox>
                    <Title>Faça seu Login!</Title>
                    <ContainerRegister>
                        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} style={{ width: '100%' }}>
                            <InputWithIcon>
                                <LeftIconWrapper>
                                    <FaUser data-tooltip-id="obrigatorio" />
                                </LeftIconWrapper>
                                <InputStyled placeholder='E-mail' value={email} onChange={handleEmailChange} />
                            </InputWithIcon>
                            <Alert visible={!isValidEmail}>
                                <FaExclamationCircle /> Por favor, insira um e-mail válido.
                            </Alert>

                            <InputWithIcon>
                                <LeftIconWrapper>
                                    <FaLock data-tooltip-id="obrigatorio" />
                                </LeftIconWrapper>
                                <InputStyled
                                    type={showSenha ? "text" : "password"}
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={handleSenhaChange}
                                    style={{ paddingLeft: "35px", paddingRight: "35px" }}
                                />
                                <IconButton
                                    type="button"
                                    onClick={() => setShowSenha(!showSenha)}
                                >
                                    {showSenha ? <FaEyeSlash /> : <FaEye />}
                                </IconButton>
                            </InputWithIcon>
                            <Tooltip id="obrigatorio" style={{ backgroundColor: '222731', color: '#f2f4f9', padding: '10px', borderRadius: '15px' }}>
                                <p style={{ margin: '2px' }}>Esse item é obrigatorio</p>
                            </Tooltip>

                            <Alert visible={!isValidSenha}>
                                <FaExclamationCircle /> Por favor, insira uma senha válida.
                            </Alert>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                <Button type="submit">{loading ? 'Entrando' : 'Entrar'}</Button>

                                < ForgotPassword onClick={() => navigate('/')}>
                                    Esqueceu a senha?
                                </ForgotPassword>

                                <Alert visible={!isValid} style={{ marginTop: '20px' }}>
                                    <FaExclamationCircle /> Preencha todas as informações.
                                </Alert>

                                <LinkButton onClick={() => navigate('/register')}>
                                    Deseja se cadastrar? Criar Conta
                                </LinkButton>
                            </div>


                        </form>

                    </ContainerRegister>
                </ContainerBox>
            </Container>
            <Footer />
        </>
    )
}