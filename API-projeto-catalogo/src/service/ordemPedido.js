const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

// 1. Criar pedido
async function criarOrdemPedido(idUsuario, idEndereco, status, total, payment_method) {
    const connection = await mysql.createConnection(databaseConfig);

    const insertQuery = `
    INSERT INTO ordemPedido (idUsuario, idEndereco,status, total, payment_method)
    VALUES (?, ?, ?, ?,?)
  `;

    try {
        const [result] = await connection.query(insertQuery, [
            idUsuario,
            idEndereco,
            status,
            total,
            payment_method,
        ]);
        await connection.end();
        return result.insertId;
    } catch (error) {
        console.error("Erro ao criar ordem de pedido:", error);
        await connection.end();
        throw error;
    }
}

// 2. Buscar pedido por ID
async function buscarOrdemPorId(id) {
    const connection = await mysql.createConnection(databaseConfig);

    try {
        const [rows] = await connection.query(
            "SELECT * FROM ordemPedido WHERE id = ?",
            [id]
        );
        await connection.end();
        return rows[0];
    } catch (error) {
        console.error("Erro ao buscar ordem por ID:", error);
        await connection.end();
        throw error;
    }
}

// 3. Atualizar status do pedido
async function atualizarStatusOrdem(id, novoStatus) {
    const connection = await mysql.createConnection(databaseConfig);

    try {
        const [result] = await connection.query(
            "UPDATE ordemPedido SET status = ? WHERE id = ?",
            [novoStatus, id]
        );
        await connection.end();
        return result.affectedRows > 0;
    } catch (error) {
        console.error("Erro ao atualizar status da ordem:", error);
        await connection.end();
        throw error;
    }
}

module.exports = {
    criarOrdemPedido,
    buscarOrdemPorId,
    atualizarStatusOrdem,
};
