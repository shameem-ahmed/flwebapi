var mongoose = require('mongoose');

var mStyle = mongoose.model('Style', {
    title: String,
    photo: String,
    isActive: Boolean
});

var mStyleLeather = mongoose.model('StyleLeather', {
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    leather: {type: mongoose.Schema.ObjectId, ref: 'Leather'}
});

var mStyleLeatherColor = mongoose.model('StyleLeatherColor', {
    styleLeather: {type: mongoose.Schema.ObjectId, ref: 'StyleLeather'},
    color: {type: mongoose.Schema.ObjectId, ref: 'Color'}
});

var mStyleSize = mongoose.model('StyleSize', {
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    size: {type: mongoose.Schema.ObjectId, ref: 'Size'}
});

var mStyleMaterial = mongoose.model('StyleMaterial', {
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    material: {type: mongoose.Schema.ObjectId, ref: 'Material'}
});

module.exports = {
    Style: mStyle,
    StyleLeather: mStyleLeather,
    StyleLeatherColor: mStyleLeatherColor,
    StyleSize: mStyleSize,
    StyleMaterial: mStyleMaterial
};


