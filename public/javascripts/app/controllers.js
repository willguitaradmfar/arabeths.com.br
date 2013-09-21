'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('HomeControle', ['$scope', '$http', '$templateCache', 'FotoREST', function($scope, $http, $templateCache, FotoREST) {  
      console.log('HomeControle');
      $scope.breadcrumb = "Home"
      $scope.posts = [];
      $scope.active = true;

      var post1 = {};
      post1.img = "https://lh6.googleusercontent.com/-CLqiH43BdMQ/UidFKTkcVqI/AAAAAAAAAFg/lvjbTKNhBew/w309-h206-no/310581_236300526428529_1603137786_n.jpg";
      post1.title = "Restaurante Self-Service";
      post1.description = "TRABALHAMOS COM SELF-SERVICE POR QUILO SEGUNDA À SÁBADO, DAS 10:30 AS15:00, CHURRASCO DE QUINTA E SEXTA, VARIAS OPÇÕES QUENTES E VARIEDADESEM SALADAS.";
      $scope.posts.push(post1);

      var post2 = {};
      post2.img = "https://lh5.googleusercontent.com/-ZzJ0B1Drs_8/UidFKeXu-lI/AAAAAAAAAFY/eNeccJE7pIc/w274-h206-no/156363_480632925328620_1623402347_n.jpg";
      post2.title = "Buffet";
      post2.description = "TRABALHAMOS NO NOSSO SALÃO PARA ATÉ 120 PESSOAS OU À DOMICILIO. CASAMENTOS, NOIVADOS, CONFRATERNIZAÇÕES, ANIVERSÁRIOS INFANTIS, JANTARES";
      $scope.posts.push(post2);

      var post3 = {};
      post3.img = "https://lh3.googleusercontent.com/-v2vvS7TiRvI/UidFK_XdnkI/AAAAAAAAAFk/rlZQGMSqe8s/w640-h480-no/994555_562913853767193_1158598544_n.jpg";
      post3.title = "Delivery";
      post3.description = "Comida Caseira. Entregamos à Domicilio. Faça já o seu pedido.";
      $scope.posts.push(post3);


     $scope.frase = "ÓTIMOS PREÇOS FAÇA ORÇAMENTO SEM COMPROMISSOSANDRA.ARABE@IG.COM.BR TEL 4104-3888 NEXTEL 7914-4601 ID 927*24605";


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
