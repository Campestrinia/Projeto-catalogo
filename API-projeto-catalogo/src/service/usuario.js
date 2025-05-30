const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");
// const bcrypt = require('bcrypt')
const jwt = require('./../token.js')

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
  const [result] = await connection.query(insertUsuario, [nome, email, CPF, telefone, senha]);

  const token = jwt.createJWT(result.insertId);
  const UsuarioIdNome = {
    id: result.insertId,
    token: token
  };

  await connection.end();
  return UsuarioIdNome;
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

async function getUsuarioByIdSemToken(id) {
  const connection = await mysql.createConnection(databaseConfig);

  const [usuario] = await connection.query(
    `SELECT id, nome FROM usuario WHERE id = ?`,
    [id]
  );

  const usuarioClean = {
    id: usuario[0]?.id,
    nome: usuario[0]?.nome
  };

  await connection.end();
  return usuarioClean;
}


async function getEmailById(email) {
  const connection = await mysql.createConnection(databaseConfig);

  const [results] = await connection.query(
    `SELECT * FROM usuario WHERE email = ?`, [email]
  );

  await connection.end();
  return results.length > 0 ? results[0] : [];
}

async function login(email, senha) {
  const usuario = await getEmailById(email)
  if (usuario.length == 0) {
    return 'E-mail inválido'
  } else {
    // if (await bcrypt.compare(senha, usuario.senha)) {
    if (usuario.senha === senha) {
      delete usuario.senha
      delete usuario.CPF
      delete usuario.telefone
      usuario.token = jwt.createJWT(usuario.id)
      return usuario
    } else {
      return 'Senha inválida'
    }
  }
}

module.exports = {
  getAllUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarioById,
  login,
  getEmailById,
  getUsuarioByIdSemToken
};
