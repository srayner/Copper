/* 
 * AngularJS Client
 */

var app = angular.module('copper', []);
app.controller('driversController', function($scope, $http) {
    
    $http.get("/drivers").success(function(response) {
        $scope.drivers = response;
    });
    
});
