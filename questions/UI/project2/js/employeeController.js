var app = angular.module('newHire');

app.controller('employeeController', ['$scope', 'employeeService','$timeout','$location', function($scope, employeeService, $timeout, $location) {
    $scope.employee = {};

    $scope.saveEmployee = function(){
    	$scope.saveSuccessful = null;
        employeeService.saveEmployee($scope.employee).then(function(){
        	$scope.saveSuccessful = false;
        }).catch(function(error){
        	$scope.saveSuccessful = true;
        });
    }

}]);