'use strict';

var CategoryFeature = require('../models/categoryFeaturesModel.js');


exports.list_all_category_features = function(req, res) {
    CategoryFeature.getAllCategoryFeatures(function(err, task) {

    if (err)
      res.send(err);
    res.send(task);
  });
};



exports.create_a_category_feature = function(req, res) {

    var new_cf = new CategoryFeature(req.body);
  
    //handles null error 
     if(!new_cf.item || !new_cf.status){
              res.status(400).send({ error:true, message: 'Please provide task/status' });
          }
  else{
    CategoryFeature.createCategoryFeature(new_cf, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  }
  };
  