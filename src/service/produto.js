const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");
const { emit } = require("nodemon");
const { updateProduto } = require("./produto.js");
const { use } = require("../router/produtoRouter.js");
const { Connection } = require("mysql2/typings/mysql/lib/Connection");

async function getAllproduto() {
  const connnetion = await mysql.createConnection(databaseConfig);
  const [rows] = await Connection.query("SELECT * FROM produto");

  await connnetion.end();
  return rows;
}

async function createProduct(
  nome, preco, descricao, quantidade, idCategoria, idUsuario
) {
  const connnetion = await mysql.createConnection(databaseConfig);
  const insertProduto =
    "INSERT into produ(nome, preco, descricao, quantidade, idCategoria, idUsuario) VALUES(?, ?, ?, ?, ?, ?)";
  await connnetion.query(insertProduto, [
    nome,
    preco,
    descricao,
    quantidade,
    idCategoria,
    idUsuario,
  ]);
  await connnetion.end();
}

async function updateProduto(
  nome,
  preco,
  descricao,
  quantidade,
  idCategoria,
  idUsuario
) {
  const connection = await mysql.createConnection(databaseConfig);
  const updateProduto =
    "UPDATE produto Set nome = ?,  preco = ?, descricao = ?, quantidade = ?, idCategoria = ?, idUsuario = ?, WHERE id = ?";
  await connection.query(updateProduto, [
    nome,
    preco,
    descricao,
    quantidade,
    idCategoria,
    idUsuario,
  ]);
}

async function deleteProduto(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM produto WHERE id = ?", [id]);
  await connection.end();
}

async function getAllprodutoById(id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [produto] = await connection.query(
    "SELECT * FROM produto WHERE id = ?",
    [id]
  );

  await connection.end();
  return produto;
}

module.exports = {
  getAllproduto,
  createProduto,
  updateProduto,
  deleteProduto,
  getAllprodutoById,
};
