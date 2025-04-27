import { Container, Logo, Menu, GlobalStyle, NoLink, Foto, LoginAndRegister } from "./navBar.css"
import imagem from "../imagem.png"
export function NavBar() {
    return (

        <Container>
            <GlobalStyle />
            <Logo>
                <NoLink href="/">
                    <Foto src={imagem} alt="logo" />
                </NoLink>
            </Logo>
            <Menu>
                <NoLink href="/">Início</NoLink>
                <NoLink href="/about">Sobre nós</NoLink>
                <NoLink href="/contact">contato</NoLink>
                <NoLink href="/createProduct">Criar</NoLink>
                <LoginAndRegister>
                    <NoLink href="/login">Login</NoLink>
                    <div>/</div>
                    <NoLink href="/register">Cadastrar-se</NoLink>
                </LoginAndRegister>

            </Menu>


        </Container>

    );
}