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
  const insertCategoria = "INSERT into carrinho(quantidade, idCarrinho, idProduto) VALUES(?, ?, ?)";
  await connection.query(insertCategoria, [quantidade, idCarrinho, idProduto]);
  await connection.end();
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

module.exports = {
  getAllCarrinhoItem,
  createCarrinhoItem,
  deleteCarrinhoItem,
  getCarrinhoItemById,
  updateCarrinhoItem
};
