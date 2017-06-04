var mongoose = require('mongoose');

var mSupplier = mongoose.model('Supplier', {
    code: String,
    name: String,
    urlWeb: String,
    email: String,
    phone: String,
    fax: String,
    logo: String,
    flag: Number,
    isActive: Boolean
});

var mSupplierGovtCode = mongoose.model('SupplierGovtCode', {
    supplier: {type: mongoose.Schema.ObjectId, ref: 'Supplier'},
    value: String,
    LovType: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    flag: Number,
    expireDate: Date
});

var mSupplierOffice = mongoose.model('SupplierOffice', {
    supplier: {type: mongoose.Schema.ObjectId, ref: 'Supplier'},
    title: String,
    address: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    email: String,
    phone: String,
    fax: String,
    flag: Number,
    isActive: Boolean
});

var mSupplierOfficePeople = mongoose.model('SupplierOfficePeople', {
    supplierOffice: {type: mongoose.Schema.ObjectId, ref: 'SupplierOffice'},
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    isPrimary: Boolean,
    isManager: Boolean,
    LovDesignation: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    LovDepartment: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    flag: Number,
    isActive: Boolean
});

module.exports = {
    Supplier: mSupplier,
    SupplierGovtCode: mSupplierGovtCode,
    SupplierOffice: mSupplierOffice,
    SupplierOfficePeople: mSupplierOfficePeople
};
