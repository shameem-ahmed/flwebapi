var mongoose = require('mongoose');
//flag = 0-none, 1-red, 2-orange, 3-green, 4-blue, 5-black, 6-yellow

var mUser = mongoose.model('User', {
    name: String,
    pwd: String,
    lovUserType: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    dateExpiry: Date,
    isActive: Boolean,
    flag: Number
});

//maritalStatus = 0-single, 1-married, 2-widow
//gender = 0-male, 1-female
var mPerson = mongoose.model('Person', {
    name: String,
    email: String,
    phone: String,
    facebook: String,
    skype: String,
    twitter: String,
    lovGovtNo: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    govtNo: String,
    photo: String,
    dateBirth: Date,
    dateAnniversary: Date,
    maritalStatus: Number,
    gender: Number,
    isActive: Boolean,
    flag: Number
});

var mAddress = mongoose.model('Address', {
    address1: String,
    address2: String,
    geoLoc: {type: mongoose.Schema.ObjectId, ref: 'GeoLoc'},
    isActive: Boolean,
    flag: Number
});

var mPersonAddress = mongoose.model('PersonAddress', {
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    address: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    isPrimary: Boolean,
    isActive: Boolean
});

//type = 0-country, 1-state, 2-city, 3-area
var mGeoLoc = mongoose.model('GeoLoc', {
    parent: {type: mongoose.Schema.ObjectId, ref: 'GeoLoc'},
    title: String,
    type: Number,
    geoData: String,
    flag: Number
});

//type = 0-Desig, 1-Dept, 2-OfficeType, 3-GovtCode, 4-UserType, 5-OrderType, 6-OrderStatus, 7-POInternalDetailType, 8-JCStatus, 9-ContactType, 10-PersonGovtNo
var mLov = mongoose.model('Lov', {
    title: String,
    type: Number,
    flag: Number
});

module.exports = {
    User: mUser,
    Person: mPerson,
    Address: mAddress,
    GeoLoc: mGeoLoc,
    PersonAddress: mPersonAddress,
    Lov: mLov
};
