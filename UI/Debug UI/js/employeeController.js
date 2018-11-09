var app = angular.module('newHire');

app.controller('employeeController', ['$scope', 'employeeService','$timeout','$location', function($scope, employeeService, $timeout, $location) {
    $scope.employee = {}

    $scope.saveEmployee = function(){
        employeeService.saveEmployee();
    }
}]);