var express         = require('express'),    
    db              = require('./routes/mongodb/schemas'),
    path            = require('path');

var app             = express();
    server          = require('http').createServer(app),    
    io              = require('socket.io').listen(server);

var config          = require('./routes/config');

var query           = {};//$requireFunctions$    
    

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

require('./routes/views/site')(app, config);//$requireAPI$

server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});