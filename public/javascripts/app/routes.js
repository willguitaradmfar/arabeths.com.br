'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controllers', 'myApp.resource']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home1', controller: 'HomeControle'});
    $routeProvider.when('/festa', {templateUrl: 'partials/home1', controller: 'FestaControle'});
<<<<<<< HEAD
    $routeProvider.when('/restaurante', {templateUrl: 'partials/home1', controller: 'RestauranteControle'});
=======
    $routeProvider.when('/restaurante', {templateUrl: 'partials/home1', controller: 'RestauranteControle'});    
>>>>>>> 9557e3ee2567c8c8ee976da7c3c1a95a70090d36
    $routeProvider.when('/buffet', {templateUrl: 'partials/home1', controller: 'BuffetControle'});
    $routeProvider.when('/contato', {templateUrl: 'partials/home1', controller: 'ContatoControle'});
    $routeProvider.when('/localizacao', {templateUrl: 'partials/localizacao', controller: 'LocalControle'});
    $routeProvider.when('/povoar', {templateUrl: 'partials/home1', controller: 'PovoarControle'});    
    $routeProvider.otherwise({redirectTo: '/home'});
 }]);


 
