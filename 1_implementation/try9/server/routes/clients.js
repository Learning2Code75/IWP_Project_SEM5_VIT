const express = require('express')


const router = express.Router();


//own imports  

const {getClients,createClient} = require('../controllers/clients.js')

router.get('/',getClients);
router.post('/',createClient);

module.exports = router;