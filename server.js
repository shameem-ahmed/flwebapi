var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var app = express();

var cUser = require('./controllers/user');
var cAccess = require('./controllers/access');
var cLov = require('./controllers/lov');
var cGloc = require('./controllers/gloc');

var cPerson = require('./controllers/person');
var cAddress = require('./controllers/address');

var seed = require('./seeddata');

var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

seed.seedData();

//Middlewares
app.use(bodyParser.json()); //bodyParser for JSON POSTs
app.use(cors); //custom middleware for CORS

//REQUESTS

//User
app.get('/user/getall', checkAuthenticated, cUser.getAll);
app.get('/user/getone/:id', checkAuthenticated, cUser.getOne);
app.get('/user/getlogin', checkAuthenticated, cUser.getLogin);
app.get('/user/getaccess', checkAuthenticated, cUser.getAccess);

app.post('/user/register', cUser.register);
app.post('/user/login', cUser.login);
app.post('/user/add', checkAuthenticated, cUser.add);
app.post('/user/delete', checkAuthenticated, cUser.delete);

//UserAccess
app.get('/access/getall', checkAuthenticated, cAccess.getAll);
app.get('/access/getaccess/:id', checkAuthenticated, cAccess.getAccess);
app.get('/access/getone/:id', checkAuthenticated, cAccess.getOne);

app.post('/access/add', checkAuthenticated, cAccess.add);
app.post('/access/update', checkAuthenticated, cAccess.update);
app.post('/access/updatemulti', checkAuthenticated, cAccess.updateMulti);

app.post('/access/delete/:id', checkAuthenticated, cAccess.delete);

//GeoLoc
app.get('/gloc/getcountries', checkAuthenticated, cGloc.getCountries);
app.get('/gloc/getstates/:parent', checkAuthenticated, cGloc.getStates);
app.get('/gloc/getcities/:parent', checkAuthenticated, cGloc.getCities);
app.get('/gloc/getareas/:parent', checkAuthenticated, cGloc.getAreas);

//Lov
app.get('/lov/getall', checkAuthenticated, cLov.getAll);
app.get('/lov/getone/:id', checkAuthenticated, cLov.getOne);
app.get('/lov/getlov/:type', checkAuthenticated, cLov.getLov);

app.post('/lov/add', checkAuthenticated, cLov.add);
app.post('/lov/delete', checkAuthenticated, cLov.delete);

//Person
app.post('/person/add', checkAuthenticated, cPerson.add);
app.post('/person/update', checkAuthenticated, cPerson.update);
app.post('/person/delete/:id', checkAuthenticated, cPerson.delete);

app.get('/person/getall', checkAuthenticated, cPerson.getAll);
app.get('/person/getone/:id', checkAuthenticated, cPerson.getOne);

//Address
app.post('/address/add', checkAuthenticated, cAddress.add);
app.post('/address/update', checkAuthenticated, cAddress.update);
app.post('/address/delete/:id', checkAuthenticated, cAddress.delete);

app.get('/address/getall', checkAuthenticated, cAddress.getAll);
app.get('/address/getone/:id', checkAuthenticated, cAddress.getOne);

//Connection
mongoose.connect("mongodb://localhost:27017/fldb", function(err, db){
    if (!err) {
        console.log("we are connected to FUELLS mongo database");
    }
});

var server = app.listen(5000, function(){
    console.log('listening on port ', server.address().port);
});
