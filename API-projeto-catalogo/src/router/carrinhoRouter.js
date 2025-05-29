const express = require("express");
const router = express.Router();
const carrinhoController = require("../controller/carrinhoController.js");

router.get("/carrinho", carrinhoController.getAllCarrinho);
router.post(`/carrinho`, carrinhoController.createCarrinho);
router.delete("/carrinho/:id", carrinhoController.deleteCarrinho);
router.get("/carrinho/:id", carrinhoController.getCarrinhoById);

module.exports = router;
