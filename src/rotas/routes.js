import { Router } from "express";
import { insertPedido, sltPedidos, sltPedido, uptPedido, delPedido } from "../controllers/controllersPedidos.js";
const router = Router();

router.get('/', (req, res) => {
  res.send(`Gostaria de fazer um pedido? `)
});


router.get("/pedidos", sltPedidos);
router.get("/pedido", sltPedido);
router.post("/pedido", insertPedido);
router.put("/pedido", uptPedido);
router.delete("/pedido", delPedido);

export default router;