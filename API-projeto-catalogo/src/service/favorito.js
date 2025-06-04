const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function getAllfavorito() {
  const connection = await mysql.createConnection(databaseConfig);

  const [rows] = await connection.query("SELECT * FROM favoritos");

  await connection.end();

  return rows;
}

async function createfavorito(idUsuario, idProduct) {
  const connection = await mysql.createConnection(databaseConfig);

  const insertFavorito =
    "INSERT INTO favoritos(idUsuario, idProduct) VALUES(?,?)";
  const [result] = await connection.query(insertFavorito, [idUsuario, idProduct]);

  await connection.end();
  return result;
}


async function deletefavorito(id) {
  const connection = await mysql.createConnection(databaseConfig);

  await connection.query(`DELETE FROM favoritos WHERE id = ?`, [id]);

  await connection.end();
}

async function getfavoritoByIdUsuario(idUsuario) {
  const connection = await mysql.createConnection(databaseConfig);

  const [usuario] = await connection.query(
    `SELECT * FROM favoritos WHERE idUsuario = ?`,
    [idUsuario]
  );


  await connection.end();
  return usuario;
}

module.exports = {
  getAllfavorito,
  createfavorito,
  deletefavorito,
  getfavoritoByIdUsuario
};
