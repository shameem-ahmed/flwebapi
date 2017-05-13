var mongoose = require('mongoose');

var mSupplier = mongoose.model('Supplier', {
    code: String,
    name: String,
    urlWeb: String,
    email: String,
    phone: String,
    fax: String,
    logo: String,
    isActive: Boolean
});

var mSupplierGovtCode = mongoose.model('SupplierGovtCode', {
    supplier: {type: mongoose.Schema.ObjectId, ref: 'Supplier'},
    value: String,
    LovType: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    expireDate: Date
});

var mSupplierOffice = mongoose.model('SupplierOffice', {
    supplier: {type: mongoose.Schema.ObjectId, ref: 'Supplier'},
    address: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    email: String,
    phone: String,
    fax: String,
    isActive: Boolean
});

var mSupplierOfficePeople = mongoose.model('SupplierOfficePeople', {
    supplierOffice: {type: mongoose.Schema.ObjectId, ref: 'SupplierOffice'},
    person: {type: mongoose.Schema.ObjectId, ref: 'Person'},
    isPrimary: Boolean,
    isManager: Boolean,
    LovDesignation: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    LovDepartment: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    isActive: Boolean
});

module.exports = {
    Supplier: mSupplier,
    SupplierGovtCode: mSupplierGovtCodev,
    SupplierOffice: mSupplierOffice,
    SupplierOfficePeople: mSupplierOfficePeople
};
