module.exports = function (app) {

    var User = app.models.user;

    var UserController = {

        index: function (req, res) {
            User.find(function(erro, user){
               res.send(user);
            });
        },

        create: function (req, res) {
            User.create(req.body, function(erro, user) {
                if(erro){
                    res.redirect('/');
                }else{
                    res.send(user);
                }
            });
        },

        show: function (req, res) {
            var _id = req.params.id;
            User.findById(_id, function (erro, user) {
                res.send(user);
            });
        },

        edit: function (req, res) {
            var _id = req.params.id;
            User.findById(_id, function (erro, user) {
                res.send(user);
            });
        },

        update: function (req, res) {
            var _id = req.params.id;
            User.findById(_id, function (erro, user) {
                user.name = req.body.name;
                user.age = req.body.age;
                user.email = req.body.email;
                user.username = req.body.username;
                user.password = req.body.password;
                user.type = req.body.type;
                user.save(function () {
                    res.send('OK');
                });
            });
        },

        destroy: function (req, res) {
            var _id = req.params.id;
            User.findById(_id, function (erro, user) {
                user.remove();
                res.send("OK");
            });
        }
    }
    return UserController;
};