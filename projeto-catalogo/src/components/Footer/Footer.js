// no seu arquivo /components/Footer/Footer.js

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

// Importando os novos e ajustados componentes de estilo
import * as S from "./footer.css";

// --- Dados para os links, para um código mais limpo ---
const productLinks = [
  { href: "/productWithCategoria/1", text: "Processadores" },
  { href: "/productWithCategoria/2", text: "Fontes de Alimentação" },
  { href: "/productWithCategoria/3", text: "Gabinetes" },
  { href: "/productWithCategoria/5", text: "SSD/HD" },
  { href: "/productWithCategoria/6", text: "Memória RAM" },
  { href: "/productWithCategoria/7", text: "Placas-Mãe" },
];

const usefulLinks = [
  { href: "/about", text: "Sobre Nós" },
  { href: "/contact", text: "Ajuda & FAQ" },
  { href: "/login", text: "Minha Conta" },
];

export function Footer() {
  return (
    <>
      <S.FooterWrapper>
        <S.FooterGrid>
          {/* --- Coluna 1: Sobre a Empresa --- */}
          <S.FooterColumn>
            <S.ColumnTitle>HardwareHerói</S.ColumnTitle>
            <S.FooterText>
              Nascemos da paixão por tecnologia para oferecer os melhores
              componentes para entusiastas, gamers e profissionais, com
              atendimento excepcional e confiança.
            </S.FooterText>
          </S.FooterColumn>

          {/* --- Coluna 2: Produtos --- */}
          <S.FooterColumn>
            <S.ColumnTitle>Produtos</S.ColumnTitle>
            {productLinks.map((link, index) => (
              <S.FooterLink key={index} href={link.href}>
                {link.text}
              </S.FooterLink>
            ))}
          </S.FooterColumn>

          {/* --- Coluna 3: Links Úteis --- */}
          <S.FooterColumn>
            <S.ColumnTitle>Links Úteis</S.ColumnTitle>
            {usefulLinks.map((link, index) => (
              <S.FooterLink key={index} href={link.href}>
                {link.text}
              </S.FooterLink>
            ))}
          </S.FooterColumn>

          {/* --- Coluna 4: Contatos --- */}
          <S.FooterColumn>
            <S.ColumnTitle>Contatos</S.ColumnTitle>
            <S.FooterText>
              <GoMail /> suporte@hardwareheroi.com
            </S.FooterText>
            <S.FooterText>
              <FaPhoneAlt /> 47 12345-6789
            </S.FooterText>
          </S.FooterColumn>
        </S.FooterGrid>
      </S.FooterWrapper>

      {/* --- Barra de Copyright --- */}
      <S.CopyrightBar>
        © {new Date().getFullYear()} HardwareHerói. Todos os direitos
        reservados.
      </S.CopyrightBar>
    </>
  );
}
