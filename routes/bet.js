var express = require('express');
var router = express.Router();

var bet_controller = require('../controllers/bet');


router.get('/:id/userBets', bet_controller.bet_getAllByUser);

router.get('/:id/matchBets', bet_controller.bet_getAllByMatch);

router.post('/:id/calculateResult', bet_controller.bet_calculateResult);

router.get('/:id/drawResult', bet_controller.bet_drawResult);

router.post('/create', bet_controller.bet_create);

module.exports = router;