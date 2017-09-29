var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var fileUpload = require('express-fileupload');

var app = express();

//Controller reference
var cUser = require('./controllers/user');
var cAccess = require('./controllers/access');
var cLov = require('./controllers/lov');
var cGloc = require('./controllers/gloc');
var cPerson = require('./controllers/person');
var cAddress = require('./controllers/address');
var cSupplier = require('./controllers/supplier');
var cCompany = require('./controllers/company');
var cCustomer = require('./controllers/customer');
var cStyle = require('./controllers/style');
var cPO = require('./controllers/purchaseOrder');
var cJC = require('./controllers/jobCard');

var seed = require('./seeddata');

var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');

seed.seedData();

//Middlewares
app.use(bodyParser.json()); //bodyParser for JSON POSTs
app.use(cors); //custom middleware for CORS
app.use(fileUpload()); //express-fileupload middleware

//REQUESTS

//User
app.get('/user/getall', checkAuthenticated, cUser.getAll);
app.get('/user/getall/:dept', checkAuthenticated, cUser.getAllDept);
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
app.get('/gloc/getone/:id', checkAuthenticated, cGloc.getOne);
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

//Supplier
app.post('/supplier/add', checkAuthenticated, cSupplier.add);
app.post('/supplier/update', checkAuthenticated, cSupplier.update);
app.get('/supplier/delete/:id', checkAuthenticated, cSupplier.delete);
app.get('/supplier/getall', checkAuthenticated, cSupplier.getAll);
app.get('/supplier/getone/:id', checkAuthenticated, cSupplier.getOne);

app.post('/supplier/office/add', checkAuthenticated, cSupplier.addOffice);
app.post('/supplier/office/update', checkAuthenticated, cSupplier.updateOffice);
app.get('/supplier/office/delete/:id', checkAuthenticated, cSupplier.deleteOffice);
app.get('/supplier/office/getall/:suppId', checkAuthenticated, cSupplier.getAllOffice);

app.post('/supplier/person/add', checkAuthenticated, cSupplier.addPerson);
app.post('/supplier/person/update', checkAuthenticated, cSupplier.updatePerson);
app.get('/supplier/person/delete/:id', checkAuthenticated, cSupplier.deletePerson);
app.get('/supplier/person/getall/:offId', checkAuthenticated, cSupplier.getAllPerson);

//Purchase Order
app.post('/po/add', checkAuthenticated, cPO.add);
app.post('/po/update', checkAuthenticated, cPO.update);
app.post('/po/delete/:id', checkAuthenticated, cPO.delete);
app.get('/po/getall', checkAuthenticated, cPO.getAll);
app.get('/po/getone/:id', checkAuthenticated, cPO.getOne);

app.post('/po/style/add', checkAuthenticated, cPO.addStyle);
app.post('/po/style/update', checkAuthenticated, cPO.updateStyle);
app.post('/po/style/delete/:id', checkAuthenticated, cPO.deleteStyle);
app.get('/po/style/getall/:id', checkAuthenticated, cPO.getAllStyle);
app.get('/po/style/getone/:id', checkAuthenticated, cPO.getOneStyle);

app.post('/po/size/add', checkAuthenticated, cPO.addSize);
app.post('/po/size/update', checkAuthenticated, cPO.updateSize);
app.post('/po/size/delete/:id', checkAuthenticated, cPO.deleteSize);
app.get('/po/size/getall/:id', checkAuthenticated, cPO.getAllSize);
app.get('/po/size/getone/:id', checkAuthenticated, cPO.getOneSize);

app.post('/po/internal/add', checkAuthenticated, cPO.addInternal);
app.post('/po/internal/update', checkAuthenticated, cPO.updateInternal);
app.post('/po/internal/delete/:id', checkAuthenticated, cPO.deleteInternal);
app.get('/po/internal/getall/:id', checkAuthenticated, cPO.getAllInternal);
app.get('/po/internal/getone/:id', checkAuthenticated, cPO.getOneInternal);

app.post('/po/material/add', checkAuthenticated, cPO.addMaterial);
app.post('/po/material/update', checkAuthenticated, cPO.updateMaterial);
app.post('/po/material/delete/:id', checkAuthenticated, cPO.deleteMaterial);
app.get('/po/material/getall/:id', checkAuthenticated, cPO.getAllMaterial);
app.get('/po/material/getone/:id', checkAuthenticated, cPO.getOneMaterial);
app.post('/po/upload/:id', cPO.uploadPO);

//Job Card
app.post('/jc/generate/:id', checkAuthenticated, cJC.generate);
app.get('/jc/getall/:id', checkAuthenticated, cJC.getAll);
app.get('/jc/getone/:id', checkAuthenticated, cJC.getOne);
app.get('/jc/getpostyle/:id', checkAuthenticated, cJC.getAllPOStyle);
app.get('/jc/getposize/:id', checkAuthenticated, cJC.getAllPOSize);
app.post('/jc/update/cutting', checkAuthenticated, cJC.updateCutting);

//Customer
app.get('/customer/getall', checkAuthenticated, cCustomer.getAll);
app.get('/customer/getone/:id', checkAuthenticated, cCustomer.getOne);

app.post('/customer/add', checkAuthenticated, cCustomer.add);
app.post('/customer/update', checkAuthenticated, cCustomer.update);
app.get('/customer/delete/:id', checkAuthenticated, cCustomer.delete);
app.get('/customer/getall', checkAuthenticated, cCustomer.getAll);
app.get('/customer/getone/:id', checkAuthenticated, cCustomer.getOne);

app.post('/customer/office/add', checkAuthenticated, cCustomer.addOffice);
app.post('/customer/office/update', checkAuthenticated, cCustomer.updateOffice);
app.get('/customer/office/delete/:id', checkAuthenticated, cCustomer.deleteOffice);
app.get('/customer/office/getall/:cusId', checkAuthenticated, cCustomer.getAllOffice);
app.post('/customer/person/add', checkAuthenticated, cCustomer.addPerson);
app.post('/customer/person/update', checkAuthenticated, cCustomer.updatePerson);
app.get('/customer/person/delete/:id', checkAuthenticated, cCustomer.deletePerson);
app.get('/customer/person/getall/:offId', checkAuthenticated, cCustomer.getAllPerson);

//Company
app.get('/company/getall', checkAuthenticated, cCompany.getAll);
app.get('/company/getone/:id', checkAuthenticated, cCompany.getOne);

app.post('/company/add', checkAuthenticated, cCompany.add);
app.post('/company/update', checkAuthenticated, cCompany.update);
app.get('/company/delete/:id', checkAuthenticated, cCompany.delete);
app.get('/company/getall', checkAuthenticated, cCompany.getAll);
app.get('/company/getone/:id', checkAuthenticated, cCompany.getOne);

app.post('/company/office/add', checkAuthenticated, cCompany.addOffice);
app.post('/company/office/update', checkAuthenticated, cCompany.updateOffice);
app.get('/company/office/delete/:id', checkAuthenticated, cCompany.deleteOffice);
app.get('/company/office/getall/:compId', checkAuthenticated, cCompany.getAllOffice);

app.post('/company/person/add', checkAuthenticated, cCompany.addPerson);
app.post('/company/person/update', checkAuthenticated, cCompany.updatePerson);
app.get('/company/person/delete/:id', checkAuthenticated, cCompany.deletePerson);
app.get('/company/person/getall/:offId', checkAuthenticated, cCompany.getAllPerson);

//Style
app.post('/style/add', checkAuthenticated, cStyle.add);
app.post('/style/update', checkAuthenticated, cStyle.update);
app.post('/style/delete/:id', checkAuthenticated, cStyle.delete);

app.post('/style/size/add', checkAuthenticated, cStyle.addSize);
app.post('/style/size/update', checkAuthenticated, cStyle.updateSize);
app.post('/style/size/delete/:id', checkAuthenticated, cStyle.deleteSize);

app.post('/style/color/add', checkAuthenticated, cStyle.addColor);
app.post('/style/color/update', checkAuthenticated, cStyle.updateColor);
app.post('/style/color/delete/:id', checkAuthenticated, cStyle.deleteColor);

app.post('/style/leather/add', checkAuthenticated, cStyle.addLeather);
app.post('/style/leather/update', checkAuthenticated, cStyle.updateLeather);
app.post('/style/leather/delete/:id', checkAuthenticated, cStyle.deleteLeather);

app.post('/style/material/add', checkAuthenticated, cStyle.addMaterial);
app.post('/style/material/update', checkAuthenticated, cStyle.updateMaterial);
app.post('/style/material/delete/:id', checkAuthenticated, cStyle.deleteMaterial);

app.get('/style/getall', checkAuthenticated, cStyle.getAll);
app.get('/style/getone/:id', checkAuthenticated, cStyle.getOne);

app.get('/style/material/getall', checkAuthenticated, cStyle.getAllMaterial);
app.get('/style/material/getone/:id', checkAuthenticated, cStyle.getOneMaterial);

app.get('/style/leather/getall', checkAuthenticated, cStyle.getAllLeather);
app.get('/style/leather/getone/:id', checkAuthenticated, cStyle.getOneLeather);

app.get('/style/color/getall', checkAuthenticated, cStyle.getAllColor);
app.get('/style/color/getone/:id', checkAuthenticated, cStyle.getOneColor);

app.get('/style/size/getall', checkAuthenticated, cStyle.getAllSize);
app.get('/style/size/getone/:id', checkAuthenticated, cStyle.getOneSize);

//Connection
mongoose.connect("mongodb://localhost:27017/fldb", function(err, db){
    if (!err) {
        console.log("we are connected to FUELLS mongo database");
    }
});

var server = app.listen(5000, function(){
    console.log('listening on port ', server.address().port);
});
