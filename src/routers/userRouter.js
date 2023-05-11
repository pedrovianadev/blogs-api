const express = require('express');

const router = express.Router();

const { checkUser } = require('../middlewares/userMiddleware');

const { user } = require('../controllers');

router.post('/', checkUser, user.createUser);

module.exports = router;