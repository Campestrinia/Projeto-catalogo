import { Container, Logo, Menu } from "./navBar.css"
export function NavBar() {
    return (<>
        <Container>
            <Logo>
                <h1>T</h1>
            </Logo>
            <Menu>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </Menu>


        </Container>
    </>
    );
}