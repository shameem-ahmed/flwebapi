var mongoose = require('mongoose');

module.exports = mongoose.model('CompanyOffice', {
    company: {type: mongoose.Schema.ObjectId, ref: 'Company'},
    address: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    email: String,
    phone: String,
    fax: String,
    isActive: Boolean
});
