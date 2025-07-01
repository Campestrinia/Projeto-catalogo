import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import {
  ContainerDad,
  Container,
  Imagi,
  ContainerSon,
  About,
  HeartIcon,
  Button,
  ImagamProduct,
  ContainerButton,
  ContainerButtonAndAbout,
  ContainerSemelhantes,
  Card,
  Image,
  AboutSemelhantes,
} from "./product.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { LoginContext } from "../../context/Lcontext.js";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { adicionarAoCarrinho } from "../../components/Cart/cartHelpers.js";

import styled from "styled-components";
import { message } from "antd";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  height: 140px;
`;

export function Product() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { user } = useContext(LoginContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef(null);

  const [product, setProduct] = useState({});
  const [productsSemelhante, setProductsSemelhante] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [categoria, setCategoria] = useState({});
  const [favoritado, setFavoritado] = useState(false);

  const navigateToManageProduct = () => {
    navigate(`/manage-product/${id}`, { state: { from: location.pathname } });
  };
  const favorito = async (idUsuario, idProduct, idUsuarioProduct) => {
    try {
      console.log(user);
      if (user && Object.keys(user).length > 0) {
        console.log(user.id);
        console.log(idUsuarioProduct);
        console.log(Number(user.id) === Number(idUsuarioProduct));
        if (Number(user.id) === Number(idUsuarioProduct)) {
          message.error("Você não pode favoritar um produto vendido por você!");
          return;
        }

        const response = await axios.post(
          `${apiUrl}/api/favorito/`,
          { idUsuario, idProduct },
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        console.log(response.data);
        setFavoritado(true);
        console.log("Produto favoritado:", response.data);
        message.success("Produto favoritado com sucesso!");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Erro ao favoritar produto:", error);
    }
  };
  const desfavorito = async () => {
    try {
      const favorito = await axios.get(`${apiUrl}/api/favorito/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const itemFavorito = favorito.data.find(
        (item) => Number(item.idProduct) === Number(id)
      );
      console.log(itemFavorito);
      const response = await axios.delete(
        `${apiUrl}/api/favorito/${itemFavorito.id}`,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      setFavoritado(false);
      console.log(response.data);
      message.success("Produto desfavoritado com sucesso!");
    } catch (error) {
      console.error("Erro ao favoritar produto:", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product or image:", error);
      }
    };
    fetchProduct();
  }, [id, apiUrl]);

  useEffect(() => {
    const fetchfavorite = async () => {
      try {
        if (!user) {
          setFavoritado(false);
        } else {
          console.log("User:", user);
          if (!user || !user.id || !user.token) return;

          const favorito = await axios.get(
            `${apiUrl}/api/favorito/${user.id}`,
            {
              headers: { Authorization: `Bearer ${user.token}` },
            }
          );
          const isFavorito = favorito.data.some(
            (item) => Number(item.idProduct) === Number(id)
          );
          console.log(isFavorito);
          setFavoritado(isFavorito);
        }
      } catch (error) {
        console.error("Error fetching product or image:", error);
      }
    };
    fetchfavorite();
  }, [user, apiUrl, id]);

  useEffect(() => {
    if (product.idCategoria) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(
            `${apiUrl}/api/productWithCategoria/${product.idCategoria}`
          );
          const products = response.data.filter(
            (item) => item.id !== product.id
          );
          setProductsSemelhante(products.slice(-8));
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching product or image:", error);
        }
      };
      fetchProduct();
    }
  }, [product.idCategoria, product.id, apiUrl]);

  useEffect(() => {
    if (product.idCategoria) {
      const fetchProductsCategoria = async () => {
        try {
          const response = await axios.get(
            `${apiUrl}/api/categoria/${product.idCategoria}`
          );
          setCategoria(response.data);
        } catch (error) {
          console.error("Error fetching product or image:", error);
        }
      };
      fetchProductsCategoria();
    }
  }, [product.idCategoria, apiUrl]);

  useEffect(() => {
    if (product.idUsuario) {
      const fetchUsuario = async () => {
        try {
          const response = await axios.get(
            `${apiUrl}/api/usuario/${product.idUsuario}`
          );
          setUsuario(response.data);
        } catch (error) {
          console.error("Error fetching product or image:", error);
        }
      };
      fetchUsuario();
    }
  }, [product.idUsuario, apiUrl]);

  // const scroll = (scrollOffset) => {
  //     if (containerRef.current) {
  //         containerRef.current.scrollBy({
  //             left: scrollOffset,
  //             behavior: 'smooth',
  //         });
  //     }
  // };
  return (
    <>
      <ContainerDad>
        <h1>{product.nome || "Não encontrado"}</h1>
        <Container>
          <ImagamProduct>
            <Imagi
              src={`${apiUrl}/images/${product.imagem}`}
              alt={product.nome || "Imagem não encontrada"}
            />
          </ImagamProduct>
          <ContainerSon>
            <ContainerButtonAndAbout>
              <About>
                <h3>Preço: {product.preco || "Não encontrado"}</h3>
                <h3>Categoria: {categoria.nome || "Não encontrado"}</h3>
                <h4>Descrição: {product.descricao || "Não encontrado"}</h4>
                <h5>Vendido por {usuario.nome || "Não encontrado"}</h5>
              </About>
              <ContainerButton>
                <HeartIcon>
                  {favoritado ? (
                    <FaHeart onClick={() => desfavorito()} />
                  ) : (
                    <FaRegHeart
                      onClick={() =>
                        favorito(user.id, product.id, product.idUsuario)
                      }
                    />
                  )}
                </HeartIcon>

                {usuario.id === user.id && (
                  <Button onClick={navigateToManageProduct}>Editar</Button>
                )}

                <Button>Comprar</Button>

                <Button
                  onClick={() =>
                    adicionarAoCarrinho(user, product.idUsuario, product.id)
                  }
                >
                  Carrinho
                </Button>
              </ContainerButton>
            </ContainerButtonAndAbout>
          </ContainerSon>
        </Container>
        <h3>Produtos semelhantes:</h3>
        <ContainerSemelhantes ref={containerRef}>
          {/* <ButtonLeft onClick={() => scroll(-containerRef.current.offsetWidth)}>◀</ButtonLeft> */}
          {productsSemelhante ? (
            productsSemelhante.map((productSemelhante) => (
              <React.Fragment key={productSemelhante.id}>
                <StyledLink to={`/product/${productSemelhante.id}`}>
                  <Card>
                    <Image
                      src={`${apiUrl}/images/${productSemelhante.imagem}`}
                      alt={productSemelhante.nome}
                    />
                    <AboutSemelhantes>
                      R${productSemelhante.preco}
                    </AboutSemelhantes>
                    <AboutSemelhantes>
                      {productSemelhante.nome}
                    </AboutSemelhantes>
                  </Card>
                </StyledLink>
              </React.Fragment>
            ))
          ) : (
            <h3>Carregando....</h3>
          )}
          {/* <ButtonRight onClick={() => scroll(containerRef.current.offsetWidth)}>▶</ButtonRight> */}
        </ContainerSemelhantes>
      </ContainerDad>
    </>
  );
}
