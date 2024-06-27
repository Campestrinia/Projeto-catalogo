const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function getAllUsuario() {
  const connection = await mysql.createConnection(databaseConfig);

  const [rows] = await connection.query("SELECT * FROM usuario");

  await connection.end();

  return rows;
}

async function createUsuario(nome, email, CPF, telefone, senha) {
  const connection = await mysql.createConnection(databaseConfig);

  const insertUsuario =
    "INSERT INTO usuario(nome, email, CPF, telefone, senha) VALUES(?,?,?,?,?)";
  await connection.query(insertUsuario, [nome, email, CPF, telefone, senha]);

  await connection.end();
}

async function updateUsuario(id, nome, email, CPF, telefone, senha) {
  const connection = await mysql.createConnection(databaseConfig);

  const updateUsuario =
    "UPDATE usuario Set nome = ?, email = ?, CPF = ?, telefone = ?, senha = ? WHERE id = ?";

  await connection.query(updateUsuario, [nome, email, CPF, telefone, senha, id]);

  await connection.end();
}

async function deleteUsuario(id) {
  const connection = await mysql.createConnection(databaseConfig);

  await connection.query(`DELETE FROM usuario WHERE id = ?`, [id]);

  await connection.end();
}

async function getUsuarioById(id) {
  const connection = await mysql.createConnection(databaseConfig);

  const [usuario] = await connection.query(
    `SELECT * FROM usuario WHERE id = ?`,
    [id]
  );

  const usuarioClean = usuario[0]

  await connection.end();
  return usuarioClean;
}

module.exports = {
  getAllUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioById,
};
