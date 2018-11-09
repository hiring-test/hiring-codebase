var app = angular.module('eFMEAapp');

app.controller('riskAnalysisController', ['$scope', 'riskAnalysisService','$timeout','$location', function($scope, riskAnalysisService, $timeout, $location) {
    $scope.tabs = [{id:"myAnalysis",title:'My Analyses'}, {id:'applications',title:'Applications'}]
    $scope.tab = $scope.tabs[0];
    $scope.sort = {type:'',reverse:false};
    $scope.selectedAnalysis = {};

	$scope.setTab = function(tab){		
        $scope.tab = tab;
    }

    $scope.isSet = function(tab){    	
        return $scope.tab === tab;
    }    

    $scope.selectAnalysis = function(analysis){
        $scope.selectedAnalysis = analysis;
    }

    $scope.viewAnalysis = function(){
        $scope.disableView = true;

        riskAnalysisService.getProbabilityDescriptions($scope.selectedAnalysis.appId).then(function(response){
            $scope.probabilities = response.data;
        });

        riskAnalysisService.getAnalysisDetails($scope.selectedAnalysis.appId).then(function(response){

            $scope.analysisRecords = response.data;

            $location.path( "/viewAnalysis");
        }).catch(function(error){
            alert("unable to fetch FMEAs")
        }).finally(function(){
            $scope.disableView = false;
        });
    }

    $scope.saveAnalysis = function(){
        riskAnalysisService.updateAnalysisDetails($scope.analysisRecords);
    }

    $scope.isSelected = function(analysis){
        return $scope.selectedAnalysis === analysis;
    }


    $scope.predicate = function(val){
        return val[$scope.sort.type];
    }
    
	riskAnalysisService.getMyRiskAnalyses("502408491").then(function(response){
		$scope.fmeas = response;
    });

    riskAnalysisService.getApplications().then(function(response){
        $scope.applications = response;
    })
}]);