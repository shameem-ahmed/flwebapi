var mongoose = require('mongoose');

var mCompany = mongoose.model('Company', {
    code: String,
    name: String,
    urlWeb: String,
    email: String,
    phone: String,
    fax: String,
    logo: String,
    isActive: Boolean
});

//test git

var mCompanyGovtCode = mongoose.model('CompanyGovtCode', {
    company: {type: mongoose.Schema.ObjectId, ref: 'Company'},
    value: String,
    LovType: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    expireDate: Date
});

var mCompanyOffice = mongoose.model('CompanyOffice', {
    company: {type: mongoose.Schema.ObjectId, ref: 'Company'},
    address: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    email: String,
    phone: String,
    fax: String,
    isActive: Boolean
});

var mCompanyOfficePeople = mongoose.model('CompanyOfficePeople', {
    companyOffice: {type: mongoose.Schema.ObjectId, ref: 'CompanyOffice'},
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    isPrimary: Boolean,
    isManager: Boolean,
    isAdmin: Boolean,
    LovDesignation: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    LovDepartment: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    LovContactType: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    employeeId: String,
    user: {type: mongoose.Schema.ObjectId, ref: 'User'},
    employeeId: String,
    isPermanent: Boolean,
    isHourly: Boolean,
    dateStart: Date,
    dateEnd: Date,
    rateHourly: Number,
    rateDaily: Number,
    rateWeekly: Number,
    rateMonthly: Number,
    isActive: Boolean
});

module.exports = {
    Company: mCompany,
    CompanyGovtCode: mCompanyGovtCode,
    CompanyOffice: mCompanyOffice,
    CompanyOfficePeople: mCompanyOfficePeople
};
