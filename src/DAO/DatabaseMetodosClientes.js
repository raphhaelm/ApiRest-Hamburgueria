import Database from "../infra/configDB.js"

class DatabaseMetodosClientes {

    static createTableClientes() {
        const cliente = `CREATE TABLE IF NOT EXISTS  cliente (
            id_cliente INTEGER PRIMARY KEY,
            nome VARCHAR,
            telefone VARCHAR,
            email VARCHAR)`
            return new Promise((resolve, reject) => {
                Database.run(cliente, (e) => {
                    if (e) {
                        reject(e)
                    } else {
                        resolve({ message: "Cliente cadastrado com sucesso"})
                    }
                })
            }) 
    }
    static inserirCliente(cliente) {
        const query = `INSERT INTO cliente (nome, telefone, email) VALUES (?, ?, ?)`;
        const body = Object.values(cliente)
        return new Promise((resolve, reject)  => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e)
                } else {
                    resolve({ message: "Novo cliente cadastrado"})
            }
        })
    })
}
    static selecionarClienteId(id) {
        const query = `SELECT * FROM  cliente WHERE id_cliente=?`
        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if(e) {
                    reject(e)
                } else {
                    resolve(result)
                }
            })
        })
    }
    static selecionarClientes() {
        const query = ` SELECT * FROM cliente`
        return new Promise((resolve, reject) => {
            Database.all(query, (e, rows) => {
                if(e) {
                    reject(e)
                } else {
                    resolve({ rows: rows})
                }
            })
        })
    }
    static deleteCliente(id) {
        const query = ` DELETE FROM cliente WHERE id_cliente=?`
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e) => {
                if(e) {
                    reject(e)
                } else {
                    resolve({ message: "Cliente deletado com sucesso"})
                }
            })
        })
    }
    static updateClienteId(cliente, id) {
        const query = `UPDATE cliente SET (nome, telefone, email) = (?, ?, ?) WHERE id_cliente=?`;
        const body = Object.values(cliente)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (e, result) => {
                if(e) {
                    reject(e)
                } else {
                    resolve ({message: "Cliente atualizado com sucesso"})
                }
            })
        })
    }
}

export default DatabaseMetodosClientes