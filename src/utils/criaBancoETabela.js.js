import { openDb }  from "../infra/configDB.js"; 
import { tablePedido } from "../controllers/controllersPedidos.js";
openDb();
tablePedido();
