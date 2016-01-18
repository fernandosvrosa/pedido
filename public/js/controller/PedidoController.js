angular.module('pedido')
    .controller('PedidoController', function($scope, recursoPedido) {

      $scope.nomePedido = "";
      $scope.pedidos = [];

      recursoPedido.get(function(retorno){
           $scope.pedidos = retorno.pedidos;
      }, function(erro){
           console.log(erro);
      });
});
