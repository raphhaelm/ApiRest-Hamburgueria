import { Router } from "express";
import { inserirProduto, updateCardapio, sltProdutos, sltProduto, delProduto  } from "../controllers/controllersCardapio.js";
const routerCardapio = Router();

routerCardapio.get('/', (req, res) => {
  res.send(` <h1>Api Rest - Dev Burger. </h1>
  <b><h3>A sua fome é o nosso bug e o nosso foco é desenvolver o seu burger</h3></b>
  
  🍔💖
  `)
});

routerCardapio.get("/cardapio", sltProdutos);
routerCardapio.get("/cardapio/:id", sltProduto);
routerCardapio.post("/cardapio", inserirProduto);
routerCardapio.put("/cardapio/:id", updateCardapio);
routerCardapio.delete("/cardapio/:id", delProduto );

export default routerCardapio;


