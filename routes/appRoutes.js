'use strict';
module.exports = function(app) {
  var cats = require('../controllers/categoryController');
  // var cf = require('../controllers/categoryFeaturesController');
  var pr = require('../controllers/productController');
  var us = require('../controllers/usersController');
  var or = require('../controllers/orderController');
  var auth = require('../controllers/authController');

  // Main Categories Routes


  app.route('/categories')
    .get(cats.list_main_categories)
    .post(cats.create_a_category);

    app.route('/subCategories')
      .get(cats.list_sub_categories);
   
   app.route('/categories/:taskId')
    // TODO // .get(cats.read_a_task) // getProductsByCategoryId
    .get(cats.list_sub_categories_by_id)
    .put(cats.update_a_category)
    // .put(cats.delete_a_category);
   


    // Categories Features Routes
    // app.route('/categoriesFeatures')
    //   .get(cf.list_all_category_features)
    //   .post(cf.create_a_category_feature); 
    



    //Product
    app.route('/products')
      // getProductsByCategoryAndALLPRODUCTS
      .get(pr.list_all_products)
      .post(pr.create_a_product);
      // putUpdateProduct

    //getProductsBySubCategory
    app.route('/products/:productId')
      .get(pr.list_products_by_category_id)
      .put(pr.update_product_info);


    app.route('/productDetail/:productId')
      .get(pr.get_product_detail_by_id);
    //getUserDetail
    //createUser
    //listUsers
    //putUser
    app.route('/user')
      .post(us.create_a_user);

    app.route('/user/:id')
      .get(us.get_user_by_id);
      

    app.route('/users')
      .get(us.get_all_users);

    //updateLastOnlineOfUSer
    app.route('/lastOnline/:id')
      .put(us.update_last_online_of_user)



    app.route('/order')
      .post(or.addNewOrder)
      .get(or.getPendingOrders)


    app.route('/orders/:id')
      .get(or.listOrdersByUserId)
      .put(or.updateOrder)



    // AUTH
    app.route('/auth/:un/:pw')
      .get(auth.login);







    };
    // c'est fini