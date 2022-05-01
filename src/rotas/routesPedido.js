import { Router } from "express";
import { insertPedido, sltPedidos, sltPedido, uptPedido, delPedido } from "../controllers/controllersPedidos.js";
const routerPedido = Router();

routerPedido.get('/', (req, res) => {
  res.send(`Gostaria de fazer um pedido? `)
});

routerPedido.get("/pedidos", sltPedidos);
routerPedido.get("/pedido/:id", sltPedido);
routerPedido.post("/pedido", insertPedido);
routerPedido.put("/pedido/:id", uptPedido);
routerPedido.delete("/pedido/:id", delPedido);

export default routerPedido;