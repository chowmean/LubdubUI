'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'dashboard/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])

.controller('DashboardCtrl', function($http, $scope, $window) {
    $scope.url = 'http://192.168.0.114:8000/';
    $scope.cpu_info = {}
    $scope.cpu_memory = {}
    $scope.total_host = 0
    $http({
            method: 'GET',
            url: $scope.url + "cpu_info"
        }).success(function(result) {
            $scope.cpu_info = result.data
            $scope.total_host = result.data.length
        })
        .error(function(data) {
            ;
        });
});