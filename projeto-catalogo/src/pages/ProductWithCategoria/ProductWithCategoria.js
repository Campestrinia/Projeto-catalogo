import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { CarouselContainer, ContainerProduct, Card, Image, ContainerMenu, Container } from "./productWithCategoria.css";

export function ProductWithCategoria() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/productWithCategoria/${id}`);
                setProduct(response.data)
                console.log(response.data)
            } catch (error) {
                console.error("Error fetching product or image:", error);
            }
        };
        fetchProduct();
    }, [id, apiUrl]);
    return (<>
        <NavBar />
        <CarouselContainer>
            <Container>

                <ContainerMenu>fdsaffszdfasddddddfgasfdgasdgsdg</ContainerMenu>
                <ContainerProduct>
                    {
                        product.map((product) => (
                            <React.Fragment key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <Card>
                                        <Image
                                            src={`${apiUrl}/images/${product.imagem}`}
                                            alt={product.nome}
                                        />
                                        <div>R${product.preco}</div>
                                        <div>{product.nome}</div>
                                    </Card>
                                </Link>
                            </React.Fragment>
                        ))
                    }


                </ContainerProduct>
            </Container>
        </CarouselContainer>
        <Footer />
    </>)
}