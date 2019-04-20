var express = require('express');
var router = express.Router();

var match_controller = require('../controllers/match');


router.get('/getMatches', match_controller.match_getAll);

router.get('/:id', match_controller.match_get);

router.post('/create', match_controller.match_create);

router.put('/:id/update', match_controller.match_update);

router.put('/:id/updateBetCount', match_controller.match_update_bet);


module.exports = router;