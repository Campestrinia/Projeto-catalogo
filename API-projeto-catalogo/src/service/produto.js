const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllproduct(searchTerm) {
  const connection = await mysql.createConnection(databaseConfig);
  let query = "SELECT * FROM product";

  const params = [];

  if (searchTerm) {
    query += " WHERE nome LIKE ?";
    params.push(`%${searchTerm}%`);
  }

  try {
    const [rows] = await connection.query(query, params);
    await connection.end();
    return rows;
  } catch (error) {
    console.error("Erro no serviço getAllproduct:", error);
    throw error;
  }
}

async function createProduct(
  nome,
  preco,
  descricao,
  quantidade,
  idCategoria,
  idUsuario,
  imagem
) {
  const connnetion = await mysql.createConnection(databaseConfig);
  const insertProduct =
    "INSERT into product(nome, preco, descricao, quantidade, idCategoria, idUsuario, imagem) VALUES(?, ?, ?, ?, ?, ?,?)";
  await connnetion.query(insertProduct, [
    nome,
    preco,
    descricao,
    quantidade,
    idCategoria,
    idUsuario,
    imagem,
  ]);
  await connnetion.end();
}

async function updateProduct(
  id,
  nome,
  preco,
  descricao,
  quantidade,
  imagem,
  idCategoria,
  idUsuario,
) {
  const connection = await mysql.createConnection(databaseConfig);
  const updateProduct =
    "UPDATE product Set nome = ?, preco = ?, descricao = ?, quantidade = ?, imagem =?, idCategoria = ?, idUsuario = ? WHERE id = ?";
  await connection.query(updateProduct, [
    nome,
    preco,
    descricao,
    quantidade,
    imagem,
    idCategoria,
    idUsuario,
    id,
  ]);
  await connection.end();
}

async function updateProductNoImage(
  id,
  nome,
  preco,
  descricao,
  quantidade,
  idCategoria,
  idUsuario,
) {
  const connection = await mysql.createConnection(databaseConfig);
  const updateProduct =
    "UPDATE product Set nome = ?, preco = ?, descricao = ?, quantidade = ?, idCategoria = ?, idUsuario = ? WHERE id = ?";
  await connection.query(updateProduct, [
    nome,
    preco,
    descricao,
    quantidade,
    idCategoria,
    idUsuario,
    id,
  ]);
  await connection.end();
}

async function deleteProduct(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM product WHERE id = ?", [id]);
  await connection.end();
}

async function getAllproductById(id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [product] = await connection.query(
    "SELECT * FROM product WHERE id = ?",
    [id]
  );
  const productClean = product[0]

  await connection.end();
  return productClean;
}

async function getAllproductByCategoria(idCategoria) {
  const connection = await mysql.createConnection(databaseConfig);
  const [product] = await connection.query(
    "SELECT * FROM product WHERE idCategoria = ?",
    [idCategoria]
  );

  await connection.end();
  return product;
}
async function getAllproductByUsuario(idUsuario) {
  const connection = await mysql.createConnection(databaseConfig);
  const [product] = await connection.query(
    "SELECT * FROM product WHERE idUsuario = ?",
    [idUsuario]
  );

  await connection.end();
  return product;
}

module.exports = {
  getAllproduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllproductById,
  updateProductNoImage,
  getAllproductByCategoria,
  getAllproductByUsuario,
};