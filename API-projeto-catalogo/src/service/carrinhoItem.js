const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllCarrinhoItem() {
  const connection = await mysql.createConnection(databaseConfig);
  const [rows] = await connection.query("SELECT * FROM carrinhoItem");

  await connection.end();
  return rows;
}

async function createCarrinhoItem(quantidade, idCarrinho, idProduto) {
  const connection = await mysql.createConnection(databaseConfig);

  try {
    const [existing] = await connection.query(
      "SELECT * FROM carrinhoItem WHERE idCarrinho = ? AND idProduto = ?",
      [idCarrinho, idProduto]
    );
    if (existing.length > 0) {
      await connection.query(
        "UPDATE carrinhoItem SET quantidade = quantidade + ? WHERE idCarrinho = ? AND idProduto = ?",
        [quantidade, idCarrinho, idProduto]
      );
      console.log("Quantidade atualizada");
    } else {
      const insertItem = "INSERT INTO carrinhoItem (quantidade, idCarrinho, idProduto) VALUES (?, ?, ?)";
      await connection.query(insertItem, [quantidade, idCarrinho, idProduto]);
      console.log("Item inserido");
    }
  } finally {
    await connection.end();
  }
}




async function deleteCarrinhoItem(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM carrinhoItem WHERE id = ?", [id]);
  await connection.end();
}

async function getCarrinhoItemById(id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [categoria] = await connection.query(
    "SELECT * FROM carrinhoItem WHERE id = ?",
    [id]
  );
  const categoriaClean = categoria[0]
  await connection.end();
  return categoriaClean;
}

async function updateCarrinhoItem(id, quantidade) {
    const connection = await mysql.createConnection(databaseConfig);
    const updateCategoria =
      "UPDATE categoria SET quantidade = ? WHERE id = ?";
    await connection.query(updateCategoria, [quantidade]); // Ordem correta dos parâmetros
    await connection.end();
  }

  async function getProdutosDoCarrinho(idCarrinho) {
  const connection = await mysql.createConnection(databaseConfig);
  const [rows] = await connection.query(
    `SELECT 
      p.id, 
      p.nome, 
      p.imagem, 
      p.preco, 
      p.descricao, 
      ci.quantidade
     FROM carrinhoItem ci
     JOIN product p ON ci.idProduto = p.id
     WHERE ci.idCarrinho = ?`,
    [idCarrinho]
  );
  await connection.end();
  return rows;
}

module.exports = {
  getAllCarrinhoItem,
  createCarrinhoItem,
  deleteCarrinhoItem,
  getCarrinhoItemById,
  updateCarrinhoItem,
  getProdutosDoCarrinho
};
