var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var contatos = [
  { id: 1, nome: "ricardo chahud maiolini", telefone: "97486-0728", data: new Date(), operadora: { nome: "Vivo", codigo: "15", categoria: "Celular", cor: "purple", preco: 2 } },
  { id: 2, nome: "renato chahud maiolini",  telefone: "99968-9101", data: new Date(), operadora: { nome: "Tim", codigo: "41", categoria: "Celular", cor: "blue", preco: 3 } },
  { id: 3, nome: "tatiane de matos rios maiolini", telefone: "97588-5620", data: new Date(), operadora: { nome: "GVT", codigo: "25", categoria: "Fixo", cor: "orange", preco: 1 } },
  { id: 4, nome: "margareth chahud sabsud maiolini", telefone: "9988-6666", data: new Date(), operadora: { nome: "Oi", codigo: "14", categoria: "Celular", cor: "yellow", preco: 1 } },
  { id: 5, nome: "roberto maiolini filho",  telefone: "3476-1280", data: new Date(), operadora: { nome: "NET", codigo: "12", categoria: "Fixo", cor: "green", preco: 2 } },
  { id: 6, nome: "rafael tadeu Souza", telefone: "5566-5620", data: new Date(), operadora: { nome: "Claro", codigo: "23", categoria: "Celular", cor: "red", preco: 1 } }
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

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendFile('public/index.html', { root: __dirname });
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  contatos.forEach(function (contato) {
  	if (contato.id == req.params.id) {
  		res.json(contato);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

app.listen(process.env.PORT || 3412);
