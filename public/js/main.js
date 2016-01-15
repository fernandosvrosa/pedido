angular.module('pedido', ['ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl: 'partials/principal.ejs',
        controller: 'PedidosController'
    });

    $routeProvider.otherwise({redirectTo : '/'})

});
