import { Container, GlobalStyle, ContainerBox, ContainerLogin, H3, Button, NoLink } from "./login.css"

export function Login() {
    return (<>
        <GlobalStyle />
        <Container>
            <NoLink href="/"> {`<--- `}Voltar</NoLink>
            <ContainerBox>
                <ContainerLogin>
                    <h1>Login</h1>
                    <H3>Nome</H3>
                    <input></input>
                    <H3>Senha</H3>
                    <input></input>
                    <Button>Entrar</Button>
                </ContainerLogin>
            </ContainerBox>
        </Container>
    </>)
}