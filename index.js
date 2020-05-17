const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000


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

// mongoose.connect('mongodb+srv://cluster0-4deyo.mongodb.net/test',
//     {useNewUrlParser: true}, () => {
//     console.log('connected To DB')
// })



// ROUTES
app.get('/', (req, res) => res.send('Hello Waa121nad!'))


// Import routes
const category = require('./routes/category') 

app.use('/main-categories', category)

// app.get('/main-categories', (req, res) => {

//     res.send('sadaaasad');
// })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))