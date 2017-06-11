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
    isActive: Boolean
});

var mStyleSize = mongoose.model('StyleSize', {
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    size: {type: mongoose.Schema.ObjectId, ref: 'Size'}
});

var mStyleMaterial = mongoose.model('StyleMaterial', {
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    material: {type: mongoose.Schema.ObjectId, ref: 'Material'}
});

var mStyleLeather = mongoose.model('StyleLeather', {
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    leather: {type: mongoose.Schema.ObjectId, ref: 'Leather'}
});

var mStyleColor = mongoose.model('StyleColor', {
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    color: {type: mongoose.Schema.ObjectId, ref: 'Color'}
});

module.exports = {
    Material: mMaterial,
    Leather: mLeather,
    Color: mColor,
    Size: mSize,
    Style: mStyle,
    StyleSize: mStyleSize,
    StyleMaterial: mStyleMaterial,
    StyleLeather: mStyleLeather,
    StyleColor: mStyleColor
};


