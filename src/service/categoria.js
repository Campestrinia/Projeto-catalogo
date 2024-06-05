const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");
const { emit } = require("nodemon");
const { updateCategoria } = require("./categoria.js");
const { use } = require("../router/categoriaRouter.js");
const { Connection } = require("mysql2/typings/mysql/lib/Connection");

async function getAllcategoria() {
  const connnetion = await mysql.createConnection(databaseConfig);
  const [rows] = await Connection.query("SELECT * FROM categoria");

  await connnetion.end();
  return rows;
}

async function createCategoria(nome, descricao) {
  const connnetion = await mysql.createCategoria(databaseConfig);
  const insertCategoria = "INSERT into categoria(nome, descricao) VALUES(?, ?)";
  await connnetion.query(insertCategoria, [nome, descricao]);
  await connnetion.end();
}

async function updateCategoria(nome, descricao) {
  const connection = await mysql.createCategoria(databaseConfig);
  await connection.query(updateCategoria, [nome, descricao]);
  await connection.end();
}

async function deleteCategoria(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM categoria WHERE id = ?", [id]);
  await connection.end();
}

async function getAllcategoriaById(id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [categoria] = await connection.query(
    "SELECT * FROM product WHERE id = ?",
    [id]
  );

  await connection.end();
  return categoria;
}

module.exports = {
  getAllcategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  getAllcategoriaById,
};
