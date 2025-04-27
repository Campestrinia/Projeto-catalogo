import { Container, Separator, NoLink } from "./footer.css"
import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go"

export function Footer() {
    return (
        <>
            <Container>
                <Separator>
                    <h1>HardwareHeroi</h1>
                    <p>A Hardware Herói nasceu de um sonho compartilhado entre colegas de faculdade, todos apaixonados por tecnologia e inovação. Durante longas noites de estudo e projetos, eles perceberam uma lacuna significativa no mercado de hardware de TI: a falta de um fornecedor confiável que oferecesse produtos de alta qualidade a preços acessíveis. Unidos por essa visão, decidiram transformar essa ideia em realidade.</p>
                </Separator>
                <Separator>
                    <h3>Produtos</h3>
                    <NoLink href="/productWithCategoria/1">Processador</NoLink>
                    <NoLink href="/productWithCategoria/2">Fonte de alimentação</NoLink>
                    <NoLink href="/productWithCategoria/3">Gabinete</NoLink>
                    <NoLink href="/productWithCategoria/5">SDD/HD</NoLink>
                    <NoLink href="/productWithCategoria/6">Memoria</NoLink>
                    <NoLink href="/productWithCategoria/7">Placa mãe</NoLink>

                </Separator>
                <Separator>
                    <h3>Links Uteis</h3>
                    <NoLink href="">Preços</NoLink>
                    <NoLink href="">Pedidos</NoLink>
                    <NoLink href="">Ajuda</NoLink>
                </Separator>
                <Separator>
                    <h3>Contatos</h3>
                    <p><GoMail /> suporte@hardwareheroi.com</p>
                    <p><FaPhone />  47 12345678</p>
                </Separator>
            </Container>
        </>
    )
}