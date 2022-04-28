import { openDb } from "../infra/configDB.js";

export async function tableClientes () {
    const cliente = `CREATE TABLE IF NOT EXISTS Cliente
                    (id INTEGER PRIMARY KEY,
                    nome TEXT,
                    telefone VARCHAR,
                    email VARCHAR)`;

    openDb().then(db => {
        db.exec(cliente)
    })
};
export async function insertCliente(req, res){
    let cliente = req.body;
    openDb().then(db => {
        db.run(`INSERT INTO cliente
        (nome, telefone, preço)
        VALEUS (?, ?, ?)`,
            [cliente.nome, cliente.telefone, cliente.email]
        )
    })
    res.json({
        "statusCode": 200
    })
}
export async function uptCliente(req, res) {
    let cliente = req.body;
    openDb().then(db => {
        db.run(`UPDATE cliente
        SET nome=?, produto=?, preco=?
        WHERE id=?`,
        [cliente.nome, cliente.telefone, cliente.email, cliente.id]
        )
    });
    res.json({
        "statusCode": 200
    })
}
export async function sltCliente(res, req) {
    let id = req.body.id
    openDb().then(db => {
        db.get(`SELECT * FROM Cliente WHERE id=?`, [id])
        .then(cliente => res.json(cliente))
    });
}
export async function sltClientes(req, res) {
    openDb().then(db => {
        db.all(`SELECT * FROM Cliente`)
        .then(cliente => res.json(cliente))
    });
}
export async function delCliente(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.run(`DELETE FROM Cliente WHERE id=?`, [id])
    });
    req.json({
        "statuscode": 200
    })
}

