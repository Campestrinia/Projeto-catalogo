import { Container, Logo, Menu, GlobalStyle } from "./navBar.css"
export function NavBar() {
    return (

        <Container>
            <GlobalStyle />
            <Logo>
                <h1>T</h1>
            </Logo>
            <Menu>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>

            </Menu>


        </Container>

    );
}