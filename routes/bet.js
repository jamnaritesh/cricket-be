var express = require('express');
var router = express.Router();

var bet_controller = require('../controllers/bet');


router.get('/:id/userBets', bet_controller.bet_getAllByUser);

router.get('/:id/matchBets', bet_controller.bet_getAllByUser);

router.post('/create', bet_controller.bet_create);

module.exports = router;