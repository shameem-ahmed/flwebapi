var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');


var app = express();

var auth = require('./controllers/auth');
var message = require('./controllers/message');

var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

//Middlewares
app.use(bodyParser.json()); //bodyParser for JSON POSTs
app.use(cors); //custom middleware for CORS

//Requests
app.get('/api/message', message.get);
app.post('/api/message', checkAuthenticated, message.post);
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);

//Connection
mongoose.connect("mongodb://localhost:27017/fldb", function(err, db){
    if (!err) {
        console.log("we are connected to FUELLS mongo database");
    }
});

var server = app.listen(5000, function(){
    console.log('listening on port ', server.address().port);
});
