let express = require('express');
let router = express.Router();
const AccountControler = require('../controllers/account');
const { ensureAuth } = require('../middlewares/authenticated');

router.get('/', [ensureAuth], AccountControler.getMyAccountInfo);
router.post(
  '/create-new-account',
  [ensureAuth],
  AccountControler.createAccount
);

router.post('/update-savings', [ensureAuth], AccountControler.updateSavings);

module.exports = router;
