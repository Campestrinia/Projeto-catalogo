const express = require("express");
const router = express.Router();
const enderecoController = require("../controller/enderecoController.js");

router.get("/categoria", enderecoController.getAllEndereco);
router.post(`/usuario`, enderecoController.createEndereco);
router.put("/usuario/:id", enderecoController.updateEndereco);
router.delete("/usuario/:id", enderecoController.deleteEndereco);
router.get("/usuario/:id", enderecoController.getAllenderecoById);

module.exports = router;