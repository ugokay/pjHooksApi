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
    this.passwordAttempt = usr.passwordAttempt;
    this.lastOnlineRand = usr.lastOnlineRand;
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
    sql.query("SELECT id,name,surname,countryCode,eMail,phoneNumber,status FROM user where id = ?", id, function(err,res){
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

User.UpdateLastOnlineByUserId = function(id, task, result){
    let t = parseInt(Math.random()*100)
    sql.query("UPDATE user SET lastOnlineRand = ? WHERE id = ?", [t,id], function (err, res) {
        if(err) {
            console.log("error: ", err);
                result(null, err);
            }
            else{   
                console.log(res)
            result(null, res);
                }
            }); 

};


module.exports = User;