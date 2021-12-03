const express = require('express')


const router = express.Router();


//own imports  

const {getUser,createUser} = require('../controllers/loginRegister.js')

router.get('/:username',getUser);
router.post('/',createUser);

module.exports = router;