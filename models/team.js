var mongoose = require('mongoose');

var Schema = mongoose.Schema

var TeamSchema = new Schema({
    teamName: {type: String, required: true},
    players: {type: [String], required: true},
    played: {type: Number, required: true},
    won: {type: Number, required: true},
    lost: {type: Number, required: true},
    draw: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Team', TeamSchema);