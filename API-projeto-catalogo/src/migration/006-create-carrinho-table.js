const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createCarrinhoTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT,
    product_id INT,
    quantidade INT DEFAULT 1,
    preco_unitario DECIMAL(10,2),
    FOREIGN KEY (idUsuario) REFERENCES usuario(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
)`);

    await connection.end();
    console.log("Table carrinho Created");
  } catch (error) {
    console.log(`Error creating table carrinho: ${error}`);
  }
}
createCarrinhoTable();