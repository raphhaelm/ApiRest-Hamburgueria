import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import routerClientes from "./src/rotas/routesClientes.js";
import routerFornecedores from "./src/rotas/routesFornecedores.js";
import routerCardapio from "./src/rotas/routesCardapio.js";
import routerPedido from "./src/rotas/routesPedido.js";
import * as dotenv from "dotenv";
import DatabaseMetodosClientes from "./src/DAO/DatabaseMetodosClientes.js"
import DatabaseMetodosFornecedores from "./src/DAO/DatabaseMetodosFornecedores.js";
import DatabaseMetodosCardapio from "./src/DAO/DatabaseMetodosCardapio.js";
import DatabaseMetodosPedidos from "./src/DAO/DatabaseMetodosPedidos.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(routerClientes);
app.use(routerFornecedores);
app.use(routerCardapio);
app.use(routerPedido);

DatabaseMetodosClientes.createTableClientes();
DatabaseMetodosFornecedores.tableFornecedores();
DatabaseMetodosCardapio.createTableCardapio();
DatabaseMetodosPedidos.tablePedido();


app.listen(port, () => {
  console.log(`
    █████████
    █▄█████▄█
    █▼▼▼▼▼
    █
    "Project Burger On"
    █▲▲▲▲▲
    █████████
    ██ ██
    `)
});

https.createServer({
  cert: fs.readFileSync('src/SSL/code.crt'),
  key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, () => console.log("Protocolo https ativado com sucesso"));
