import express from 'express';
import {getOrders,createOrder} from '../controllers/orders.js';

router.get('/',getOrders);
router.post('/',createOrder);

export default router;