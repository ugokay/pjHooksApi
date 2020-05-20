'use strict';
module.exports = function(app) {
  var cats = require('../controllers/categoryController');
  var cf = require('../controllers/categoryFeaturesController');
  var pr = require('../controllers/productController');
  var us = require('../controllers/usersController');

  // Categories Routes
  app.route('/categories')
    .get(cats.list_all_categories)
    .post(cats.create_a_category);
   
   app.route('/categories/:taskId')
    // TODO // .get(cats.read_a_task) // getProductsByCategoryId
    .get(cats.list_sub_categories_by_id)
    // .put(cats.update_a_category)
    .put(cats.delete_a_category);
   


    // Categories Features Routes
    app.route('/categoriesFeatures')
      .get(cf.list_all_category_features)
      .post(cf.create_a_category_feature); 
    



    //Product
    app.route('/products')
      // getProductsByCategoryAndALLPRODUCTS
      .get(pr.list_all_products)
      .post(pr.create_a_product);
      // putUpdateProduct

    //ProductById
    app.route('/products/:productId')
      .get(pr.list_products_by_category_id);

    //getUserDetail
    //createUser
    //listUsers
    //putUser
    app.route('/user')
      .post(us.create_a_user);


    app.route('/users')
      .get(us.get_all_users);





    };
    // c'est fini