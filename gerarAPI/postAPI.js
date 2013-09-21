module.exports = function(app, config, db, query) {

    app.get('/posts/all', function(req, res) {
        query.post.getPosts(function(post) {
            res.send(post);
        });
    });

    app.get('/post/:id', function(req, res) {
        var id = req.params.id; 
        query.post.getPostById(id, function(post) {
            res.send(post);
        });
    });
   
    app.post('/post', function(req, res) {
        console.log('Posts posts');
        console.log(req.body);        

        var newPost = new db.Post();
       

        req.body._id = newPost._id;

        //newPost.title = req.body.title;
        
 		newPost.uid = req.body.uid
 		newPost.title = req.body.title
 		newPost.img = req.body.img
 		newPost.description = req.body.description

        newPost.save();

        io.sockets.emit('post::create', newPost);
        io.sockets.emit('notifications', '');

        res.send(200, {status:"Ok", id: req.body._id});
    });

    app.put('/post/:id', function(req, res) {
        console.log('Posts put');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;        

        query.post.getPostById(id, function (newPost) {

        //newPost.title = req.body.title;
            
 		newPost.uid = req.body.uid
 		newPost.title = req.body.title
 		newPost.img = req.body.img
 		newPost.description = req.body.description            

            newPost.save();

            io.sockets.emit('post::update', newPost);
            io.sockets.emit('notifications', '');

            res.send(200, {status:"Ok"});
        });
    });

    app.delete('/post/:id', function(req, res) {
        console.log('Posts delete');
        console.log(req.body);
        console.log(req.params.id);

        var id = req.params.id;

        query.post.getPostById(id, function (newPost) {
            io.sockets.emit('notifications', '');

            newPost.remove();

            io.sockets.emit('post::remove', id);

            res.send(200, {status:"Ok"});
        });
    });
};