
'use strict';

var pessoas = [{"id":1,"nome":"William Lima Pereira","telefone":"11 995303479","email":"willguitaradmfar@gmail.com","$$hashKey":"00R"},{"id":2,"nome":"Alexandre Henrique","telefone":"11 9999-99999","email":"ale@gmail.com","$$hashKey":"00T"},{"id":3,"nome":"Felipe Inácio Lima","telefone":"11 9999-99999","email":"felipe@gmail.com","$$hashKey":"00V"},{"id":4,"nome":"Ingrid Cristina Lima","telefone":"11 9999-99999","email":"ingrid@gmail.com","$$hashKey":"00X"},{"nome":"Tamara Lima Pereira","email":"tamara@gmail.com","telefone":"11 9999-9999","id":5,"$$hashKey":"01T"},{"nome":"Jacira Senna Lima","email":"jade@gmail.com","telefone":"11 9999-9999","id":6,"$$hashKey":"022"},{"nome":"Maria Aparecida","email":"maria@gmail.com","telefone":"11 8888-7777","id":7,"$$hashKey":"00X"},{"nome":"Julia Amanda","email":"julia@gmail.com","telefone":"11 4444-4444","id":8,"$$hashKey":"018"},{"nome":"Olivia Julia","email":"olivia@gmail.com","telefone":"11 4452-8898","id":9,"$$hashKey":"01K"},{"nome":"Amanda Pereira","email":"amanda@gmail.com","telefone":"11 4215-7854","id":10,"$$hashKey":"01X"},{"nome":"Pamela Fernandes","email":"pamela@gmail.com","telefone":"11 8554-7785","id":11}];

var fotos = [{"id":1,"nome":"Foto1","link":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhUUExQWFRUU…ZWpUpI3OddSdpMSS3c73id4GFqfYr8qFWpbezJnGccctS0CJLXYyd+okx9JjHbFowdXsf/2Q==","$$hashKey":"00R"},{"id":2,"nome":"Foto2","link":"http://portaldorodeiro.com.br/cr/wp-content/uploads/2011/10/Red.jpg","$$hashKey":"00T"},{"id":3,"nome":"Foto3","link":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBhMSEBUQEBQUEhUW…AAPgoAAklAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k=","$$hashKey":"00V"},{"id":4,"nome":"Foto4","link":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQTEhUUEhQVFhQV…A0WNsA4XTK5a1S+tFS+Noom5bRRJFoolC0US0tFEsWii+Fooli0UShaKJYtFSWLWolraK1/9k=","$$hashKey":"00X"},{"nome":"Foto5","link":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhUUEhQWFhUX…AUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUB//9k=","id":5,"$$hashKey":"01T"},{"nome":"Foto6","link":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQSEhQUExQVFRQW…8AcPqkkglOLR42eh+q9wjWmmB1Guh/tXiSCBW6m3SSQS1MpWmSSQPm7LTMf0+qSSDSSkkkg//Z","id":6,"$$hashKey":"022"},{"nome":"Foto7","link":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBhQSERUUEhQWFRQU…7hTH6Kv94p+4/8Kyspz/0f+nkvD5vPzXZO1H/ksT/9ve//AJNXzPWVlZvQnwP8VTi/iC//2Q==","id":7,"$$hashKey":"02C"},{"nome":"Foto8","link":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKbYCfpzAMyzoLty4ihFLxOgDrLVWz-X1kYwExTOAcnO8UuxH","id":8,"$$hashKey":"02N"},{"nome":"Foto9","link":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSnI2is2pCKeY4vpkJysdORDbPpb6LenYQHOWl2seKc18Mt6TIE","id":9}] ;

var artigos = [{"$$hashKey":"00X","titulo":"Artigo 2","descricao":"Artigo 2","conteudo":"<h1>Artigo 2 </h1> /////","id":2},{"$$hashKey":"00X","titulo":"Artigo 1","descricao":"Artigo 1","conteudo":"Artigo 1 ///// \\n fds","id":1},{"titulo":"Artigo três","descricao":"Artigo três","conteudo":"Artigo três dddddóóó","id":3,"$$hashKey":"01B"},{"titulo":"Luzes","descricao":"Luzes","conteudo":"Ĺuzes  Luzes","id":4,"$$hashKey":"01I"},{"titulo":"Farmácia","descricao":"Farmácia","conteudo":"Farmácia","id":5,"$$hashKey":"01W"},{"titulo":"Amarelo","descricao":"Amarelo","conteudo":"Amarelo \nAmarelo","id":6,"$$hashKey":"02C"},{"titulo":"Jogo","descricao":"Jogo","conteudo":"Jogo Celular","id":7,"$$hashKey":"01R"},{"titulo":"lululul","descricao":"lululul","conteudo":"llulu","id":8,"$$hashKey":"023"}];

angular.module('admin.resource', ["ngResource"])

.factory('PessoaREST', function ($resource) {
      return {
        list : function(callback) {if(callback)callback(pessoas);console.log(JSON.stringify(pessoas));return pessoas;},
        get : function(id, callback) {
          for(var i in pessoas){
            if(pessoas[i].id == id){
              if(callback)
              callback(pessoas[i]);
              return pessoas[i];
            }
          }
        },
        save : function (obj, argument) {
          pessoas.push(obj);
        },
        update : function (obj, argument) {
          for(var i in pessoas){
            if(pessoas[i].id == obj.id){
              pessoas[i] = obj;
              return;
            }
          }
        },
        excluir : function (obj) {
          var tmp = [];
          for(var i in pessoas){
            if(pessoas[i].id != obj.id){
              tmp.push(pessoas[i]);              
            }
          }
          pessoas = tmp;
        }
    }
  })

.factory('FotoREST', function ($resource) {
      return {
        list : function(callback) {if(callback)callback(fotos);console.log(JSON.stringify(fotos));return fotos;},
        get : function(id, callback) {
          for(var i in fotos){
            if(fotos[i].id == id){
              if(callback)
              callback(fotos[i]);
              return fotos[i];
            }
          }
        },
        save : function (obj, argument) {
          fotos.push(obj);
        },
        update : function (obj, argument) {
          for(var i in fotos){
            if(fotos[i].id == obj.id){
              fotos[i] = obj;
              return;
            }
          }
        },
        excluir : function (obj) {
          var tmp = [];
          for(var i in fotos){
            if(fotos[i].id != obj.id){
              tmp.push(fotos[i]);              
            }
          }
          fotos = tmp;
        }
    }
  })

.factory('ArtigoREST', function ($resource) {
      return {
        list : function(callback) {if(callback)callback(artigos);console.log(JSON.stringify(artigos));return artigos;},
        get : function(id, callback) {
          for(var i in artigos){
            if(artigos[i].id == id){
              if(callback)
              callback(artigos[i]);
              return artigos[i];
            }
          }
        },
        save : function (obj, argument) {
          artigos.push(obj);
        },
        update : function (obj, argument) {
          for(var i in artigos){
            if(artigos[i].id == obj.id){
              artigos[i] = obj;
              return;
            }
          }
        },
        excluir : function (obj) {
          var tmp = [];
          for(var i in artigos){
            if(artigos[i].id != obj.id){
              tmp.push(artigos[i]);              
            }
          }
          artigos = tmp;
        }
    }
  })

  ;