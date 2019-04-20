var Bet = require('../models/bet');
var User = require('../models/user');

exports.bet_create = function (req, res, next) {
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


exports.bet_getAllByUser = function (req, res, next) {
    Bet.find({ "user_id" : req.params.id}).sort({date: 'desc'}).exec(function (err, bets) {
        if (err) return next(err);
        res.send(bets);
    });
};

exports.bet_getAllByMatch= function (req, res, next) {
    Bet.find({ "match_id" : req.params.id}).sort({date: 'desc'}).exec(function (err, bets) {
        if (err) return next(err);
        res.send(bets);
    });
};

exports.bet_calculateResult = function(req, res){
    
    Bet.find({ "match_id" : req.params.id}).sort({date: 'desc'}).exec(function (err, bets) {
        if (err) return next(err);
        let winningTeam = req.body.team
        let winningTeamSum = 0, losingTeamSum = 0;
        bets.forEach((bet)=>{
            if( winningTeam == bet.team)
            winningTeamSum+= bet.amount
            else
            losingTeamSum+= bet.amount
        })

        bets.forEach((bet)=>{
            let incrementAmt = 0
            if( winningTeam == bet.team){
                incrementAmt = (bet.amount / winningTeamSum) * losingTeamSum + bet.amount
                User.findByIdAndUpdate(bet.user_id, { $inc: { "coins": incrementAmt }} ).exec()
                Bet.findByIdAndUpdate(bet._id, {$set:{ "result": "true"}}).exec()
            }
            else
            Bet.findByIdAndUpdate(bet._id, {$set:{ "result": "false"}}).exec()
        })
        res.send("Success");
    });
}

exports.bet_drawResult = function(req, res){
    
    Bet.find({ "match_id" : req.params.id}).sort({date: 'desc'}).exec(function (err, bets) {
        if (err) return next(err);
        bets.forEach((bet)=>{
            User.findByIdAndUpdate(bet.user_id, { $inc: { "coins": bet.amount }} ).exec()
            Bet.findByIdAndUpdate(bet._id, {$set:{ "result": "draw"}}).exec()
        })
        res.send("Success");
    });
}
