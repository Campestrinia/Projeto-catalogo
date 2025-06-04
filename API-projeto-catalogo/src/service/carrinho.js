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

async function getOrCreateCarrinhoByUsuarioId(idUsuario) {
  const connection = await mysql.createConnection(databaseConfig);

  // Verifica se já existe um carrinho para o usuário
  const [rows] = await connection.query(
    "SELECT * FROM carrinho WHERE idUsuario = ?",
    [idUsuario]
  );

  if (rows.length > 0) {
    await connection.end();
    return rows[0]; // já existe
  }

  // Se não existir, cria um novo carrinho
  const [result] = await connection.query(
    "INSERT INTO carrinho (idUsuario) VALUES (?)",
    [idUsuario]
  );

  const [newCarrinho] = await connection.query(
    "SELECT * FROM carrinho WHERE id = ?",
    [result.insertId]
  );

  await connection.end();
  return newCarrinho[0]; // novo carrinho criado
}


module.exports = {
  getAllCarrinho,
  createCarrinho,
  deleteCarrinho,
  getCarrinhoById,
  getOrCreateCarrinhoByUsuarioId, // ✅ exportando a nova função
};

