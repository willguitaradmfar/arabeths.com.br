module.exports = function(app, db) {
    return {
        getRestaurantes: function (callback) {
            db.Restaurante.find(function (err, restaurantes) {
                if (restaurantes.length > 0) {
                    callback(restaurantes);
                } else {
                    callback(null);
                }
            });
        },
       
        getRestauranteById: function (id, callback) {
            db.Restaurante.findOne({_id: id}, function (err, restaurante) {
                if (restaurante) {
                    callback(restaurante);
                } else {
                    callback(restaurante);
                }
            });
        }

    };
};