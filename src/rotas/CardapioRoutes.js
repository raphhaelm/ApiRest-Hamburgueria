import { Router } from "express";
import { inserirProduto, uptCardapio, sltProdutos, sltProduto, delProduto  } from "../controllers/controllersCardapio.js";
const router = Router();

router.get('/', (req, res) => {
  res.send(`Escolha o seu hamburger`)
});

router.get("/cardapio", sltProdutos);
router.get("/cardapio/:id", sltProduto);
router.post("/cardapio", inserirProduto);
router.put("/cardapio/:id", uptCardapio);
router.delete("/cardapio/:id", delProduto );

export default router;


