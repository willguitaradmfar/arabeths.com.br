module.exports = function(app, config, db, query) {

    app.get('/filials/all', function(req, res) {
        query.filial.getFilials(function(filial) {
            res.send(filial);
        });
    });

    app.get('/filial/:id', function(req, res) {
        var id = req.params.id; 
        query.filial.getFilialById(id, function(filial) {
            res.send(filial);
        });
    });
   
    app.post('/filial', function(req, res) {
        console.log('Filials posts');
        console.log(req.body);        

        var newFilial = new db.Filial();
       

        req.body._id = newFilial._id;

        //newFilial.title = req.body.title;
        
        newFilial.uid = req.body.uid
        newFilial.title = req.body.title
        newFilial.img = req.body.img
        newFilial.embeded_google_maps = req.body.embeded_google_maps
        newFilial.description = req.body.description

        newFilial.save();

        io.sockets.emit('filial::create', newFilial);
        io.sockets.emit('notifications', '');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/filial/:id', function(req, res) {
        console.log('Filials put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;        

        query.filial.getFilialById(id, function (newFilial) {

        //newFilial.title = req.body.title;
            
        newFilial.uid = req.body.uid
        newFilial.title = req.body.title
        newFilial.img = req.body.img
        newFilial.embeded_google_maps = req.body.embeded_google_maps
        newFilial.description = req.body.description            

            newFilial.save();

            io.sockets.emit('filial::update', newFilial);
            io.sockets.emit('notifications', '');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/filial/:id', function(req, res) {
        console.log('Filials delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.filial.getFilialById(id, function (newFilial) {
            io.sockets.emit('notifications', '');

            newFilial.remove();

            io.sockets.emit('filial::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};