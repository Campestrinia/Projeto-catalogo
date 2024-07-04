import React, { useRef } from 'react';
import { CarouselContainer, Container, Card, ButtonRight, ButtonLeft, GlobalStyle, Image } from "./Highlights.css";
import { Link } from 'react-router-dom';

export function Highlight({ products }) {

    const containerRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: scrollOffset,
                behavior: 'smooth',
            });
        }
    };
    return (<>
        <GlobalStyle />
        <CarouselContainer>
            <ButtonLeft onClick={() => scroll(-containerRef.current.offsetWidth)}>◀</ButtonLeft>
            <Container ref={containerRef}>
                {
                    products.map((product) => (
                        <React.Fragment key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <Card>
                                    <Image
                                        src={`http://13.58.52.42:3001/images/${product.imagem}`}
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
            <ButtonRight onClick={() => scroll(containerRef.current.offsetWidth)}>▶</ButtonRight>
        </CarouselContainer>
    </>
    );
}
