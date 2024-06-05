const express = require("express");
const router = express.Router();
const categoriaController = require("../controller/categoriaController.js");

router.get("/categoria");
router.post(`/categoria`);
router.put("/categoria/:id");
router.delete("/categoria/:id");
router.get("/categoria/:id");

module.exports = router;
