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
import { SearchContext } from "../../context/SearchContext";

export function NavBar() {
  const { user } = useContext(LoginContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <Container>
      <Logo>
        <NoLink href="/">
          <Foto src={imagem} alt="logo" />
        </NoLink>
      </Logo>
      <input
        type="text"
        placeholder="Buscar produtos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "5px 10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginLeft: "10px",
          width: "35rem"
        }}
      />
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
