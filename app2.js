const express = require('express')
const app = express()
const port = 3000

/* PRAZER EU SOU UMA ROTA */
app.get('/', (req, res) => {
  res.statusCode = 200;  

  /*
  faço todo processamento  */

  res.json({
        rota: "principal",
        nivel: "iniciante",
        statusFelicidade: true
    })    
})

app.get('/usuarios', (req,res) => {
    let usuarios = [
        {
            nome: "Joao",
            idade: 18
        },
        {
            nome: "Ana",
            idade: 18
        },
        {
            nome: "Maria",
            idade:18
        }
    ];
    //let usuarios;
    if (usuarios) {
        res.status = 200;
        res.json(usuarios);
    }
    else {
        res.status = 200;
        res.json({ 
            "status": 200,
            "msg": "Não existem usuários",
            usuarios: []
        })
    }
        
})

app.get('/usuario/:id', (req,res) => {
    // bind
    res.statusCode = 200;
    res.send({
        "id": req.params.id
    })
});

app.get('/times', (req,res) => {
    res.send("Aqui estão os meus times");
})

app.post('/usuarios', (req,res) => {
    // req  vem com os dados.
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})