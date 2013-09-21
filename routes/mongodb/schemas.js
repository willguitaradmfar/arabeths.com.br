var mongoose    = require('mongoose'),
    config      = require('../config');

mongoose.connect('mongodb://' + config.mongodb.credentials + config.mongodb.host + config.mongodb.port + '/' + config.mongodb.dbName, function(err) {
    if (err) {
	   console.log('POSSIVEL SOLUCAO \nsudo service mongodb stop\nsudo rm /var/lib/mongodb/mongod.lock\nsudo chown -R mongodb:mongodb /var/lib/mongodb/\nsudo service mongodb start\n');
	   throw err;	
	}
});

var postSchema = mongoose.Schema(
    ({'uid': 'String',
    				'title': 'String',
    				'img': 'String',
    				'description': 'String'})
);

var filialSchema = mongoose.Schema(
    ({'uid': 'String',
                    'title': 'String',
                    'img': 'String',
                    'embeded_google_maps': 'String',
                    'description': 'String'})
);
//$varNewSchema$
//$varNewSchema$

module.exports = {
    Post: mongoose.model('post', postSchema),
    Filial: mongoose.model('filial', filialSchema)//$newSchema$
};
