module.exports = function(app, config, passport) {
    app.get(config.public.url.site, function(req, res) {
        console.log(req.user);

        res.render('site/index', {
            title: 'Demo site',
            env: config.env,
            session: req.user
        });
    });  

     app.get(config.public.url.sitePartials+'/:page', function(req, res) {
        console.log(req.user);

        res.render('site/partials/'+req.params.page, {
            title: 'Demo site',
            env: config.env,
            session: req.user
        });
    });   


    
};