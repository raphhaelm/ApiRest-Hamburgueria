import { Router } from "express";
import { inserirProduto, updateCardapio, sltProdutos, sltProduto, delProduto  } from "../controllers/controllersCardapio.js";
const routerCardapio = Router();

routerCardapio.get('/', (req, res) => {
  res.send(`Api Rest - Dev Burger. 
  A sua fome é o nosso bug e o nosso foco é desenvolver o seu burger`)
});

routerCardapio.get("/cardapio", sltProdutos);
routerCardapio.get("/cardapio/:id", sltProduto);
routerCardapio.post("/cardapio", inserirProduto);
routerCardapio.put("/cardapio/:id", updateCardapio);
routerCardapio.delete("/cardapio/:id", delProduto );

export default routerCardapio;


