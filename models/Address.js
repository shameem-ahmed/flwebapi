var mongoose = require('mongoose');

module.exports = mongoose.model('Address', {
    address1: String,
    address2: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
    geo: String,
    isActive: Boolean
});
