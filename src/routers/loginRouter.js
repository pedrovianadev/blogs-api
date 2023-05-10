const express = require('express');

const router = express.Router();

const { checkLogin } = require('../middlewares/loginMiddleware');
const controller = require('../controllers');

router.post('/', checkLogin, controller.login);

module.exports = router;