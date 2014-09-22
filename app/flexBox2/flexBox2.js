'use strict';

angular.module('myApp.flexBox2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/flexBox2', {
            templateUrl: 'flexBox2/flexBox2.html',
            controller: 'FlexBox2Ctrl'
        });
    }])

    .controller('FlexBox2Ctrl', ['$scope', function($scope) {
        //Cards:
        var cards = [
            [{id:'0.0', img:'./img/proXoftLogo.png'},
                {id:'0.1', img:'./img/proXoftLogo.png'},
                {id:'0.2', img:'./img/proXoftLogo.png'},
                {id:'0.3', img:'./img/proXoftLogo.png'}],

            [{id:'1.0', img:'./img/proXoftLogo.png'},
                {id:'1.1', img:'./img/proXoftLogo.png'},
                {id:'1.2', img:'./img/proXoftLogo.png'},
                {id:'1.3', img:'./img/proXoftLogo.png'}],

            [{id:'2.0', img:'./img/proXoftLogo.png'},
                {id:'2.1', img:'./img/proXoftLogo.png'},
                {id:'2.2', img:'./img/proXoftLogo.png'},
                {id:'2.3', img:'./img/proXoftLogo.png'}],

            [{id:'3.0', img:'./img/proXoftLogo.png'},
                {id:'3.1', img:'./img/proXoftLogo.png'},
                {id:'3.2', img:'./img/proXoftLogo.png'},
                {id:'3.3', img:'./img/proXoftLogo.png'}]
        ];

        $scope.twoDArray = cards;
    }]);


//Data:
//        var twoDArray = [
//            ['0.0', '0.1', '0.2', '0.3'],
//            ['1.0', '1.1', '1.2', '1.3'],
//            ['2.0', '2.1', '2.2', '2.3'],
//            ['3.0', '3.1', '3.2', '3.3']
//        ];