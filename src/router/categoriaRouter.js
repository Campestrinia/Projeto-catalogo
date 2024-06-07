const express = require("express");
const router = express.Router();
const categoriaController = require("../controller/categoriaController.js");

router.get("/categoria", categoriaController.getAllCategoria);
router.post(`/categoria`, categoriaController.createCategoria);
router.put("/categoria/:id", categoriaController.updateCategoria);
router.delete("/categoria/:id", categoriaController.deleteCategoria);
router.get("/categoria/:id", categoriaController.getcategoriaById);

module.exports = router;
