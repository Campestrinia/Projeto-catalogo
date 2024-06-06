const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllproduct() {
  const connnetion = await mysql.createConnection(databaseConfig);
  const [rows] = await Connection.query("SELECT * FROM product");

  await connnetion.end();
  return rows;
}

async function createProduct(
  nome,
  preco,
  descricao,
  quantidade,
  idCategoria,
  idUsuario
) {
  const connnetion = await mysql.createConnection(databaseConfig);
  const insertProduct =
    "INSERT into produ(nome, preco, descricao, quantidade, idCategoria, idUsuario) VALUES(?, ?, ?, ?, ?, ?)";
  await connnetion.query(insertProduct, [
    nome,
    preco,
    descricao,
    quantidade,
    idCategoria,
    idUsuario,
  ]);
  await connnetion.end();
}

async function updateProduct(
  nome,
  preco,
  descricao,
  quantidade,
  idCategoria,
  idUsuario
) {
  const connection = await mysql.createConnection(databaseConfig);
  const updateProduct =
    "UPDATE product Set nome = ?,  preco = ?, descricao = ?, quantidade = ?, idCategoria = ?, idUsuario = ?, WHERE id = ?";
  await connection.query(updateProduct, [
    nome,
    preco,
    descricao,
    quantidade,
    idCategoria,
    idUsuario,
  ]);
  await connection.end();
}

async function deleteProduct(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM product WHERE id = ?", [id]);
  await connection.end();
}

async function getAllproductById(id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [product] = await connection.query(
    "SELECT * FROM product WHERE id = ?",
    [id]
  );

  await connection.end();
  return product;
}

module.exports = {
  getAllproduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllproductById,
};
