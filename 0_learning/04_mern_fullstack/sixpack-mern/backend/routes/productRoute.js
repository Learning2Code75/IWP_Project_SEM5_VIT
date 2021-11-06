const express = require('express');
const {getAllProducts,createProduct,updateProduct,deleteProduct} = require('../controllers/productController');
const router = express.Router();

router.route('/products').get(getAllProducts);
router.route('/products/new').post(createProduct);
router.route('/product/:id').put(updateProduct);
router.route('/product/:id').delete(deleteProduct);

module.exports = router;