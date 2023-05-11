const express = require('express');

const router = express.Router();

const { checkPost } = require('../middlewares/postMiddleware');

const authentication = require('../middlewares/authentication');

const { createPost, getAllByUserId, getByIdUserId } = require('../controllers/postController');

router.post('/', authentication, checkPost, createPost);

router.get('/', authentication, getAllByUserId);

router.get('/:id', authentication, getByIdUserId);

module.exports = router;