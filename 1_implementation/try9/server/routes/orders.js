const express = require('express')


const router = express.Router();


//own imports  

const {getOrders,createOrder,updateOrder} = require('../controllers/orders.js')

router.get('/',getOrders);
router.post('/',createOrder);
router.patch('/:id',updateOrder);

module.exports = router;  