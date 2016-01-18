angular.module('pedido', ['ngRoute', 'services'])
.config(function($routeProvider){

  //  $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'partials/principal.ejs',
        controller: 'PedidoController'
    });

    $routeProvider.when('/preco/:empresaId', {
        templateUrl: 'partials/preco.ejs',
        controller: 'PrecoController'
    });

    $routeProvider.otherwise({redirectTo : '/'});

});
