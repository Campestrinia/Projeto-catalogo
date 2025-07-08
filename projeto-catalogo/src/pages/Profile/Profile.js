import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import {
  FaRoad,
  FaCompass,
  FaPlus,
  FaMapMarkerAlt,
  FaCity,
  FaMap,
  FaUser,
  FaMapMarkedAlt,
  FaShoppingBag,
  FaStar,
  FaCreditCard,
  FaTrashAlt,
  FaCalendarAlt,
  FaLock,
} from "react-icons/fa";
import { LoginContext } from "../../context/Lcontext";
import { useNavigate } from "react-router-dom";
import {
  ProfilePageLayout,
  SidebarNav,
  SidebarHeader,
  NavMenu,
  NavItem,
  SidebarFooter,
  ContentPanel,
  Title,
  Cards,
  InfoItem,
  Button,
  ProductImage,
  StyledLink,
  InputStyled,
  InputWithIcon,
  LeftIconWrapper,
  TitleModal,
} from "./Profile.css";
import { message } from "antd";
import { Modal } from "../../components/Modal/Modal";

export function Profile() {
  const apiBackEnd = process.env.REACT_APP_API_URL;
  const { user, Logout, DeleteAccount } = useContext(LoginContext);

  // Estados para guardar os dados da API
  const [profile, setProfile] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [enderecos, setEnderecos] = useState([]);
  const [myProducts, setMyProducts] = useState([]);
  const [myCompras, setCompras] = useState([]);

  // Estados para controlar a interface
  const [isLoading, setIsLoading] = useState(true);
  const [activeView, setActiveView] = useState("enderecos");

  // Estados para o formulário do Modal
  const [modalEndereco, setModalEndereco] = useState(false);
  const [modalCartao, setModalCartao] = useState(false);
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

  const navigate = useNavigate();

  // useEffect para buscar todos os dados iniciais
  useEffect(() => {
    if (!user || !user.id || !user.token) {
      return; // Aguarda o objeto 'user' do contexto estar pronto
    }

    const fetchAllData = async () => {
      setIsLoading(true);
      try {
        // Executa todas as chamadas em paralelo para mais performance
        const [profileRes, productsRes, favRes, addressRes] = await Promise.all(
          [
            axios.get(`${apiBackEnd}/api/usuario/${user.id}`, {
              headers: { Authorization: `Bearer ${user.token}` },
            }),
            axios.get(`${apiBackEnd}/api/product/usuario/${user.id}`, {
              headers: { Authorization: `Bearer ${user.token}` },
            }),
            axios.get(`${apiBackEnd}/api/favorito/${user.id}`, {
              headers: { Authorization: `Bearer ${user.token}` },
            }),
            axios.get(`${apiBackEnd}/api/endereco`, {
              headers: { Authorization: `Bearer ${user.token}` },
            }),
          ]
        );

        // Atualiza os estados com os dados recebidos
        setProfile(profileRes.data);
        setMyProducts(productsRes.data);
        setEnderecos(addressRes.data);
        setCompras(addressRes.data);

        // Processa os favoritos para buscar os detalhes de cada produto
        if (favRes.data.length > 0) {
          const favDetails = await Promise.all(
            favRes.data.map((item) =>
              axios.get(`${apiBackEnd}/api/product/${item.idProduct}`, {
                headers: { Authorization: `Bearer ${user.token}` },
              })
            )
          );
          setFavoritos(favDetails.map((res) => res.data));
        }
      } catch (error) {
        console.error("Erro ao buscar dados do perfil:", error);
        message.error("Não foi possível carregar os dados do perfil.");
      } finally {
        // Para a tela de carregamento, mesmo que tenha dado erro
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, [user, apiBackEnd]);

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

  // Funções de Ação e Navegação
  const handleLogout = () => {
    Logout();
    navigate("/");
  };
  const handleDeleteAccount = () => {
    DeleteAccount();
    navigate("/");
  };
  const goToPostPage = () => navigate("/createProduct");

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
    setNumeroCartao("");
    setNomeTitular("");
    setValidade("");
    setCvv("");
    setEnviandoCartao(false);
  };

  const excluirEndereco = async (id) => {
    try {
      const response = await axios.delete(`${apiBackEnd}/api/endereco/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      console.log(response.data);
      // Atualiza lista local após exclusão
      setEnderecos((prev) => prev.filter((end) => end.id !== id));
      message.success("Endereço excluido com sucesso!");
    } catch (error) {
      message.error("Erro ao excluir endereço");
      console.log(error);
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

  // Tela de Carregamento Principal
  if (isLoading) {
    return (
      <div
        style={{
          background: "#1e222a",
          color: "white",
          height: "100vh",
          display: "grid",
          placeContent: "center",
        }}
      >
        Carregando...
      </div>
    );
  }

  // Função que decide qual conteúdo mostrar no painel
  const renderContent = () => {
    switch (activeView) {
      case "enderecos":
        return (
          <>
            <Title>Meus Endereços</Title>
            <Cards>
              {enderecos.length > 0 ? (
                enderecos.map((addr, idx) => (
                  <InfoItem key={idx}>
                    {/* Ícone da lixeira */}
                    <FaTrashAlt
                      onClick={() => excluirEndereco(addr.id)}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    />

                    <p>
                      <strong>Endereço {idx + 1}</strong>
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
                  </InfoItem>
                ))
              ) : (
                <p>Nenhum endereço cadastrado.</p>
              )}
            </Cards>

            <Button onClick={() => setModalEndereco(true)}>
              Cadastrar Endereço
            </Button>
          </>
        );
      case "vendas":
        return (
          <>
            <Title>Minhas Vendas</Title>
            <Cards>
              {myProducts.length > 0 ? (
                myProducts.map((product) => (
                  <StyledLink to={`/product/${product.id}`} key={product.id}>
                    <InfoItem>
                      <ProductImage
                        src={`${apiBackEnd}/images/${product.imagem}`}
                        alt={product.nome}
                      />
                      <p>
                        <strong>{product.nome}</strong>
                      </p>
                    </InfoItem>
                  </StyledLink>
                ))
              ) : (
                <p>Você ainda não realizou vendas.</p>
              )}
            </Cards>
            <Button onClick={goToPostPage}>Postar Novo Item</Button>
          </>
        );
      case "compras":
        return (
          <>
            <Title>Minhas compras</Title>
            <Cards>
              {myCompras.length > 0 ? (
                myCompras.map((product) => (
                  <StyledLink to={`/product/${product.id}`} key={product.id}>
                    <InfoItem>
                      <ProductImage
                        src={`${apiBackEnd}/images/${product.imagem}`}
                        alt={product.nome}
                      />
                      <p>
                        <strong>{product.nome}</strong>
                      </p>
                    </InfoItem>
                  </StyledLink>
                ))
              ) : (
                <p>Você ainda não realizou nenhuma compra.</p>
              )}
            </Cards>
          </>
        );
      case "favoritos":
        return (
          <>
            <Title>Meus Favoritos</Title>
            <Cards>
              {favoritos.length > 0 ? (
                favoritos.map((fav) => (
                  <StyledLink to={`/product/${fav.id}`} key={fav.id}>
                    <InfoItem>
                      <ProductImage
                        src={`${apiBackEnd}/images/${fav.imagem}`}
                        alt={fav.nome}
                      />
                      <p>
                        <strong>{fav.nome}</strong>
                      </p>
                    </InfoItem>
                  </StyledLink>
                ))
              ) : (
                <p>Você não possui favoritos.</p>
              )}
            </Cards>
          </>
        );
      case "cartoes":
        return (
          <>
            <Title>Meus Cartões</Title>
            <Cards>
              {profile.cartoes?.length > 0 ? (
                profile.cartoes.map((card, idx) => (
                  <InfoItem key={idx}>
                    <p>**** **** **** {card.slice(-4)}</p>
                  </InfoItem>
                ))
              ) : (
                <p>Nenhum cartão cadastrado.</p>
              )}
            </Cards>
            <Button
              onClick={() => {
                setModalCartao(true);
              }}
            >
              Cadastrar Cartão
            </Button>
          </>
        );
      default:
        return <Title>Bem-vindo, {user.nome}!</Title>;
    }
  };

  return (
    <>
      <ProfilePageLayout>
        <SidebarNav>
          <SidebarHeader>
            <FaUser size={48} />
            <h3>{user.nome}</h3>
            {profile && <p>{profile.email}</p>}
          </SidebarHeader>

          <NavMenu>
            <NavItem
              isActive={activeView === "enderecos"}
              onClick={() => setActiveView("enderecos")}
            >
              <FaMapMarkedAlt /> Endereços
            </NavItem>
            <NavItem
              isActive={activeView === "vendas"}
              onClick={() => setActiveView("vendas")}
            >
              <FaShoppingBag /> Minhas Vendas
            </NavItem>
            <NavItem
              isActive={activeView === "compras"}
              onClick={() => setActiveView("compras")}
            >
              <FaShoppingBag /> Minhas compras
            </NavItem>
            <NavItem
              isActive={activeView === "favoritos"}
              onClick={() => setActiveView("favoritos")}
            >
              <FaStar /> Favoritos
            </NavItem>
            <NavItem
              isActive={activeView === "cartoes"}
              onClick={() => setActiveView("cartoes")}
            >
              <FaCreditCard /> Cartões
            </NavItem>
          </NavMenu>

          <SidebarFooter>
            <Button onClick={handleLogout} fullWidth>
              Sair
            </Button>
            <Button onClick={handleDeleteAccount} variant="danger" fullWidth>
              Deletar Conta
            </Button>
          </SidebarFooter>
        </SidebarNav>

        <ContentPanel>{renderContent()}</ContentPanel>
      </ProfilePageLayout>

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
      <Modal isOpen={modalCartao} onClose={closeModalCartao}>
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
