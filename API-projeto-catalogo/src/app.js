const express = require("express");
const bodyParser = require("body-parser");
const usuarioRouter = require("./router/usuarioRouter.js");
const produtoRouter = require("./router/produtoRouter.js");
const enderecoRouter = require("./router/enderecoRouter.js");
const categoriaRouter = require("./router/categoriaRouter.js");
const favoritoRouter = require("./router/favoritoRouter.js")
const cors = require('cors')
const path = require('path');
const carrinhoRouter = require("./router/carrinhoRouter.js");

const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, '/image/product')));


app.get("/", (req, res) => {
  res.send(`<h1>Hello Word!</h1>`);
});

app.use("/api", usuarioRouter);
app.use("/api", produtoRouter);
app.use("/api", enderecoRouter);
app.use("/api", categoriaRouter);
app.use("/api", favoritoRouter);
app.use("/api", carrinhoRouter);

app.listen(PORT, () => {
  console.log("servidor online");
  console.log(`http://localhost:${PORT}`);
});
