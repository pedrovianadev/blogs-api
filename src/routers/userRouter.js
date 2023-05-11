const express = require('express');

const router = express.Router();

const { checkUser } = require('../middlewares/userMiddleware');

const authentication = require('../middlewares/authentication');

const { createUser, getAll, getById, deleteUser } = require('../controllers/userController');

router.post('/', checkUser, createUser);

router.get('/', authentication, getAll);

router.get('/:id', authentication, getById);

router.delete('/:id', authentication, deleteUser);

module.exports = router;