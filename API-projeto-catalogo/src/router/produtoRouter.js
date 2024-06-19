const express = require("express");
const router = express.Router();
const produtoController = require("../controller/produtoController.js");
const multer = require('multer')
const path = require("path")

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
router.post(`/product`, upload.single('imagem'), produtoController.createProduct);
router.put("/product/:id", produtoController.updateProduct);
router.delete("/product/:id", produtoController.deleteProduct);
router.get("/product/:id", produtoController.getAllproductById);

module.exports = router;