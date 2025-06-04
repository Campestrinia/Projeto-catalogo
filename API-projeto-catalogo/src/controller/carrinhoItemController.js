const carrinhoItemService = require("../service/carrinhoItem.js");

async function getAllCarrinhoItem(req, res) {
  try {
    const items = await carrinhoItemService.getAllCarrinhoItem();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).send({
      message: "Error getting carrinho items",
      error: error.message,
    });
  }
}

async function createCarrinhoItem(req, res) {
  const { quantidade, idCarrinho, idProduto } = req.body;

  try {
    await carrinhoItemService.createCarrinhoItem(quantidade, idCarrinho, idProduto);
    res.status(201).json({ message: "Carrinho item created successfully" });
  } catch (error) {
    res.status(500).send({
      message: "Error creating carrinho item",
      error: error.message,
    });
  }
}

async function deleteCarrinhoItem(req, res) {
  const { id } = req.params;

  try {
    await carrinhoItemService.deleteCarrinhoItem(id);
    res.status(200).json({ message: "Carrinho item deleted successfully" });
  } catch (error) {
    res.status(500).send({
      message: "Error deleting carrinho item",
      error: error.message,
    });
  }
}

async function getCarrinhoItemById(req, res) {
  const { id } = req.params;

  try {
    const item = await carrinhoItemService.getCarrinhoItemById(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).send({
      message: "Error getting carrinho item by ID",
      error: error.message,
    });
  }
}

async function updateCarrinhoItem(req, res) {
  const { id } = req.params;
  const { quantidade } = req.body;

  try {
    await carrinhoItemService.updateCarrinhoItem(id, quantidade);
    res.status(200).json({ message: "Carrinho item updated successfully" });
  } catch (error) {
    res.status(500).send({
      message: "Error updating carrinho item",
      error: error.message,
    });
  }
}

async function getProdutosDoCarrinho(req, res) {
  const { idCarrinho } = req.params;

  try {
    const produtos = await carrinhoItemService.getProdutosDoCarrinho(idCarrinho);
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar produtos do carrinho",
      error: error.message
    });
  }
}



module.exports = {
  getAllCarrinhoItem,
  createCarrinhoItem,
  deleteCarrinhoItem,
  getCarrinhoItemById,
  updateCarrinhoItem,
  getProdutosDoCarrinho
};
