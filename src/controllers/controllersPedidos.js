import DatabaseMetodos from "../DAO/DatabaseMetodos.js"
import PedidosModel from "../models/modelsPedidos.js"

export async function insertPedido(req, res) {
    try {
        const tabela = await DatabaseMetodos.tablePedido();
        const pedido = new PedidosModel(...Object.values(req.body));
        const response = await DatabaseMetodos.inserirPedido(pedido)
        res.status(201).json(response)
    } catch (e) {
        res.status(400).json({ erro: e.message });
    }
}

export async function uptPedido(req, res) {
    const id = req.body.id
    const nome = req.body.nome
    const produto = req.body.produto
    const preco = req.body.preco
    try {
        const pedido = new PedidosModel(id,nome,produto,preco);
        console.log(pedido)
        console.log(req.body.id)
        const response = await DatabaseMetodos.updatePedidoId(id,nome,produto,preco)
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({ erro: e.message })
    }
}

export async function sltPedido(req, res) {
    
    try {
        const response = await DatabaseMetodos.selecionarPedido(req.params.id);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json({ erro: e.message })
    };
}

export async function sltPedidos(req, res) {
    try {
        const response = await DatabaseMetodos.selecionarPedidos();
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json({ erro: e.message })
    };
}

export async function delPedido(req, res){
    try{
        const response = await DatabaseMetodos.deletaPedido(req.params.id);
        res.status(200).json(response);
    } catch (e){
        res.status(400).json({erro: e.message})
    }
};
