'use strict';

/* Controllers */

angular.module('admin.controllers', [])
 .controller('MenuVerticalController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
      console.log('MenuVerticalController');

      $scope.listMenu = [{
        id : 1,
       name : "Gerenciar Pessoa",
       listSubMenu : [{
                  name : "Listar",
                  link : "pessoas"
                  },{
                  name : "Novo",
                  link : "pessoa"
                  }]
      },{
        id : 2,
       name : "Gerenciar Fotos",
       listSubMenu : [{
                  name : "Listar",
                  link : "fotos"
                  },{
                  name : "Novo",
                  link : "foto"
                  }]
      },{
        id : 3,
       name : "Gerenciar Artigos",
       listSubMenu : [{
                  name : "Listar",
                  link : "artigos"
                  },{
                  name : "Novo",
                  link : "artigo"
                  }]
      }];
      

  }])
 
 .controller('PessoaControlller', ['$scope', '$location', '$templateCache', '$routeParams', 'PessoaREST', function($scope, $location, $templateCache, $routeParams, PessoaREST) {  
      console.log('PessoaControlller');

      $scope.pessoas = PessoaREST.list();

      $scope.pessoa = PessoaREST.get($routeParams.id);

      $scope.save = function(obj) {
        if(obj.id){
          $scope.pessoa = PessoaREST.update(obj);
        }else{
          obj.id = $scope.pessoas.length+1
          $scope.pessoa = PessoaREST.save(obj);
        }
        $scope.pessoas = PessoaREST.list();
        $location.path('/pessoas');
      };

       $scope.excluir = function(obj) {
        if(obj.id){
          $scope.pessoa = PessoaREST.excluir(obj);
        }
        $scope.pessoas = PessoaREST.list();        
      };
     

  }])

.controller('FotoControlller', ['$scope', '$location', '$templateCache', '$routeParams', 'FotoREST', function($scope, $location, $templateCache, $routeParams, FotoREST) {  
      console.log('FotoControlller');

     $scope.fotos = FotoREST.list();

      $scope.foto = FotoREST.get($routeParams.id);

      $scope.save = function(obj) {
        if(obj.id){
          $scope.foto = FotoREST.update(obj);
        }else{
          obj.id = $scope.fotos.length+1
          $scope.foto = FotoREST.save(obj);
        }
        $scope.fotos = FotoREST.list();
        $location.path('/fotos');
      };

       $scope.excluir = function(obj) {
        if(obj.id){
          $scope.foto = FotoREST.excluir(obj);
        }
        $scope.fotos = FotoREST.list();
      };

  }])

.controller('ArtigoControlller', ['$scope', '$location', '$templateCache', '$routeParams', 'ArtigoREST', function($scope, $location, $templateCache, $routeParams, ArtigoREST) {  
      console.log('ArtigoControlller');

     $scope.artigos = ArtigoREST.list();

      $scope.artigo = ArtigoREST.get($routeParams.id);

      $scope.save = function(obj) {
        if(obj.id){
          $scope.artigo = ArtigoREST.update(obj);
        }else{
          obj.id = $scope.artigos.length+1
          $scope.artigo = ArtigoREST.save(obj);
        }
        $scope.artigos = ArtigoREST.list();
        $location.path('/artigos');
      };

       $scope.excluir = function(obj) {
        if(obj.id){
          $scope.artigo = ArtigoREST.excluir(obj);
        }
        $scope.artigos = ArtigoREST.list();
      };

  }])

.controller('MenuHorizontalRightController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
      console.log('MenuHorizontalRightController');

  $scope.listMenu = [{nome : "Sair", link : "#/sair"}, {nome : "Configurações", link : "#/config"}];


  }])

.controller('MenuHorizontalLeftController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
      console.log('MenuHorizontalLeftController');

      $scope.listMenu = [{nome : "Home", link : "#/home"}, {nome : "Gerenciar", link : "#/gerenciar"}];


  }])

 

  ; 
