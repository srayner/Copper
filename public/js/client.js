/* 
 * AngularJS Client
 */

var app = angular.module('copper', []);
app.controller('driversController', function($scope, $http) {
    
    $http.get("/drivers").success(function(response) {
        $scope.drivers = response;
    });
    
});

app.controller('teamsController', function($scope, $http) {
    
    $http.get("/teams").success(function(response) {
        $scope.teams = response;
    });
    
});
