import React, { useState } from 'react';
import { Container, GlobalStyle, ContainerBox, ContainerRegister, H3, Button, NoLink } from "./register.css"
import axios from "axios";
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
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${apiUrl}/api/usuario`, {
                nome,
                email,
                CPF,
                telefone,
                senha
            });
            navigate("/")
            console.log(response.data);
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };
    return (<>
        <GlobalStyle />
        <NavBar />
        <Container>
            <ContainerBox>
                <ContainerRegister>
                    <h1>Registrar</h1>
                    <H3>Nome</H3>
                    <input value={nome} onChange={(e) => setNome(e.target.value)} />
                    <H3>E-mail</H3>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    <H3>CPF</H3>
                    <input value={CPF} onChange={(e) => setCpf(e.target.value)} />
                    <H3>Telefone</H3>
                    <input value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    <H3>Senha</H3>
                    <input value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <H3>Confirme a senha</H3>
                    <input value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                    <Button onClick={handleSubmit}>Registrar</Button>
                </ContainerRegister>
            </ContainerBox>
        </Container>
        <Footer />
    </>)
}