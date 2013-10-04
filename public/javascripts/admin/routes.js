'use strict';


// Declare app level module which depends on filters, and services
angular.module('admin', ['admin.controllers', 'admin.resource', 'admin.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/pessoas', {templateUrl: 'partials/pessoas.html', controller: 'PessoaControlller'});
    $routeProvider.when('/fotos', {templateUrl: 'partials/fotos.html', controller: 'FotoControlller'});
    
    $routeProvider.otherwise({redirectTo: '/pessoas'});
 }]);


 
