import axios from "axios";
import { message } from "antd";


export async function adicionarAoCarrinho(user, idvendedor, idProduto) {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    if (user.id === idvendedor) {
      message.error('Você não pode adicionar um produto seu ao carrinho');
      return;
    }

    const headers = {
      Authorization: `Bearer ${user.token}`
    };

    const carrinhoResponse = await axios.get(`${apiUrl}/api/carrinho/usuario/${user.id}`, {
      headers
    });
    const idCarrinho = carrinhoResponse.data.id;

    const itemResponse = await axios.get(`${apiUrl}/api/carrinhoItem/carrinho/${idCarrinho}`, {
      headers
    });
   
    const itens = itemResponse.data;
    console.log('Itens do carrinho:', itens);
    const itemExistente = itens.find(item => String(item.id) === String(idProduto));
    console.log('Item encontrado:', itemExistente); 
    const quantidadeAtual = itemExistente ? itemExistente.quantidade ?? 0 : 0;
    

    const produtoResponse = await axios.get(`${apiUrl}/api/product/${idProduto}`, {
      headers
    });
    const produto = produtoResponse.data;
    const estoque = produto.quantidade;

    if (quantidadeAtual + 1 > estoque) {
      message.error("Estoque insuficiente para adicionar mais unidades.");
      return;
    }

    const response = await axios.post(
      `${apiUrl}/api/carrinhoItem`,
      {
        idCarrinho,
        idProduto,
        quantidade: 1
      },
      { headers }
    );

    message.success("Produto adicionado ao carrinho!");
    console.log("Item adicionado ao carrinho:", response.data);

  } catch (error) {
    console.error("Erro ao adicionar ao carrinho:", error);
    message.error("Erro ao adicionar ao carrinho.");
  }
}
