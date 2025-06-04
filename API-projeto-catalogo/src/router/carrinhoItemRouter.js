const express = require("express");
const router = express.Router();
const carrinhoItemController = require("../controller/carrinhoItemController.js");

router.get("/carrinhoItem", carrinhoItemController.getAllCarrinhoItem);
router.post(`/carrinhoItem`, carrinhoItemController.createCarrinhoItem);
router.put("/carrinhoItem/:id", carrinhoItemController.updateCarrinhoItem);
router.delete("/carrinhoItem/:id", carrinhoItemController.deleteCarrinhoItem);
router.get("/carrinhoItem/:id", carrinhoItemController.getCarrinhoItemById);
router.get("/carrinhoItem/carrinho/:idCarrinho", carrinhoItemController.getProdutosDoCarrinho);

module.exports = router;
