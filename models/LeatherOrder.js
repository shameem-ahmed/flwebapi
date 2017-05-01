var mongoose = require('mongoose');

module.exports = mongoose.model('LeatherOrder', {
    supplier: {type: mongoose.Schema.ObjectId, ref: 'Supplier'},
    purchaseOrder: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrder'},

    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    tailor: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    qcLineDonyBy: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String,
    isOK: Boolean
});
