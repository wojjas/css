'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.flexBox1',
  'myApp.flexBox2',
  'myApp.equalWH',
  'myApp.equalWH2',
  'myApp.equalWH3',
  'myApp.equalWH4',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/flexBox1'});
}]);
