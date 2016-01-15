var Pedido = require('../models/pedido');

exports.pedidoList = function(req, res){
  var pedidos = [{
    cliente:{nome:"Nome cliente", docmento:"cpf"},
    Vendedor:{nome:"Nome Vendedor", docmento:"cnpj"},
    Produto:{nome:"peoduto"}
  },
  {
    cliente:{nome:"Nome cliente2", docmento:"cpf"},
    Vendedor:{nome:"Nome Vendedor2", docmento:"cnpj"},
    Produto:{nome:"peoduto2"}
  }]
  res.json({pedidos: pedidos});
}
