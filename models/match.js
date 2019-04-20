var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MatchSchema = new Schema({
    team1Name: {type: String, required: true},
    team2Name: {type: String, required: true},
    team1: {type: ObjectId, ref: 'Team', required: true},
    team2: {type: ObjectId, ref: 'Team', required: true},
    team1Bets: {type: Number, required: true},
    team2Bets: {type: Number, required: true},
    date: {type: Date, required: true},
    won: {type: String, required: true},
    live: {type: Boolean, required: true},
});


// Export the model
module.exports = mongoose.model('Match', MatchSchema);