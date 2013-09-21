
'use strict';

angular.module('myApp.resource', ["ngResource"])

.factory('FotoREST', function ($resource) {
      return $resource('foto:s/:id', {}, {
        list: {method:'GET', params : {id : 'all', s : 's'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        delete: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })

.factory('PostREST', function ($resource) {
      return $resource('post:s/:id', {}, {
        list: {method:'GET', params : {id : 'all', s : 's'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        delete: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })

 .factory('FilialREST', function ($resource) {
      return $resource('filial:s/:id', {}, {
        list: {method:'GET', params : {id : 'all', s : 's'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        delete: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })
  ;