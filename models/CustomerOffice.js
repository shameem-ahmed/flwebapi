var mongoose = require('mongoose');

module.exports = mongoose.model('CustomerOffice', {
    company: {type: mongoose.Schema.ObjectId, ref: 'Customer'},
    address: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    email: String,
    phone: String,
    fax: String,
    isActive: Boolean
});
