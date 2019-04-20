// app.js

var express = require('express');
var bodyParser = require('body-parser');



var product = require('./routes/product'); // Imports routes for the products
var user = require('./routes/user'); // Imports routes for the products
var team = require('./routes/team'); // Imports routes for the team
var match = require('./routes/match'); // Imports routes for the matchse
var bet = require('./routes/bet'); // Imports routes for the bet
var app = express();
var cors = require('cors')


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/productapp';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/users',user)
app.use('/teams',team)
app.use('/matches',match)
app.use('/bets',bet)

var port = 1234;

app.post('/login', function(req, res){
    console.log(req.body)
    
    req.url = "/users/userDetails"
    return app._router.handle(req, res)
})


app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
