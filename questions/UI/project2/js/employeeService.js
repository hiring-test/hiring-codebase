/**
 * Created by 502415898 on 7/17/2015.
 */
var app = angular.module('newHire');

app.factory('employeeService', ['$http','$q', function($http, $q) {
	//get all analyses associated to SSO
   	var getEmployeess = function(){
    	return $http({
	      method: 'GET',
	      url: 'http://localhost:8080/hire/employee'
	    });
   	}

   	//Get FMEAs for a specific App
   	var saveEmployee = function(request){
    return $http({
	    method: 'POST',
	    url: 'http://localhost:8080/hire/employee',
		  data: request,   
        headers: {
          "Content-Type": "application/json"
		    }
	    });
   	}

   	return {
    	getEmployeess : getEmployeess,
    	saveEmployee: saveEmployee
   	}
}]);