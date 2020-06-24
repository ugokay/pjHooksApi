'use strict';
var sql = require('../db.js');

var Auth = function(auth){
    this.id = auth.id;
    this.un = auth.un;
    this.pw = auth.pw;
}


Auth.login = function(un, pw, result){

    sql.query("SELECT id FROM user Where phoneNumber = ? AND password = ? AND status = 1", [un,pw], function(err,res) {


        // console.log(res);
            if(err) {
                result(null, err);
            }
            else{
                result(null, res);
            }
    });
}

module.exports = Auth;