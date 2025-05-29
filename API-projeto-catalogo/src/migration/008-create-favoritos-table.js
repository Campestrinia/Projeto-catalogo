const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database");

async function createEnderecoTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE favoritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idUsuario INT NOT NULL,
    idProduct INT NOT NULL,
    
    FOREIGN KEY (idUsuario) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (idProduct) REFERENCES product(id) ON DELETE CASCADE
    )`);

    await connection.end();
    console.log("Table favoritos Created");
  } catch (error) {
    console.log(`Error creating table favoritos: ${error}`);
  }
}
createEnderecoTable();
