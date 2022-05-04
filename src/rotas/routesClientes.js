import { Router } from "express";
import{ inserirCliente, uptCliente, sltClientes, sltClienteId, delCliente } from "../controllers/controllersClientes.js";
const routerClientes = Router();

// routerClientes.get('/', (req, res) => {
//   res.send(`Usuário Cadastrado`)
// });

routerClientes.get("/clientes", sltClientes);
routerClientes.get("/cliente/:id", sltClienteId);
routerClientes.post("/cliente", inserirCliente);
routerClientes.put("/cliente/:id", uptCliente);
routerClientes.delete("/cliente/:id", delCliente);

export default routerClientes;
