'use strict';
var sql = require('../db.js');

var Auth = function(auth){
    this.id = auth.id;
    this.un = auth.un;
    this.pw = auth.pw;
}


Auth.login = function(un, pw, result){
    // console.log(pw);
    sql.query("SELECT id FROM user Where email = ? AND password = ? AND status = 1", [un,pw], function(err,res) {
            if(err) {
            // console.log("error: ", err);
                result(null, err);
            }
            else{
                result(null, res);
            }
    });
}

module.exports = Auth;