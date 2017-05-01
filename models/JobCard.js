var mongoose = require('mongoose');

module.exports = mongoose.model('JobCard', {
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
