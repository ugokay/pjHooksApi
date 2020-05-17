const express = require('express')
const router = express.Router();
// const Category = require('../models/category')


router.get('/', (req, res) => {

    res.send('MainCats');
    // console.log('asdad');
})
// Genel route convnsiyonuna uygun olarak kurgula
router.post('/', (req,res) => {
    console.log(req.body)
})

module.exports = router;