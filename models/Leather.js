var mongoose = require('mongoose');

var mLeather = mongoose.model('Leather', {
    title: String,
    isActive: Boolean
});

var mColor = mongoose.model('Color', {
    title: String,
    isActive: Boolean
});

var mSize = mongoose.model('Size', {
    title: String,
    isActive: Boolean
});

module.exports = {
    Leather: mLeather,
    Color: mColor,
    Size: mSize
};
