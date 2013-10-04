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
                  link : "novo"
                  }]
      },{
        id : 2,
       name : "Gerenciar Fotos",
       listSubMenu : [{
                  name : "Listar",
                  link : "fotos"
                  }]
      }];
      

  }])
 
 .controller('PessoaControlller', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
      console.log('PessoaControlller');
      $scope.pessoas = [{
        id : 1,
        nome : "William Lima",
        telefone : "11 9999-99999",
        email : "willguitaradmfar@gmail.com"
      },{
        id : 2,
        nome : "William Lima",
        telefone : "11 9999-99999",
        email : "willguitaradmfar@gmail.com"
      },{
        id : 3,
        nome : "William Lima",
        telefone : "11 9999-99999",
        email : "willguitaradmfar@gmail.com"
      },{
        id : 4,
        nome : "William Lima",
        telefone : "11 9999-99999",
        email : "willguitaradmfar@gmail.com"
      }];



  }])

.controller('FotoControlller', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {  
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


  }])

 

  ; 
