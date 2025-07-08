const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createEnderecoTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE ordemPedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    idEndereco INT NOT NULL,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) NOT NULL DEFAULT 'finalizado',
    total DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50),
    FOREIGN KEY (idUsuario) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (idEndereco) REFERENCES endereco(id) ON DELETE CASCADE
    )`);

    await connection.end();
    console.log("Table ordemPedido Created");
  } catch (error) {
    console.log(`Error creating table ordemPedido: ${error}`);
  }
}
createEnderecoTable();
