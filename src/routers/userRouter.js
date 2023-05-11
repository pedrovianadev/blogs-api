const express = require('express');

const router = express.Router();

const { checkUser } = require('../middlewares/userMiddleware');

const authentication = require('../middlewares/authentication');

const { user } = require('../controllers');

router.post('/', checkUser, user.createUser);

router.get('/', authentication, user.getAll);

router.get('/:id', authentication, user.getById);

module.exports = router;