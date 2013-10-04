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
      }];
      

  }])
 
 .controller('PessoaControlller', ['$scope', '$http', '$templateCache', '$routeParams', function($scope, $http, $templateCache, $routeParams) {  
      console.log('PessoaControlller');
      $scope.pessoas = [{
        id : 1,
        nome : "William Lima 1",
        telefone : "11 9999-99999",
        email : "willguitaradmfar@gmail.com"
      },{
        id : 2,
        nome : "William Lima 2",
        telefone : "11 9999-99999",
        email : "willguitaradmfar@gmail.com"
      },{
        id : 3,
        nome : "William Lima 3",
        telefone : "11 9999-99999",
        email : "willguitaradmfar@gmail.com"
      },{
        id : 4,
        nome : "William Lima 4",
        telefone : "11 9999-99999",
        email : "willguitaradmfar@gmail.com"
      }];

      for(var pessoa in $scope.pessoas){
        if($routeParams.id == $scope.pessoas[pessoa].id){
          $scope.pessoa = $scope.pessoas[pessoa];
        }
      }
     

  }])

.controller('FotoControlller', ['$scope', '$http', '$templateCache', '$routeParams', function($scope, $http, $templateCache, $routeParams) {  
      console.log('FotoControlller');

      $scope.fotos = [{
        id : 1,
        nome : "William Lima",
        link : "http://portaldorodeiro.com.br/cr/wp-content/uploads/2011/10/Red.jpg"        
      },{
        id : 2,
        nome : "William Lima",
        link : "http://portaldorodeiro.com.br/cr/wp-content/uploads/2011/10/Red.jpg"
      },{
        id : 3,
        nome : "William Lima",
        link : "http://blog.clickgratis.com.br/uploads/c/Crispazeluz/323531.jpg"
      },{
        id : 4,
        nome : "William Lima",
        link : "http://portaldorodeiro.com.br/cr/wp-content/uploads/2011/10/Red.jpg"
      }];

      for(var foto in $scope.fotos){
        if($routeParams.id == $scope.fotos[foto].id){
          $scope.foto = $scope.fotos[foto];
        }
      }


  }])

.controller('MenuHorizontalRightController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
      console.log('MenuHorizontalRightController');

  $scope.listMenu = [{nome : "Sair", link : "#/sair"}, {nome : "Configurações", link : "#/config"}];


  }])

.controller('MenuHorizontalLeftController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
      console.log('MenuHorizontalLeftController');

      $scope.listMenu = [{nome : "Home", link : "#/home"}, {nome : "Fotos", link : "#/fotos"}];


  }])

 

  ; 
