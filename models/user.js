module.exports = function(app) {

    var db = require('../libs/db_connect')();
    var Schema = require('mongoose').Schema;

    var user = Schema({
        name: String,
        age: String,
        email: String,
        username: String,
        password: String,
        type: int
    });

    return db.model('user', user);
};


