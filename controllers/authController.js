'use strict';

var auth = require('../models/authModel.js');

exports.login = function(req,res){
    auth.login(req.params.un, req.params.pw,function(err,id){
        if (err)
            res.send(err);
        if(id.length == 0){
            res.sendStatus(401)
            // res.send(err)
        }else{
            res.json(id);
        }
    });
};