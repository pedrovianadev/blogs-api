const express = require('express');

const router = express.Router();

const { checkCategory } = require('../middlewares/categoryMiddleware');

const authentication = require('../middlewares/authentication');

const { categories } = require('../controllers');

router.post('/', authentication, checkCategory, categories.createCategory);

router.get('/', authentication, categories.getAllCategories);

module.exports = router;