'use strict';
var express = require('express');
var router = express.Router();
var app = express();
const fetch = require("node-fetch");
const http = require('http');
const axios = require('axios');


var Order = require('../models/orderModel.js')
var Product = require('../models/productsModel.js')

var pr = require('../controllers/productController');


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
            // // let swappedQuotaOrders = swappendingOrdersRealQuota(usr)
        // console.log(swappedQuotaOrders)
        let all= '';
        usr.map(updatedNode=> {
            let pends = JSON.parse(updatedNode.orderDetail)
    
        pends.map(orderProduct=> {
            axios.get('http://localhost:3001/productDetail/'+orderProduct.id)
              .then(function (response) {
    
                let dbProd = response.data[0]
                let pTypes = JSON.parse(dbProd.productTypes)

                orderProduct.productTypes.map(opt => {
                    pTypes.map(node => {
                        if(node.id == opt.id){
                            console.log('///')
                            // console.log(opt)
                            console.log('///')
                            // delete opt['quantity']
                            // delete node['quantity']
                            // console.log(node.quota)
                            opt.dbStockQuota = node.quota
                            
                        }
                        console.log(opt)
                    }) 
                    // orderProduct.productTypesNew = opt
                })
                
                console.log(orderProduct.productTypes)

              })
              .catch(function (error) {
                console.log(error);
              })
              .then(function () {
                // always executed
              }); 
              updatedNode.newPends= pends
        })
        console.log(updatedNode)

        // res.send(updatedNode);
        
        // console.log('\n\n\n\n\n\n')
        // console.log(updatedNode)
        // console.log('\n\n\n\n\n\n')

        // all = usr
    })
        res.send(usr);
    });
}

const swappendingOrdersRealQuota = (pendingOrders) => {

    pendingOrders.map(updatedNode=> {
        let pends = JSON.parse(updatedNode.orderDetail)

    pends.map(orderProduct=> {
        axios.get('http://localhost:3001/productDetail/'+orderProduct.id)
          .then(function (response) {

            let dbProd = response.data[0]
            let pTypes = JSON.parse(dbProd.productTypes)

            console.log(pTypes)
             
            orderProduct.productTypes.map(opt => {
                pTypes.map(node => {
                    if(node.id == opt.id){
                        delete opt['quantity']
                        delete node['quantity']
                        opt.quota = node.quota
                    }

                }) 
            })
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          }); 
        
    })
})


return pendingOrders;

}


exports.listOrdersByUserId = function(req,res){
    Order.listOrderOfUser(req.params.id, function(err,ords){
        if (err)
        res.send(err);
          res.send(ords);
    });


}

exports.updateOrder = function(req,res){

    // maintainProducts(pid);
    const obj = JSON.parse(req.body.orderDetail)
    console.log(obj)
    // res.json(req.body)

    obj.map(p =>{
        // updateProductsQuota(p)
        http.get('http://localhost:3001/productDetail/'+p.id, (datt) => {

            datt.on('data', (d) => {
                let pd = JSON.parse(d)
                let pdT = JSON.parse(pd[0].productTypes)


                let totalQuota = 0
                p.productTypes.map(updatedNode=> {
                    pdT.map(dbProd => {
                        if(updatedNode.id == dbProd.id){
                        // console.log('----')
                        // console.log(dbProd.quota)
                        // TODO burasını hep dbden çekmemiz gerekiyor
                        delete dbProd['quantity']
                        dbProd.quota = parseInt(dbProd.quota) - parseInt(updatedNode.value)
                        totalQuota += dbProd.quota;
                        // console.log(dbProd.quota)
                        // console.log('----')
                    }
                })
            })


            const data = {
                productTypes: JSON.stringify(pdT),
                quantity : totalQuota
            };
            
            axios.put('http://localhost:3001/products/'+ p.id, data)
                .then((res) => {
                    console.log(`Status: ${res.status}`);
                    console.log('Body: ', res.data);
                }).catch((err) => {
                    console.error(err);
                });
        
         
            
            // res.json('reS')

            // console.log('\n\n\n\n')
            // console.log(JSON.stringify(pdT))
            // console.log('\n\n\n\n')


            });
            }).on('error', (e) => {
                console.error('ERROR',e);
            });

        
    })


    Order.updateOrder(req.params.id, new Order(req.body), function(err,task){
        if (err)
            res.send(err);
        res.json(task);
    });
};


const updateProductsQuota = (product) => {

    // console.log(product.id)

    http.get('http://localhost:3001/productDetail/'+product.id, (res) => {
            //   console.log('statusCode:', res.statusCode);
            //   console.log('headers:', res.headers);

    
            res.on('data', (d) => {
                // console.log('(/////')
                let pd = JSON.parse(d)




                console.log('**********')
                console.log('**********')
                console.log('**********')
                console.log(pd[0].productTypes)
                console.log('**********')
    console.log('**********')
    console.log('**********')



    pd[0] = product.productTypes;


                console.log(pd[0].productTypes)
                console.log('**********')
                console.log('**********')
                console.log('**********')
                // console.log(pd[0].productTypes)
                // let parsed = pd.productTypes
                // console.log(parsed)
                // direk mergele


                
              });


            }).on('error', (e) => {
                console.error('ERROR',e);
            });
                // console.log(typeof )
                // let pTypes = 

                // console.log(JSON.stringify(product))
                // console.log('//////')
                // console.log('//////')
                // console.log('//////')
                // console.log('//////')
                // console.log('//////')
                // console.log(JSON.stringify(pd))
                // console.log('A')

                // product.productTypes.map(p=> {
                //     pd[0].map(newQuotad =>{
                //         console.log(newQuotad.productType)
                //         console.log('//////')
                //         console.log('//////')
                //         console.log('//////')
                //         console.log('//////')
                //         // console.log(newQuotad)
                //         console.log('//////')
                //         console.log('//////')
                //         console.log('//////')
                //         console.log('//////')
                //         console.log('//////')

                //         // console.log(newQuotad.id, p.id)
                //         // if(newQuotad.id == p.id)
                //         //     console.log(p.productType, newQuotad.productType)

                //     })
                // })
                // console.log('fin')

                // pd.map(updated => {
                //     product.forEach((prod) => {
                //         if(updated.id == prod.id)
                //             console.log(prod.productType, updated.productType)

                //     })

                // })

                    // console.log(JSON.stringify(pd))
                    // console.log('////////')
                    // console.log('////////')
                    // console.log('////////')
                    // console.log('////////')
                    // console.log('////////')
                    // console.log('////////')
                    // console.log(JSON.stringify(product))

                    
                //     pd.map(rP => {
                //     if(product.id == rP.id)
                //         console.log('VAR')
                //         // console.log(product, rP)
                //     else 
                //         console.log('YOK')
                // })
                
                // console.log(JSON.parse(d))


                // console.log('(/////')
                // process.stdout.write(d);



}




const maintainProducts = (products) => {
    products.map(p =>{
        updateProductsQuota(p)
    })
}

      