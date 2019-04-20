var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: {type: String, required: true, max: 100},
    coins: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('User', UserSchema);