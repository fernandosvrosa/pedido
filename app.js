var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var homeRoute = require('./routes/home.js');
var pedidoRoute = require('./routes/pedido.js');

var app = express();

// pasta onde fica as views
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

 // compartilha a pasta public
app.use(express.static(path.join(__dirname, 'public')));

// rotas para acesso aqui
app.get('/', homeRoute.index);
app.get('/v1/pedido', pedidoRoute.pedidoList);

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
    console.log('Servidor foi startado na porta ' + server.address().port);
});
