'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeControle', ['$scope', '$http', '$templateCache', 'FotoREST', function($scope, $http, $templateCache, FotoREST) {  
      console.log('HomeControle');
  }])

  .controller('MenuControle', ['$scope', function($scope) {
    console.log('MenuControle');  

    $scope.atMenu = function($t) {    
      $scope.classMenuUser = '';
      $scope.classMenuPost = '';
      $scope.classMenuFotos = '';
      if($t == 'post'){
        $scope.classMenuPost = 'active';      
        $scope.title = 'Postagens';
      }else if($t == 'users'){
        $scope.classMenuUser = 'active';      
        $scope.title = 'Usuários';
      }else if($t == 'fotos'){
        $scope.classMenuFotos = 'active';      
        $scope.title = 'Fotos';
      }
    };

  }]);
 

