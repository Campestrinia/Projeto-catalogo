// const { usuario } = require("../config/database.js");
const userService = require("../service/usuario.js");

async function getAllUsuario(req, res) {
  try {
    const rows = await userService.getAllUsuario();

    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting users",
      body: error.message,
    });
  }
}

async function createUsuario(req, res) {
  const { nome, email, CPF, telefone, senha } = req.body;

  try {
    await userService.createUsuario(nome, email, CPF, telefone, senha);

    res.status(201).json({ message: `Success` });
  } catch (eror) {
    res.status(500).send({
      message: `error adding user!`,
      error: error.message,
    });
  }
}
async function updateUsuario(req, res) {
  try {
    const { id } = req.params;
    const { nome, email, CPF, telefone, senha } = req.params;
    await userService.updateUsuario(id, nome, email, CPF, telefone, senha);

    res.status(204).json("Success");
  } catch (error) {
    res.status(500).send({
      message: `Error updating user`,
      body: error.message,
    });
  }
}

async function deleteUsuario(req, res) {
  try {
    const { id } = req.params;

    await userService.deleteUsuario(id);
    res.status(200).send({ message: "Deleted user" });
  } catch (error) {
    res.status(500).send({
      message: "Erros deleting user",
      error: error.message,
    });
  }
}

async function getUsuarioById(req, res) {
  try {
    const { id } = req.params;

    const user = await userService.getUsuarioById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      message: "Error getting user by ID",
      error: error.message,
    });
  }
}

module.exports = {
  getAllUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioById
}