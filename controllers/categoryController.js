'use strict';

var Category = require('../models/categoryModel.js');

exports.list_all_categories = function(req, res) {
    Category.getAllCategories(function(err, task) {

    console.log('controller')
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


// exports.update_a_category = function(req, res) {
//   Category.updateById(req.params.taskId, new Task(req.body), function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };

// exports.read_a_task = function(req, res) {
//   Task.getTaskById(req.params.taskId, function(err, task) {
//     if (err)
//       res.send(err);
//     res.json(task);
//   });
// };




