import express from "express";
import fs from "fs";
import https from "https";
import cors from "cors";
import router from "./rotas/CardapioRoutes.js";
import * as dotenv from "dotenv";



dotenv.config();


const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cors());
app.use(router);



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