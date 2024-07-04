import React, { useRef, useEffect } from 'react';
import { CarouselContainer, Container, Card, ButtonRight, ButtonLeft, GlobalStyle, Image } from "./Highlights.css";
import { Link } from 'react-router-dom';

export function Highlight({ products }) {
    const containerRef = useRef(null);
    const apiUrl = process.env.REACT_APP_API_URL;
    const scroll = (scrollOffset) => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: scrollOffset,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (containerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                console.log("Posição atual:", scrollLeft);
                console.log("Total rolável:", scrollWidth);
                console.log("Área vista:", clientWidth);
                console.log("Soma (scrollLeft + clientWidth):", scrollLeft + clientWidth);

                if (scrollLeft + clientWidth + 1 >= scrollWidth) {
                    containerRef.current.scrollTo({
                        left: 0,
                        behavior: 'smooth',
                    });
                } else {
                    containerRef.current.scrollBy({
                        left: clientWidth / 1,
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
                <ButtonLeft onClick={() => scroll(-containerRef.current.offsetWidth)}>◀</ButtonLeft>
                <Container ref={containerRef}>
                    {products.map((product) => (
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
                    ))}
                </Container>
                <ButtonRight onClick={() => scroll(containerRef.current.offsetWidth)}>▶</ButtonRight>
            </CarouselContainer>
        </>
    );
}
