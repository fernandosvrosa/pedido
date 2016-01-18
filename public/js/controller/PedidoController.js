angular.module('pedido')
    .controller('PedidosController', function($http, $scope) {

      $scope.nomePedido = "";

      $scope.pedidos = [];

      $http.get('/v1/pedido')
      .success(function(retorno){
        $scope.pedidos = retorno.pedidos;
      })
});
