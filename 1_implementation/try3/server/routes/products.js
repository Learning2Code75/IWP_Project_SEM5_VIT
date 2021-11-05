import express from 'express';
import {getProducts,createProduct} from '../controllers/products.js';

router.get('/',getProducts);
router.post('/',createProduct);

export default router;