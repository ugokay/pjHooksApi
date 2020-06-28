'user strict';

var mysql = require('mysql')

// var db_config = mysql.createConnection({
//   host: '160.153.131.150',
//   port: '3306',
//   user: 'uurgky',
//   password: 'kQ49rct',
//   database: 'pjhooks'
// })


// var connection;

// function handleDisconnect() {
//   connection = mysql.createConnection({
//     host: '160.153.131.150',
//     port: '3306',
//     user: 'uurgky',
//     password: 'kQ49rct',
//     database: 'pjhooks'
//   })
  
//   //mysql.createConnection(db_config); // Recreate the connection, since
//                                                   // the old one cannot be reused.

//   connection.connect(function(err) {              // The server is either down
//     if(err) {                                     // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     }                                     // to avoid a hot loop, and to allow our node script to
//   });                                     // process asynchronous requests in the meantime.
//                                           // If you're also serving http, display a 503 error.
//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR') { // Connection to the MySQL server is usually
      
//       handleDisconnect();                         // lost due to either server restart, or a
//     } else {                                      // connnection idle timeout (the wait_timeout
//       throw err;                                  // server variable configures this)
//     }
//   });
// }

// handleDisconnect();

const pool = mysql.createPool({
  host: '160.153.131.150',
  port: '3306',
  user: 'uurgky',
  password: 'kQ49rct',
  database: 'pjhooks'
});

// ... later
pool.query('select 1 + 1', (err, rows) => { /* */ });



// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'pj_hooks'
// })

// connection.connect(function(err) {
//     if (err) throw err;
// });

module.exports = pool;