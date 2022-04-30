import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import routerPedido from "./src/rotas/routesPedido.js";
import routerClientes from "./src/rotas/routesClientes.js";
import * as dotenv from "dotenv";
import DatabaseMetodosClientes from "./src/DAO/DatabaseMetodosClientes.js"


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(routerPedido);
app.use(routerClientes);

DatabaseMetodosClientes.createTableClientes();

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
