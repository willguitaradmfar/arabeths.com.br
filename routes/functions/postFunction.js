module.exports = function(app, db) {
    return {
        getPosts: function (callback) {
            db.Post.find(function (err, posts) {
                if (posts.length > 0) {
                    callback(posts);
                } else {
                    callback(null);
                }
            });
        },
       
        getPostById: function (id, callback) {
            db.Post.findOne({_id: id}, function (err, post) {
                if (post) {
                    callback(post);
                } else {
                    callback(post);
                }
            });
        }

    };
};