import { Container, Separator, NoLink } from "./footer.css"


export function Footer() {
    return (
        <>
            <Container>
                <Separator>
                    <h3>Nome da empresa</h3>
                    <p>Aqui falamos sobre a gente ou algo da empresa</p>
                </Separator>
                <Separator>
                    <h3>Produtos</h3>
                    <NoLink href="">Processador</NoLink>
                    <NoLink href="">Placa mãe</NoLink>
                    <NoLink href="">Memoria</NoLink>
                    <NoLink href="">SDD/HD</NoLink>
                    <NoLink href="">Fonte</NoLink>
                    <NoLink href="">Gabinete</NoLink>
                </Separator>
                <Separator>
                    <h3>Links Uteis</h3>
                    <NoLink href="">Preços</NoLink>
                    <NoLink href="">Pedidos</NoLink>
                    <NoLink href="">Ajuda</NoLink>
                </Separator>
                <Separator>
                    <h3>Contatos</h3>
                    <p>e-mail: teste@teste.com</p>
                    <p>Telefone: 47 12345678</p>
                </Separator>
            </Container>
        </>
    )
}