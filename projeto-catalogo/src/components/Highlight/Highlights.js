import React, { useRef, useState, useEffect } from 'react';
import { CarouselContainer, Container, Card, ButtonRight, ButtonLeft, GlobalStyle, Image } from "./Highlights.css";
import axios from "axios";

export function Highlight() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/product');
                setProducts(response.data); // Supondo que a resposta contém uma lista de produtos
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);
    console.log(products)

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
                            <Card>
                                <Image
                                    src={`http://localhost:3001/images/${product.imagem}`}
                                    alt={product.nome}
                                />
                                <div>R${product.preco}</div>
                                <div>{product.nome}</div>
                            </Card>
                        </React.Fragment>
                    ))
                }


            </Container>
            <ButtonRight onClick={() => scroll(containerRef.current.offsetWidth)}>▶</ButtonRight>
        </CarouselContainer>
    </>
    );
}
