'use strict';

var Product = require('../models/productsModel.js');


exports.list_all_products = function(req,res){
    Product.getAllProducts(function(err, task) {

        console.log('controller')
        if (err)
          res.send(err);
          console.log('res', task);
        res.send(task);
      });


        
};


exports.create_a_product = function(req, res){

    var new_product = new Product(req.body);


    console.log(new_product)
   if(!new_product.productName || !new_product.status){
        res.status(400).send({ error:true, message: 'Please provide task/status' });
    }
    else{
        Product.createProduct(new_product, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
        });
    }
}


exports.list_products_by_category_id = function(req,res){
    Product.getProductsByCatId( req.params.productId, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
}
      

exports.get_product_detail_by_id = function (req,res){
  Product.getProductDetailById(req.params.productId, function(err, product){
      if(err)
       res.send(err)
       res.json(product)

  })
}
