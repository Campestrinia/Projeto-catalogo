const ordemPedidoService = require("./../service/ordemPedido");

// 1. Criar novo pedido
async function criarOrdem(req, res) {
    try {
        const { idUsuario, idEndereco, status, total, payment_method } = req.body;

        if (!idUsuario || !idEndereco || !total || !payment_method || !status) {
            return res.status(400).json({ error: "Campos obrigatórios ausentes" });
        }

        const novoId = await ordemPedidoService.criarOrdemPedido(
            idUsuario,
            idEndereco,
            status,
            total,
            payment_method
        );

        res.status(201).json({ message: "Pedido criado com sucesso", id: novoId });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar pedido" });
    }
}

// 2. Buscar pedido por ID
async function buscarOrdemPorId(req, res) {
    try {
        const { id } = req.params;

        const ordem = await ordemPedidoService.buscarOrdemPorId(id);

        if (!ordem) {
            return res.status(404).json({ error: "Pedido não encontrado" });
        }

        res.json(ordem);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar pedido" });
    }
}

// 3. Atualizar status do pedido
async function atualizarStatus(req, res) {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!status) {
            return res.status(400).json({ error: "Campo 'status' é obrigatório" });
        }

        const atualizado = await ordemPedidoService.atualizarStatusOrdem(id, status);

        if (!atualizado) {
            return res.status(404).json({ error: "Pedido não encontrado" });
        }

        res.json({ message: "Status atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar status" });
    }
}

module.exports = {
    criarOrdem,
    buscarOrdemPorId,
    atualizarStatus,
};
