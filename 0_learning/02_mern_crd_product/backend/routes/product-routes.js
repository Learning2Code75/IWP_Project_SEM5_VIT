// named imports
const express = require('express');
const router = express.Router();
// own imports
const productController = require('../controllers/products-controller')


router.get('/',productController.getProducts);
router.get('/:id',productController.getProductById);
router.post('/',productController.addProduct);
router.patch('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct);


module.exports = router;