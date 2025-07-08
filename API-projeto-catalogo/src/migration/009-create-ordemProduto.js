const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createEnderecoTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE ordemProduto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idOrdem INT NOT NULL,
    idProduto INT NOT NULL,
    FOREIGN KEY (idOrdem) REFERENCES ordemPedido(id) ON DELETE CASCADE,
    FOREIGN KEY (idProduto) REFERENCES product(id) ON DELETE CASCADE
    )`);

    await connection.end();
    console.log("Table ordemProduto Created");
  } catch (error) {
    console.log(`Error creating table ordemProduto: ${error}`);
  }
}
createEnderecoTable();
