var express = require('express');
var router = express.Router();

var UsersController = require('../controllers/users');

router.get('/', UsersController.example);

module.exports = router;
