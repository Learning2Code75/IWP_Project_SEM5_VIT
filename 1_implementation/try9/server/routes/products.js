const express = require('express')


const router = express.Router();


//own imports  

const {getProducts,createProduct,updateProduct} = require('../controllers/products.js')

router.get('/',getProducts);
router.post('/',createProduct);
router.patch('/',updateProduct);

module.exports = router;  