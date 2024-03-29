const express = require('express')

const router = express.Router();


// own imports
const {getPosts,createPost} = require('../controllers/posts.js')

router.get('/',getPosts);
router.post('/',createPost);

module.exports = router;