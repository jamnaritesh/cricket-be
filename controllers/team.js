var Team = require('../models/team');


exports.team_create = function (req, res) {
    //console.log(req)
    var team = new Team(req.body);

    team.save()
    .then(
        doc =>{
            res.send(doc)
        },
        err =>{
            console.log(err)
            res.status(500)
            .send("Error creating Team")
        }
    )
};

exports.team_update = function (req, res) {
    Team.findByIdAndUpdate(req.params.id, {$inc: req.body}, function (err, team) {
        if (err) return next(err);
        res.send('Team udpated.');
    });
};

exports.team_get = function (req, res) {
    Team.findById(req.params.id, function (err, team) {
        if (err) return next(err);
        res.send(team);
    });
};

