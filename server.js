var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var app = express();

var cUser = require('./controllers/user');
var cLov = require('./controllers/lov');
var cPerson = require('./controllers/person');
//var message = require('./controllers/message');

var seed = require('./seeddata');

var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

seed.seedData();

//Middlewares
app.use(bodyParser.json()); //bodyParser for JSON POSTs
app.use(cors); //custom middleware for CORS

//REQUESTS
//
//User
app.get('/user/getall', checkAuthenticated, cUser.getAll);
app.get('/user/getone/:id', checkAuthenticated, cUser.getOne);
app.get('/user/getlogin', checkAuthenticated, cUser.getLogin);
app.get('/user/getaccess', checkAuthenticated, cUser.getAccess);


app.post('/user/register', cUser.register);
app.post('/user/login', cUser.login);
app.post('/user/delete', checkAuthenticated, cUser.delete);

//Lov
app.get('/lov/getall', checkAuthenticated, cLov.getAll);
app.get('/lov/getone/:id', checkAuthenticated, cLov.getOne);

app.post('/lov/add', checkAuthenticated, cLov.add);
app.post('/lov/delete', checkAuthenticated, cLov.delete);


//Person
app.post('/person/add', checkAuthenticated, cPerson.add);
app.post('/person/update', checkAuthenticated, cPerson.update);
app.post('/person/delete/:id', checkAuthenticated, cPerson.delete);

app.get('/person/getall', checkAuthenticated, cPerson.getAll);
app.get('/person/getone/:id', checkAuthenticated, cPerson.getOne);




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
