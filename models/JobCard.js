var mongoose = require('mongoose');

var mJobCard = mongoose.model('JobCard', {
    jobCardNo: String,
    purchaseOrder: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrder'},
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    color: {type: mongoose.Schema.ObjectId, ref: 'Color'},
    size: {type: mongoose.Schema.ObjectId, ref: 'Size'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'}
});

var mJobCardCuttingFusing = mongoose.model('JobCardCuttingFusing', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    matcher: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    cutter: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    fuser: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String
});

var mJobCardInspection = mongoose.model('JobCardInspection', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    qcDoneBy: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String,
    isOK: Boolean
});

var mJobCardLiningCutting = mongoose.model('JobCardLiningCutting', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    cutter: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String
});

var mJobCardPacking = mongoose.model('JobCardPacking', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    cutter: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String,
    isOK: Boolean
});

var mJobCardStore = mongoose.model('JobCardStore', {
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

var mJobCardTailoring = mongoose.model('JobCardTailoring', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    lovStatus: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    tailor: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    qcLineDonyBy: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String,
    isOK: Boolean
});

module.exports = {
    JobCard: mJobCard,
    JobCardCuttingFusing: mJobCardCuttingFusing,
    JobCardInspection: mJobCardInspection,
    JobCardLiningCutting: mJobCardLiningCutting,
    JobCardPacking: mJobCardPacking,
    JobCardStore: mJobCardStore,
    JobCardTailoring: mJobCardTailoring
};

