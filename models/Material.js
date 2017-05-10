var mongoose = require('mongoose');

var mMaterial = mongoose.model('Material', {
    title: String,
    isActive: Boolean
});

module.exports = {
    Material: mMaterial
};

