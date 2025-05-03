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

async function createEndereco(CEP, rua, numero, complemento, bairro, cidade, estado, idUsuario) {
  let connection;
  try {
    connection = await mysql.createConnection(databaseConfig);
    const insertEndereco =
      "INSERT INTO endereco(CEP, rua, numero, complemento, bairro, cidade, estado, idUsuario) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
    await connection.query(insertEndereco, [
      CEP,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      idUsuario
    ]);
  } catch (error) {
    console.error("Error creating endereco:", error);
    throw error;
  } finally {
    if (connection) await connection.end();
  }
}

async function updateEndereco(id, CEP, rua, numero, complemento, bairro, cidade, estado, idUsuario) {
  // Corrigir a assinatura da função para incluir 'id'
  let connection;
  try {
    connection = await mysql.createConnection(databaseConfig);
    const updateEndereco =
      "UPDATE endereco SET CEP = ?, rua = ?, numero = ?, complemento = ?, bairro = ?, cidade = ?, estado = ?, idUsuario = ? WHERE id = ?";
    await connection.query(updateEndereco, [
      CEP, rua, numero, complemento, bairro, cidade, estado, idUsuario, id
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
    const [result] = await connection.query("DELETE FROM endereco WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      throw new Error("Endereço não encontrado.");
    }

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
