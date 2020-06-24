'use strict';
var sql = require('../db.js');
var uuid =require('uuid');

var Order = function(ord){
    this.orderDetail = ord.orderDetail;
    this.orderType = ord.orderType;
    this.userId = ord.userId;
};


Order.addOrder = function(req, result){
    req.id = uuid.v4();

    // console.log(req.orderDetail);

    sql.query("INSERT INTO customerOrder set ? " ,req, function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            // console.log(res.Order.id);
            result(null, req.id);
        }
    })
}

Order.listOrderOfUser = function(id,result){
    sql.query("SELECT * FROM customerOrder Where userId = ? ORDER by orderType, createTime DESC", id, function(err,res){
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
        }
    });
}

Order.getPendingOrders = function(result){

    sql.query(
        `SELECT co.*,u.name FROM customerOrder as co 
JOIN user as u
on u.id = co.userId
WHERE co.orderType = 1 
ORDER BY co.createTime DESC`
        // "SELECT * from customerOrder Where orderType= 'PENDING' ORDER by createTime DESC"
    , function (err,res){

       


        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
        }

    });
}


Order.updateOrder = function(id, order, result){
    sql.query("UPDATE customerOrder SET orderType = 2 , orderDetail = ? WHERE id = ?", [order.orderDetail, id], function(err,res){
        if(err) {
            console.log("error: ", err);
                result(null, err);
            }
            else{   
            result(null, res);
                }
        }); 
}


// UPDATE `customerOrder` 
// SET 
//   orderDetail ='A',
//   orderType =2 
// WHERE 
//   id = '1212'



// Order.updateOrder

// For Admin
// approved yada değil durumuna göre
// Order.listAllOrdersByType


module.exports = Order; 