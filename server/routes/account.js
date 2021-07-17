let express = require('express');
let router = express.Router();
const AccountControler = require('../controllers/account');

router.get('/', AccountControler.getMyAccountInfo);

module.exports = router;
