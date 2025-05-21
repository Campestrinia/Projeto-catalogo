const express = require("express");
const router = express.Router();
const enderecoController = require("../controller/enderecoController.js");
const jwt = require('./../token.js')

router.get("/endereco", jwt.validateJWT, enderecoController.getAllEndereco);
router.post("/endereco", jwt.validateJWT, enderecoController.createEndereco);
router.put("/endereco/:id", jwt.validateJWT, enderecoController.updateEndereco);
router.delete("/endereco/:id", jwt.validateJWT, enderecoController.deleteEndereco);
router.get("/endereco/:id", jwt.validateJWT, enderecoController.getEnderecoById); // Corrigido para getEnderecoById

module.exports = router;
