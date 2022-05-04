import { Router } from "express";
import { testApi, insertFornecedor,sltFornecedor, sltFornecedores, uptFornecedor, delFornecedor } from "../controllers/controllersFornecedores.js";

const routerFornecedores = Router();

// routerFornecedores.get('/fornecedor', testApi);
routerFornecedores.post('/fornecedor', insertFornecedor);
routerFornecedores.get('/fornecedor/:id', sltFornecedor);
routerFornecedores.get('/fornecedores', sltFornecedores);
routerFornecedores.put('/fornecedor/:id', uptFornecedor);
routerFornecedores.delete('/fornecedor/:id', delFornecedor);

export default routerFornecedores;