import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import router from "./rotas/routes.js";
import * as dotenv from "dotenv";
import DatabaseMetodosClientes from "./DAO/DatabaseMetodosClientes.js";

dotenv.config();
// openDb();
// tablePedido();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(router);

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
}, app).listen(3001, () => console.log("https OK"));