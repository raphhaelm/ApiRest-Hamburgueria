import { Router } from "express";
import{ inserirCliente, uptCliente, sltClientes, sltClienteId, delCliente } from "../controllers/controllersClientes.js";
const router = Router();

router.get('/', (req, res) => {
  res.send(`Usuário Cadastrado`)
});

router.get("/clientes", sltClientes);
router.get("/cliente/:id", sltClienteId);
router.post("/cliente", inserirCliente);
router.put("/cliente/:id", uptCliente);
router.delete("/cliente/:id", delCliente);

export default router;
