import { CarouselContainer, Container, Card, Image, Text, StyledLink } from "./products.css";
import React from "react";





export function Products({ products }) {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log(products)
    return (<>
        <CarouselContainer>
            <Container>
                {
                    products.map((product) => (
                        <React.Fragment key={product.id}>
                            <StyledLink to={`/product/${product.id}`}>
                                <Card>
                                    <Image
                                        src={`${apiUrl}/images/${product.imagem}`}
                                        alt={product.nome}
                                    />
                                    <Text>{product.nome}</Text>
                                    <Text>R${product.preco}</Text>
                                </Card>
                            </StyledLink>
                        </React.Fragment>
                    ))
                }


            </Container>
        </CarouselContainer>
    </>)
}