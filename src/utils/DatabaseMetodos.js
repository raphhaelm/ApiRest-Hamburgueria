import Database from "../infra/Database.js";
class DatabaseMetodos{
    static createTable(){
        const tabela_pedidos = `
            CREATE TABLE IF NOT EXISTS pedidos (
                numero INTEGER PRIMARY KEY AUTOINCREMENT,
                pedido VARCHAR,
                preco INT,
                id_cliente VARCHAR
            )
        `
        Database.run(tabela_pedidos, (e) => {
            if(e){
                console.log(e.message)
            } else {
                console.log(`Tabela criada`)
            }
        })
    }
    static iserir(obj, Database){
        Database.push(obj)
    }
}
export default DatabaseMetodos;