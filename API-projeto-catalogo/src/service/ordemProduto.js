const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

// Criar item na ordem
async function criarOrdemProduto(idOrdem, idProduto) {
    const connection = await mysql.createConnection(databaseConfig);

    try {
        const [result] = await connection.query(
            "INSERT INTO ordemProduto (idOrdem, idProduto) VALUES (?, ?)",
            [idOrdem, idProduto]
        );
        await connection.end();
        return result.insertId;
    } catch (error) {
        console.error("Erro ao criar ordemProduto:", error);
        await connection.end();
        throw error;
    }
}

// Buscar todos os produtos de uma ordem
async function buscarProdutosPorOrdem(idOrdem) {
    const connection = await mysql.createConnection(databaseConfig);

    try {
        const [rows] = await connection.query(
            "SELECT * FROM ordemProduto WHERE idOrdem = ?",
            [idOrdem]
        );
        await connection.end();
        return rows;
    } catch (error) {
        console.error("Erro ao buscar produtos da ordem:", error);
        await connection.end();
        throw error;
    }
}

// Deletar item da ordem
async function deletarOrdemProduto(id) {
    const connection = await mysql.createConnection(databaseConfig);

    try {
        await connection.query("DELETE FROM ordemProduto WHERE id = ?", [id]);
        await connection.end();
    } catch (error) {
        console.error("Erro ao deletar ordemProduto:", error);
        await connection.end();
        throw error;
    }
}

module.exports = {
    criarOrdemProduto,
    buscarProdutosPorOrdem,
    deletarOrdemProduto,
};
