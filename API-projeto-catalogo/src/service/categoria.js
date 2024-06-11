const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllCategoria() {
  const connection = await mysql.createConnection(databaseConfig);
  const [rows] = await connection.query("SELECT * FROM categoria");

  await connection.end();
  return rows;
}

async function createCategoria(nome, descricao) {
  const connection = await mysql.createConnection(databaseConfig);
  const insertCategoria = "INSERT into categoria(nome, descricao) VALUES(?, ?)";
  await connection.query(insertCategoria, [nome, descricao]);
  await connection.end();
}

async function updateCategoria(id, nome, descricao) {
  const connection = await mysql.createConnection(databaseConfig);
  const updateCategoria =
    "UPDATE categoria SET nome = ?, descricao = ? WHERE id = ?";
  await connection.query(updateCategoria, [nome, descricao, id]); // Ordem correta dos parâmetros
  await connection.end();
}

async function deleteCategoria(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM categoria WHERE id = ?", [id]);
  await connection.end();
}

async function getcategoriaById(id) {
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
  getcategoriaById,
};
