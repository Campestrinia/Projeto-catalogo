const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllCategoria() {
  const connection = await mysql.createConnection(databaseConfig);
  const [rows] = await connection.query("SELECT * FROM categoria");

  await connection.end();
  return rows;
}

async function createCategoria(nome, descricao) {
  const connection = await mysql.createCategoria(databaseConfig);
  const insertCategoria = "INSERT into categoria(nome, descricao) VALUES(?, ?)";
  await connection.query(insertCategoria, [nome, descricao]);
  await connection.end();
}

async function updateCategoria(nome, descricao) {
  const connection = await mysql.createConnection(databaseConfig);
  const updateCategoria =
    "UPDATE categoria Set nome = ?,  descricao = ? WHERE id = ?";
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
    "SELECT * FROM categoria WHERE id = ?",
    [id]
  );

  await connection.end();
  return categoria;
}

module.exports = {
  getAllCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
  getAllcategoriaById,
};
