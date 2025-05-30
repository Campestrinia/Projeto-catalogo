import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaExclamation, FaExclamationCircle, FaStarOfLife } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css';
import InputMask from 'react-input-mask';

import {
    Container, GlobalStyle, ContainerBox, ContainerRegister, Button,
    InputStyled, Title, Alert, InputWithIcon, IconButton, LeftIconWrapper,
    LinkButton
} from "./register.css"
import axios from "axios";
import { message } from "antd";
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';

export function Register() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [CPF, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidCPF, setIsValidCPF] = useState(true);
    const [isValidTelefone, setIsValidTelefone] = useState(true);
    const [isValidSenha, setIsValidSenha] = useState(true);
    const [isValidConfirmarSenha, setIsValidConfirmarSenha] = useState(true);

    const [showSenha, setShowSenha] = useState(false);
    const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);


    const navigate = useNavigate();

    const nomeRegex = /^(?=.{5,})[a-zA-Zà-úÀ-Ú]+(?:\s+[a-zA-Zà-úÀ-Ú]+)+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,100}$/;
    const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

    const handleSubmit = async () => {
        // Verifica se todos os campos estão preenchidos
        const camposPreenchidos = nome && email && CPF && telefone && senha && confirmarSenha;

        // Verifica se todas as validações passaram
        const validacoesOk = isValidName && isValidEmail && isValidCPF && isValidTelefone && isValidSenha && isValidConfirmarSenha;

        // Verifica se as senhas coincidem
        const senhasIguais = senha === confirmarSenha;

        if (!camposPreenchidos || !validacoesOk || !senhasIguais) {
            setIsValid(false); // Mostra alerta genérico
            message.error('Erro ao se registrar, tente novamente em alguns instantes')
            return;
        }

        try {
            const response = await axios.post(`${apiUrl}/api/usuario`, {
                nome,
                email,
                CPF,
                telefone,
                senha
            });
            console.log("Usuário registrado:", response.data);
            navigate("/");
        } catch (error) {
            message.error('Erro ao se registrar, tente novamente em alguns instantes')
            console.error("Erro ao registrar usuário:", error);
        }
    };


    const handleNomeChange = (event) => {
        const nome = event.target.value
        setNome(nome)
        if (nome.trim() !== '') {
            if (nomeRegex.test(nome)) {
                setIsValidName(true); // Nome válido
            } else {
                setIsValidName(false); // Nome inválido
            }
        } else {
            setIsValidName(false) // Nome inválido
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
    const handleCPFChange = (value) => {
        const cpf = value.target.value
        setCpf(cpf)
        if (cpf && !cpf.includes('_')) {
            setIsValidCPF(true)
        } else {
            setIsValidCPF(false)
        }
    };
    const handleTelefoneChange = (value) => {
        const telefone_novo = value.target.value
        setTelefone(telefone_novo)
        if (telefone_novo && !telefone_novo.includes('_')) {
            setIsValidTelefone(true)
        } else {
            setIsValidTelefone(false)
        }
    };

    const handleSenhaChange = (event) => {
        const senha = event.target.value
        setSenha(senha)
        if (senha.trim() !== '') {
            if (senhaRegex.test(senha)) {
                setIsValidSenha(true); // Senha válido
            } else {
                setIsValidSenha(false); // Senha inválido
            }
        } else {
            setIsValidSenha(false) // Senha inválido
        }
    };

    const handleConfirmarSenhaChange = (event) => {
        const confirmarSenha = event.target.value
        setConfirmarSenha(confirmarSenha)
        if (confirmarSenha === senha) {
            setIsValidConfirmarSenha(true)
        } else {
            setIsValidConfirmarSenha(false)
        }
    };
    return (<>
        <GlobalStyle />
        <NavBar />
        <Container>
            <ContainerBox>
                <Title>Criar conta</Title>
                <ContainerRegister>
                    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} style={{ width: '100%' }}>
                        <InputWithIcon>
                            <LeftIconWrapper>
                                <FaStarOfLife data-tooltip-id="obrigatorio" />
                            </LeftIconWrapper>
                            <InputStyled placeholder='Nome completo' value={nome} onChange={handleNomeChange} />
                        </InputWithIcon>
                        <Alert visible={!isValidName}>
                            <FaExclamationCircle /> Por favor, insira um nome completo.
                        </Alert>
                        <InputWithIcon>
                            <LeftIconWrapper>
                                <FaStarOfLife data-tooltip-id="obrigatorio" />
                            </LeftIconWrapper>
                            <InputStyled placeholder='E-mail' value={email} onChange={handleEmailChange} />
                        </InputWithIcon>
                        <Alert visible={!isValidEmail}>
                            <FaExclamationCircle /> Por favor, insira um e-mail válido.
                        </Alert>
                        <InputWithIcon>
                            <LeftIconWrapper>
                                <FaStarOfLife data-tooltip-id="obrigatorio" />
                            </LeftIconWrapper>
                            <InputMask
                                mask="999.999.999-99"
                                value={CPF}
                                onChange={handleCPFChange}
                            >
                                {(inputProps) => <InputStyled {...inputProps} placeholder="CPF" />}
                            </InputMask>
                        </InputWithIcon>

                        <Alert visible={!isValidCPF}>
                            <FaExclamationCircle /> Por favor, insira um CPF válido.
                        </Alert>

                        <InputWithIcon>
                            <LeftIconWrapper>
                                <FaStarOfLife data-tooltip-id="obrigatorio" />
                            </LeftIconWrapper>
                            <InputMask
                                mask="(99) 99999-9999"
                                value={telefone}
                                onChange={handleTelefoneChange}
                            >
                                {(inputProps) => <InputStyled {...inputProps} placeholder="Telefone" />}
                            </InputMask>
                        </InputWithIcon>
                        <Alert visible={!isValidTelefone}>
                            <FaExclamationCircle /> Por favor, insira um telefone válido.
                        </Alert>

                        <InputWithIcon>
                            <LeftIconWrapper>
                                <FaExclamation data-tooltip-id="my-tooltip" />
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
                        <Tooltip id="my-tooltip" style={{ backgroundColor: '222731', color: '#f2f4f9', padding: '10px', borderRadius: '15px' }}>
                            <div>
                                <p style={{ margin: '2px' }}>Sua senha precisa conter:</p>
                                <ul style={{ margin: '2px' }}>
                                    <li>8 caracteres</li>
                                    <li>Pelo menos uma letra maiúscula e uma minúscula</li>
                                    <li>Pelo menos um número</li>
                                    <li>Pelo menos um caractere especial</li>
                                </ul>
                            </div>
                        </Tooltip>
                        <Tooltip id="obrigatorio" style={{ backgroundColor: '222731', color: '#f2f4f9', padding: '10px', borderRadius: '15px' }}>
                            <p style={{ margin: '2px' }}>Esse item é obrigatorio</p>
                        </Tooltip>

                        <Alert visible={!isValidSenha}>
                            <FaExclamationCircle /> Por favor, insira uma senha válido conforme orientações.
                        </Alert>


                        <InputWithIcon>
                            <LeftIconWrapper>
                                <FaStarOfLife data-tooltip-id="obrigatorio" />
                            </LeftIconWrapper>
                            <InputStyled
                                type={showConfirmarSenha ? "text" : "password"}
                                placeholder="Confirme a senha"
                                value={confirmarSenha}
                                onChange={handleConfirmarSenhaChange}
                                style={{ paddingLeft: "35px", paddingRight: "35px" }}
                            />
                            <IconButton
                                type="button"
                                onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
                            >
                                {showConfirmarSenha ? <FaEyeSlash /> : <FaEye />}
                            </IconButton>
                        </InputWithIcon>


                        <Alert visible={!isValidConfirmarSenha}>
                            <FaExclamationCircle /> Corfirmação inválida da senha.
                        </Alert>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <Button type="submit">Criar</Button>
                            <Alert visible={!isValid} style={{ marginTop: '12px' }}>
                                <FaExclamationCircle /> Preencha todas as informações.
                            </Alert>
                            <LinkButton onClick={() => navigate('/login')}>
                                Já tem conta? Entrar
                            </LinkButton>
                        </div>
                    </form>

                </ContainerRegister>
            </ContainerBox>
        </Container>
        <Footer />
    </>)
}