var mongoose = require('mongoose');

module.exports = mongoose.model('Leather', {
    title: String,
    isActive: Boolean
});
