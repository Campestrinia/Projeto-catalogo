import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import axios from "axios";
import React, { useState, useEffect, useContext } from 'react';
import { FaRoad, FaCompass, FaPlus, FaMapMarkerAlt, FaCity, FaMap } from "react-icons/fa";
import { LoginContext } from '../../context/Lcontext';
import { useNavigate } from 'react-router-dom';
import {
    Button, Title, MainContainer, Cards,
    GridContainer,
    InputStyled,
    InputWithIcon,
    LeftIconWrapper,
    TitleModal,
    ButtonOnSubmit
} from './Profile.css';
import { Modal } from '../../components/Modal/Modal';

export function Profile() {
    const apiBackEnd = process.env.REACT_APP_API_URL;
    const { user, Logout, DeleteAccount } = useContext(LoginContext);
    const [profile, setProfile] = useState(null);
    const [enderecos, setEnderecos] = useState(null);
    const [modalEndereco, setModalEndereco] = useState(false);
    const [enviandoEndereco, setEnviandoEndereco] = useState(false);
    const [CEP, setCEP] = useState();
    const [rua, setRua] = useState();
    const [numero, setNumero] = useState();
    const [complemento, setComplemento] = useState();
    const [bairro, setBairro] = useState();
    const [cidade, setCidade] = useState();
    const [estado, setEstado] = useState();
    const navigate = useNavigate();

    const fetchEnderecos = async () => {
        try {
            const response = await axios.get(`${apiBackEnd}/api/endereco`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
            setEnderecos(response.data);
        } catch (error) {
            console.error("Erro ao buscar endereços:", error);
        }
    };

    useEffect(() => {
        if (!user) return;

        const fetchUser = async () => {
            try {
                const response = await axios.get(`${apiBackEnd}/api/usuario/${user.id}`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });

                setProfile(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        };

        fetchUser();
        fetchEnderecos();
        // eslint-disable-next-line
    }, [apiBackEnd, user]);

    const handleLogout = () => {
        Logout();
        navigate('/');
    };

    const handleDeleteAccount = () => {
        DeleteAccount();
        navigate('/');
    };

    const goToPostPage = () => {
        navigate('/postar');
    };

    if (!profile) {
        return <div>Carregando...</div>;
    }

    const handleCEPChange = async (value) => {
        const cep = value.target.value
        setCEP(cep)
        console.log(cep.length)

        if (cep.length === 9 && !cep.includes('_')) {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            console.log(response.data)
            setRua(response.data.logradouro)
            setBairro(response.data.bairro)
            setCidade(response.data.localidade)
            setEstado(response.data.estado)
            setNumero('')
            setComplemento('')
        }
    };
    const handleRuaChange = async (value) => {
        const rua = value.target.value
        setRua(rua)
    };
    const handleNumeroChange = async (value) => {
        const numero = value.target.value
        setNumero(numero)
    };
    const handleComplementoChange = async (value) => {
        const complemento = value.target.value
        setComplemento(complemento)
    };
    const handleBairroChange = async (value) => {
        const bairro = value.target.value
        setBairro(bairro)
    };
    const handleCidadeChange = async (value) => {
        const cidade = value.target.value
        setCidade(cidade)
    };
    const handleEstadoChange = async (value) => {
        const estado = value.target.value
        setEstado(estado)
    };

    const handleSubmit = async (e) => {
        setEnviandoEndereco(true)
        e.preventDefault() //Garante que a pagina não atualize
        try {
            const numeroInteiro = Number(numero)
            const response = await axios.post(`${apiBackEnd}/api/endereco`,
                {
                    CEP: CEP,
                    rua: rua,
                    numero: numeroInteiro,
                    complemento: complemento,
                    bairro: bairro,
                    cidade: cidade,
                    estado: estado,
                    idUsuario: user.id, // ou o nome de campo que a API espera
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                        'Content-Type': 'application/json'
                    },
                });

            console.log("Form enviado!");
            console.log(response.data);
            fetchEnderecos()
            setModalEndereco(false)
            setCEP()
            setRua()
            setNumero()
            setComplemento()
            setBairro()
            setCidade()
            setEstado()
            setEnviandoEndereco(false)
        } catch (error) {
            setEnviandoEndereco(false)
            console.error("Erro ao buscar usuário:", error);
        }
    };


    return (
        <>
            <NavBar />
            <MainContainer>
                <h1>Perfil de {user.nome}</h1>
                {/* <h1> {user.token}</h1> */}
                <Button onClick={handleLogout}>Sair</Button>
                <Button onClick={handleDeleteAccount} danger>Deletar conta</Button>

                <GridContainer>
                    <Cards>
                        <Title>Endereços</Title>
                        {enderecos?.length > 0 ? (
                            enderecos.map((addr, idx) => (
                                <div key={idx}>
                                    <p><strong>CEP:</strong> {addr.CEP}</p>
                                    <p><strong>Rua:</strong> {addr.rua}, {addr.numero}</p>
                                    <p><strong>Complemento:</strong> {addr.complemento}</p>
                                    <p><strong>Bairro:</strong> {addr.bairro}</p>
                                    <p><strong>Cidade:</strong> {addr.cidade} - {addr.estado}</p>
                                    <hr />
                                </div>
                            ))
                        ) : (
                            <p>Nenhum endereço cadastrado.</p>
                        )}

                        <Button onClick={() => setModalEndereco(true)}>Cadastrar um novo endereço</Button>
                    </Cards>
                    <Modal isOpen={modalEndereco} onClose={() => setModalEndereco(false)}>
                        <form
                            onSubmit={handleSubmit}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                gap: '12px',
                                width: '100%',
                                maxWidth: '400px',
                                margin: '0 auto',
                            }}
                        >
                            <TitleModal>Digite seu Endereço</TitleModal>

                            <InputWithIcon>
                                <LeftIconWrapper>
                                    <FaCompass data-tooltip-id="obrigatorio" />
                                </LeftIconWrapper>
                                <InputStyled
                                    mask="99999-999"
                                    type="text"
                                    placeholder="CEP"
                                    onChange={handleCEPChange}
                                    value={CEP}
                                    required
                                />
                            </InputWithIcon>

                            <InputWithIcon>
                                <LeftIconWrapper>
                                    <FaRoad data-tooltip-id="obrigatorio" />
                                </LeftIconWrapper>
                                <InputStyled
                                    type="text"
                                    placeholder="Rua"
                                    value={rua}
                                    onChange={handleRuaChange}
                                    required
                                />
                            </InputWithIcon>

                            <InputWithIcon>
                                <LeftIconWrapper>
                                    <FaRoad data-tooltip-id="obrigatorio" />
                                </LeftIconWrapper>
                                <InputStyled
                                    type="text"
                                    placeholder="Número"
                                    value={numero}
                                    onChange={handleNumeroChange}
                                    required
                                />
                            </InputWithIcon>

                            <InputWithIcon>
                                <LeftIconWrapper>
                                    <FaPlus data-tooltip-id="opcional" />
                                </LeftIconWrapper>
                                <InputStyled
                                    type="text"
                                    placeholder="Complemento (opcional)"
                                    value={complemento}
                                    onChange={handleComplementoChange}
                                />
                            </InputWithIcon>

                            <InputWithIcon>
                                <LeftIconWrapper>
                                    <FaMapMarkerAlt data-tooltip-id="obrigatorio" />
                                </LeftIconWrapper>
                                <InputStyled
                                    type="text"
                                    placeholder="Bairro"
                                    value={bairro}
                                    onChange={handleBairroChange}
                                    required
                                />
                            </InputWithIcon>

                            <InputWithIcon>
                                <LeftIconWrapper>
                                    <FaCity data-tooltip-id="obrigatorio" />
                                </LeftIconWrapper>
                                <InputStyled
                                    type="text"
                                    placeholder="Cidade"
                                    value={cidade}
                                    onChange={handleCidadeChange}
                                    required
                                />
                            </InputWithIcon>

                            <InputWithIcon>
                                <LeftIconWrapper>
                                    <FaMap data-tooltip-id="obrigatorio" />
                                </LeftIconWrapper>
                                <InputStyled
                                    type="text"
                                    placeholder="Estado"
                                    value={estado}
                                    onChange={handleEstadoChange}
                                    required
                                />
                            </InputWithIcon>

                            <ButtonOnSubmit type="submit" disabled={enviandoEndereco}>
                                Enviar Endereço
                            </ButtonOnSubmit>
                        </form>
                    </Modal>

                    <Cards>
                        <Title>Cartões</Title>
                        {profile.cartoes?.length > 0 ? (
                            profile.cartoes.map((card, idx) => (
                                <p key={idx}>**** **** **** {card.slice(-4)}</p>
                            ))
                        ) : (
                            <p>Nenhum cartão cadastrado.</p>
                        )}
                        <Button onClick={goToPostPage}>Cadastrar cartão</Button>
                    </Cards>

                    <Cards>
                        <Title>Meus favoritos</Title>
                        {profile.vendas?.length > 0 ? (
                            profile.vendas.map((venda, idx) => (
                                <p key={idx}>{venda}</p>
                            ))
                        ) : (
                            <p>Você ainda não tem produtos favoritados.</p>
                        )}
                    </Cards>

                    <Cards>
                        <Title>Minhas Vendas</Title>
                        {profile.vendas?.length > 0 ? (
                            profile.vendas.map((venda, idx) => (
                                <p key={idx}>{venda}</p>
                            ))
                        ) : (
                            <p>Você ainda não realizou vendas.</p>
                        )}
                        <Button onClick={goToPostPage}>Postar novo item</Button>
                    </Cards>
                </GridContainer>

            </MainContainer>

            <Footer />
        </>
    );
}
