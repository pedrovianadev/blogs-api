const express = require('express');

const router = express.Router();

const { checkPost, checkUpdate } = require('../middlewares/postMiddleware');

const authentication = require('../middlewares/authentication');

const { 
    createPost,
    getAllByUserId,
    getByIdUserId,
    update,
} = require('../controllers/postController');

router.post('/', authentication, checkPost, createPost);

router.get('/', authentication, getAllByUserId);

router.get('/:id', authentication, getByIdUserId);

router.put('/:id', authentication, checkUpdate, update);

module.exports = router;