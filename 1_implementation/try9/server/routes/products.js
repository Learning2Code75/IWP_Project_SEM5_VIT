const express = require('express')


const router = express.Router();


//own imports  

const {getProducts,createProduct} = require('../controllers/products.js')

router.get('/',getProducts);
router.post('/',createProduct);

module.exports = router;