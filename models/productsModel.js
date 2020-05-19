'use strict';
var sql = require('../db.js');

var Product = function(pr){
    this.productName = pr.productName;
    this.productName_ru = pr.productName_ru;
    this.relatedCategoryId = pr.relatedCategoryId;
    this.picture = pr.picture;
    this.productFeatures = pr.productFeatures;
    this.quantity = pr.quantity;
    this.price = pr.price;
    this.status = pr.status;
};

    Product.createProduct = function (pr, result){

        sql.query("INSERT INTO product set ?", pr, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });      
    }

    Product.getAllProducts = function (result) {
        sql.query("Select * from product WHERE status = 1", function (err, res) {
    
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  
    
                 result(null, res);
                }
            });   
    };
    
    Product.getProductsByCatId = function(req,result){

        // result(req);
        sql.query("SELECT * FROM product WHERE relatedCategoryId = ?", [req], function (err, res) {
          
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
             result(null, res);
            }
        }); 

    }
    

module.exports = Product;