'use strict';

var News = require('../models/newsModel.js');



exports.list_news = function(req, res) {
    News.getNews(function(err, task) {

    if (err)
      res.send(err);
    res.send(task);
  });
};


exports.add_news = function(req,res){

    var add_news = new News(req.body);

    News.addNews(add_news, function(err, task) {
        if (err)
          res.send(err);
        res.json(task);
      });
}