var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/user');


router.post('/userDetails', user_controller.user_details);

router.put('/:id/update', user_controller.user_update);

router.put('/:id/incrementCoins', user_controller.user_increment_coins);

module.exports = router;