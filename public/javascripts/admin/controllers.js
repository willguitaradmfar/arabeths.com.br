'use strict';

/* Controllers */

angular.module('admin.controllers', [])
 
 .controller('PessoaControlller', ['$scope', '$location', '$templateCache', '$routeParams', 'PessoaREST', function($scope, $location, $templateCache, $routeParams, PessoaREST) {  
      console.log('PessoaControlller');

       $scope.listMenu = [{
        id : 1,
       name : "Opções",
       listSubMenu : [{name : "Incluir Pessoa", link : "pessoa"},{name : "Listar Pessoas", link : "pessoas"}]
      }];
      $scope.info = {};
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
        
        $scope.info.msg = "Pessoa #"+obj.id+" excluída";
        $scope.info.type = "success";
        $scope.pessoas = PessoaREST.list();        
      };
     

  }])

.controller('FotoControlller', ['$scope', '$location', '$templateCache', '$routeParams', 'FotoREST', function($scope, $location, $templateCache, $routeParams, FotoREST) {  
      console.log('FotoControlller');

      $scope.listMenu = [{
        id : 1,
       name : "Opções",
       listSubMenu : [{name : "Incluir Foto", link : "foto"},{name : "Listar Fotos", link : "fotos"}]
      }];

      $scope.info = {};
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
        
        $scope.info.msg = "Foto #"+obj.id+" excluída";
        $scope.info.type = "success";
        $scope.fotos = FotoREST.list();
      };

  }])

.controller('ArtigoControlller', ['$scope', '$location', '$templateCache', '$routeParams', 'ArtigoREST', function($scope, $location, $templateCache, $routeParams, ArtigoREST) {  
      console.log('ArtigoControlller');

       $scope.listMenu = [{
        id : 1,
       name : "Opções",
       listSubMenu : [{name : "Incluir Artigo", link : "artigo"},{name : "Listar Artigos", link : "artigos"}]
      }];
      $scope.info = {};
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
        
        $scope.info.msg = "Artigo #"+obj.id+" excluída";
        $scope.info.type = "success";
        $scope.artigos = ArtigoREST.list();
      };

  }])

.controller('MenuHorizontalRightController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
      console.log('MenuHorizontalRightController');

  $scope.listMenu = [{nome : "Sair", link : "#/sair"}, {nome : "Configurações", link : "#/config"}];

  }])

.controller('MenuHorizontalLeftController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
      console.log('MenuHorizontalLeftController');

      $scope.listMenu = [{nome : "Pessoa", link : "#/pessoas"}, {nome : "Artigo", link : "#/artigos"}, {nome : "Foto", link : "#/fotos"}];

  }])
.controller('HomeControlller', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
      console.log('HomeControlller');
      

  }])



 

  ; 
