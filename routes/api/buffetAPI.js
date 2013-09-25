module.exports = function(app, config, db, query) {

    app.get('/buffets/all', function(req, res) {
        query.buffet.getBuffets(function(buffet) {
            res.send(buffet);
        });
    });

    app.get('/buffet/:id', function(req, res) {
        var id = req.params.id; 
        query.buffet.getBuffetById(id, function(buffet) {
            res.send(buffet);
        });
    });
   
    app.post('/buffet', function(req, res) {
        console.log('Buffets posts');
        console.log(req.body);        

        var newBuffet = new db.Buffet();
       

        req.body._id = newBuffet._id;

        //newBuffet.title = req.body.title;
        
 		newBuffet.uid = req.body.uid
 		newBuffet.nome = req.body.nome
 		newBuffet.url = req.body.url

        newBuffet.save();

        io.sockets.emit('buffet::create', newBuffet);
        io.sockets.emit('notifications', '');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/buffet/:id', function(req, res) {
        console.log('Buffets put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;        

        query.buffet.getBuffetById(id, function (newBuffet) {

        //newBuffet.title = req.body.title;
            
 		newBuffet.uid = req.body.uid
 		newBuffet.nome = req.body.nome
 		newBuffet.url = req.body.url            

            newBuffet.save();

            io.sockets.emit('buffet::update', newBuffet);
            io.sockets.emit('notifications', '');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/buffet/:id', function(req, res) {
        console.log('Buffets delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.buffet.getBuffetById(id, function (newBuffet) {
            io.sockets.emit('notifications', '');

            newBuffet.remove();

            io.sockets.emit('buffet::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};