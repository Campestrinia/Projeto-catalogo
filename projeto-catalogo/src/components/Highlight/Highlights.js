import React, { useRef } from 'react';
import { CarouselContainer, Container, Card, ButtonRight, ButtonLeft, GlobalStyle } from "./Highlights.css";

export function Highlight() {
    const product = ["Placa mãe", "Processador", "SDD", "Gabinete", "Fonte",
        "Placa mãe", "Processador", "SDD", "Gabinete", "Fonte",
        "Placa mãe", "Processador", "SDD", "Gabinete", "Fonte",
        "Placa mãe", "Processador", "SDD", "Gabinete", "Fonte"];

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
                    product.map((product, index) => (
                        <Card key={index}>{product}</Card>
                    ))
                }
            </Container>
            <ButtonRight onClick={() => scroll(containerRef.current.offsetWidth)}>▶</ButtonRight>
        </CarouselContainer>
    </>
    );
}
