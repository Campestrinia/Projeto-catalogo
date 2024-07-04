import { NavBar } from "../../components/NavBar"
import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import {
    ContainerDad, Container, Imagi, ContainerSon, About, Button, ImagamProduct, ContainerButton,
    ContainerButtonAndAbout, ContainerSemelhantes, Card, Image, ButtonLeft, ButtonRight, AboutSemelhantes
} from "./product.css"
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';

import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    height: 140px
`;

export function Product() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const containerRef = useRef(null);


    const navigateToManageProduct = () => {
        navigate(`/manage-product/${id}`, { state: { from: location.pathname } });
    };

    const [product, setProduct] = useState({});
    const [productsSemelhante, setProductsSemelhante] = useState([]);
    const [usuario, setUsuario] = useState({});
    const [categoria, setCategoria] = useState({});


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
    }, [id]);
    useEffect(() => {
        if (product.idCategoria) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`${apiUrl}/api/productWithCategoria/${product.idCategoria}`);
                    const products = response.data.filter(item => item.id !== product.id);
                    setProductsSemelhante(products.slice(-8));
                    console.log(response.data)
                } catch (error) {
                    console.error("Error fetching product or image:", error);
                }
            };
            fetchProduct();
        }
    }, [product.idCategoria, product.id]);

    useEffect(() => {
        if (product.idCategoria) {
            const fetchProductsCategoria = async () => {
                try {
                    const response = await axios.get(`${apiUrl}/api/categoria/${product.idCategoria}`);
                    setCategoria(response.data);
                } catch (error) {
                    console.error("Error fetching product or image:", error);
                }
            };
            fetchProductsCategoria();
        }
    }, [product.idCategoria]);

    useEffect(() => {
        if (product.idUsuario) {
            const fetchUsuario = async () => {
                try {
                    const response = await axios.get(`${apiUrl}/api/usuario/${product.idUsuario}`);
                    setUsuario(response.data);
                } catch (error) {
                    console.error("Error fetching product or image:", error);
                }
            };
            fetchUsuario();
        }
    }, [product.idUsuario]);

    const scroll = (scrollOffset) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: scrollOffset,
                behavior: 'smooth',
            });
        }
    };
    return (
        <>
            <NavBar />
            <ContainerDad>
                <h1>{product.nome || "Não encontrado"}</h1>
                <Container>
                    <ImagamProduct>
                        <Imagi src={`${apiUrl}/images/${product.imagem}`} alt={product.nome || "Imagem não encontrada"} />
                    </ImagamProduct>
                    <ContainerSon>
                        <ContainerButtonAndAbout>
                            <About>
                                <h4>Vendido por {usuario.nome || "Não encontrado"}</h4>
                                <h3>Preço: {product.preco || "Não encontrado"}</h3>
                                <h3>Descrição: {product.descricao || "Não encontrado"}</h3>
                                <h3>Categoria: {categoria.nome || "Não encontrado"}</h3>
                            </About>
                            <ContainerButton>
                                <Button onClick={navigateToManageProduct}>Editar</Button>
                                <Button>Comprar</Button>
                                <Button>Carrinho</Button>
                            </ContainerButton>
                        </ContainerButtonAndAbout>
                        <h3>Produtos semelhantes:</h3>
                        <ContainerSemelhantes ref={containerRef}>
                            <ButtonLeft onClick={() => scroll(-containerRef.current.offsetWidth)}>◀</ButtonLeft>
                            {productsSemelhante ? (
                                productsSemelhante.map((productSemelhante) => (
                                    <React.Fragment key={productSemelhante.id}>

                                        <StyledLink to={`/product/${productSemelhante.id}`}>
                                            <Card>
                                                <Image
                                                    src={`${apiUrl}/images/${productSemelhante.imagem}`}
                                                    alt={productSemelhante.nome}
                                                />
                                                <AboutSemelhantes>R${productSemelhante.preco}</AboutSemelhantes>
                                                <AboutSemelhantes>{productSemelhante.nome}</AboutSemelhantes>
                                            </Card>
                                        </StyledLink>
                                    </React.Fragment>
                                ))) : (<h3>Carregando....</h3>)
                            }
                            <ButtonRight onClick={() => scroll(containerRef.current.offsetWidth)}>▶</ButtonRight>

                        </ContainerSemelhantes>
                    </ContainerSon>
                </Container>
            </ContainerDad>
        </>
    );
}
