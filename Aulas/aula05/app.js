var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// a) Importe o middleware de rotas
var tarefaRouter = require('./routes/tarefaRouter'); // <-- ADICIONE AQUI

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// b) Faça uso do middleware para a rota "/tarefas"
app.use('/tarefas', tarefaRouter); 

module.exports = app;