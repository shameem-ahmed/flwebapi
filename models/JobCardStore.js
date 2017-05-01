var mongoose = require('mongoose');

module.exports = mongoose.model('JobCardStore', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    purchaseOrderMaterial: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrderMaterial'},
    issuedBy: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    receivedBy: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String
});
