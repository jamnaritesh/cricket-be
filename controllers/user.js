var User = require('../models/user');

exports.user_details= function (req, res) {
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

exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params._id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('User '+ req.params._id+' udpated.');
    });
};
