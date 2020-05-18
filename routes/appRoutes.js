'use strict';
module.exports = function(app) {
  var cats = require('../controllers/categoryController');

  // Categories Routes
  app.route('/categories')
    .get(cats.list_all_categories)
    .post(cats.create_a_category);
   
   app.route('/categories/:taskId')
    // .get(cats.read_a_task)
    // .put(cats.update_a_category)
    .put(cats.delete_a_category);
    };