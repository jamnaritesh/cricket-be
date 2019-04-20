var Bet = require('../models/bet');
var User = require('../models/user');

exports.bet_create = function (req, res) {
    var bet = new Bet(req.body);

    bet.save()
    .then(
        betDoc =>{                    
            User.findByIdAndUpdate(req.body.user_id, { $inc: { "coins": -req.body.amount }} )
            .then(
                doc =>{
                    console.log("Updated user coins successfully")
                },
                err=>{
                    console.log(err)
                    console.log("error updating user coins")
                }
            )
            res.send(betDoc)

        },
        err=>{
            console.log("Error when placing bet")
            console.log(err)
            res.status(500).send("Error when placing bet")
        }
    )
};


exports.bet_getAllByUser = function (req, res) {
    Bet.find({ "user_id" : req.params.id}).sort({date: 'desc'}).exec(function (err, bets) {
        if (err) return next(err);
        res.send(bets);
    });
};

exports.bet_getAllByMatch= function (req, res) {
    Bet.find({ "match_id" : req.params.id}).sort({date: 'desc'}).exec(function (err, bets) {
        if (err) return next(err);
        res.send(bets);
    });
};
