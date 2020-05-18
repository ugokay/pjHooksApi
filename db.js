'user strict';

var mysql = require('mysql')

// var connection = mysql.createConnection({
//   host: 'sql7.freemysqlhosting.net',
//   user: 'sql7341420',
//   password: 'fzwQBPJGPZ',
//   database: 'sql7341420'
// })

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pj_hooks'
})

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;