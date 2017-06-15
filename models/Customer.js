var mongoose = require('mongoose');

var mCustomer = mongoose.model('Customer', {
    code: String,
    name: String,
    urlWeb: String,
    email: String,
    phone: String,
    fax: String,
    logo: String,
    LovGovtCode: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    GovtCode: String,
    isActive: Boolean
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
    CustomerOffice: mCustomerOffice,
    CustomerOfficePeople: mCustomerOfficePeople
};
