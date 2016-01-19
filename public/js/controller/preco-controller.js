'use strict';

angular.module('pedido')
.controller('PrecoController', function($scope, $routeParams, recursoPrecoEmpresa){
  $scope.precosEmpresa = [];

  recursoPrecoEmpresa.get({empresaId: $routeParams.empresaId} ,function(retorno){
    $scope.precosEmpresa = retorno.precos;
  });

});
