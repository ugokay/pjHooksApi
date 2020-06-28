const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3001;

  var mysql = require('mysql')





// TODO 
// 1.Authentication dotnetEnv
// 2.category.UPDATE
// 3.getNestedCategories => tüm kategoriler için
// 4. getCategoryFeatures ürün eklerken vs görüntülenmesi için gerkeecek 
// 5. categoryFeatures => update, delete

  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pj_hooks'
  })

connection.connect(function(err) {
    if (err) throw err;
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});
app.use(express.static('public'));
app.post('/upload', upload.single('file'), (req, res) => {
  // console.log(req.body)
  // console.log('///')
  // console.log(req.file)
  // console.log('///')
    if(req.file) {
        res.json(req.file);
    }
    else throw res.body;
});


var routes = require('./routes/appRoutes'); //importing route
routes(app); //register the route







// const str = "{['KEY':'val'  ]}"

// app.get('/a', (req,res) => {

//     res.send(str);
// })






// // Middlewares
// // app.use('/main-categories', () => {
// //     console.log('auth falan buraya gelebilir')
// // })

// // const category = require('./routes/category') 
// // app.use('/main-categories', category)



// app.get('/', (req, res) => {
    
//     // res.send('Hello Waa1211nad!')

//     mc.query("Select * from category", function (err, resu) {

//         if(err) {
//             console.log("error: ", err);
//             // res.json({null : err});
//         }
//         else{
//           // console.log({'tasks : ': resu});  
//         //   res.setHeader('Content-Type', 'application/json');
//           res.send(resu);


//         //  res.json({null :res});
//         }
//     });   


// });


// // connection.end()

// //TODO
// // auto mail system 
// // healthcheckmonitor mails 

// //Middlewares
// // app.use('/main-categories', () => {
// //     console.log('auth falan buraya gelebilir')
// // })
// // or 
// // app.use(auth)


// // connect to db





// // mongoose.connect('mongodb+srv://gokay:<Zy886565>@cluster0-4deyo.mongodb.net/test?retryWrites=true&w=majority', 
// //     {useNewUrlParser: true}, function(err) {
// //         if(err) {
// //             console.log('Some problem with the connection ' +err);
// //         } else {
// //             console.log('The Mongoose connection is ready');
// //         }
// //     })



// // // ROUTES
// // app.get('/', (req, res) => res.send('Hello Waa121nad!'))


// // // Import routes
// // const category = require('./routes/category') 
// // app.use('/main-categories', category)

// // // app.get('/main-categories', (req, res) => {

// // //     res.send('sadaaasad');
// // // })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

connection.end();
