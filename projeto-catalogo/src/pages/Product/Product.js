import React, { useState, useEffect, useContext } from "react";
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
import { useParams, useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { message } from "antd";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export function Product() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { user } = useContext(LoginContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [productsSemelhante, setProductsSemelhante] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [categoria, setCategoria] = useState({});
  const [favoritado, setFavoritado] = useState(false);

  const navigateToManageProduct = () => {
    navigate(`/manage-product/${id}`);
  };

  const favorito = async (idUsuario, idProduct, idUsuarioProduct) => {
    try {
      if (user && Object.keys(user).length > 0) {
        if (Number(user.id) === Number(idUsuarioProduct)) {
          message.error("Você não pode favoritar um produto vendido por você!");
          return;
        }
        const response = await axios.post(
          `${apiUrl}/api/favorito/`,
          { idUsuario, idProduct },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        console.log(response)
        setFavoritado(true);
        message.success("Produto favoritado com sucesso!");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Erro ao favoritar produto:", error);
    }
  };

  const adicionarAoCarrinho = async (
    comprador,
    product_id,
    quantidade,
    preco,
    nomeVendedor
  ) => {
    try {
      if (!user) {
        navigate("/login");
        return;
      }
      const carrinhoRes = await axios.get(`${apiUrl}/api/carrinho/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const itemJaExiste = carrinhoRes.data.some(
        (item) => item.product_id === product_id
      );

      if (user.id === product.idUsuario) {
        message.error("Você não pode adicionar um produto seu ao carrinho!");
        return;
      } else if (itemJaExiste) {
        message.error("Esse item já está no seu carrinho!");
      } else {
        const response = await axios.post(
          `${apiUrl}/api/carrinho`,
          {
            idUsuario: comprador,
            product_id: product_id,
            quantidade: quantidade,
            preco_unitario: preco,
          },
          { headers: { Authorization: `Bearer ${user.token}` } }
        );
        console.log(response)
        message.success("Item adicionado ao carrinho");
      }
    } catch (error) {
      message.error("Erro ao adicionar item ao carrinho");
      console.error("Erro ao adicionar ao carrinho:", error);
    }
  };

  const desfavorito = async () => {
    try {
      const favoritoRes = await axios.get(`${apiUrl}/api/favorito/${user.id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const itemFavorito = favoritoRes.data.find(
        (item) => Number(item.idProduct) === Number(id)
      );
      if (itemFavorito) {
        await axios.delete(`${apiUrl}/api/favorito/${itemFavorito.id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setFavoritado(false);
        message.success("Produto desfavoritado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao desfavoritar produto:", error);
    }
  };

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Busca produto
        const productResponse = await axios.get(`${apiUrl}/api/product/${id}`);
        const productData = productResponse.data;
        setProduct(productData);

        if (productData.idUsuario) {
          const usuarioResponse = await axios.get(
            `${apiUrl}/api/usuario/${productData.idUsuario}`
          );
          setUsuario(usuarioResponse.data);
        }
        if (productData.idCategoria) {
          const categoriaResponse = await axios.get(
            `${apiUrl}/api/categoria/${productData.idCategoria}`
          );
          setCategoria(categoriaResponse.data);

          const semelhanteResponse = await axios.get(
            `${apiUrl}/api/productWithCategoria/${productData.idCategoria}`
          );
          const filteredSemelhantes = semelhanteResponse.data.filter(
            (item) => item.id !== productData.id
          );
          setProductsSemelhante(filteredSemelhantes.slice(-8));
        }
      } catch (error) {
        console.error("Erro ao carregar dados do produto:", error);
        setProduct({});
      }
    };
    fetchProductData();
  }, [id, apiUrl]);

  useEffect(() => {
    if (user && product) {
      const fetchFavoriteStatus = async () => {
        try {
          const favoritoRes = await axios.get(
            `${apiUrl}/api/favorito/${user.id}`,
            {
              headers: { Authorization: `Bearer ${user.token}` },
            }
          );
          const isFavorito = favoritoRes.data.some(
            (item) => Number(item.idProduct) === Number(id)
          );
          setFavoritado(isFavorito);
        } catch (error) {
          console.error("Erro ao buscar status de favorito:", error);
        }
      };
      fetchFavoriteStatus();
    }
  }, [user, product, id, apiUrl]);

  if (!product || !user) {
    return (
      <ContainerDad>
        <h1>Carregando...</h1>
      </ContainerDad>
    );
  }
  if (!product.id) {
    return (
      <ContainerDad>
        <h1>Produto não encontrado</h1>
      </ContainerDad>
    );
  }

  return (
    <ContainerDad>
      <h1>{product.nome}</h1>
      <Container>
        <ImagamProduct>
          <Imagi
            src={`${apiUrl}/images/${product.imagem}`}
            alt={product.nome}
          />
        </ImagamProduct>
        <ContainerSon>
          <ContainerButtonAndAbout>
            <About>
              <h3>Preço: R$ {product.preco}</h3>
              <h3>Categoria: {categoria.nome || "..."}</h3>
              <h4>Descrição: {product.descricao}</h4>
              <h5>Vendido por {usuario.nome || "Usuário não encontrado"}</h5>
            </About>
            <ContainerButton>
              <HeartIcon>
                {favoritado ? (
                  <FaHeart color="var(--cor-primaria)" onClick={desfavorito} />
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
              <Button primary>Comprar</Button>
              <Button
                onClick={() =>
                  adicionarAoCarrinho(
                    user.id,
                    product.id,
                    1,
                    product.preco,
                    usuario.nome
                  )
                }
              >
                Carrinho
              </Button>
            </ContainerButton>
          </ContainerButtonAndAbout>
        </ContainerSon>
      </Container>
      <h3>Produtos semelhantes:</h3>
      <ContainerSemelhantes>
        {productsSemelhante.map((productSemelhante) => (
          <StyledLink
            key={productSemelhante.id}
            to={`/product/${productSemelhante.id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <Card>
              <Image
                src={`${apiUrl}/images/${productSemelhante.imagem}`}
                alt={productSemelhante.nome}
              />
              <AboutSemelhantes>R$ {productSemelhante.preco}</AboutSemelhantes>
              <AboutSemelhantes>{productSemelhante.nome}</AboutSemelhantes>
            </Card>
          </StyledLink>
        ))}
      </ContainerSemelhantes>
    </ContainerDad>
  );
}
