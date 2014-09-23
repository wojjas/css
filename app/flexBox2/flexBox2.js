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
            [{id:'0.0', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'0.1', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'0.2', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'0.3', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false}],

            [{id:'1.0', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'1.1', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'1.2', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'1.3', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false}],

            [{id:'2.0', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'2.1', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'2.2', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'2.3', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false}],

            [{id:'3.0', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'3.1', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'3.2', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false},
                {id:'3.3', imgBack:'./img/proXoftLogo.png', imgFront:'./img/donald-portrait.jpg', isFrontSideShown:false}]
        ];

        $scope.twoDArray = cards;

        $scope.handleCardClick = function (card) {
            card.isFrontSideShown = !card.isFrontSideShown;
        }
        $scope.handleCardClick2 = function (card) {
            $scope.twoDArray[0][0].isFrontSideShown = !card.isFrontSideShown;
        }
    }]);

//Data:
//        var twoDArray = [
//            ['0.0', '0.1', '0.2', '0.3'],
//            ['1.0', '1.1', '1.2', '1.3'],
//            ['2.0', '2.1', '2.2', '2.3'],
//            ['3.0', '3.1', '3.2', '3.3']
//        ];