const mysql = require("mysql2/promise");

const databaseConfig = require("../config/database.js");

async function createProdutoTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS produto( 
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(200),
            preco FLOAT,
            descricao VARCHAR(200),
            quantidade INT,
            idCategoria INT NOT NULL,
            FOREIGN KEY (idCategoria) REFERENCES categoria (id)
            idUsuario INT NOT NULL,
            FOREIGN KEY (idUsuario) REFERENCES usuario (id)
            
          )`);

    await connection.end();

    console.log("Table produto created");
  } catch (error) {
    console.log(`Error creating table User: ${error}`);
  }
}

createProdutoTable();
