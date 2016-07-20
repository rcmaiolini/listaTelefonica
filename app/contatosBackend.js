var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var contatos = [
  { nome: "Ricardo", telefone: "97486-0728", data: new Date(), operadora: { nome: "Vivo", codigo: "15", categoria: "Celular", cor: "purple", preco: 2 } },
  { nome: "Renato",  telefone: "99968-9101", data: new Date(), operadora: { nome: "Tim", codigo: "41", categoria: "Celular", cor: "blue", preco: 3 } },
  { nome: "Tatiane", telefone: "97588-5620", data: new Date(), operadora: { nome: "GVT", codigo: "25", categoria: "Fixo", cor: "orange", preco: 1 } },
  { nome: "Margareth", telefone: "9988-6666", data: new Date(), operadora: { nome: "Oi", codigo: "14", categoria: "Celular", cor: "yellow", preco: 1 } },
  { nome: "Roberto",  telefone: "3476-1280", data: new Date(), operadora: { nome: "NET", codigo: "12", categoria: "Fixo", cor: "green", preco: 2 } },
  { nome: "Rafael", telefone: "5566-5620", data: new Date(), operadora: { nome: "Claro", codigo: "23", categoria: "Celular", cor: "red", preco: 1 } }
];
var operadoras = [
  {nome: "Oi", codigo: "14", categoria: "Celular", cor: "yellow", preco: 1},
  {nome: "Vivo", codigo: "15", categoria: "Celular", cor: "purple", preco: 2},
  {nome: "Tim", codigo: "41", categoria: "Celular", cor: "blue", preco: 3},
  {nome: "Claro", codigo: "23", categoria: "Celular", cor: "red", preco: 1},
  {nome: "GVT", codigo: "25", categoria: "Fixo", cor: "orange", preco: 1},
  {nome: "Embratel", codigo: "21", categoria: "Fixo", cor: "black", preco: 3},
  {nome: "NET", codigo: "12", categoria: "Fixo", cor: "green", preco: 2}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});
