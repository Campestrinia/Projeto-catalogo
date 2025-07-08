const express = require("express");
const router = express.Router();
const ordemProdutoController = require("../controller/ordemProdutoController.js");
const jwt = require("../token.js");

// Adicionar produto a uma ordem
router.post("/ordem-produto", jwt.validateJWT, ordemProdutoController.criar);

// Buscar produtos de uma ordem
router.get("/ordem-produto/:idOrdem", jwt.validateJWT, ordemProdutoController.buscarPorOrdem);

// Deletar item da ordem
router.delete("/ordem-produto/:id", jwt.validateJWT, ordemProdutoController.deletar);

module.exports = router;
