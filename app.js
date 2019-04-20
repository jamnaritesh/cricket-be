// app.js

var express = require('express');
var bodyParser = require('body-parser');



var product = require('./routes/product'); // Imports routes for the products
var user = require('./routes/user'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://localhost:27017/productapp';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);
app.use('/users',user)

var port = 1234;

app.post('/login', function(req, res){
    console.log(req.body)
    
    req.url = "/users/userDetails"
    return app._router.handle(req, res)
})

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
