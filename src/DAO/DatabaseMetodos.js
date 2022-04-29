import Database from "../infra/configDB.js";
import { resolve } from "path";

class DatabaseMetodos {
    static tablePedido() {
        const pedido = `CREATE TABLE IF NOT EXISTS Pedido
                         (id INTEGER PRIMARY KEY,
                          nome TEXT,
                          produto TEXT,
                          preco INTEGER)`
        return new Promise((resolve, reject) => {
            Database.run(pedido, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve("Novo tabela Pedidos.")
                }
            })
        })
    };

    static inserirPedido(pedido) {
        const query = `INSERT INTO Pedido (nome, produto, preco) VALUES ( ?, ?, ?)`;
        const body = Object.values(pedido);
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e)
                } else {
                    resolve({ message: "Novo pedido realizado com sucesso" })
                }
            })
        })
    }
    static updatePedidoId(usuario, id) {
        const query = `UPDATE Pedido SET (id, nome, produto, preco) = (?,?,?,?) WHERE id = ?`;
        return new Promise((resolve, reject) => {
            Database.run(query, [...usuario, id], (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static selecionarPedido(id) {
        const query = `SELECT * FROM Pedido WHERE id = ?`;
        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }
    static selecionarPedidos() {
        const query = `SELECT * FROM Pedido`;
        return new Promise((resolve, reject) => {
            Database.all(query, (e, rows) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({ rows: rows })
                }
            })
        })
    }
    static deletaPedido(id) {
        const query = `DELETE From Pedido WHERE id = ?`
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({ message: "Pedido Cancelado, apagado da Database" })
                }
            })
        })
    }
}


export default DatabaseMetodos;