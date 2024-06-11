//const { categoria } = require("../config/database.js");
const categoriaService = require("../service/categoria.js");

async function getAllCategoria(req, res) {
  try {
    const rows = await categoriaService.getAllCategoria();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting categoria",
      body: error.message,
    });
  }
}

async function createCategoria(req, res) {
  const { nome, descricao } = req.body;

  try {
    await categoriaService.createCategoria(nome, descricao);

    res.status(201).json({ message: `Success` });
  } catch (eror) {
    res.status(500).send({
      message: `error adding categoria!`,
      error: eror.message,
    });
  }
}
async function updateCategoria(req, res) {
  try {
    const { id } = req.params;
    const { nome, descricao } = req.body; // Corrigido para obter os dados do corpo da requisição
    await categoriaService.updateCategoria(id, nome, descricao);
    res.status(200).json("Success"); // Responde com um status 204 (sem conteúdo) e uma mensagem de sucesso
  } catch (error) {
    res.status(500).send({
      message: `Error updating categoria`,
      body: error.message, // Em caso de erro, responde com status 500 e uma mensagem de erro
    });
  }
}

async function deleteCategoria(req, res) {
  try {
    const { id } = req.params;

    await categoriaService.deleteCategoria(id);
    res.status(200).send({ message: "Deleted categoria" });
  } catch (error) {
    res.status(500).send({
      message: "Erros deleting categoria",
      error: error.message,
    });
  }
}

async function getcategoriaById(req, res) {
  try {
    const { id } = req.params;

    const categoria = await categoriaService.getcategoriaById(id);

    res.status(200).json(categoria);
  } catch (error) {
    res.status(500).send({
      message: "Error getting categoria by ID",
      error: error.message,
    });
  }
}

module.exports = {
  getAllCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  getcategoriaById,
};
