import {
  CarouselContainer,
  Container,
  Card,
  Image,
  Text,
  StyledLink
} from "./products.css";
import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export function Products({ products }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { searchTerm } = useContext(SearchContext);

  const produtosFiltrados = products.filter((product) =>
    product.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <CarouselContainer>
        <Container>
          {produtosFiltrados.map((product) => (
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
          ))}
        </Container>
      </CarouselContainer>
    </>
  );
}
