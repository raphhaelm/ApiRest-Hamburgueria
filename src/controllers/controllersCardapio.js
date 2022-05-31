import DatabaseMetodosCardapio from "../DAO/DatabaseMetodosCardapio.js"
import CardapioModels from "../models/cardapioModels.js"
import ValidacoesCardapio from "../services/validacoesCardapio.js"

export async function inserirProduto(req, res) {
    try {
        
        if (ValidacoesCardapio.validaProduto(req.body.produto) && ValidacoesCardapio.ValidaPreco(req.body.preco) && ValidacoesCardapio.ValidaDescricao(req.body.descricao)) {
            const tabela = await DatabaseMetodosCardapio.createTableCardapio();
            const produto = new CardapioModels(...Object.values(req.body))
            const response = await DatabaseMetodosCardapio.inserirProduto(produto)
            res.status(201).json(response)

        } else {
            throw new Error("Requisição está fora dos padrões")

        }

    } catch (e) {
        res.status(400).json({ erro: e.message })
    }

};

export async function updateCardapio(req, res) {
    try {
        
        if (ValidacoesCardapio.validaProduto(req.body.produto) && ValidacoesCardapio.ValidaPreco(req.body.preco) && ValidacoesCardapio.ValidaDescricao(req.body.descricao)) {
            
            const produto = new CardapioModels(req.params.id, req.body.produto, req.body.preco, req.body.descricao)

            const response = await DatabaseMetodosCardapio.uptCardapio(produto, req.params.id)
            res.status(201).json(response)

        } else {
            throw new Error("Requisição está fora dos padrões")
        }


    } catch (e) {
        res.status(400).json({ erro: e.message })
    }


};

export async function sltProdutos(req, res) {
    try {
        const response = await DatabaseMetodosCardapio.selecionarProdutos()
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({ erro: e.message })
    }
};

export async function sltProduto(req, res) {
    try {
        const response = await DatabaseMetodosCardapio.selecionarProduto(req.params.id)
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({ erro: e.message })
    }
};

export async function delProduto(req, res) {
    try {
        const response = await DatabaseMetodosCardapio.deleteProduto(req.params.id)
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({ erro: e.message })
    }
};


