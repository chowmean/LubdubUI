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
            $.each($scope.cpu_info,function(index,value){
            	var a = moment(value['data']['cpu']['datetime']);
				var b = moment();
				var diff = b.diff(a, 'seconds');
				if (diff-19800<120){
					value['active'] = true;
				}
				else{
					value['active'] = false;
				}

            })
            console.log($scope.cpu_info);
        })
        .error(function(data) {
            ;
        });
});