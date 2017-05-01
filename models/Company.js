var mongoose = require('mongoose');

module.exports = mongoose.model('Company', {
    code: String,
    name: String,
    urlWeb: String,
    email: String,
    phone: String,
    fax: String,
    logo: String,
    isActive: Boolean
});
