var mongoose = require('mongoose');

var Schema = mongoose.Schema,
ObjectId = mongoose.Schema.Types.ObjectId

var BetSchema = new Schema({
    amount: {type: Number, required: true},
    user_id: {type: String, required: true},
    match_id: {type: ObjectId, ref: 'Match', required: true},
    team: {type: ObjectId, ref: 'Team', required: true},
    result: { type: String, required: true},
    date: {type: Date, reqired: true}
});


// Export the model
module.exports = mongoose.model('Bet', BetSchema);