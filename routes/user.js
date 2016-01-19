module.exports = function(app) {

    var user = app.controllers.user;

    app.post('/user', user.create);
    app.get('/user/:id/edit',  user.edit);
    app.put('/user/:id',  user.update);
    app.delete('/user/:id', user.destroy);
};