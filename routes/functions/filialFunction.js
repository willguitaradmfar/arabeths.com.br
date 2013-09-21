module.exports = function(app, db) {
    return {
        getFilials: function (callback) {
            db.Filial.find(function (err, filials) {
                if (filials.length > 0) {
                    callback(filials);
                } else {
                    callback(null);
                }
            });
        },
       
        getFilialById: function (id, callback) {
            db.Filial.findOne({_id: id}, function (err, filial) {
                if (filial) {
                    callback(filial);
                } else {
                    callback(filial);
                }
            });
        }

    };
};