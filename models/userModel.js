'use strict';
var sql = require('../db.js');
var uuid =require('uuid');


//userObject.create
var User = function (usr){
    this.name = usr.name;
    this.surname = usr.surname;
    this.countryCode = usr.countryCode;
    this.eMail = usr.eMail;
    this.password = usr.password;
    this.phoneNumber = usr.phoneNumber;
    this.status = usr.status;
};

User.createUser = function(usr, result){
    // this.id = uuid.v4();
    usr.id = uuid.v4();
    sql.query("INSERT INTO  user set ? ", usr, function(err, res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            // console.log(res.insertId);
            result(null, usr.id);
        }
    });
};

User.getAllUSers = function(result){

    sql.query("Select * from user", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
        }
    });  
}




User.GetUserById = function(id,result){

    sql.query("SELECT * FROM user where id = ?", id, function(err,res){

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
            // console.log(res);
        }
    })
};


module.exports = User;