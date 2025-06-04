const carrinhoService = require("../service/carrinho.js");

async function getAllCarrinho(req, res) {
  try {
    const rows = await carrinhoService.getAllCarrinho();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting carrinho",
      error: error.message,
    });
  }
}

async function createCarrinho(req, res) {
  const { UsuarioId } = req.body;

  try {
    await carrinhoService.createCarrinho(UsuarioId);
    res.status(201).json({ message: "Carrinho created successfully" });
  } catch (error) {
    res.status(500).send({
      message: "Error creating carrinho",
      error: error.message,
    });
  }
}

async function deleteCarrinho(req, res) {
  try {
    const { id } = req.params;
    await carrinhoService.deleteCarrinho(id);
    res.status(200).send({ message: "Carrinho deleted successfully" });
  } catch (error) {
    res.status(500).send({
      message: "Error deleting carrinho",
      error: error.message,
    });
  }
}

async function getCarrinhoById(req, res) {
  try {
    const { id } = req.params;
    const carrinho = await carrinhoService.getCarrinhoById(id);
    res.status(200).json(carrinho);
  } catch (error) {
    res.status(500).send({
      message: "Error getting carrinho by ID",
      error: error.message,
    });
  }
}

async function getOrCreateCarrinhoByUsuarioId(req, res) {
  const { idUsuario } = req.params;

  try {
    const carrinho = await carrinhoService.getOrCreateCarrinhoByUsuarioId(idUsuario);
    res.status(200).json(carrinho);
  } catch (error) {
    res.status(500).send({
      message: "Error getting or creating carrinho",
      error: error.message,
    });
  }
}

module.exports = {
  getAllCarrinho,
  createCarrinho,
  deleteCarrinho,
  getCarrinhoById,
  getOrCreateCarrinhoByUsuarioId, // ✅ exportação da nova função
};