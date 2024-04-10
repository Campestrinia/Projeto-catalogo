const mysql = require("mysql2/promise");

const databaseConfig = require("../config/database");

async function createCategoriaTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS  categoria(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(200)
            descricao VARCHAR(2) NOT NULL,
            
        )`);

    await connection.end();

    console.log("Table categoria created");
  } catch (error) {
    console.log(`error creating categirua table: ${error}`);
  }
}

createCategoriaTable();
