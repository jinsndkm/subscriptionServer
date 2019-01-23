'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: '192.168.1.104',
    user: 'root',
    password: 'root',
    database: 'nodejs'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;