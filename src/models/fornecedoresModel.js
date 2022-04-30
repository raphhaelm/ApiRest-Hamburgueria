class FornecedoresModel{
    constructor(id, nome, ramo, cnpj){
        this.id = id
        this.nome = nome
        this.ramo = ramo
        this.cnpj = cnpj
    }
}

export default FornecedoresModel;


// export async function createTableFornecedor() {
//     openDb().then(db => {
//         db.exec(`CREATE TABLE IF NOT EXISTS Fornecedor (
//             id INTEGER PRIMARY KEY,
//             nome TEXT,
//             ramo TEXT,
//             cnpj INTEGER
//         )`)
//     })
// }
