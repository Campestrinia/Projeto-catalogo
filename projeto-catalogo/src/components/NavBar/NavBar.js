import {
  Container,
  Logo,
  Menu,
  NoLink,
  Foto,
  LoginAndRegister,
} from "./navBar.css";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import imagem from "../imagem.png";
import { useContext } from "react";
import { LoginContext } from "../../context/Lcontext";
import { SearchBar } from './../SearchBar/SearchBar'

export function NavBar() {
  const { user } = useContext(LoginContext);

  return (
    <Container>
      <Logo>
        <NoLink href="/">
          <Foto src={imagem} alt="logo" />
        </NoLink>
      </Logo>
      <SearchBar />
      <Menu>
        <NoLink href="/">Início</NoLink>
        <NoLink href="/about">Sobre nós</NoLink>
        <NoLink href="/contact">Contato</NoLink>

        {user && user.id ? (
          <>
            <NoLink href="/cart">
              <FaShoppingCart />
            </NoLink>
            <LoginAndRegister href="/profile">
              <NoLink >
                <FaUserAlt />
              </NoLink>
            </LoginAndRegister>
          </>
        ) : (
          <LoginAndRegister>
            <NoLink href="/login">Login</NoLink>
            <div>/</div>
            <NoLink href="/register">Cadastrar-se</NoLink>
          </LoginAndRegister>
        )}
      </Menu>
    </Container>
  );
}