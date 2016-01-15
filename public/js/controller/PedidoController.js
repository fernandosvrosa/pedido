angular.module('pedido')
    .controller('PedidosController', function($http, $scope) {

      $scope.nomePedido = "";

      $scope.pedidos = [];

      $http.get('/pedido')
      .success(function(retorno){
        $scope.pedidos = retorno.pedidos;
      })
});
