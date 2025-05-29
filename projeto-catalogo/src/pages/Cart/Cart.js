import React from 'react';
import { NavBar } from '../../components/NavBar';
import { Footer } from '../../components/Footer';
 // você pode usar outro CSS específico para o carrinho

export function Cart() {
  return (
    <>
      <NavBar />

      <main style={{ minHeight: '70vh', padding: '2rem' }}>
        <h1>Seu Carrinho</h1>
        {/* Aqui você pode listar os itens do carrinho */}
        <p>Seu carrinho está vazio.</p>
      </main>

      <Footer />
    </>
  );
}
