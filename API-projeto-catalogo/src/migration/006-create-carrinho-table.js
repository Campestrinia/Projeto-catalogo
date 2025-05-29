const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createCarrinhoTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS carrinho(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        idUsuario INT NOT NULL,
        FOREIGN KEY (idUsuario) REFERENCES usuario (id)
    )`);

    await connection.end();
    console.log("Table carrinho Created");
  } catch (error) {
    console.log(`Error creating table carrinho: ${error}`);
  }
}
createCarrinhoTable();
