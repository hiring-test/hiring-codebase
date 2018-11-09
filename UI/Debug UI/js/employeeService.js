/**
 * Created by 502415898 on 7/17/2015.
 */
var app = angular.module('eFMEAapp');

app.factory('riskAnalysisService', ['$http','$q', function($http, $q) {
	//get all analyses associated to SSO
   	var getEmployeess = function(){
    	return $http({
	      method: 'GET',
	      url: 'http://usmkeffalod31.od.health.ge.com:8000/hire/employee/'
	    });
   	}

   	//Get FMEAs for a specific App
   	var saveEmployee = function(request){
    return $http({
	      method: 'POST',
	      url: 'http://usmkeffalod31.od.health.ge.com:8000/hire/employee/'
        data: request
	    });
   	}



   	return {
    	getMyRiskAnalyses : getMyRiskAnalyses,
    	saveEmployee: saveEmployee
   	}
}]);