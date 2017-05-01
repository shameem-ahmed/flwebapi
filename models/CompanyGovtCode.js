var mongoose = require('mongoose');

module.exports = mongoose.model('CompanyGovtCode', {
    company: {type: mongoose.Schema.ObjectId, ref: 'Company'},
    value: String,
    lovType: {type: mongoose.Schema.ObjectId, ref: 'LOV'},
    expireDate: Date
});
