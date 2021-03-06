var User = require('../models/user');

exports.user_details= function (req, res, next) {
    console.log(req.body.username)
    User.findById(req.body.username, function (err, user) {
        if (err) console.log(err)
        console.log(user)
        if(!user){
            let newUser = new User({
                _id: req.body.username,
                coins: 100
            })
            
            newUser.save()
            .then(
                doc=>{
                    res.send(doc)
                },
                err=>{
                    console.log(err)
                    res.status(500)
                    .send("Error creating new user.")
                }
            )
        }
        else
        res.send(user);
    })
};

exports.user_update = function (req, res, next) {
    User.findByIdAndUpdate(req.params._id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('User '+ req.params._id+' udpated.');
    });
};

exports.user_increment_coins = function (req, res, next) {
    User.findByIdAndUpdate(req.params._id, {$inc: { "coins": req.body.coins }}, function (err, product) {
        if (err) return next(err);
        res.send('User '+ req.params._id+' udpated.');
    });
};
