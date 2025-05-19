import React, { useRef, useEffect } from 'react';
import {
    CarouselContainer,
    Container,
    Card,
    ButtonRight,
    ButtonLeft,
    GlobalStyle,
    Image,
    Text,
    StyledLink,
} from "./Highlights.css";

export function Highlight({ products }) {
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const apiUrl = process.env.REACT_APP_API_URL;

    const scroll = (direction) => {
        if (containerRef.current && cardRef.current) {
            const cardWidth = cardRef.current.offsetWidth;
            containerRef.current.scrollBy({
                left: direction * cardWidth,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (containerRef.current && cardRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                const cardWidth = cardRef.current.offsetWidth;

                if (scrollLeft + clientWidth + 1 >= scrollWidth) {
                    containerRef.current.scrollTo({
                        left: 0,
                        behavior: 'smooth',
                    });
                } else {
                    containerRef.current.scrollBy({
                        left: cardWidth,
                        behavior: 'smooth',
                    });
                }
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <GlobalStyle />
            <CarouselContainer>
                <ButtonLeft onClick={() => scroll(-1)}>◀</ButtonLeft>
                <Container ref={containerRef}>
                    {products.map((product, index) => (
                        <React.Fragment key={product.id}>
                            <StyledLink to={`/product/${product.id}`}>
                                <Card ref={index === 0 ? cardRef : null}>
                                    <Image
                                        src={`${apiUrl}/images/${product.imagem}`}
                                        alt={product.nome}
                                    />
                                    <Text>R${product.preco}</Text>
                                    <Text>{product.nome}</Text>
                                </Card>
                            </StyledLink>
                        </React.Fragment>
                    ))}
                </Container>
                <ButtonRight onClick={() => scroll(1)}>▶</ButtonRight>
            </CarouselContainer>
        </>
    );
}
