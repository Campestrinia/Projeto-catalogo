// no seu arquivo /pages/Contact/Contact.js

import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

// Importando os novos estilos
import * as S from "./contact.css";

// ========================================================================
// DADOS DAS PERGUNTAS - Agora fica tudo aqui, fácil de editar!
// ========================================================================
const faqData = [
  {
    question: "Preciso acionar a garantia de um produto. Como proceder?",
    answer:
      "Para acionar a garantia, faça login em sua conta, localize o pedido, selecione 'Detalhes do pedido', encontre o produto e clique em 'Garantia'. Preencha o formulário e aguarde nosso retorno por e-mail em até 3 dias úteis.",
  },
  {
    question: "Como acionar o Direito de Arrependimento?",
    answer:
      "Você pode acionar o Direito de Arrependimento em até 7 dias corridos após o recebimento do produto. O processo é semelhante ao da garantia, mas você deve selecionar a opção 'Arrependimento' em 'Detalhes do pedido'.",
  },
  {
    question: "Qual é o prazo para confirmação de pagamento?",
    answer:
      "Pagamentos via Boleto e Cartão de Crédito levam de 1 a 2 dias úteis para confirmação. Pagamentos via PIX são confirmados em até 30 minutos. Caso o prazo expire, entre em contato com nosso atendimento.",
  },
  {
    question:
      "Meu pagamento com cartão foi aprovado mas o pedido cancelou. Por quê?",
    answer:
      "Por segurança, todas as compras passam por uma análise anti-fraude. Se houver qualquer divergência de dados, o pedido pode ser cancelado automaticamente. O valor pré-aprovado no seu cartão será estornado em até 48 horas.",
  },
];

export function Contact() {
  // ========================================================================
  // LÓGICA OTIMIZADA - Um estado para controlar tudo
  // ========================================================================
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    // Se a pergunta clicada já estiver aberta, fecha. Senão, abre a nova.
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    // ========================================================================
    // JSX LIMPO E SEMÂNTICO
    // ========================================================================
    <S.PageContainer>
      <S.PageHeader>
        <h1>Fale Conosco & FAQ</h1>
        <p>
          Não encontrou o que procurava? Entre em contato com nossos heróis do
          atendimento. Se preferir, confira abaixo as respostas para as
          perguntas mais frequentes.
        </p>
      </S.PageHeader>

      <S.ContactInfoWrapper>
        <S.ContactCard>
          <FaPhoneAlt className="icon" />
          <div>
            <h3>Telefone</h3>
            <p>47 12345-6789</p>
          </div>
        </S.ContactCard>
        <S.ContactCard>
          <GoMail className="icon" />
          <div>
            <h3>Email</h3>
            <p>contato@hardwareheroi.com.br</p>
          </div>
        </S.ContactCard>
      </S.ContactInfoWrapper>

      <S.FaqSection>
        {faqData.map((faqItem, index) => (
          <S.AccordionItem key={index}>
            <S.QuestionHeader onClick={() => toggleQuestion(index)}>
              <h4>{faqItem.question}</h4>
              <S.ArrowIcon isopen={openQuestion === index ? 1 : 0} />
            </S.QuestionHeader>
            <S.Answer isopen={openQuestion === index ? 1 : 0}>
              <p>{faqItem.answer}</p>
            </S.Answer>
          </S.AccordionItem>
        ))}
      </S.FaqSection>
    </S.PageContainer>
  );
}
