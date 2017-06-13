var mongoose = require('mongoose');

var mMaterial = mongoose.model('Material', {
    title: String,
    flag: Number,
    isActive: Boolean
});

var mLeather = mongoose.model('Leather', {
    title: String,
    flag: Number,
    isActive: Boolean
});

var mColor = mongoose.model('Color', {
    title: String,
    flag: Number,
    isActive: Boolean
});

var mSize = mongoose.model('Size', {
    title: String,
    flag: Number,
    isActive: Boolean
});

var mStyle = mongoose.model('Style', {
    title: String,
    photo: String,
    flag: Number,
    isActive: Boolean,
    materials: [{type: mongoose.Schema.ObjectId, ref: 'Material'}],
    leathers: [{type: mongoose.Schema.ObjectId, ref: 'Leather'}],
    colors: [{type: mongoose.Schema.ObjectId, ref: 'Color'}],
    sizes: [{type: mongoose.Schema.ObjectId, ref: 'Size'}]
});

module.exports = {
    Material: mMaterial,
    Leather: mLeather,
    Color: mColor,
    Size: mSize,
    Style: mStyle
};


