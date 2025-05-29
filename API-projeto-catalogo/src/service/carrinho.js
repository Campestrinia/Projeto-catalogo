const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllCarrinho() {
  const connection = await mysql.createConnection(databaseConfig);
  const [rows] = await connection.query("SELECT * FROM carrinho");

  await connection.end();
  return rows;
}

async function createCarrinho(UsuarioId) {
  const connection = await mysql.createConnection(databaseConfig);
  const insertCategoria = "INSERT into carrinho(UsuarioId) VALUES( ?)";
  await connection.query(insertCategoria, [UsuarioId]);
  await connection.end();
}


async function deleteCarrinho(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM carrinho WHERE id = ?", [id]);
  await connection.end();
}

async function getCarrinhoById(id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [categoria] = await connection.query(
    "SELECT * FROM carrinho WHERE id = ?",
    [id]
  );
  const categoriaClean = categoria[0]
  await connection.end();
  return categoriaClean;
}

module.exports = {
  getAllCarrinho,
  createCarrinho,
  deleteCarrinho,
  getCarrinhoById,
};
