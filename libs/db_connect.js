var mongoose = require('mongoose')
    , single_connection
    , env_url = {
        "development": "mongodb://localhost/pedido"
    }
    ;

module.exports = function() {
    var url = env_url["development"];

    if(!single_connection) {
        single_connection = mongoose.connect(url);
    }

    return single_connection;
};