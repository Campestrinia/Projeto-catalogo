const express = require("express");
const router = express.Router();
const produtoController = require("../controller/produtoController.js");

router.get("/categoria", produtoController.getAllproduct);
router.post(`/usuario`, produtoController.createProduct);
router.put("/usuario/:id", produtoController.updateProduct);
router.delete("/usuario/:id", produtoController.deleteProduct);
router.get("/usuario/:id", produtoController.getAllproductById);

module.exports = router;