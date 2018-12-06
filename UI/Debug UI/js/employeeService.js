var app = angular.module('newHire');

app.factory('employeeService', ['$http','$q', function($http, $q) {
   	var getEmployeess = function(){
    	return $http({
	      method: 'GET',
	      url: 'http://localhost:8080/hire/employee'
	    });
   	}

   	var saveEmployee = function(request){
    return $http({
	    method: 'POST',
	    url: 'http://localhost:8080/hire/employee',
		  data: request,   
        headers: {
          "Accept": 'text/plain',
          "Content-Type": 'application/json'
		    }
	    });
   	}

   	return {
    	getEmployeess : getEmployeess,
    	saveEmployee: saveEmployee
   	}
}]);