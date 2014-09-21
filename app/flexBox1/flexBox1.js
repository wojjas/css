'use strict';

angular.module('myApp.flexBox1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/flexBox1', {
    templateUrl: 'flexBox1/flexBox1.html',
    controller: 'FlexBox1Ctrl'
  });
}])

.controller('FlexBox1Ctrl', [function() {

}]);