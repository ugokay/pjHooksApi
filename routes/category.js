const express = require('express')
const router = express.Router();
const Categories = require('../models/category')


router.get('/', (req, res) => {

    res.send('MainCats');
    console.log('MainC');
})
// Genel route convnsiyonuna uygun olarak kurgula
router.post('/', (req,res,next) => {
    // console.log(req.body)
    const category = new Categories({
        title: req.body.title,
        description: req.body.description
    });

    category.save()
    .then( data => {
        // res.json(data)
        console.log('res', data)
    })
    .catch(err => {
        res.json( {message: err} )
    })
});

module.exports = router;