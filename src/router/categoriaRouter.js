const express = require("express");
const router = express.Router();
const categoriaController = require("../controller/categoriaController.js");

router.get("/categoria", categoriaController.getAllCategoria);
router.post(`/usuario`, categoriaController.createCategoria);
router.put("/usuario/:id", categoriaController.updateCategoria);
router.delete("/usuario/:id", categoriaController.deleteCategoria);
router.get("/usuario/:id", categoriaController.getCategoriaById);

module.exports = router;