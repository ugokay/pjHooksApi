'use strict';
var sql = require('../db.js');

var News = function(item){
    this.header = item.header;
    this.description = item.description;
    this.coverImage = item.coverImage;
    this.context = item.context;
    this.video = item.video;
    this.status = 1;
}


News.getNews = function(result){
    sql.query("Select * from news WHERE status = 1  ORDER BY createTime DESC ", 
    function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
            //   console.log('tasks : ', res);  
             result(null, res);
            }
        });
}

News.addNews = function(req,result){
    sql.query("INSERT INTO news set ?", req, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            // console.log(res.insertId);
            result(null, res.insertId);
        }
    });      
}

module.exports = News;