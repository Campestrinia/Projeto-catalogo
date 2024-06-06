const express = require("express");
const bodyParser = require("body-parser");
const usuarioRouter = require("./router/usuarioRouter.js");
const produtoRouter = require("./router/produtoRouter.js");
const enderecoRouter = require("./router/enderecoRouter.js");
const categoriaRouter = require("./router/categoriaRouter.js");

const PORT = 3001;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hello Word!</h1>`);
});

app.use(bodyParser.json());
app.use("/usuaario", usuarioRouter);
app.use("/produto", produtoRouter);
app.use("/endereco", enderecoRouter);
app.use("/categoria", categoriaRouter);

app.listen(PORT, () => {
  console.log("servidor online");
  console.log(`http://localhost:${PORT}`);
});
