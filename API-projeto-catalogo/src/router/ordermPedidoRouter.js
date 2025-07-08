const express = require("express");
const router = express.Router();
const ordemPedidoController = require("./../controller/ordemPedidoCotroller.js");
const jwt = require("../token.js");

// Criar novo pedido
router.post("/ordens", jwt.validateJWT, ordemPedidoController.criarOrdem);

// Buscar pedido por ID
router.get("/ordens/:id", jwt.validateJWT, ordemPedidoController.buscarOrdemPorId);

// Atualizar status do pedido
router.patch("/ordens/:id/status", jwt.validateJWT, ordemPedidoController.atualizarStatus);

module.exports = router;
