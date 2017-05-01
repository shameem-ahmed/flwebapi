var mongoose = require('mongoose');

module.exports = mongoose.model('CustomerGovtCode', {
    company: {type: mongoose.Schema.ObjectId, ref: 'Customer'},
    value: String,
    lovType: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    expireDate: Date
});
