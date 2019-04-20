var Match = require('../models/match');


exports.match_create = function (req, res) {
    //console.log(req)
    var match = new Match(req.body);

    match.save()
    .then(
        doc =>{
            res.send(doc)
        },
        err =>{
            console.log(err)
            res.status(500)
            .send("Error creating Match")
        }
    )
};

exports.match_update = function (req, res) {
    Match.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Match udpated.');
    });
};

exports.match_update_bet = function (req, res) {
    Match.findByIdAndUpdate(req.params.id, {$inc: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Match udpated.');
    });
};

exports.match_getAll = function (req, res) {
    Match.find({}).sort({date: 'desc'}).exec(function (err, matches) {
        if (err) return next(err);
        res.send(matches);
    });
};

