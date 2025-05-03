const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createEnderecoTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS endereco(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        CEP VARCHAR(10) NOT NULL,
        rua VARCHAR(200) NOT NULL,
        numero INT NOT NULL,
        complemento VARCHAR(200),
        bairro VARCHAR(100) NOT NULL,
        cidade VARCHAR(200) NOT NULL,
        estado VARCHAR(200) NOT NULL,
        idUsuario INT NOT NULL,
        FOREIGN KEY (idUsuario) REFERENCES usuario (id)
    )`);

    await connection.end();
    console.log("Table endereco Created");
  } catch (error) {
    console.log(`Error creating table endereco: ${error}`);
  }
}
createEnderecoTable();
