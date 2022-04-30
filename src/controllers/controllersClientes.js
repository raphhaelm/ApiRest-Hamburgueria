import DatabaseMetodosClientes from "../DAO/DatabaseMetodosClientes.js"
import ClientesModels from "../models/clientesModels.js"


export async function inserirCliente(req, res) {
    try {
        const table = await DatabaseMetodosClientes.createTableClientes()
        const cliente = new ClientesModels(...Object.values(req.body))
        const response = await DatabaseMetodosClientes.inserirCliente(cliente)
        res.status(201).json(response)
    } catch (e) {
        res.status(400).json({erro:e.message})
        }

        
};

export async function uptCliente(req, res) {
try {
    const cliente = req.body;
    const response = await DatabaseMetodosClientes.updateClienteId(cliente, req.params.id)
    res.status(200).json(response)

} catch (e) {
    res.status(400).json({erro:e.message})
}

    
}

export async function sltClientes(req, res) {
    try {
        const response = await DatabaseMetodosClientes.selecionarClientes() 
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({erro:e.message})
    }
}

export async function sltClienteId(req, res) {
    try {
        const response = await DatabaseMetodosClientes.selecionarClienteId(req.params.id) 
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({erro:e.message})
    }
}

export async function delCliente(req, res) {
    try {
        const response = await DatabaseMetodosClientes.deleteCliente(req.params.id) 
        res.status(200).json(response)
    } catch (e) {
        res.status(400).json({erro:e.message})
    }
}
