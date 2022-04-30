import Database from "../infra/configDB.js";
import { resolve } from "path";
class DatabaseMetodosFornecedores {
    
    static tableFornecedores() {
        const fornecedor = `CREATE TABLE IF NOT EXISTS Fornecedores (id INTEGER PRIMARY KEY, nome TEXT, ramo TEXT,cnpj INTEGER)`
        return new Promise((resolve, reject) => {
            Database.run(fornecedor, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve("Nova tabela Fornecedor.")
                }
            })
        })
    }

    static inserirFornecedor(fornecedor) {
        const query = `INSERT INTO Fornecedores (nome, ramo, cnpj) VALUES ( ?, ?, ?)`;
        const body = Object.values(fornecedor);
        return new Promise((resolve, reject) => {
            Database.run(query, [...body], (e) => {
                if (e) {
                    reject(e)
                } else {
                    resolve({
                        "Mensagem": "Fornecedor cadastrado com sucesso!"
                    })
                }
            })
        })
    }

    static updateFornecedorId(fornecedor, id) {
        const query = `UPDATE Fornecedores SET (nome, ramo, cnpj) = (?,?,?) WHERE id = ?`;
        const body = Object.values(fornecedor)
        return new Promise((resolve, reject) => {
            Database.run(query, [...body, id], (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({
                        "Mensagem": "Fornecedor atualizado com sucesso!"
                    })
                }
            })
        })
    }

    static selecionarFornecedor(id) {
        const query = `SELECT * FROM Fornecedores WHERE id = ?`;
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

    static selecionarFornecedores() {
        const query = `SELECT * FROM Fornecedores`;
        return new Promise((resolve, reject) => {
            Database.all(query, (e, result) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve(result)
                }
            })
        })
    }
    static deletaFornecedor(id) {
        const query = `DELETE From Fornecedores WHERE id = ?`;
        return new Promise((resolve, reject) => {
            Database.run(query, id, (e) => {
                if (e) {
                    reject(e.message)
                } else {
                    resolve({
                        "Mensagem": "Fornecedor deletado com sucesso!"
                    })
                }
            })
        })
    }
}

export default DatabaseMetodosFornecedores;