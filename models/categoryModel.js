'use strict';
var sql = require('../db.js');

//Task object constructor
var Category = function(cat){
    this.title = cat.title;
    this.descr = cat.descr;
    this.image = cat.image;
    this.title_ru = cat.title_ru;
    this.descr_ru = cat.descr_ru;
    this.mainCategoryId = cat.mainCategoryId;
    this.categoryOrder = cat.categoryOrder;
    this.status = true;
};

Category.createCategory = function (cat, result) {    
        sql.query("INSERT INTO category set ?", cat, function (err, res) {
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

Category.getAllCategories = function (result) {
    sql.query("Select * from category WHERE status = 1 AND mainCategoryId= 0 ", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
            //   console.log('tasks : ', res);  
             result(null, res);
            }
        });   
};

Category.getAllSubCategories = function (result) {
    sql.query(` select cat.title_ru, subCat.title ,subCat.id FROM category as cat
    join category as subCat
    on subCat.mainCategoryId = cat.id`, function (err, res) {
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

Category.getSubCategories = function (id, result){
    sql.query("SELECT * from category WHERE mainCategoryId = ?", [id], function (err,res){

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
         result(null, res);
        }

    })
}

Category.remove = function(id, result){
     sql.query("UPDATE category set status = 0 WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

Category.updateById = function(id, task, result){
    sql.query("UPDATE category SET category = ? WHERE id = ?", [task, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                    result(null, err);
                }
                else{   
                result(null, res);
                    }
                }); 

// //   sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
// //           if(err) {
// //               console.log("error: ", err);
// //                 result(null, err);
// //              }
// //            else{   
// //              result(null, res);
// //                 }
// //             }); 
};


// TODO : GET Nested Categories will be held
// Category.getTaskById = function (taskId, result) {
//         sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {             
//                 if(err) {
//                     console.log("error: ", err);
//                     result(err, null);
//                 }
//                 else{
//                     result(null, res);
              
//                 }
//             });   
// };



module.exports= Category;


// collections
// INSERT
// {
// 	"title" : "second main Category",
// 	"descr" : "second main category description",
// 	"image" : "_IMAGE_BASE64_",
// 	"title_ru" : "second main Category Title RU",
// 	"descr_ru" : "second main Category Decription RU",
// 	"mainCategoryId" : 0
// }