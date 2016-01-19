module.exports = function(app) {

    var db = require('../libs/db_connect')();
    var Schema = require('mongoose').Schema;

    var pedido = Schema({
        cliente: String,
        produto: String,
        vendedor: String
    });

    return db.model('pedido', pedido);
};