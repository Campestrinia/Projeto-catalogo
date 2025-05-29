// const { usuario } = require("../config/database.js");
const favoritoService = require("../service/favorito.js");

async function getAllFavorito(req, res) {
  try {
    const rows = await favoritoService.getAllfavorito();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting favoritos",
      body: error.message,
    });
  }
}

async function createFavorito(req, res) {
  const { idUsuario, idProduct } = req.body;

  try {
    const favorito = await favoritoService.createfavorito(idUsuario, idProduct);
    console.log(favorito)

    res.status(201).send({ message: `Sucesso para adicionar favorito` });
  } catch (eror) {
    res.status(500).send({
      message: `error adding favorito!`,
      error: eror.message,
    });
  }
}


async function deleteFavorito(req, res) {
  try {
    const { id } = req.params;

    await favoritoService.deletefavorito(id);
    res.status(200).send({ message: "Deleted favorito" });
  } catch (error) {
    res.status(500).send({
      message: "Erros deleting favorito",
      error: error.message,
    });
  }
}

async function getfavoritoByIdUsuario(req, res) {
  try {
    const { idUsuario } = req.params;

    const favorito = await favoritoService.getfavoritoByIdUsuario(idUsuario);

    res.status(200).json(favorito);
  } catch (error) {
    res.status(500).send({
      message: "Error getting favorito by idUsuario",
      error: error.message,
    });
  }
}


module.exports = {
  getAllFavorito,
  createFavorito,
  deleteFavorito,
  getfavoritoByIdUsuario,
}