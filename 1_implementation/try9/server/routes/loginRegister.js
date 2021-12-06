const express = require('express')


const router = express.Router();


//own imports  

const {loginUser,createUser} = require('../controllers/loginRegister.js')

router.post('/',loginUser);
router.post('/',createUser);

module.exports = router;