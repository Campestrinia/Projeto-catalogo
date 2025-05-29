const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController.js");
const jwt = require('./../token.js')

router.get("/usuario", jwt.validateJWT, usuarioController.getAllUsuario);
router.post(`/usuario`, usuarioController.createUsuario);
router.post(`/usuario/login`, usuarioController.login);
router.put("/usuario/:id", jwt.validateJWT, usuarioController.updateUsuario);
router.delete("/usuario/:id", jwt.validateJWT, usuarioController.deleteUsuario);
router.get("/usuario/:id", jwt.optionalJWT, usuarioController.getUsuarioById);

module.exports = router;