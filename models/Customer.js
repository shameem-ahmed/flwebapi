var mongoose = require('mongoose');

var mCustomer = mongoose.model('Customer', {
    code: String,
    name: String,
    urlWeb: String,
    email: String,
    phone: String,
    fax: String,
    logo: String,
    isActive: Boolean
});

var mCustomerGovtCode = mongoose.model('CustomerGovtCode', {
    customer: {type: mongoose.Schema.ObjectId, ref: 'Customer'},
    value: String,
    LovType: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    expireDate: Date
});

var mCustomerOffice = mongoose.model('CustomerOffice', {
    company: {type: mongoose.Schema.ObjectId, ref: 'Customer'},
    address: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    email: String,
    phone: String,
    fax: String,
    isActive: Boolean
});

var mCustomerOfficePeople = mongoose.model('CustomerOfficePeople', {
    companyOffice: {type: mongoose.Schema.ObjectId, ref: 'CustomerOffice'},
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    isPrimary: Boolean,
    isManager: Boolean,
    LovDesignation: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    LovDepartment: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    isActive: Boolean
});

module.exports = {
    Customer: mCustomer,
    CustomerGovtCode: mCustomerGovtCode,
    CustomerOffice: mCustomerOffice,
    CustomerOfficePeople: mCustomerOfficePeople
};
