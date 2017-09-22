var mongoose = require('mongoose');

var mJobCard = mongoose.model('JobCard', {
    jobCardNo: String,
    purchaseOrder: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrder'},
    purchaseOrderStyle: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrderStyle'},
    purchaseOrderSize: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrderStyleSize'},
    status: Number,
    dateStart: Date,
    dateEnd: Date,
    cuttingDone: Boolean,
    cuttingDate: Date,
    cuttingMatcher: {type: mongoose.Schema.ObjectId, ref: 'User'},
    cuttingCutter: {type: mongoose.Schema.ObjectId, ref: 'User'},
    cuttingFuser: {type: mongoose.Schema.ObjectId, ref: 'User'},
    cuttingRemarks: String,
    liningDone: Boolean,
    liningDate: Date,
    liningCutter: {type: mongoose.Schema.ObjectId, ref: 'User'},
    liningRemarks: String,
    storeDone: Boolean,
    storeDate: Date,
    storeIssuedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
    storeReceivedBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
    storeRemarks: String,
    tailoringDone: Boolean,
    tailoringDate: Date,
    tailoringTailor: {type: mongoose.Schema.ObjectId, ref: 'User'},
    tailoringLineQc: {type: mongoose.Schema.ObjectId, ref: 'User'},
    tailoringStatus: String,
    tailoringRemarks: String,
    inspectionDone: Boolean,
    inspectionDate: Date,
    inspectionQcBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
    inspectionStatus: String,
    inspectionRemarks: String,
    packingDone: Boolean,
    packingDate: Date,
    packingBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
    packingStatus: String,
    packingRemarks: String
});

module.exports = {
    JobCard: mJobCard
};

/*
var mJobCard = mongoose.model('JobCard', {
    jobCardNo: String,
    purchaseOrder: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrder'},
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    color: {type: mongoose.Schema.ObjectId, ref: 'Color'},
    size: {type: mongoose.Schema.ObjectId, ref: 'Size'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    LovStatus: {type: mongoose.Schema.ObjectId, ref: 'Lov'}
});

var mJobCardCuttingFusing = mongoose.model('JobCardCuttingFusing', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    LovStatus: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
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
    LovStatus: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    qcDoneBy: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String,
    isOK: Boolean
});

var mJobCardLiningCutting = mongoose.model('JobCardLiningCutting', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    LovStatus: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    cutter: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String
});

var mJobCardPacking = mongoose.model('JobCardPacking', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    LovStatus: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    cutter: {type: mongoose.Schema.ObjectId, ref: 'CompanyOfficePerson'},
    notes: String,
    isOK: Boolean
});

var mJobCardStore = mongoose.model('JobCardStore', {
    jobCard: {type: mongoose.Schema.ObjectId, ref: 'JobCard'},
    dateStart: Date,
    dateTarget: Date,
    dateEnd: Date,
    LovStatus: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
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
    LovStatus: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
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
*/



