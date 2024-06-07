const express = require("express");
const router = express.Router();
const enderecoController = require("../controller/enderecoController.js");

router.get("/endereco", enderecoController.getAllEndereco);
router.post("/endereco", enderecoController.createEndereco);
router.put("/endereco/:id", enderecoController.updateEndereco);
router.delete("/endereco/:id", enderecoController.deleteEndereco);
router.get("/endereco/:id", enderecoController.getEnderecoById); // Corrigido para getEnderecoById

module.exports = router;
