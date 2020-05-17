const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
require('dotenv/config');

//TODO
// auto mail system 
// healthcheckmonitor mails 

//Middlewares
// app.use('/main-categories', () => {
//     console.log('auth falan buraya gelebilir')
// })
// or 
// app.use(auth)


// connect to db

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
    () =>  console.log('connected To DB') 
);



// mongoose.connect('mongodb+srv://gokay:<Zy886565>@cluster0-4deyo.mongodb.net/test?retryWrites=true&w=majority', 
//     {useNewUrlParser: true}, function(err) {
//         if(err) {
//             console.log('Some problem with the connection ' +err);
//         } else {
//             console.log('The Mongoose connection is ready');
//         }
//     })



// ROUTES
app.get('/', (req, res) => res.send('Hello Waa121nad!'))


// Import routes
const category = require('./routes/category') 

app.use('/main-categories', category)

// app.get('/main-categories', (req, res) => {

//     res.send('sadaaasad');
// })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))