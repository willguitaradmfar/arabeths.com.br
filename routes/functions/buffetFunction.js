module.exports = function(app, db) {
    return {
        getBuffets: function (callback) {
            db.Buffet.find(function (err, buffets) {
                if (buffets.length > 0) {
                    callback(buffets);
                } else {
                    callback(null);
                }
            });
        },
       
        getBuffetById: function (id, callback) {
            db.Buffet.findOne({_id: id}, function (err, buffet) {
                if (buffet) {
                    callback(buffet);
                } else {
                    callback(buffet);
                }
            });
        }

    };
};