const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

//Cria carrinho para o item do usuario
async function createCarrinho(idUsuario, product_id, quantidade, preco_unitario) {
  const connection = await mysql.createConnection(databaseConfig);
  const insertCategoria = "INSERT INTO cart(idUsuario, product_id, quantidade, preco_unitario) VALUES(?,?,?,?)";
  await connection.query(insertCategoria, [idUsuario, product_id, quantidade, preco_unitario]);
  await connection.end();
}

//Deleta o item do carrinho
async function deleteCarrinho(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM cart WHERE id = ?", [id]);
  await connection.end();
}

//Modifica a quantidade do produto ao carrinho
async function updateQuantidadeCart(quantidade, idUsuario, product_id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [cart] = await connection.query(
    "UPDATE cart SET quantidade = ? WHERE idUsuario = ? AND product_id = ?;",
    [quantidade, idUsuario, product_id]
  );
  await connection.end();
}

//Pega os produtos que usuario adicinou ao carrinho
async function getCarrinhoByIdUser(id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [cart] = await connection.query(
    "SELECT * FROM cart WHERE idUsuario = ?",
    [id]
  );
  await connection.end();
  return cart;
}

module.exports = {
  createCarrinho,
  deleteCarrinho,
  updateQuantidadeCart,
  getCarrinhoByIdUser
};

