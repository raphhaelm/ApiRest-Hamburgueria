import DatabaseMetodosCardapio from "../DAO/DatabaseMetodosCardapio.js"
import CardapioModels from "../models/cardapioModels.js"
// import validacoes from "../validacoes/validacoes.js"

export async function inserirProduto(req, res) {
    try {
        const table = await DatabaseMetodosCardapio.createTableCardapio()
        const produto = new CardapioModels(...Object.values(req.body))
        const response = await DatabaseMetodosCardapio.inserirProduto(produto)
        res.status(201).json(response)
    } catch (e) {
        res.status(400).json({erro:e.message})
        }

        
};

export async function uptCardapio(req, res) {
try {
    const produto = req.body;
const response = await DatabaseMetodosCardapio.updateProduto(produto, req.params.id)
res.status(200).json(response)

} catch (e) {
    res.status(400).json({erro:e.message})
}

    
}

export async function sltProdutos(req, res) {
    try {
        const response = await DatabasaMetodosCardapio.selecionarProdutos() 
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({erro:e.message})
    }
}

export async function sltProduto(req, res) {
    try {
        const response = await DatabasaMetodosCardapio.selecionarProduto(req.params.id) 
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({erro:e.message})
    }
}

export async function delProduto(req, res) {
    try {
        const response = await DatabasaMetodosCardapio.deleteProduto(req.params.id) 
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({erro:e.message})
    }
}


