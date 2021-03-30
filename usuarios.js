let express = require('express');
const router = express.Router();
let usuarios = require('./dados.json');
//let functions = require('./functions.json');

router.get('/', (req,res) => {   
    if (req.query.nome && req.query.idade) {
        let user = req.query;
        let users = [];
        for (i=0;i<usuarios.length;i++) {
            if (usuarios[i].nome == user.nome && usuarios[i].idade == user.idade) {
                users.push(usuarios[i]);
            }
        }
        res.statusCode = 200;
        res.json(users);
    }    
    else {
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
    }     
})

router.get('/:id', (req,res) => {
    let idUser = req.params.id;
    let user;   
    /* Função para pesquisar usuário por Id */
    for (i=0;i<usuarios.length;i++) {
        console.log(usuarios[i]);
        if (usuarios[i].userId == idUser) {
            user = usuarios[i];
            break
        }
    }
    res.statusCode = 200;
    if (user) {
        res.json(user)
    }
    else {
        res.json({
            "mensagem": "Não existe usuário com o id " + idUser
        })
    }
});

router.post('/', (req,res) => {
    // req  vem com os dados.
    let dados = req.body;
    //console.log(dados);    
    userId = usuarios.length+1;
    dados['userId'] = userId;
    usuarios.push(dados);
    res.statusCode = 201;    
    res.json({ 
        mensagem: "Inserido muito  Sucesso",
        usuarios: usuarios
    });    
})

router.put('/:id', (req,res) => {
    // req  vem com os dados.
    let dados = req.body;
    //console.log(dados);    
    userId = usuarios.length+1;
    dados['userId'] = userId;
    usuarios.push(dados);
    res.statusCode = 201;    
    res.json({ 
        mensagem: "Inserido com Sucesso",
        usuarios: usuarios
    });    
})

module.exports = router;