'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.controllers', 'myApp.resource']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home1', controller: 'HomeControle'});
    $routeProvider.when('/festa', {templateUrl: 'partials/home1', controller: 'FestaControle'});
    $routeProvider.when('/restaurante', {templateUrl: 'partials/home1', controller: 'RestauranteControle'});    
    $routeProvider.when('/buffet', {templateUrl: 'partials/home1', controller: 'BuffetControle'});
    $routeProvider.when('/contato', {templateUrl: 'partials/home1', controller: 'ContatoControle'});
    $routeProvider.when('/localizacao', {templateUrl: 'partials/localizacao', controller: 'LocalControle'});
    $routeProvider.when('/povoar', {templateUrl: 'partials/home1', controller: 'PovoarControle'});    
    $routeProvider.otherwise({redirectTo: '/home'});
 }]);


 