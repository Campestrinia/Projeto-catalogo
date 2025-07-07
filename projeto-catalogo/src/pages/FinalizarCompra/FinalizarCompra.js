import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../../context/Lcontext";
import { message } from 'antd'
import { useNavigate } from 'react-router-dom';
import { Modal } from "../../components/Modal/Modal";
import {
    FaRoad,
    FaCompass,
    FaPlus,
    FaMapMarkerAlt,
    FaCity,
    FaMap,
    FaCreditCard,
    FaCalendarAlt,
    FaLock,
    FaUser
} from "react-icons/fa";

import {
    Button,
    InputStyled,
    InputWithIcon,
    LeftIconWrapper,
    TitleModal,
} from "../Profile/Profile.css";

export function FinalizarCompra() {
    const { user } = useContext(LoginContext);
    const [productsInCart, setProductsInCart] = useState([]);
    const [frete, setFrete] = useState(0);
    const [subTotal, setSubTotal] = useState(0)
    const [total, setTotal] = useState(0)
    const [metodoPagamento, setMetodoPagamento] = useState(""); // novo estado
    const [enderecos, setEnderecos] = useState([]);
    const [enderecoSelecionado, setEnderecoSelecionado] = useState(null);

    // Estados para o formulário do Modal
    const [modalEndereco, setModalEndereco] = useState(false);
    const [modalCartão, setModalCartao] = useState(false);
    const [enviandoEndereco, setEnviandoEndereco] = useState(false);
    const [CEP, setCEP] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    // Estados para o formulário do Modal
    const [numeroCartao, setNumeroCartao] = useState("");
    const [nomeTitular, setNomeTitular] = useState("");
    const [validade, setValidade] = useState("");
    const [cvv, setCvv] = useState("");
    const [enviandoCartao, setEnviandoCartao] = useState(false);
    const [cartoes, setCartoes] = useState([]);
    const [cartaoSelecionado, setCartaoSelecionado] = useState(null);

    const apiBackEnd = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const tabelaFretePorEstado = {
        SP: 14.9,
        PR: 15.9,
        SC: 16.9,
        MG: 17.9,
        RJ: 18.9,
        ES: 19.9,
        DF: 20.9,
        BA: 21.9,
        CE: 22.9,
        PE: 23.9,
        AL: 24.9,
        PB: 25.9,
        PI: 26.9,
        SE: 27.9,
        RN: 28.9,
        TO: 29.9,
        GO: 30.9,
        MA: 31.9,
        PA: 32.9,
        RO: 33.9,
        AP: 34.9,
        RR: 35.9,
        RS: 36.9,
        MS: 37.9,
        MT: 38.9,
        AC: 39.9,
        AM: 40.9
    };


    useEffect(() => {
        const fetchCartProducts = async () => {
            if (!user || !user.id || !user.token) {
                console.warn("⚠️ Usuário inválido ou não autenticado.");
                return;
            }

            try {
                const carrinhoRes = await axios.get(
                    `${apiBackEnd}/api/carrinho/${user.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    }
                );
                console.log("✅ Carrinho encontrado:", carrinhoRes.data);
                if (!carrinhoRes?.data?.length) return;

                const promises = carrinhoRes.data.map(item =>
                    axios.get(`${apiBackEnd}/api/product/${item.product_id}`).then(response => {
                        // Aqui junta os dados do produto com o idCarrinho do item original
                        return {
                            ...response.data,      // dados do produto detalhado
                            idCarrinho: item.id,   // ou item.idCarrinho, conforme seu campo
                        };
                    })
                );

                const dados = await Promise.all(promises);
                setProductsInCart(dados);
                setTotal(dados.reduce((acc, item) => acc + item.preco * item.quantidade, 0))
                setSubTotal(dados.reduce((acc, item) => acc + item.preco * item.quantidade, 0))

                const endereco = await axios.get(`${apiBackEnd}/api/endereco`, {
                    headers: { Authorization: `Bearer ${user.token}` },
                })
                console.log(endereco.data)
                setEnderecos(endereco.data)

                // const cartoes = await axios.get(`${apiBackEnd}/api/endereco`, {
                //     headers: { Authorization: `Bearer ${user.token}` },
                // })
                // console.log(endereco.data)
                setCartoes([])

            } catch (error) {
                console.error("❌ Erro ao carregar carrinho:", error);
            } finally {
            }
        };

        fetchCartProducts();
    }, [user, apiBackEnd]);


    const confirmarPedido = () => {
        // Simular finalização (você pode integrar com API depois)
        alert("Pedido finalizado com sucesso!");
        navigate("/"); // ou para uma página de confirmação
    };

    const calcularFrete = async (endereco) => {
        setEnderecoSelecionado(endereco);

        console.log(endereco)
        const cep = endereco.CEP;
        console.log(cep)
        const cepLimpo = cep.replace(/\D/g, '');

        if (cepLimpo.length === 8) {
            try {
                const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
                const estado = response.data.uf;

                if (estado && tabelaFretePorEstado[estado]) {
                    setFrete(tabelaFretePorEstado[estado]);
                    setTotal(subTotal + tabelaFretePorEstado[estado]);
                    console.log(`✅ UF: ${estado}, Frete: R$ ${tabelaFretePorEstado[estado]}`);
                } else {
                    setFrete(0);
                    console.warn("⚠️ UF não reconhecida ou não cadastrada na tabela de frete.");
                }

            } catch (error) {
                console.error("❌ Erro ao buscar o CEP:", error);
                setFrete(0);
            }
        }
    };

    const handleCEPChange = async (e) => {
        const cep = e.target.value;
        setCEP(cep);
        if (cep.length === 9 && !cep.includes("_")) {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setRua(response.data.logradouro);
            setBairro(response.data.bairro);
            setCidade(response.data.localidade);
            setEstado(response.data.uf);
        }
    };

    // Função para recarregar apenas os endereços após um cadastro
    const fetchEnderecos = async () => {
        try {
            const response = await axios.get(`${apiBackEnd}/api/endereco`, {
                headers: { Authorization: `Bearer ${user.token}` },
            });
            setEnderecos(response.data);
        } catch (error) {
            console.error("Erro ao buscar endereços:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!CEP || !numero || !rua || !bairro || !cidade || !estado) {
            message.warning("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        setEnviandoEndereco(true);
        try {
            const response = await axios.post(
                `${apiBackEnd}/api/endereco`,
                {
                    CEP,
                    rua,
                    numero: Number(numero),
                    complemento,
                    bairro,
                    cidade,
                    estado,
                    idUsuario: user.id,
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data.message === "Success") {
                fetchEnderecos();
                closeModalEndereco();
                message.success("Endereço cadastrado com sucesso");
            } else {
                message.error("Erro ao adicionar seu endereço.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar endereço:", error);
            message.error("Ocorreu um erro no servidor.");
        } finally {
            setEnviandoEndereco(false);
        }
    };

    const handleSubmitCartao = async (e) => {
        e.preventDefault();
        if (!numeroCartao || !nomeTitular || !validade || !cvv) {
            message.warning("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        setEnviandoCartao(true);
        try {
            //Função para adicionar cartão
            //pegar do finalizar compra
            // const response = await axios.post(
            //   `${apiBackEnd}/api/endereco`,
            //   {
            //     CEP,
            //     rua,
            //     numero: Number(numero),
            //     complemento,
            //     bairro,
            //     cidade,
            //     estado,
            //     idUsuario: user.id,
            //   },
            //   {
            //     headers: {
            //       Authorization: `Bearer ${user.token}`,
            //       "Content-Type": "application/json",
            //     },
            //   }
            // );

            // if (response.data.message === "Success") {
            //   fetchEnderecos();
            //   closeModalEndereco();
            //   message.success("Endereço cadastrado com sucesso");
            // } else {
            //   message.error("Erro ao adicionar seu endereço.");
            // }
        } catch (error) {
            console.error("Erro ao cadastrar endereço:", error);
            message.error("Ocorreu um erro no servidor.");
        } finally {
            setEnviandoEndereco(false);
        }
    };

    // Funções do Modal de Endereço
    const closeModalEndereco = () => {
        setModalEndereco(false);
        setCEP("");
        setRua("");
        setNumero("");
        setComplemento("");
        setBairro("");
        setCidade("");
        setEstado("");
        setEnviandoEndereco(false);
    };

    // Funções do Modal de cartao
    const closeModalCartao = () => {
        setModalCartao(false);
        setNumeroCartao('')
        setNomeTitular('')
        setValidade('')
        setCvv('')
        setEnviandoCartao(false)
    };

    return (
        <>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px 30px' }}>
                <div style={{
                    width: '60%',
                    background: '#f2f4f9',
                    borderRadius: '16px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    border: '1px solid #ccc'
                }}>
                    <h2 style={{ textAlign: 'center', fontSize: '26px', color: '#2a303c' }}>🧾 Finalizar Compra</h2>
                    <div
                        style={{
                            borderTop: "1px solid #ccc",
                            paddingTop: "20px",
                        }}
                    >
                        <label style={{ fontWeight: 'bold', color: '#2a303c', fontSize: '16px' }}>
                            Resumo:
                        </label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: "10px", }}>
                            {productsInCart.map((item) => (
                                <div key={item.id} style={{
                                    background: '#2a303c',
                                    color: '#fff',
                                    padding: '15px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <span>{item.quantidade} x {item.nome} </span>
                                    <strong>R$ {(item.preco * item.quantidade).toFixed(2)}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: "1px solid #ccc", paddingTop: "20px", }}>
                        <label style={{ fontWeight: 'bold', color: '#2a303c', fontSize: '16px' }}>
                            Escolha um endereço de entrega:
                        </label>

                        {enderecos.length > 0 ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {enderecos.map((end) => (
                                    <label
                                        key={end.id}
                                        style={{
                                            border: enderecoSelecionado?.id === end.id
                                                ? '2px solid #4CAF50'
                                                : '1px solid #ccc',
                                            borderRadius: '10px',
                                            padding: '10px',
                                            background: '#fff',
                                            cursor: 'pointer',
                                            color: "#2a303c"
                                        }}
                                    >
                                        <input
                                            type="radio"
                                            name="endereco"
                                            value={end.id}
                                            checked={enderecoSelecionado?.id === end.id}
                                            onChange={() => calcularFrete(end)}
                                            style={{ marginRight: '10px' }}
                                        />
                                        {`${end.rua}, ${end.numero}, ${end.complemento} - ${end.bairro}, ${end.cidade}/${end.estado} - CEP: ${end.CEP}`}
                                    </label>
                                ))}

                                {/* Botão para adicionar outro endereço */}
                                <button
                                    onClick={() => setModalEndereco(true)}
                                    style={{
                                        marginTop: '10px',
                                        padding: '10px',
                                        background: '#2a303c',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        width: 'fit-content'
                                    }}
                                >
                                    ➕ Adicionar outro endereço
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setModalEndereco(true)}
                                style={{
                                    padding: '10px',
                                    background: '#2a303c',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    width: 'fit-content'
                                }}
                            >
                                ➕ Cadastrar novo endereço
                            </button>
                        )}
                    </div>
                    <div
                        style={{
                            marginTop: "20px",
                            borderTop: "1px solid #ccc",
                            paddingTop: "20px",
                        }}
                    >
                        <label
                            style={{
                                fontWeight: "bold",
                                color: "#2a303c",
                                fontSize: "16px",
                                marginBottom: "10px",
                                display: "block",
                            }}
                        >
                            Método de Pagamento:
                        </label>

                        <label style={{ marginRight: "15px", cursor: "pointer", color: "#2a303c" }}>
                            <input
                                type="radio"
                                name="pagamento"
                                value="Cartão de Crédito"
                                checked={metodoPagamento === "Cartão de Crédito"}
                                onChange={(e) => setMetodoPagamento(e.target.value)}
                                style={{ marginRight: "5px" }}
                            />
                            Cartão de Crédito
                        </label>

                        <label style={{ marginRight: "15px", cursor: "pointer", color: "#2a303c" }}>
                            <input
                                type="radio"
                                name="pagamento"
                                value="Boleto Bancário"
                                checked={metodoPagamento === "Boleto Bancário"}
                                onChange={(e) => setMetodoPagamento(e.target.value)}
                                style={{ marginRight: "5px" }}
                            />
                            Boleto Bancário
                        </label>

                        <label style={{ marginRight: "15px", cursor: "pointer", color: "#2a303c" }}>
                            <input
                                type="radio"
                                name="pagamento"
                                value="Pix"
                                checked={metodoPagamento === "Pix"}
                                onChange={(e) => setMetodoPagamento(e.target.value)}
                                style={{ marginRight: "5px" }}
                            />
                            Pix
                        </label>
                    </div>
                    {metodoPagamento === "Cartão de Crédito" &&
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            borderTop: "1px solid #ccc",
                            paddingTop: "20px",
                        }}>
                            <label style={{
                                fontWeight: 'bold',
                                color: '#2a303c',
                                fontSize: '16px'
                            }}>
                                Escolha um cartão para pagamento:
                            </label>

                            {cartoes.length > 0 ? (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}>
                                    {cartoes.map((cartao) => (
                                        <label
                                            key={cartao.id}
                                            style={{
                                                border: cartaoSelecionado?.id === cartao.id
                                                    ? '2px solid #4CAF50'
                                                    : '1px solid #ccc',
                                                borderRadius: '10px',
                                                padding: '10px',
                                                background: '#fff',
                                                cursor: 'pointer',
                                                color: "#2a303c"
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="cartao"
                                                value={cartao.id}
                                                checked={cartaoSelecionado?.id === cartao.id}
                                                onChange={() => setCartaoSelecionado(cartao)}
                                                style={{ marginRight: '10px' }}
                                            />
                                            {`**** **** **** ${cartao.numero.slice(-4)} - ${cartao.nome}`}
                                        </label>
                                    ))}

                                    {/* Botão para adicionar outro cartão */}
                                    <button
                                        onClick={() => setModalCartao(true)}
                                        style={{
                                            marginTop: '10px',
                                            padding: '10px',
                                            background: '#2a303c',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '8px',
                                            cursor: 'pointer',
                                            fontSize: '16px',
                                            width: 'fit-content'
                                        }}
                                    >
                                        ➕ Adicionar outro cartão
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setModalCartao(true)}
                                    style={{
                                        padding: '10px',
                                        background: '#2a303c',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        width: 'fit-content'
                                    }}
                                >
                                    ➕ Cadastrar novo cartão
                                </button>
                            )}
                        </div>
                    }
                    {metodoPagamento === "Boleto Bancário" &&
                        <label style={{ color: "#6c7484" }}>Prazo para debito é 2 a 3 dias utéis</label>
                    }
                    {metodoPagamento === "Pix" &&
                        <label style={{ color: "#6c7484" }}>Pagamento em minutos</label>
                    }
                    {metodoPagamento === "Cartão de Crédito" &&
                        <label style={{ color: "#6c7484" }}>Pagamento em minutos</label>
                    }




                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        fontSize: '18px',
                        paddingTop: '20px',
                        borderTop: '1px solid #ccc'
                    }}>
                        <div style={{ display: 'flex' }}>
                            <strong style={{ color: '#2a303c', paddingRight: '5px' }}>Sub-total:</strong>
                            <strong style={{ color: '#4CAF50' }}>R$ {subTotal.toFixed(2)}</strong>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <strong style={{ color: '#2a303c', paddingRight: '5px' }}>Frete:</strong>
                            <strong style={{ color: '#4CAF50' }}>R$ {frete.toFixed(2)}</strong>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <strong style={{ color: '#2a303c', paddingRight: '5px' }}>Total:</strong>
                            <strong style={{ color: '#4CAF50' }}>
                                R$ {(total).toFixed(2)}
                            </strong>
                        </div>
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
                        <button
                            onClick={() => navigate("/cart")}
                            style={{
                                padding: '10px 20px',
                                background: '#2a303c',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            ⬅️ Voltar ao carrinho
                        </button>

                        <button
                            onClick={confirmarPedido}
                            style={{
                                padding: '10px 20px',
                                background: '#4CAF50',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            ✅ Confirmar pedido
                        </button>
                    </div>
                </div>
            </div>
            {/* --- Modal de Endereço --- */}
            <Modal isOpen={modalEndereco} onClose={closeModalEndereco}>
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        width: "100%",
                        maxWidth: "400px",
                        margin: "0 auto",
                    }}
                >
                    <TitleModal>Cadastrar Novo Endereço</TitleModal>

                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaCompass />
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
                            <FaRoad />
                        </LeftIconWrapper>
                        <InputStyled
                            type="text"
                            placeholder="Rua"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                            required
                        />
                    </InputWithIcon>
                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaRoad />
                        </LeftIconWrapper>
                        <InputStyled
                            type="text"
                            placeholder="Número"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                            required
                        />
                    </InputWithIcon>
                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaPlus />
                        </LeftIconWrapper>
                        <InputStyled
                            type="text"
                            placeholder="Complemento (opcional)"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />
                    </InputWithIcon>
                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaMapMarkerAlt />
                        </LeftIconWrapper>
                        <InputStyled
                            type="text"
                            placeholder="Bairro"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            required
                        />
                    </InputWithIcon>
                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaCity />
                        </LeftIconWrapper>
                        <InputStyled
                            type="text"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                        />
                    </InputWithIcon>
                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaMap />
                        </LeftIconWrapper>
                        <InputStyled
                            type="text"
                            placeholder="Estado"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            required
                        />
                    </InputWithIcon>

                    <Button type="submit" disabled={enviandoEndereco}>
                        {enviandoEndereco ? "Enviando..." : "Salvar Endereço"}
                    </Button>
                </form>
            </Modal>
            <Modal isOpen={modalCartão} onClose={closeModalCartao}>
                <form
                    onSubmit={handleSubmitCartao} // Lembre de criar essa função
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        width: "100%",
                        maxWidth: "400px",
                        margin: "0 auto",
                    }}
                >
                    <TitleModal>Cadastrar Cartão de Crédito</TitleModal>

                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaCreditCard />
                        </LeftIconWrapper>
                        <InputStyled
                            mask="9999 9999 9999 9999"
                            type="text"
                            placeholder="Número do Cartão"
                            value={numeroCartao}
                            onChange={(e) => setNumeroCartao(e.target.value)}
                            required
                        />
                    </InputWithIcon>

                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaUser />
                        </LeftIconWrapper>
                        <InputStyled
                            type="text"
                            placeholder="Nome no Cartão"
                            value={nomeTitular}
                            onChange={(e) => setNomeTitular(e.target.value)}
                            required
                        />
                    </InputWithIcon>

                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaCalendarAlt />
                        </LeftIconWrapper>
                        <InputStyled
                            mask="99/99"
                            type="text"
                            placeholder="Validade (MM/AA)"
                            value={validade}
                            onChange={(e) => setValidade(e.target.value)}
                            required
                        />
                    </InputWithIcon>

                    <InputWithIcon>
                        <LeftIconWrapper>
                            <FaLock />
                        </LeftIconWrapper>
                        <InputStyled
                            mask="999"
                            type="text"
                            placeholder="CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            required
                        />
                    </InputWithIcon>

                    <Button type="submit" disabled={enviandoCartao}>
                        {enviandoCartao ? "Salvando..." : "Salvar Cartão"}
                    </Button>
                </form>
            </Modal>
        </>
    );
}

