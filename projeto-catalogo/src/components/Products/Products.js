import { CarouselContainer, Container, Card, Image } from "./products.css";
import { Link } from 'react-router-dom';
import React from "react";

export function Products({ products }) {
    const apiUrl = process.env.REACT_APP_API_URL;
    return (<>
        <CarouselContainer>
            <Container>
                {
                    products.map((product) => (
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


            </Container>
        </CarouselContainer>
    </>)
}