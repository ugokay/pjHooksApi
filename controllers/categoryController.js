'use strict';

var Category = require('../models/categoryModel.js');

exports.list_main_categories = function(req, res) {
    Category.getAllCategories(function(err, task) {

    if (err)
      res.send(err);
    res.send(task);
  });
};

exports.list_sub_categories = function(req, res) {
  Category.getAllSubCategories(function(err, task) {

  if (err)
    res.send(err);
  res.send(task);
});
};

exports.list_sub_categories_by_id = function(req, res){
  Category.getSubCategories(req.params.taskId, function( err, task) {

    if (err)
      res.send(err);
      console.log('res', task);
    res.send(task);
    
  });
};

exports.create_a_category = function(req, res) {

  var new_cat = new Category(req.body);

  //handles null error 
   if(!new_cat.title || !new_cat.status){
            res.status(400).send({ error:true, message: 'Please provide task/status' });
        }
else{
  Category.createCategory(new_cat, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}
};

exports.delete_a_category = function(req, res) {
  Category.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Category successfully deleted' });
  });
};


exports.update_a_category = function(req, res) {
  // console.log(req);
  Category.updateById(req.params.taskId, new Category(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

// exports.read_a_task = function(req, res) {
//   Task.getTaskById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };





