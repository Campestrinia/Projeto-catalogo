const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createEnderecoTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS endereco(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        rua VARCHAR(200) NOT NULL,
        CEP VARCHAR(200) NOT NULL,
        cidade VARCHAR(200) NOT NULL,
        numero INT NOT NULL,
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
