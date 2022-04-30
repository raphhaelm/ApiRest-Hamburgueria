import DatabaseMetodosClientes from "../DAO/DatabaseMetodosClientes.js"
import ClientesModels from "../models/clientesModels.js"
import ValidacoesClientes from "../services/validacoesClientes.js"


export async function inserirCliente(req, res) {
    try {
        if (ValidacoesClientes.validaNome(req.body.nome) && ValidacoesClientes.validaEmail(req.body.email)) {
            const cliente = new ClientesModels(...Object.values(req.body))
            const response = await DatabaseMetodosClientes.inserirCliente(cliente)
            res.status(201).json(response)
        } else {
            throw new Error("Requisição fora do padrão")
        }

    } catch (e) {
        res.status(400).json({ erro: e.message })
    }


};

export async function uptCliente(req, res) {
    try {
        if (ValidacoesClientes.validaNome(req.body.nome) && ValidacoesClientes.validaEmail(req.body.email)) {
            const cliente = req.body;
            const response = await DatabaseMetodosClientes.updateClienteId(cliente, req.params.id)
            res.status(200).json(response)
        } else {
            throw new Error("Requisição fora do padrão")
        }


    } catch (e) {
        res.status(400).json({ erro: e.message })
    }


}

export async function sltClientes(req, res) {
    try {
        const response = await DatabaseMetodosClientes.selecionarClientes()
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({ erro: e.message })
    }
}

export async function sltClienteId(req, res) {
    try {
        const response = await DatabaseMetodosClientes.selecionarClienteId(req.params.id)
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({ erro: e.message })
    }
}

export async function delCliente(req, res) {
    try {
        const response = await DatabaseMetodosClientes.deleteCliente(req.params.id)
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({ erro: e.message })
    }
}
