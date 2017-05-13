var mongoose = require('mongoose');

var mPurchaseOrder = mongoose.model('PurchaseOrder', {
    customer: {type: mongoose.Schema.ObjectId, ref: 'Customer'},
    invoiceNo: String,
    qty: Number,
    dateOrder: Date,
    dateTarget: Date,
    dateDelivery: Date,
    shippingAddress: {type: mongoose.Schema.ObjectId, ref: 'Address'},
    LovStatus: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    LovType: {type: mongoose.Schema.ObjectId, ref: 'Lov'}
});

var mPurchaseOrderStyle = mongoose.model('PurchaseOrderStyle', {
    purchaseOrder: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrder'},
    style: {type: mongoose.Schema.ObjectId, ref: 'Style'},
    qty: Number
});

var mPurchaseOrderStyleSize = mongoose.model('PurchaseOrderStyleSize', {
    purchaseOrderStyle: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrderStyle'},
    styleSize: {type: mongoose.Schema.ObjectId, ref: 'StyleSize'},
    qty: Number
});

var mPurchaseOrderInternalDetails = mongoose.model('PurchaseOrderInternalDetails', {
    purchaseOrder: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrder'},
    purchaseOrderStyle: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrderStyle'},
    purchaseOrderStyleSize: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrderStyleSize'},
    LovDetailType: {type: mongoose.Schema.ObjectId, ref: 'Lov'},
    notes: String,
    priority: Number
});
//priotity = 0-High, 1-Normal, 2-Low

var mPurchaseOrderMaterial = mongoose.model('PurchaseOrderMaterial', {
    purchaseOrder: {type: mongoose.Schema.ObjectId, ref: 'PurchaseOrder'},
    styleMaterial: {type: mongoose.Schema.ObjectId, ref: 'StyleMaterial'},
    qty: Number,
    notes: String
});

module.exports = {
    PurchaseOrder: mPurchaseOrder,
    PurchaseOrderStyle: mPurchaseOrderStyle,
    PurchaseOrderStyleSize: mPurchaseOrderStyleSize,
    PurchaseOrderInternalDetails: mPurchaseOrderInternalDetails,
    PurchaseOrderMaterial: mPurchaseOrderMaterial
};




