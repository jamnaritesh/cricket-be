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
    Match.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Team udpated.');
    });
};

