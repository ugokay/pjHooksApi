'user strict';
var sql = require('../db.js');

//Task object constructor
var CategoryFeatures = function(cf){
    this.item = cf.item;
    this.item_ru = cf.item_ru;
    this.value = cf.value;
    this.value_ru = cf.value_ru;
    this.relatedCategoryId = cf.relatedCategoryId;
    this.status = true;
};


CategoryFeatures.createCategoryFeature = function (cf, result) {    
    sql.query("INSERT INTO categoryFeatures set ?", cf, function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
                result(null, res.insertId);
            }
        });           
};


CategoryFeatures.getAllCategoryFeatures = function (result) {
    sql.query("Select * from categoryFeatures WHERE status = 1", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('tasks : ', res);  

             result(null, res);
            }
        });   
};

module.exports = CategoryFeatures;