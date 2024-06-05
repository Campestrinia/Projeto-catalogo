const produtoService = require("../service/produto");

async function getAllproduct(req, res) {
  try {
    const rows = await produtoService.getAllproduct();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting product",
      body: error.message,
    });
  }
}

async function createProduct(req, res) {
  const { nome, preco, descricao, quantidade, idCategoria, idUsuario } = req.body;

  try {
    await produtoService.createUsuario(nome, preco, descricao, quantidade, idCategoria, idUsuario);

    res.status(201).json({ message: `Success` });
  } catch (eror) {
    res.status(500).send({
      message: `error adding product!`,
      error: error.message,
    });
  }
}
async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { nome, preco, descricao, quantidade, idCategoria, idUsuario } = req.params;
    await produtoService.updateProduct(id, nome, preco, descricao, quantidade, idCategoria, idUsuario);

    res.status(204).json("Success");
  } catch (error) {
    res.status(500).send({
      message: `Error updating product`,
      body: error.message,
    });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    await produtoService.deleteProduct(id);
    res.status(200).send({ message: "Deleted product" });
  } catch (error) {
    res.status(500).send({
      message: "Erros deleting product",
      error: error.message,
    });
  }
}

async function getAllproductById(req, res) {
  try {
    const { id } = req.params;

    const product = await produtoService.getAllproductById(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({
      message: "Error getting product by ID",
      error: error.message,
    });
  }
}

module.exports = {
  getAllproduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllproductById
}
