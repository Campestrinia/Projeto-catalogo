const { categoria } = require("../config/database.js");
const usuarioService = require("../service/usuario.js");

async function getAllCategoria(req, res) {
    try {
        const rows = await userService.getAllCategoria();

        res.status(200).json(rows);
    } catch (error) {
        res.status(500).send({
            message: "Error getting users",
            body: error.message,
        });
    }
}

async function createCategoria(req, res) {
    const { nome, email, CPF, telefone, senha } = req.body;

    try {
        await userService.createCategoria(nome, email, CPF, telefone, senha);

        res.status(201).json({ message: `Success` });
    } catch (eror) {
        res.status(500).send({
            message: `error adding user!`,
            error: error.message,
        });
    }
}
async function updateCategoria(req, res) {
    try {
        const { id } = req.params;
        const { nome, email, CPF, telefone, senha } = req.params;
        await userService.updateCategoria(id, nome, email, CPF, telefone, senha);

        res.status(204).json("Success");
    } catch (error) {
        res.status(500).send({
            message: `Error updating user`,
            body: error.message,
        });
    }
}

async function deleteCategoria(req, res) {
    try {
        const { id } = req.params;

        await userService.deleteCategoria(id);
        res.status(200).send({ message: "Deleted user" });
    } catch (error) {
        res.status(500).send({
            message: "Erros deleting user",
            error: error.message,
        });
    }
}

async function getCategoriaById(req, res) {
    try {
        const { id } = req.params;

        const user = await userService.getCategoriaById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({
            message: "Error getting user by ID",
            error: error.message,
        });
    }
}

module.exports = {
    getAllCategoria,
    createCategoria,
    updateCategoria,
    deleteCategoria,
    getCategoriaById
}