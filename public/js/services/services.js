angular.module('services', ['ngResource'])

.factory('recursoPreco', function($resource){
  return recursoPreco = $resource('/v1/preco/:id', null, {
     update : {
         method: 'PUT'
     }
  });
})

.factory('recursoPrecoEmpresa', function($resource){
    return recursoPrecoEmpresa = $resource('/v1/preco/empresa/:empresaId', null, {});
})

.factory('recursoPedido', function($resource){
  return recursoPedido = $resource('/v1/pedido/:id', null, {
     update : {
         method: 'PUT'
     }
  });
})
;
