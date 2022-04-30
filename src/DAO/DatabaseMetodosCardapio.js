import Database from "../infra/configDB.js"

class DatabaseMetodosCardapio {

    static createTableCardapio() {
        const cardapio = `CREATE TABLE IF NOT EXISTIS cardapio (
            id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
            produto VARCHAR,
            preco INT)`
        return new Promise((resolve, reject) => {
            Database.run(cardapio, (e) => {
                if (e) {
                    reject(e)
                } else {
                    resolve({ message: "Tabela cardapio criada" })
                }
            })
        })
    }
    static inserirProduto(produto) {
        const query = `INSERT INTO Cardapio (
            id_produto
            produto,
            preco
        ) = (?, ?, ?))`;
        const body = Object.values(produto)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e)
                } else {
                    resolve({ message: "Novo produto cadastrado" })
                }
            })
        })
    }
    static selecionarProduto(id) {
        const query = `SELECT * FROM Cardapio WHERE id_produto=?`
        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if (e) {
                    reject(e)
                } else {
                    resolve(result)
                }
            })
        })
    }

    static selecionarProdutos() {
        const query = `SELECT * FROM Cardapio `
        return new Promise((resolve, reject) => {
            Database.all(query, (e, rows) => {
                if (e) {
                    reject(e)
                } else {
                    resolve({ rows: rows })
                }
            })
        })
    }

    static deleteProduto(id) {
        const query = `SELECT * FROM Cardapio WHERE id_produto=? `
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e) => {
                if (e) {
                    reject(e)
                } else {
                    resolve({ message: "Produto retirado com sucesso" })
                }
            })
        })
    }

    static updateProduto() {

    }


}

export default DatabaseMetodosCardapio






