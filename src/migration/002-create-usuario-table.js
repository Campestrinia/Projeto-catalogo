const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createUsuarioTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS usuario (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(200) NOT NULL,
        email VARCHAR(200) NOT NULL,
        CPF VARCHAR(200) NOT NULL,
        telefone VARCHAR(200) NOT NULL,
        senha VARCHAR(200) NOT NULL

       )`);

    await connection.end();

    console.log("Tabela Usuario Criado!");
  } catch (error) {
    console.log(`Error creating table user: ${error}`);
  }
}

createUsuarioTable();
