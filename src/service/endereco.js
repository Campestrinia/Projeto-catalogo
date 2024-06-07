const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllEndereco() {
  let connection;
  try {
    connection = await mysql.createConnection(databaseConfig);
    const [rows] = await connection.query("SELECT * FROM endereco");
    return rows;
  } catch (error) {
    console.error("Error getting all enderecos:", error);
    throw error;
  } finally {
    if (connection) await connection.end();
  }
}

async function createEndereco(rua, CEP, cidade, numero, idUsuario) {
  let connection;
  try {
    connection = await mysql.createConnection(databaseConfig);
    const insertEndereco =
      "INSERT INTO endereco(rua, CEP, cidade, numero, idUsuario) VALUES(?, ?, ?, ?, ?)";
    await connection.query(insertEndereco, [
      rua,
      CEP,
      cidade,
      numero,
      idUsuario,
    ]);
  } catch (error) {
    console.error("Error creating endereco:", error);
    throw error;
  } finally {
    if (connection) await connection.end();
  }
}

async function updateEndereco(id, rua, CEP, cidade, numero, idUsuario) {
  // Corrigir a assinatura da função para incluir 'id'
  let connection;
  try {
    connection = await mysql.createConnection(databaseConfig);
    const updateEndereco =
      "UPDATE endereco SET rua = ?, CEP = ?, cidade = ?, numero = ?, idUsuario = ? WHERE id = ?";
    await connection.query(updateEndereco, [
      rua,
      CEP,
      cidade,
      numero,
      idUsuario,
      id,
    ]);
  } catch (error) {
    console.error("Error updating endereco:", error);
    throw error;
  } finally {
    if (connection) await connection.end();
  }
}

async function deleteEndereco(id) {
  let connection;
  try {
    connection = await mysql.createConnection(databaseConfig);
    await connection.query("DELETE FROM endereco WHERE id = ?", [id]);
  } catch (error) {
    console.error("Error deleting endereco:", error);
    throw error;
  } finally {
    if (connection) await connection.end();
  }
}

async function getEnderecoById(id) {
  // Corrigir o nome da função
  let connection;
  try {
    connection = await mysql.createConnection(databaseConfig);
    const [endereco] = await connection.query(
      "SELECT * FROM endereco WHERE id = ?",
      [id]
    );
    return endereco;
  } catch (error) {
    console.error("Error getting endereco by ID:", error);
    throw error;
  } finally {
    if (connection) await connection.end();
  }
}

module.exports = {
  getAllEndereco,
  createEndereco,
  updateEndereco,
  deleteEndereco,
  getEnderecoById,
};
