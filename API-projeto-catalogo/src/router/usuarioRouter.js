const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController.js");

router.get("/usuario", usuarioController.getAllUsuario);
router.post(`/usuario`, usuarioController.createUsuario);
router.put("/usuario/:id", usuarioController.updateUsuario);
router.delete("/usuario/:id", usuarioController.deleteUsuario);
router.get("/usuario/:id", usuarioController.getUsuarioById);

module.exports = router;