const { produto } = require("../config/database.js");
const produtoService = require("../service/produto.js");

async function getAllProduto(req, res) {
  try {
    const rows = await userProduto.getAllProduto();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting products",
      body: error.message,
    });
  }
}

async function createProduto(req, res) {
  const { nome, email, CPF, telefone, senha } = req.body;

  try {
    await userProduto.createProduto(
      nome,
      preco,
      descricao,
      quantidade,
      idCategoria,
      idUsuario
    );

    res.status(201).json({ message: `Success` });
  } catch (eror) {
    res.status(500).send({
      message: `error adding products!`,
      error: error.message,
    });
  }
}
async function updateProduto(req, res) {
  try {
    const { id } = req.params;
    const { nome, email, CPF, telefone, senha } = req.params;
    await userProduto.updateProduto(id, nome, email, CPF, telefone, senha);

    res.status(204).json("Success");
  } catch (error) {
    res.status(500).send({
      message: `Error updating products`,
      body: error.message,
    });
  }
}

async function deleteProduto(req, res) {
  try {
    const { id } = req.params;

    await userProduto.deleteProduto(id);
    res.status(200).send({ message: "Deleted product" });
  } catch (error) {
    res.status(500).send({
      message: "Erros deleting product",
      error: error.message,
    });
  }
}

async function getProdutoById(req, res) {
  try {
    const { id } = req.params;

    const user = await userProduto.getProdutoById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      message: "Error getting product by ID",
      error: error.message,
    });
  }
}

module.exports = {
  getAllProduto,
  createProduto,
  updateProduto,
  deleteProduto,
  getProdutoById,
};
