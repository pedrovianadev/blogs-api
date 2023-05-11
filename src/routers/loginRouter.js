const express = require('express');

const router = express.Router();

const { checkLogin } = require('../middlewares/loginMiddleware');

const { login } = require('../controllers');

router.post('/', checkLogin, login);

module.exports = router;