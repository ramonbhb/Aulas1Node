const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Varíavel que é uma função no formato Array Function
const server = http.createServer((req, res) => {
    // req = request
    // res = response
  //let req = "https://127.0.0.1:3000/usuario/1";  
  // let req2 = 'https://127.0.0.1:3000/usuarios";
   
  console.log("minha página principal está funcionando");
  res.statusCode = 200; // SUCCESS  
  res.setHeader('Content-Type', 'text/plain');
  // res.end('Hello World');
  let user = {
    nome: "joao",
    idade: 50
  }
  res.end(JSON.stringify(user));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});