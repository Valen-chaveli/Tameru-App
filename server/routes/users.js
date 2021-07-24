var express = require('express');
var router = express.Router();

var UsersController = require('../controllers/users');

router.get('/', UsersController.example);
router.post('/register', UsersController.registerUser);
router.post('/login', UsersController.loginUser);

router.post('/checkToken', UsersController.checkToken);

module.exports = router;
