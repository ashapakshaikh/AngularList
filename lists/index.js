var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
	$scope.material = ["Milk","Bread","Cheese"];
    $scope.addItem = function () {
        $scope.errortext = "";
    	if(!$scope.addMe) {return;}
    	if ($scope.material.indexOf($scope.addMe) == -1) {
    		$scope.material.push($scope.addMe);
    	}
    	else{
    		$scope.errortext = "The item is already in your list";
    	}
    }

    $scope.removeIteam = function (x) {
    	$scope.errortext = "";
    	$scope.material.splice(x, 1);
    }
});