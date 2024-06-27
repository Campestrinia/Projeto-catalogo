import { Container, Logo, Menu, GlobalStyle, NoLink, Foto, LoginAndRegister } from "./navBar.css"
import imagem from "../imagem.png"
export function NavBar() {
    return (

        <Container>
            <GlobalStyle />
            <Logo>
                <Foto src={imagem} alt="logo" />
            </Logo>
            <Menu>
                <NoLink href="/">Home</NoLink>
                <NoLink href="/about">About</NoLink>
                <NoLink href="/contact">Contact</NoLink>
                <NoLink href="/createProduct">Criar</NoLink>
                <LoginAndRegister>
                    <NoLink href="/login">Login</NoLink>
                    <div>/</div>
                    <NoLink href="/register">Registrar</NoLink>
                </LoginAndRegister>

            </Menu>


        </Container>

    );
}