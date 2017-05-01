var mongoose = require('mongoose');

module.exports = mongoose.model('Color', {
    title: String,
    isActive: Boolean
});
