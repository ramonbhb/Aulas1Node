const express = require('express')
const app = express()
const port = 3000

const usuarios = [
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
        idade: 18
    }
];

//let usuarios;
//* POST, PUT, DELETE UPDATE. Pesquisar por Métodos HTTP's.


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

app.get('/usuarios', (req,res) => {   
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
    let idUser = req.params.id;
  //  let dados = bancoDeDadosGetDados(idUser);
    res.statusCode = 200;
    res.send(dados)
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