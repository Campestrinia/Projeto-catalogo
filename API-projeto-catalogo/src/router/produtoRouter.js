const express = require("express");
const router = express.Router();
const produtoController = require("../controller/produtoController.js");
const multer = require('multer')
const path = require("path")
const jwt = require('./../token.js')

const storage = multer.diskStorage({
    destination: './src/image/product/',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

router.get("/product", produtoController.getAllproduct);
router.post(`/product`, jwt.validateJWT, upload.single('imagem'), produtoController.createProduct);
router.put("/product/:id", jwt.validateJWT, upload.single('imagem'), produtoController.updateProduct);
router.put("/productNoImage/:id", jwt.validateJWT, produtoController.updateProductNoImage);
router.delete("/product/:id", jwt.validateJWT, produtoController.deleteProduct);
router.get("/product/:id", produtoController.getAllproductById);
router.get("/product/usuario/:idUsuario", jwt.validateJWT, produtoController.getAllproductByUsuario);
router.get("/productWithCategoria/:idCategoria", produtoController.getAllproductByCategoria);
// router.get("/productSearch", produtoController.searchProductByName);

module.exports = router;