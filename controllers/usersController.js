'use strict';

var User = require('../models/userModel.js');

exports.create_a_user = function(req, res){
    var new_user  = new User(req.body);

    console.log(new_user);
    //handles null error
     if(!new_user.eMail ){
              res.status(400).send({ error:true, message: 'Please provide task/status' });
          }
  else{
    User.createUser(new_user, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  }
}

exports.get_all_users = function(req, res){

    User.getAllUSers(function(err, usr){
        if(err)
            res.send(err);
            console.log('res', usr);
        res.send(usr);

    });
}


exports.get_user_by_id = function(req, res){
  User.GetUserById(req.params.id, function(err,task){

    // console.log(task);
          if(err)
          res.send(err);
          // console.log('res', task);
      res.send(task);
  });
}

exports.update_last_online_of_user = function(req,res){
  User.UpdateLastOnlineByUserId(req.params.id, new User(req.body), function(err,user){
    if(err)
      res.send(err)
    res.json(user)
  })
}




// res.send(uuid.v4());




