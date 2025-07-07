const carrinhoService = require("../service/carrinho.js");

async function createCarrinho(req, res) {
  const { idUsuario, product_id, quantidade, preco_unitario } = req.body;
  console.log("BODY:", req.body);
  console.log(idUsuario, product_id, quantidade, preco_unitario)
  try {
    await carrinhoService.createCarrinho(idUsuario, product_id, quantidade, preco_unitario);
    res.status(201).json({ message: "Carrinho criado com sucesso" });
  } catch (error) {
    res.status(500).send({
      message: "erro ao criar carrinho",
      error: error.message,
    });
  }
}

async function deleteCarrinho(req, res) {
  try {
    const { id } = req.params;
    await carrinhoService.deleteCarrinho(id);
    res.status(200).send({ message: "Carrinho deletado com sucesso" });
  } catch (error) {
    res.status(500).send({
      message: "Erro ao deletar carrinho",
      error: error.message,
    });
  }
}

async function updateQuantidadeCart(req, res) {
  try {
    const { quantidade, idUsuario, product_id } = req.body;
    const carrinho = await carrinhoService.updateQuantidadeCart(quantidade, idUsuario, product_id);
    res.status(200).json(carrinho);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao modificar carrinho",
      error: error.message,
    });
  }
}

async function getCarrinhoByIdUser(req, res) {
  try {
    const { id } = req.params;
    const carrinho = await carrinhoService.getCarrinhoByIdUser(id);
    res.status(200).json(carrinho);
  } catch (error) {
    res.status(500).send({
      message: "Erro ao pegar carrinho do usuario",
      error: error.message,
    });
  }
}



module.exports = {
  createCarrinho,
  deleteCarrinho,
  updateQuantidadeCart,
  getCarrinhoByIdUser
};