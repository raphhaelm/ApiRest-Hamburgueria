import express from "express";
import app from "../../app.js";
const app = express();


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