'use strict';

var User = require('../models/userModel.js');

exports.create_a_user = function(req, res){
    var new_user  = new User(req.body);

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


// res.send(uuid.v4());




