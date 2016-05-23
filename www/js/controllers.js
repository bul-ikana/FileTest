angular.module('starter.controllers', ['starter.services'])

.controller('FileController', function($scope, $cordovaFile, $state, DataService, $http) {
	$scope.file = {};

	$scope.file.spinner = false;

	$scope.file.exists = false;

	$scope.file.openFromLocal = function() {
		$scope.file.spinner = true;

		$cordovaFile.readAsText(cordova.file.applicationDirectory, "www/data/cats.json")
			.then( function(success) {
				DataService.data = JSON.parse(success);
				DataService.source = "www";
				$scope.file.spinner = false;
				$state.go("list");
			}, function (error) {
				$scope.file.spinner = false;
				console.log(error)
			});
	}

	$scope.file.openFromRemote = function() {
		$scope.file.spinner = true;

		$http.get('http://hugo.mecabotware.com/files/loadcats.json')
			.then( function(success) {
				DataService.data = success.data;
				DataService.source = "remote";
				$scope.file.spinner = false;
				$state.go("list");
			}, function (error) {
				$scope.file.spinner = false;
				console.log(error)
			});
	}

	$scope.file.saveFromRemote = function() {
		$scope.file.spinner = true;

		$http.get('http://hugo.mecabotware.com/files/savecats.json')
			.then(function (success) {
				console.log("file read from remote");
				$cordovaFile.writeFile(cordova.file.dataDirectory, "cats.json", JSON.stringify(success), true)
					.then(function (success) {
						console.log("file saved");
						console.log(success);
						$scope.file.spinner = false;
						$scope.file.exists = true;
					})
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