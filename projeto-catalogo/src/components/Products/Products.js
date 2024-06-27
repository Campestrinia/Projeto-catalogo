import { CarouselContainer, Container, Card, Image } from "./products.css";
import { Link } from 'react-router-dom';
import React from "react";

export function Products({ products }) {
    return (<>
        <CarouselContainer>
            <Container>
                {
                    products.map((product) => (
                        <React.Fragment key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <Card>
                                    <Image
                                        src={`http://localhost:3001/images/${product.imagem}`}
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