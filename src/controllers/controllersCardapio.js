import { openDb } from "../infra/configDB.js";

export async function tableCardapio() {
    const cardapio = `CREATE TABLE IF NOT EXISTIS Cardapio
    (id_produto INTERGER PRIMARY KEY,
        produto TEXT,
        preco INTEGER)`;


        openDb().then(db => {
            db.exec(cardapio)
        })
};
export async function insertCardapio(req, res){
    let cardapio = req.body;
    openDb().then(db => {
        db.run(`INSERT INTO Cardapio
        (produto, preco)
        VALUES (?, ?)`,
        [cardapio.produto, cardapio.preco]
        )
    });
    res.json({
        "statusCode": 200
    })
}
export async function uptCardapio(req, res) {
    let cardapio = req.body;
    openDb().then(db => {
        db.run(`UPDATE Cardapio
        SET produto=?, preco=?
        WHERE id_produto=?`,
        [cardapio.produto, cardapio.preco, cardapio.id_produto]
        )
    });
    res.json({
        "statusCode": 200
    })
}
export async function sltCardapio(req, res) {
    openDb().then(db => {
        db.all(`SELECT * FROM Cardapio`)
        .then(cardapio => res.json(cardapio))
    });
}
export async function slctCardapio(req, res) {
    let id_produto = req.body.id_produto
    openDb().then(db => {
        db.get(`SELECT * FROM Cardapio WHERE id_produto=?`, [id_produto])
        .then(cardapio => res.json(cardapio))
    });
}

export async function delCardapio (req, res){
    let id_produto = req.body.id_produto;
    openDb().then(db=> {
        db.run(`DELETE FROM Cardapio
        WHERE id_produto=?`, [id_produto])
    });
    res.json({
        "statusCode": 200
    })
}
