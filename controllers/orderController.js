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

exports.updateOrder = function(req,res){

    const pid = '[{"productTypes":[{"id":1,"productType":"S-M-LA","productTotalPrice":"35","quota":5,"productSubPiece":3,"value":"5","quantity":[{"value":"1"},{"value":"2"},{"value":"3"},{"value":"4"},{"value":"5"}]},{"id":2,"productType":"S-M","productTotalPrice":"75","quota":3,"productSubPiece":2,"value":"5","quantity":[{"value":"1"},{"value":"2"},{"value":"3"}]}],"id":"ef30bfc8-b547-11ea-b3de-0242ac130004","productName":"Wedding Suit 2","productName_ru":"Wedding Suit 2 Ru","picture":"https://firebasestorage.googleapis.com/v0/b/justeweb-38952.appspot.com/o/suits%2Fwedding%2Fwedding6.jpeg?alt=media&token=605c4728-b549-477a-94bc-c82c46759cf6"},{"productTypes":[{"id":1,"productType":"S-M-LA","productTotalPrice":"35","quota":5,"productSubPiece":3,"value":"5","quantity":[{"value":"1"},{"value":"2"},{"value":"3"},{"value":"4"},{"value":"5"}]},{"id":2,"productType":"S-M","productTotalPrice":"75","quota":3,"productSubPiece":2,"value":"","quantity":[{"value":"1"},{"value":"2"},{"value":"3"}]}],"id":"ef30c0ae-b547-11ea-b3de-0242ac130004","productName":"Wedding Suit 1","productName_ru":"Wedding Suit 1 Ru","picture":"https://firebasestorage.googleapis.com/v0/b/justeweb-38952.appspot.com/o/suits%2Fwedding%2Fwedding1.jpeg?alt=media&token=c05e27a5-532f-467a-ac3d-608f9b1f783e"}]';
    maintainProducts(pid);


    console.log(req.body)

    res.json(req.body)


    // Order.updateOrder(req.params.id, new Order(req.body), function(err,task){
    //     if (err)
    //         res.send(err);
    //     res.json(task);
    // });
};

const maintainProducts = (products) => {
    const realProduct = JSON.parse('[{"productTypes":[{"id":1,"productType":"S-M-LA","productTotalPrice":"35","quota":5,"productSubPiece":3,"value":"1","quantity":[{"value":"1"},{"value":"2"},{"value":"3"},{"value":"4"},{"value":"5"}]},{"id":2,"productType":"S-M","productTotalPrice":"75","quota":3,"productSubPiece":2,"value":"3","quantity":[{"value":"1"},{"value":"2"},{"value":"3"}]}],"id":"ef30bfc8-b547-11ea-b3de-0242ac130004","productName":"Wedding Suit 2","productName_ru":"Wedding Suit 2 Ru","picture":"https://firebasestorage.googleapis.com/v0/b/justeweb-38952.appspot.com/o/suits%2Fwedding%2Fwedding6.jpeg?alt=media&token=605c4728-b549-477a-94bc-c82c46759cf6"},{"productTypes":[{"id":1,"productType":"S-M-LA","productTotalPrice":"35","quota":5,"productSubPiece":3,"value":"4","quantity":[{"value":"1"},{"value":"2"},{"value":"3"},{"value":"4"},{"value":"5"}]},{"id":2,"productType":"S-M","productTotalPrice":"75","quota":3,"productSubPiece":2,"value":"","quantity":[{"value":"1"},{"value":"2"},{"value":"3"}]}],"id":"ef30c0ae-b547-11ea-b3de-0242ac130004","productName":"Wedding Suit 1","productName_ru":"Wedding Suit 1 Ru","picture":"https://firebasestorage.googleapis.com/v0/b/justeweb-38952.appspot.com/o/suits%2Fwedding%2Fwedding1.jpeg?alt=media&token=c05e27a5-532f-467a-ac3d-608f9b1f783e"}]')


    products = JSON.parse(products)
    // console.log('1///////')
    // console.log(JSON.stringify(prs));
    // console.log('///////1')

    realProduct.map(p => {
        products.forEach((item) => {

            //TODO decrement increment quota
            // and uodate other field too sumup
            // console.log('////')
            // console.log(JSON.stringify(item))
            // console.log('////')
            // console.log('PID',p.id)
            if(p.id == item.id){

                console.log(p,item)



                if(p.productTypes.id == item.productTypes.id)
                    console.log(item.productTypes.value)
                        


                console.log(typeof p.productTypes.id)
                console.log('////')
                console.log(typeof item.productTypes.id)

                // console.log(p)
                // console.log(item)
                // p.productTypes.map(pT => {
                //     item.forEach(prdT => {
                //         console.log('PT',prdT)
                //     })

                //         // console.log(pT.id)
                //         // console.log(prdT.id)
                // // if(pT.id == prdT.id)
                // //     pT.value = item.value
                //     }) 
                // })

                
            }
        })

    }) 
    // console.log('2///////')
    // console.log(JSON.stringify(prs));
    // console.log('///////2')

        //TODO
        //getProducts decrease / increase produtc QUOTA
        // decrease increase ProductDetailItem Quota
        // decrease increase Product Item QUANTIY !!!!



    // console.log('ASsad',prs)
}
