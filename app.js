import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.send(`
  
  █████████<br>
  █▄█████▄█<br>
  █▼▼▼▼▼<br>
  █<br>
    "Hello Word!"<br>
  █▲▲▲▲▲<br>
  █████████<br>
   ██ ██<br>
   `)
});

app.listen(port, () => {
    console.log(`
    █████████
    █▄█████▄█
    █▼▼▼▼▼
    █
      "Servidor Online"
    █▲▲▲▲▲
    █████████
     ██ ██
    `)
});
