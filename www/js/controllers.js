angular.module('starter.controllers', ['starter.services'])

.controller('FileController', function($scope, $cordovaFile, $state, DataService) {
	$scope.file = {};

	$scope.file.spinner = false;

	$scope.file.openFromLocal = function () {
		$scope.file.spinner = true;

		$cordovaFile.readAsText(cordova.file.applicationDirectory, "www/data/cats.json")
      		.then(function (success) {
      			DataService.data = JSON.parse(success);
      			DataService.source = "www";
				$scope.file.spinner = false;
	        	$state.go("list");
      	}, function (error) {
      		$scope.file.spinner = false;
        	console.log(error)
      });
	}
})

.controller('ListController', function($scope, $cordovaFile, DataService) {
	$scope.list = {}

	$scope.list.data = DataService.data;
	$scope.list.source = DataService.source;
})