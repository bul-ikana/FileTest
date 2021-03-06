// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova'])

.run(function($ionicPlatform, $cordovaFile, $rootScope) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    $rootScope.exists = false;
    $cordovaFile.checkFile(cordova.file.dataDirectory, "cats.json")
      .then(function(success) {
        console.log(success);
        $rootScope.exists = true;
      }, function(error) {
        console.log(error);
        $rootScope.exists = false;
      })
  });

})

.config(function($stateProvider, $urlRouterProvider) {

  //Routes

  $stateProvider
    .state('buttons', {
        url: "/",
        templateUrl: "templates/buttons.html",
        controller: "FileController"
      })

    .state('list', {
        url: "/list",
        templateUrl: "templates/list.html",
        controller: "ListController"
      })

  $urlRouterProvider.otherwise('/');

})