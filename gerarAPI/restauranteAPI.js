module.exports = function(app, config, db, query) {

    app.get('/restaurantes/all', function(req, res) {
        query.restaurante.getRestaurantes(function(restaurante) {
            res.send(restaurante);
        });
    });

    app.get('/restaurante/:id', function(req, res) {
        var id = req.params.id; 
        query.restaurante.getRestauranteById(id, function(restaurante) {
            res.send(restaurante);
        });
    });
   
    app.post('/restaurante', function(req, res) {
        console.log('Restaurantes posts');
        console.log(req.body);        

        var newRestaurante = new db.Restaurante();
       

        req.body._id = newRestaurante._id;

        //newRestaurante.title = req.body.title;
        
 		newRestaurante.uid = req.body.uid
 		newRestaurante.nome = req.body.nome
 		newRestaurante.url = req.body.url

        newRestaurante.save();

        io.sockets.emit('restaurante::create', newRestaurante);
        io.sockets.emit('notifications', '');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/restaurante/:id', function(req, res) {
        console.log('Restaurantes put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;        

        query.restaurante.getRestauranteById(id, function (newRestaurante) {

        //newRestaurante.title = req.body.title;
            
 		newRestaurante.uid = req.body.uid
 		newRestaurante.nome = req.body.nome
 		newRestaurante.url = req.body.url            

            newRestaurante.save();

            io.sockets.emit('restaurante::update', newRestaurante);
            io.sockets.emit('notifications', '');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/restaurante/:id', function(req, res) {
        console.log('Restaurantes delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.restaurante.getRestauranteById(id, function (newRestaurante) {
            io.sockets.emit('notifications', '');

            newRestaurante.remove();

            io.sockets.emit('restaurante::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};