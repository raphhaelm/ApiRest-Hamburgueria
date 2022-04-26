import { openDb } from "../infra/configDB.js";

export async function tablePedido() {
    const pedido = `CREATE TABLE IF NOT EXISTS Pedido
                     (id INTEGER PRIMARY KEY,
                      nome TEXT,
                      produto TEXT,
                      preco INTEGER)`;

    openDb().then(db => {
        db.exec(pedido)
    })
};
export async function insertPedido(req, res) {
    let pedido = req.body;
    openDb().then(db => {
        db.run(`INSERT INTO Pedido 
        (nome, produto, preco) 
        VALUES (?, ?, ?)`,
            [pedido.nome, pedido.produto, pedido.preco]
        )
    });
    res.json({
        "statusCode": 200
    })
}
export async function uptPedido(req, res) {
    let pedido = req.body;
    openDb().then(db => {
        db.run(`UPDATE Pedido 
        SET nome=?, produto=?, preco=?  
        WHERE id=?`,
            [pedido.nome, pedido.produto, pedido.preco, pedido.id]
        )
    });
    res.json({
        "statusCode": 200
    })
}
export async function sltPedidos(req, res) {
    openDb().then(db => {
        db.all(`SELECT * FROM Pedido`)
            .then(pedidos => res.json(pedidos))
    });
}
export async function sltPedido(req, res) {
    let id = req.body.id
    openDb().then(db => {
        db.get(`SELECT * FROM Pedido WHERE id=?`, [id])
            .then(pedido => res.json(pedido))
    });
}
export async function delPedido(req, res) {
    let id = req.body.id;
    openDb().then(db => {
        db.run(`DELETE From Pedido 
                WHERE id=?`,
            [id]
        )
    });
    res.json({
        "statusCode": 200
    })
}