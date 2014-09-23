'use strict';

angular.module('myApp.equalWH3', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/equalWH3', {
            templateUrl: 'equalWH3/equalWH3.html',
            controller: 'EqualWH3Ctrl'
        });
    }])

    .controller('EqualWH3Ctrl', ['$scope', function($scope) {

        //Cards:
        var cards = [
            [{id:'0.0', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'0.1', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'0.2', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'0.3', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false}],

            [{id:'1.0', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'1.1', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'1.2', imgBack:'./img/proXoftLogo.png', imgFront:'./img/DuckTalesHueyDewey&Louie.png', isFrontSideShown:false},
                {id:'1.3', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false}],

            [{id:'2.0', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'2.1', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'2.2', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'2.3', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false}],

            [{id:'3.0', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'3.1', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'3.2', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'3.3', imgBack:'./img/proXoftLogo.png', imgFront:'./img/daisy-standing.jpg', isFrontSideShown:false}]
        ];

        $scope.twoDArray = cards;

        $scope.handleCardClick = function (card) {
            card.isFrontSideShown = !card.isFrontSideShown;
        }
    }]);