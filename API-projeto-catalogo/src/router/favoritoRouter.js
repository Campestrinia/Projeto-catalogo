const express = require("express");
const router = express.Router();
const favoritoController = require("../controller/favoritoController.js");
const jwt = require('./../token.js')

router.get("/favorito", jwt.validateJWT, favoritoController.getAllFavorito);
router.post(`/favorito`, jwt.validateJWT, favoritoController.createFavorito);
router.delete("/favorito/:id", jwt.validateJWT, favoritoController.deleteFavorito);
router.get("/favorito/:idUsuario", jwt.validateJWT, favoritoController.getfavoritoByIdUsuario);

module.exports = router;