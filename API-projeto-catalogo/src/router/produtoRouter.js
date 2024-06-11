const express = require("express");
const router = express.Router();
const produtoController = require("../controller/produtoController.js");

router.get("/product", produtoController.getAllproduct);
router.post(`/product`, produtoController.createProduct);
router.put("/product/:id", produtoController.updateProduct);
router.delete("/product/:id", produtoController.deleteProduct);
router.get("/product/:id", produtoController.getAllproductById);

module.exports = router;