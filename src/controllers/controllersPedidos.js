import DatabaseMetodos from "../DAO/DatabaseMetodosPedidos.js"
import PedidosModel from "../models/modelsPedidos.js"
import Validacoes from "../services/ValidacoesPedidos.js";

export async function insertPedido(req, res) {
    try {
        if(Validacoes.validaNome(req.body.nome) && Validacoes.ValidaPedido(req.body.produto)){            
        const tabela = await DatabaseMetodos.tablePedido();
        const pedido = new PedidosModel(...Object.values(req.body));
        const response = await DatabaseMetodos.inserirPedido(pedido)
        res.status(201).json(response)
        } else{
            throw new Error('Requisição fora dos padrões, analise pedido.')
        }
    } catch (e) {
        res.status(400).json({ erro: e.message });
    }
};
export async function uptPedido(req, res) {
    try {
        const pedido = req.body;
        const id = req.params.id;
        const response = await DatabaseMetodos.updatePedidoId(pedido, id)
        
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json(e.message)
    }
};
export async function sltPedido(req, res) {
    
    try {
        const response = await DatabaseMetodos.selecionarPedido(req.params.id);
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json({ erro: e.message })
    };
};
export async function sltPedidos(req, res) {
    try {
        const response = await DatabaseMetodos.selecionarPedidos();
        res.status(200).json(response);
    } catch (e) {
        res.status(400).json({ erro: e.message })
    };
};
export async function delPedido(req, res){
    try{
        const response = await DatabaseMetodos.deletaPedido(req.params.id);
        res.status(200).json(response);
    } catch (e){
        res.status(400).json({erro: e.message})
    }
};
