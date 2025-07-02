import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit; /* opcional, para manter a cor dos textos dentro */
  display: flex;
`;

export const Image = styled.img`
  width: 20%;
  object-fit: contain; /* NOVO: imagem inteira visível sem distorcer */
  border-radius: 10px;
`;


export const Text = styled.h4`
  color: #f2f4f9;
  margin: 10px;
  text-decoration: none;
  text-align: center;
`;