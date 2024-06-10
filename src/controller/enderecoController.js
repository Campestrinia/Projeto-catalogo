const enderecoService = require("../service/endereco.js");

async function getAllEndereco(req, res) {
  try {
    const rows = await enderecoService.getAllEndereco();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: "Error getting endereço",
      body: error.message,
    });
  }
}

async function createEndereco(req, res) {
  const { rua, CEP, cidade, numero, idUsuario } = req.body;

  try {
    await enderecoService.createEndereco(rua, CEP, cidade, numero, idUsuario);
    res.status(201).json({ message: `Success` });
  } catch (error) {
    res.status(500).send({
      message: `Error adding endereço!`,
      error: error.message,
    });
  }
}

async function updateEndereco(req, res) {
  try {
    const { id } = req.params;
    const { rua, CEP, cidade, numero, idUsuario } = req.body; // Correção: obter dados do corpo da requisição
    await enderecoService.updateEndereco(
      id,
      rua,
      CEP,
      cidade,
      numero,
      idUsuario
    );
    res.status(200).json("Success");
  } catch (error) {
    res.status(500).send({
      message: `Error updating endereço`,
      body: error.message,
    });
  }
}

async function deleteEndereco(req, res) {
  try {
    const { id } = req.params;
    await enderecoService.deleteEndereco(id);
    res.status(200).send({ message: "Deleted endereço" });
  } catch (error) {
    res.status(500).send({
      message: "Error deleting endereço",
      error: error.message,
    });
  }
}

async function getEnderecoById(req, res) {
  try {
    const { id } = req.params;
    const endereco = await enderecoService.getEnderecoById(id);
    res.status(200).json(endereco);
  } catch (error) {
    res.status(500).send({
      message: "Error getting endereço by ID",
      error: error.message,
    });
  }
}

module.exports = {
  getAllEndereco,
  createEndereco,
  updateEndereco,
  deleteEndereco,
  getEnderecoById,
};
