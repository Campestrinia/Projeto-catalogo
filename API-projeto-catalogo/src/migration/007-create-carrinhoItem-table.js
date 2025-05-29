const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createCarrinhoItemsTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS carrinhoItem(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        quantidade INT NOT NULL, 
        idCarrinho INT NOT NULL,
        idProduto INT NOT NULL,
        FOREIGN KEY (idCarrinho) REFERENCES carrinho (id),
        FOREIGN KEY (idProduto) REFERENCES product (id)
    )`);

    await connection.end();
    console.log("Table carrinho item Created");
  } catch (error) {
    console.log(`Error creating table carrinho item : ${error}`);
  }
}
createCarrinhoItemsTable();
