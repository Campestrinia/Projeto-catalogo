import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import {
  FaRoad,
  FaCompass,
  FaPlus,
  FaMapMarkerAlt,
  FaCity,
  FaMap,
} from "react-icons/fa";
import { LoginContext } from "../../context/Lcontext";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Title,
  MainContainer,
  Cards,
  GridContainer,
  InputStyled,
  InputWithIcon,
  LeftIconWrapper,
  TitleModal,
  ButtonOnSubmit,
  CardContainer,
  ProductImage,
  StyledLink,
} from "./Profile.css";
import { message } from "antd";
import { Modal } from "../../components/Modal/Modal";

export function Profile() {
  const apiBackEnd = process.env.REACT_APP_API_URL;
  const { user, Logout, DeleteAccount } = useContext(LoginContext);
  const [profile, setProfile] = useState(null);
  const [favoritos, setFavoritos] = useState(null);
  const [enderecos, setEnderecos] = useState(null);
  const [myProducts, setMyProducts] = useState(null);
  const [modalEndereco, setModalEndereco] = useState(false);
  const [enviandoEndereco, setEnviandoEndereco] = useState(false);
  const [CEP, setCEP] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
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
    console.log("User:", user);
    if (!user || !user.id || !user.token) return;

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${apiBackEnd}/api/usuario/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        setProfile(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };
    const fetchMyProducts = async () => {
      try {
        const response = await axios.get(
          `${apiBackEnd}/api/product/usuario/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        setMyProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    const fetchFavoritos = async () => {
      try {
        const responseFavoritos = await axios.get(
          `${apiBackEnd}/api/favorito/${user.id}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        const favoritosData = responseFavoritos.data;

        const produtos = await Promise.all(
          favoritosData.map(async (item) => {
            const responseProduct = await axios.get(
              `${apiBackEnd}/api/product/${item.idProduct}`,
              {
                headers: {
                  Authorization: `Bearer ${user.token}`,
                },
              }
            );
            return responseProduct.data;
          })
        );
        console.log(produtos);
        setFavoritos(produtos);
      } catch (error) {
        console.error("Erro ao buscar favoritos:", error);
      }
    };

    fetchUser();
    fetchMyProducts();
    fetchFavoritos();
    fetchEnderecos();
    // eslint-disable-next-line
  }, [apiBackEnd, user]);

  const handleLogout = () => {
    Logout();
    navigate("/");
  };

  const handleDeleteAccount = () => {
    DeleteAccount();
    navigate("/");
  };

  const goToPostPage = () => {
    navigate("/createProduct");
  };

  if (!profile) {
    return <div>Carregando...</div>;
  }

  const closeModalEndereco = async (value) => {
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
  const handleCEPChange = async (value) => {
    const cep = value.target.value;
    setCEP(cep);

    if (cep.length === 9 && !cep.includes("_")) {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(response.data);
      setRua(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);
      setEstado(response.data.estado);
    }
  };
  const handleRuaChange = async (value) => {
    const rua = value.target.value;
    setRua(rua);
  };
  const handleNumeroChange = async (value) => {
    const numero = value.target.value;
    setNumero(numero);
  };
  const handleComplementoChange = async (value) => {
    const complemento = value.target.value;
    setComplemento(complemento);
  };
  const handleBairroChange = async (value) => {
    const bairro = value.target.value;
    setBairro(bairro);
  };
  const handleCidadeChange = async (value) => {
    const cidade = value.target.value;
    setCidade(cidade);
  };
  const handleEstadoChange = async (value) => {
    const estado = value.target.value;
    setEstado(estado);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //Garante que a pagina não atualize
    try {
      if (CEP && numero && rua && complemento && bairro && cidade && estado) {
        setEnviandoEndereco(true);

        const numeroInteiro = Number(numero);
        const response = await axios.post(
          `${apiBackEnd}/api/endereco`,
          {
            CEP: CEP,
            rua: rua,
            numero: numeroInteiro,
            complemento: complemento,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            idUsuario: user.id,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        if (response.data.message === "Success") {
          console.log("Form enviado!");
          console.log(response.data);
          fetchEnderecos();
          setModalEndereco(false);
          setCEP("");
          setRua("");
          setNumero("");
          setComplemento("");
          setBairro("");
          setCidade("");
          setEstado("");
          setEnviandoEndereco(false);
          message.success("Endereço cadastrado com sucesso");
        } else {
          message.error(
            "Erro ao adicionar seu endereço, tente novamente em alguns instantes"
          );
        }
      }
    } catch (error) {
      setEnviandoEndereco(false);
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
        <Button onClick={handleDeleteAccount}>Deletar conta</Button>

        <GridContainer>
          <CardContainer>
            <Cards>
              <Title>Endereços</Title>
              {enderecos?.length > 0 ? (
                enderecos.map((addr, idx) => (
                  <div key={idx}>
                    <p>
                      <strong>Endereço</strong> {idx + 1}
                    </p>
                    <p>
                      <strong>CEP:</strong> {addr.CEP}
                    </p>
                    <p>
                      <strong>Rua:</strong> {addr.rua}, {addr.numero}
                    </p>
                    <p>
                      <strong>Complemento:</strong> {addr.complemento}
                    </p>
                    <p>
                      <strong>Bairro:</strong> {addr.bairro}
                    </p>
                    <p>
                      <strong>Cidade:</strong> {addr.cidade} - {addr.estado}
                    </p>
                    <hr />
                  </div>
                ))
              ) : (
                <p>Nenhum endereço cadastrado.</p>
              )}
            </Cards>
            <Button onClick={() => setModalEndereco(true)}>
              Cadastrar um novo endereço
            </Button>
          </CardContainer>
          <Modal isOpen={modalEndereco} onClose={() => closeModalEndereco()}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "12px",
                width: "100%",
                maxWidth: "400px",
                margin: "0 auto",
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
                  value={complemento || ""}
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
          <CardContainer>
            <Cards>
              <Title>Cartões</Title>
              {profile.cartoes?.length > 0 ? (
                profile.cartoes.map((card, idx) => (
                  <p key={idx}>**** **** **** {card.slice(-4)}</p>
                ))
              ) : (
                <p>Nenhum cartão cadastrado.</p>
              )}
            </Cards>
            <Button onClick={goToPostPage}>Cadastrar cartão</Button>
          </CardContainer>
          <CardContainer>
            <Cards>
              <Title>Meus favoritos</Title>
              {favoritos?.length > 0 ? (
                favoritos.map((addr, item) => (
                  <StyledLink to={`/product/${addr.id}`} key={item}>
                    <p>
                      <strong>Favorito</strong> {item + 1}
                    </p>
                    <ProductImage
                      src={`${apiBackEnd}/images/${addr.imagem}`}
                      alt={addr.nome || "Imagem não encontrada"}
                    />
                    <p>
                      <strong>idUsuario:</strong> {addr.idUsuario}
                    </p>
                    <p>
                      <strong>idProduct:</strong> {addr.id}
                    </p>
                    <hr />
                  </StyledLink>
                ))
              ) : (
                <p>Você ainda não tem produtos favoritados.</p>
              )}
            </Cards>
          </CardContainer>
          <CardContainer>
            <Cards>
              <Title>Minhas Vendas</Title>
              {myProducts?.length > 0 ? (
                myProducts.map((addr, key) => (
                  <StyledLink to={`/product/${addr.id}`} key={key}>
                    <p>
                      <strong>produto</strong> {key + 1}
                    </p>
                    <ProductImage
                      src={`${apiBackEnd}/images/${addr.imagem}`}
                      alt={addr.nome || "Imagem não encontrada"}
                    />
                    {/* <p><strong>idUsuario:</strong> {addr.idUsuario}</p>
                                        <p><strong>idProduct:</strong> {addr.id}</p> */}
                    <hr />
                  </StyledLink>
                ))
              ) : (
                <p>Você ainda não realizou vendas.</p>
              )}
            </Cards>
            <Button onClick={goToPostPage}>Postar novo item</Button>
          </CardContainer>
        </GridContainer>
      </MainContainer>

      <Footer />
    </>
  );
}
