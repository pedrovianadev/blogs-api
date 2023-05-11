const express = require('express');

const router = express.Router();

const { checkPost } = require('../middlewares/postMiddleware');

const authentication = require('../middlewares/authentication');

const { createPost } = require('../controllers/postController');

router.post('/', authentication, checkPost, createPost);

module.exports = router;