var express         = require('express'),    
    db              = require('./routes/mongodb/schemas'),
    path            = require('path');

var app             = express();
    server          = require('http').createServer(app),    
    io              = require('socket.io').listen(server);

var config          = require('./routes/config');

var query           = {};
    query.filial    = require('./routes/functions/filialFunction')(app, db);
    query.post      = require('./routes/functions/postFunction')(app, db);
    query.foto      = require('./routes/functions/fotoFunction')(app, db);
    query.buffet      = require('./routes/functions/buffetFunction')(app, db);
    query.restaurante      = require('./routes/functions/restauranteFunction')(app, db);//$requireFunctions$
    

app.configure(function() {
    app.set('port', process.env.PORT || config.domain.port);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());//'public/stylesheets/img/favicon.ico'
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser());
    app.use(express.session({secret: 'monkey'}));    
    app.use(app.router);
    app.use(require('stylus').middleware(__dirname + '/public'));
    app.use(express.bodyParser({uploadDir:process.env.TMP}));
    app.use(express.static(path.join(__dirname, 'public')));
});

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/postit/config', function(req, res) {
    res.send(config.public);
});

require('./routes/views/site')(app, config);
require('./routes/api/filialAPI')(app, config, db, query); 
require('./routes/api/postAPI')(app, config, db, query);
require('./routes/api/buffetAPI')(app, config, db, query);
require('./routes/api/restauranteAPI')(app, config, db, query);
require('./routes/api/fotoAPI')(app, config, db, query);//$requireAPI$

server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});