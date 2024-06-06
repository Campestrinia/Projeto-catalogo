const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllendereco() {
  const connnetion = await mysql.createConnection(databaseConfig);
  const [rows] = await Connection.query("SELECT * FROM endereco");

  await connnetion.end();
  return rows;
}

async function createEndereco(rua, CEP, cidade, numero, idUsuario) {
  const connnetion = await mysql.createEndereco(databaseConfig);
  const insertEndereco =
    "INSERT into endereco(rua, CEP, cidade, numero, idUsuario ) VALUES(?, ?, ?, ?, ?)";
  await connnetion.query(insertEndereco, [rua, CEP, cidade, numero, idUsuario]);
  await connnetion.end();
}

async function updateEndereco(rua, CEP, cidade, numero, idUsuario) {
  const connection = await mysql.createEndereco(databaseConfig);
  const updateEndereco =
    "UPDATE endereco Set rua = ?,  CEP = ?, cidade = ?, numero = ?, idUsuario = ? WHERE id = ?";
  await connection.query(updateEndereco, [rua, CEP, cidade, numero, idUsuario]);

  await connection.end();
}

async function deleteEndereco(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM endereco WHERE id = ?", [id]);
  await connection.end();
}

async function getAllenderecoById(id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [endereco] = await connection.query(
    "SELECT * FROM endreco WHERE id = ?",
    [id]
  );

  await connection.end();
  return endereco;
}

module.exports = {
  getAllendereco,
  createEndereco,
  updateEndereco,
  deleteEndereco,
  getAllenderecoById,
};
