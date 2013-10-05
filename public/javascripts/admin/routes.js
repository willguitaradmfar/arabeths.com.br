'use strict';


// Declare app level module which depends on filters, and services
angular.module('admin', ['admin.controllers', 'admin.resource', 'admin.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeControlller'});
    $routeProvider.when('/pessoas', {templateUrl: 'partials/pessoas.html', controller: 'PessoaControlller'});
    $routeProvider.when('/pessoa/:id', {templateUrl: 'partials/pessoa.html', controller: 'PessoaControlller'});
    $routeProvider.when('/pessoa', {templateUrl: 'partials/pessoa.html', controller: 'PessoaControlller'});
    $routeProvider.when('/fotos', {templateUrl: 'partials/fotos.html', controller: 'FotoControlller'});
    $routeProvider.when('/foto/:id', {templateUrl: 'partials/foto.html', controller: 'FotoControlller'});
    $routeProvider.when('/foto', {templateUrl: 'partials/foto.html', controller: 'FotoControlller'});
    $routeProvider.when('/artigos', {templateUrl: 'partials/artigos.html', controller: 'ArtigoControlller'});
    $routeProvider.when('/artigo/:id', {templateUrl: 'partials/artigo.html', controller: 'ArtigoControlller'});
    $routeProvider.when('/artigo', {templateUrl: 'partials/artigo.html', controller: 'ArtigoControlller'});
    
    $routeProvider.otherwise({redirectTo: '/home'});
 }]);


 
