
exports.listarPrecosPorEmpresaId = function(req, res){
    var id = req.params.empresaId;
    var precos = [];
    if (id == 1) {
      precos = [{
        Vendedor:{nome:"Nome Vendedor", docmento:"cnpj"},
        Produto:{nome:"produto1"},
        preco:10.5
      },
      {
        Vendedor:{nome:"Nome Vendedor", docmento:"cnpj"},
        Produto:{nome:"produto2"},
        preco:11.0
      }]
    }

    res.json({precos: precos});
}
