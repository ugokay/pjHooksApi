'use strict';

var Order = require('../models/orderModel.js')

exports.addNewOrder = function(req,res){

    var new_ord = new Order(req.body);

    Order.addOrder(new_ord, function(err, ord) {
      if (err)
        res.send(err);
      res.json(ord);
    });

}

exports.getPendingOrders = function(req,res){
    
    Order.getPendingOrders(function(err, usr){
        if(err)
            res.send(err);
            console.log('res', usr);
        res.send(usr);
    });
}

exports.listOrdersByUserId = function(req,res){
    Order.listOrderOfUser(req.params.id, function(err,ords){
        if (err)
        res.send(err);
          res.send(ords);
    });


}