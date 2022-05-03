
import Database from "../infra/configDB.js"

class DatabaseMetodosCardapio {

    static createTableCardapio() {
        const cardapio = `CREATE TABLE IF NOT EXISTS cardapio (
            id_produto INTEGER PRIMARY KEY AUTOINCREMENT,
            produto VARCHAR,
            preco INT)`

        return new Promise((resolve, reject) => {
            Database.run(cardapio, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve("Tabela cardapio criada com sucesso")
                }
            })
        })
    }
    /**
     * 
     * @param {Object} produto 
     * @returns Promisse<Object>
     */


    static inserirProduto(produto) {
        const query = `INSERT INTO Cardapio VALUES (?, ? , ?)`
        
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
    };

    static uptCardapio(produto, id) {
        const query = `UPDATE cardapio SET (produto, preco) = (? , ?) WHERE id_produto = ?`;
        const body = Object.values(produto)
        console.log(body)
        return new Promise((resolve, reject) => {
            Database.run(query, [produto.produto, produto.preco, id], (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({ "message": "Cardapio alterado com sucesso!" })
                }
            })
        })
    }



    static selecionarProduto(id) {
        const query = `SELECT * FROM Cardapio WHERE id_produto = ?`;
        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if (e) {
                    reject(e)
                } else {
                    resolve(result)
                }
            })
        })
    };

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
        const query = `DELETE FROM Cardapio WHERE id_produto=? `
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e) => {
                if (e) {
                    reject(e)
                } else {
                    resolve({ message: "Produto deletado com sucesso" })
                }
            })
        })
    }

    


}

export default DatabaseMetodosCardapio






