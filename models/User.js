var mongoose = require('mongoose');

var mUser = mongoose.model('User', {
    name: String,
    pwd: String,
    lovUserType: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    dateExpiry: Date,
    isActive: Boolean
});

var mPerson = mongoose.model('Person', {
    name: String,
    email: String,
    phone: String,
    facebook: String,
    skype: String,
    twitter: String,
    lovGovtNo: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    govtNo: String,
    photo: String,
    dateBirth: Date,
    dateAnniversary: Date,
    maritalStatus: Number,
    gender: Number,
    isActive: Boolean
});
//maritalStatus = 0-single, 1-married, 2-widow
//gender = 0-male, 1-female

var mAddress = mongoose.model('Address', {
    address1: String,
    address2: String,
    geoLoc: {type: mongoose.Schema.ObjectId, ref: 'GeoLoc'},
    lovGovtNo: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    govtNo: String,
    photo: String,
    dateBirth: Date,
    dateAnniversary: Date,
    maritalStatus: Number,
    gender: Number,
    skype: String,
    isActive: Boolean
});

var mGeoLoc = mongoose.model('GeoLoc', {
    parent: {type: mongoose.Schema.ObjectId, ref: 'GeoLoc'},
    title: String,
    type: Number
});
//type = 0-Pincode, 1-City, 2-State, 3-Country

var mPersonAddress = mongoose.model('PersonAddress', {
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    address: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    isPrimary: Boolean,
    isACtive: Boolean
});

var mLov = mongoose.model('Lov', {
    title: String,
    type: Number
});
//type = 0-Desig, 1-Dept, 2-OfficeType, 3-GovtCode, 4-UserType, 5-OrderType, 6-OrderStatus, 7-POInternalDetailType, 8-JCStatus, 9-ContactType, 10-PersonGovtNo

module.exports = {
    User: mUser,
    Person: mPerson,
    Address: mAddress,
    GeoLoc: mGeoLoc,
    PersonAddress: mPersonAddress,
    Lov: mLov
};
