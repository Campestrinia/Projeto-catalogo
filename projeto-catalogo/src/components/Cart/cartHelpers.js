import axios from "axios";
import { message } from "antd";

// cartHelpers.js
export async function adicionarAoCarrinho(user, idProduto) {
  const apiUrl = "http://localhost:3001";

  try {
    // Buscar ou criar carrinho do usuário pela nova rota
    const carrinhoResponse = await axios.get(`${apiUrl}/api/carrinho/usuario/${user.id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const idCarrinho = carrinhoResponse.data.id;

    console.log("Enviando:", {
      idCarrinho,
      idProduto,
      quantidade: 1
    });

    const response = await axios.post(
      `${apiUrl}/api/carrinhoItem`,
      {
        idCarrinho,
        idProduto,
        quantidade: 1
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    );
    message.success("Produto adicionado ao carrinho!");
    console.log("Item adicionado ao carrinho:", response.data);
  } catch (error) {
    console.error("Erro ao adicionar ao carrinho:", error);
    message.error("Erro ao adicionar ao carrinho.");
  }
}
