var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var app = express();

var cUser = require('./controllers/user');
var cLov = require('./controllers/lov');
var cPerson = require('./controllers/person');


//var message = require('./controllers/message');

var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

//Middlewares
app.use(bodyParser.json()); //bodyParser for JSON POSTs
app.use(cors); //custom middleware for CORS

//SEED DATA
var mLov = mongoose.model("Lov");

mLov.find(function(err, data){
    if (!err) {
        console.log("Seed LOV data: started...")
        if (data.length === 0) {

            //desig or role
            var dLov = new mLov({ title:"Matcher", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Fuser", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Cutter", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Store", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Line QC", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Tailor", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"QC", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Packaging", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Supervisor", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Manager", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Buyer", type:0 }).save(function(err, data) { });
            dLov = new mLov({ title:"Admin", type:0 }).save(function(err, data) { });

            //dept
            dLov = new mLov({ title:"Admin", type:1 }).save(function(err, data) { });
            dLov = new mLov({ title:"Cutting & Fusing", type:1 }).save(function(err, data) { });
            dLov = new mLov({ title:"Lining Cutting", type:1 }).save(function(err, data) { });
            dLov = new mLov({ title:"Store", type:1 }).save(function(err, data) { });
            dLov = new mLov({ title:"Tailoring", type:1 }).save(function(err, data) { });
            dLov = new mLov({ title:"Inspection", type:1 }).save(function(err, data) { });
            dLov = new mLov({ title:"Packing", type:1 }).save(function(err, data) { });

            //office type
            dLov = new mLov({ title:"Factory", type:2 }).save(function(err, data) { });
            dLov = new mLov({ title:"Main Office", type:2 }).save(function(err, data) { });
            dLov = new mLov({ title:"Branch Office", type:2 }).save(function(err, data) { });

            //govt code
            dLov = new mLov({ title:"CST", type:3 }).save(function(err, data) { });
            dLov = new mLov({ title:"GST", type:3 }).save(function(err, data) { });
            dLov = new mLov({ title:"VAT", type:3 }).save(function(err, data) { });
            dLov = new mLov({ title:"TIN", type:3 }).save(function(err, data) { });
            dLov = new mLov({ title:"BIN", type:3 }).save(function(err, data) { });
            dLov = new mLov({ title:"PAN", type:3 }).save(function(err, data) { });

            //user type
            dLov = new mLov({ title:"Admin", type:4 }).save(function(err, data) { });
            dLov = new mLov({ title:"Supervisor", type:4 }).save(function(err, data) { });
            dLov = new mLov({ title:"Manager", type:4 }).save(function(err, data) { });
            dLov = new mLov({ title:"User", type:4 }).save(function(err, data) { });

            //order type
            dLov = new mLov({ title:"Prototype", type:5 }).save(function(err, data) { });
            dLov = new mLov({ title:"Sales man sample", type:5 }).save(function(err, data) { });
            dLov = new mLov({ title:"Top production sample", type:5 }).save(function(err, data) { });
            dLov = new mLov({ title:"Production order", type:5 }).save(function(err, data) { });

            //order status
            dLov = new mLov({ title:"New", type:6 }).save(function(err, data) { });
            dLov = new mLov({ title:"Production", type:6 }).save(function(err, data) { });
            dLov = new mLov({ title:"Hold", type:6 }).save(function(err, data) { });
            dLov = new mLov({ title:"Cancel", type:6 }).save(function(err, data) { });
            dLov = new mLov({ title:"Complete", type:6 }).save(function(err, data) { });
            dLov = new mLov({ title:"Dispute", type:6 }).save(function(err, data) { });

            //order status
            dLov = new mLov({ title:"Body lining", type:7 }).save(function(err, data) { });
            dLov = new mLov({ title:"Sleeve lining cutting", type:7 }).save(function(err, data) { });

            //job card status
            dLov = new mLov({ title:"OK", type:8 }).save(function(err, data) { });
            dLov = new mLov({ title:"Reject", type:8 }).save(function(err, data) { });
            dLov = new mLov({ title:"Alter", type:8 }).save(function(err, data) { });

            //contract type
            dLov = new mLov({ title:"Employee", type:9 }).save(function(err, data) { });
            dLov = new mLov({ title:"Contract", type:9 }).save(function(err, data) { });
            dLov = new mLov({ title:"Freelance", type:9 }).save(function(err, data) { });

            //person govt code
            dLov = new mLov({ title:"License", type:10 }).save(function(err, data) { });
            dLov = new mLov({ title:"Passport", type:10 }).save(function(err, data) { });
            dLov = new mLov({ title:"PAN", type:10 }).save(function(err, data) { });
            dLov = new mLov({ title:"Aadhar Card", type:10 }).save(function(err, data) { });

            console.log("Seed LOV data: completed...")
            //type = 0-Desig, 1-Dept, 2-OfficeType, 3-GovtCode, 4-UserType, 5-OrderType, 6-OrderStatus, 7-POInternalDetailType, 8-JCStatus, 9-ContactType, 10-PersonGovtNo
        }
    }
});

//REQUESTS
//
//User
app.get('/user/getall', cUser.getAll);
app.get('/user/getone/:id', cUser.getOne);

app.post('/user/register', cUser.register);
app.post('/user/login', cUser.login);
app.post('/user/delete', cUser.delete);

//Lov
app.get('/lov/getall', cLov.getAll);
app.get('/lov/getone/:id', cLov.getOne);

app.post('/lov/add', cLov.add);
app.post('/lov/delete', cLov.delete);


//Person
app.post('/person/add', cPerson.add);
app.post('/person/update', cPerson.update);
app.post('/person/delete/:id', cPerson.delete);

app.get('/person/getall', cPerson.getAll);
app.get('/person/getone/:id', cPerson.getOne);




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
