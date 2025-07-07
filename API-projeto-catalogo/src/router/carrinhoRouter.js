const express = require("express");
const router = express.Router();
const carrinhoController = require("../controller/carrinhoController.js");
const jwt = require('./../token.js')

router.post(`/carrinho`, jwt.validateJWT, carrinhoController.createCarrinho);
router.delete("/carrinho/:id", jwt.validateJWT, carrinhoController.deleteCarrinho);
router.get("/carrinho/:id", jwt.validateJWT, carrinhoController.getCarrinhoByIdUser);
router.put("/carrinho", jwt.validateJWT, carrinhoController.updateQuantidadeCart);


module.exports = router;