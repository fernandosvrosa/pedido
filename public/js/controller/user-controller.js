'use strict';

angular.module('pedido')
    .controller('UserController', function ($scope, $http, $routeParams, $location) {
        $scope.title = "New user";
        $scope.user = {};

        var _id = $routeParams.id;
        $scope.btnLabel = "Save";

        if (_id) {
            $http({ method: 'GET', url: '/user/' + $routeParams.id })
                .success(function (response) {
                    $scope.user = response;
                    $scope.btnLabel = "Edit";
                    $scope.title = "Edit: " + $scope.user.name;
                });
        }

        $scope.save = function () {
            var json = angular.toJson($scope.user);
            if($scope.user._id){
                $http({ method: 'PUT', url: '/user/'+ $scope.user._id, data: json })
                    .success(function (response) {
                        $scope.user = response;
                        $location.path('/user/');
                    });
            }else{
                $http({ method: 'POST', url: '/user', data: json })
                    .success(function (response) {
                        $scope.user = response;
                        $location.path('/user/' + $scope.user._id);
                    });
            }

        }

        $scope.remove = function () {

            var confirm = window.confirm("Confirm?");

            if(confirm){
            $http({ method: 'delete', url: '/user/' + $scope.user._id })
                .success(function (response) {
                    $scope.user = response;
                    $location.path('/user');
                });
            }
        }

    }).controller('UserList', function ($scope, $http) {
        $scope.title = "Users";

        $http({ method: 'GET', url: '/user' })
            .success(function (response) {
                $scope.user = response;
            });

    });
