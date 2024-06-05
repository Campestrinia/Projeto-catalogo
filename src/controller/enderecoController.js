const endereçoService = require("../service/endereco.js")

async function getAllEndereco(req, res) {
    try {
        const rows = await endereçoService.getAllendereco();

        res.status(200).json(rows);
    } catch (error) {
        res.status(500).send({
            message: "Error getting endereço",
            body: error.message,
        });
    }
}

async function createEndereco(req, res) {
    const { rua, CEP, cidade, numero, idUsuario } = req.body;

    try {
        await endereçoService.createUsuario(rua, CEP, cidade, numero, idUsuario);

        res.status(201).json({ message: `Success` });
    } catch (eror) {
        res.status(500).send({
            message: `error adding enredeço!`,
            error: error.message,
        });
    }
}
async function updateEndereco(req, res) {
    try {
        const { id } = req.params;
        const { rua, CEP, cidade, numero, idUsuario } = req.params;
        await endereçoService.updateUsuario(id, rua, CEP, cidade, numero, idUsuario);

        res.status(204).json("Success");
    } catch (error) {
        res.status(500).send({
            message: `Error updating endereço`,
            body: error.message,
        });
    }
}

async function deleteEndereco(req, res) {
    try {
        const { id } = req.params;

        await endereçoService.deleteEndereco(id);
        res.status(200).send({ message: "Deleted endereço" });
    } catch (error) {
        res.status(500).send({
            message: "Erros deleting endereço",
            error: error.message,
        });
    }
}

async function getAllenderecoById(req, res) {
    try {
        const { id } = req.params;

        const user = await endereçoService.getAllenderecoById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send({
            message: "Error getting endereço by ID",
            error: error.message,
        });
    }
}

module.exports = {
    getAllEndereco,
    createEndereco,
    updateEndereco,
    deleteEndereco,
    getAllenderecoById,
}