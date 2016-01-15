var Pedido = require('../models/pedido');

exports.index = function(req, res){
    res.render('index');
}

exports.pedidoList = function(req, res){
  var pedidos = {
    cliente:{nome:"Nome cliente", docmento:"cpf"},
    Vendedor:{nome:"Nome Vendedor", docmento:"cnpj"},
    Produto:{nome:"peoduto"}
  }
  res.json({pedidos: pedidos});
}
