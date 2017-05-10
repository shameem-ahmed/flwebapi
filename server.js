var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var app = express();

var user = require('./controllers/user');
var lov = require('./controllers/lov');

//var message = require('./controllers/message');

var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

//Middlewares
app.use(bodyParser.json()); //bodyParser for JSON POSTs
app.use(cors); //custom middleware for CORS

//REQUESTS
//
//User
app.get('/user/getall', user.getAll);
app.get('/user/getone/:id', user.getOne);

app.post('/user/register', user.register);
app.post('/user/login', user.login);
app.post('/user/delete', user.delete);

//Lov
app.get('/lov/getall', lov.getAll);
app.get('/lov/getone/:id', lov.getOne);

app.post('/lov/add', lov.add);
app.post('/lov/delete', lov.delete);

//app.get('/api/message', message.get);
//app.post('/api/message', checkAuthenticated, message.post);

//Connection
mongoose.connect("mongodb://localhost:27017/fldb", function(err, db){
    if (!err) {
        console.log("we are connected to FUELLS mongo database");
    }
});

var server = app.listen(5000, function(){
    console.log('listening on port ', server.address().port);
});
