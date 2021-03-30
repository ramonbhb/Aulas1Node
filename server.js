const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const usuarios = require('./usuarios.js');
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/* PRAZER EU SOU UMA ROTA */
app.get('/', (req, res) => {
  res.statusCode = 200;  

  /*  faço todo processamento  */
  res.json({
        rota: "principal",
        nivel: "iniciante",
        statusFelicidade: true
    })    
})

app.use('/usuarios', usuarios)
//app.use('/times', times)