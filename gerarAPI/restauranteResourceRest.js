.factory('RestauranteREST', function ($resource) {
      return $resource('restaurante:s/:id', {}, {
        list: {method:'GET', params : {id : 'all', s : 's'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        delete: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })