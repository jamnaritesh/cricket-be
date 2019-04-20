var express = require('express');
var router = express.Router();

var team_controller = require('../controllers/team');

router.post('/create', team_controller.team_create);

router.get('/:id', team_controller.team_create);

router.put('/:id/update', team_controller.team_update);


module.exports = router;