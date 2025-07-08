const ordemProdutoService = require("./../service/ordemProduto");

// Criar item de pedido
async function criar(req, res) {
    try {
        const { idOrdem, idProduto } = req.body;

        if (!idOrdem || !idProduto) {
            return res.status(400).json({ error: "idOrdem e idProduto são obrigatórios" });
        }

        const novoId = await ordemProdutoService.criarOrdemProduto(idOrdem, idProduto);
        res.status(201).json({ message: "Produto adicionado à ordem", id: novoId });
    } catch (error) {
        res.status(500).json({ error: "Erro ao adicionar produto à ordem" });
    }
}

// Buscar todos os produtos de uma ordem
async function buscarPorOrdem(req, res) {
    try {
        const { idOrdem } = req.params;

        const produtos = await ordemProdutoService.buscarProdutosPorOrdem(idOrdem);
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar produtos da ordem" });
    }
}

// Deletar item da ordem
async function deletar(req, res) {
    try {
        const { id } = req.params;

        await ordemProdutoService.deletarOrdemProduto(id);
        res.json({ message: "Produto removido da ordem com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao remover produto da ordem" });
    }
}

module.exports = {
    criar,
    buscarPorOrdem,
    deletar,
};
